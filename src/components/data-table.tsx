// data-table.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PopoverClose } from "@radix-ui/react-popover";
import {
  ColumnDef,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import _ from "lodash";
import { ChevronDown, ChevronRight, FilterIcon } from "lucide-react";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Skeleton } from "./ui/skeleton";

// Helper function to get nested values safely
const getNestedValue = (obj: any, path: string): any => {
  if (!path) return obj; // Return object if path is empty
  const pathParts = path.split(".");
  let current = obj;
  for (const part of pathParts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return undefined; // Return undefined if path is invalid or value is not accessible
    }
  }
  return current;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterColumns?: string[];
  customButtons?: React.ReactNode; // New prop for custom buttons
  fetchRowDetails?: (row: TData) => Promise<any>;
  enableRowExpansion?: boolean; // New prop to control row expansion
}

interface ColumnFilterDropdownProps<TData> {
  columnName: string;
  data: TData[];
  onFilterChange: (columnName: string, filterValues: string[]) => void;
  currentFilters: string[];
}

export const ColumnFilterDropdown = <TData,>({
  columnName,
  data,
  onFilterChange,
  currentFilters,
}: ColumnFilterDropdownProps<TData>) => {
  const [filterValues, setFilterValues] = useState<Set<string>>(
    new Set(currentFilters)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const uniqueColumnValues = useMemo(() => {
    const values = new Set<string>();
    data.forEach((item: any) => {
      // Use getNestedValue to access potentially nested properties
      const value = getNestedValue(item, columnName);
      if (value !== undefined && value !== null) {
        values.add(String(value));
      }
    });
    return Array.from(values).sort();
  }, [data, columnName]);

  const filteredOptions = useMemo(() => {
    if (!searchQuery) {
      return uniqueColumnValues;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return uniqueColumnValues.filter((option) =>
      option.toLowerCase().includes(lowerCaseQuery)
    );
  }, [uniqueColumnValues, searchQuery]);

  const handleCheckboxChange = (value: string) => {
    const newFilterValues = new Set(filterValues);
    if (filterValues.has(value)) {
      newFilterValues.delete(value);
    } else {
      newFilterValues.add(value);
    }
    setFilterValues(newFilterValues);
    onFilterChange(columnName, Array.from(newFilterValues));
  };

  const handleClearFilters = () => {
    setFilterValues(new Set());
    onFilterChange(columnName, []);
    setDropdownOpen(false);
  };

  useEffect(() => {
    setFilterValues(new Set(currentFilters));
  }, [currentFilters]);

  return (
      <Popover open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="button"
            ref={triggerRef}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            id={`filter-trigger-${columnName}`}
          >
            <FilterIcon className="h-4 w-4" />{" "}
            {_.startCase(_.toLower(columnName || ""))}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 focus:outline-none" align="start">
          <SelectGroup>
            <SelectLabel>Filters</SelectLabel>
            <SelectSeparator />
            <div className="p-2">
              <Input
                placeholder="Search options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-2 border rounded-md shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="h-72 w-full overflow-y-auto">
              {filteredOptions.map((option) => (
                <div
                  key={option}
                  className="px-2 py-1.5 hover:bg-accent hover:text-accent-foreground flex items-center space-x-2 cursor-pointer"
                >
                  <Checkbox
                    id={`filter-${columnName}-${option}`}
                    checked={filterValues.has(option)}
                    onCheckedChange={() => handleCheckboxChange(option)}
                  />
                  <label
                    htmlFor={`filter-${columnName}-${option}`}
                    className="text-sm cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              ))}
              {filteredOptions.length === 0 && (
                <div className="px-2 py-1.5 text-sm opacity-70">No options</div>
              )}
            </div>
          </SelectGroup>
          <div className="p-2 flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              disabled={filterValues.size === 0}
            >
              Clear Filters
            </Button>
            <PopoverClose asChild>
              <Button size="sm">Close</Button>
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>
  );
};

function DataTable<TData, TValue>({
  columns,
  data,
  filterColumns,
  customButtons, // New prop for custom buttons
  fetchRowDetails,
  enableRowExpansion = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<ColumnSort[]>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [columnFilters, setColumnFilters] = useState<{
    [columnName: string]: string[];
  }>({});
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  const [rowDetails, setRowDetails] = useState<Record<string, any>>({});
  const [loadingRows, setLoadingRows] = useState<Record<string, boolean>>({});

  const pageSizeOptions = [5, 10, 25, 50, data.length];

  const handleColumnFilterChange = (
    columnName: string,
    filterValues: string[]
  ) => {
    setColumnFilters((prevFilters) => ({
      ...prevFilters,
      [columnName]: filterValues,
    }));
  };

  const filteredData = useMemo(() => {
    let tempData = data;

    // Global Filter
    if (globalFilter) {
      const lowerCaseFilter = globalFilter.toLowerCase();
      tempData = tempData.filter((item: any) =>
        Object.values(item).some((value) => {
          if (value === null || value === undefined) {
            return false;
          }
          return String(value).toLowerCase().includes(lowerCaseFilter);
        })
      );
    }

    // Column Filters
    for (const columnName in columnFilters) {
      const filterValues = columnFilters[columnName];
      if (filterValues && filterValues.length > 0) {
        tempData = tempData.filter((item: any) => {
          // Use getNestedValue to access potentially nested properties for filtering
          const cellValue = getNestedValue(item, columnName)?.toString();
          if (cellValue === undefined || cellValue === null) return false;
          return filterValues
            .map((fv) => fv.toLowerCase())
            .includes(cellValue.toLowerCase());
        });
      }
    }

    return tempData;
  }, [data, globalFilter, columnFilters]);

  const table = useReactTable({
    data: filteredData.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize
    ),
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      globalFilter,
      rowSelection,
      pagination: {
        pageSize,
        pageIndex,
      },
    },
    manualPagination: true,
    pageCount: Math.ceil(filteredData.length / pageSize),
  } as TableOptions<TData>);

  useEffect(() => {
    table.setPageCount(Math.ceil(filteredData.length / pageSize));
  }, [filteredData, pageSize, table.setPageCount]);

  useEffect(() => {
    table.setPageIndex(pageIndex);
  }, [pageIndex, table]);

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setPageIndex(0);
  };

  const gotoPage = (index: number) => {
    setPageIndex(index);
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      gotoPage(pageIndex - 1);
    }
  };

  const nextPage = () => {
    if (pageIndex < table.getPageCount() - 1) {
      gotoPage(pageIndex + 1);
    }
  };

  const toggleRowExpanded = async (rowId: string, rowData: TData) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));

    if (!expandedRows[rowId] && fetchRowDetails) {
      setLoadingRows((prevState) => ({ ...prevState, [rowId]: true }));
      try {
        const details = await fetchRowDetails(rowData);
        setRowDetails((prevState) => ({ ...prevState, [rowId]: details }));
      } catch (error) {
        console.error("Error fetching row details:", error);
        setRowDetails((prevState) => ({
          ...prevState,
          [rowId]: { error: "Failed to load details." },
        }));
      } finally {
        setLoadingRows((prevState) => ({ ...prevState, [rowId]: false }));
      }
    }
  };

  return (
    <div className="">
      {/* Search and Filter Inputs and Custom Buttons */}
      <div className="flex justify-between items-center pb-4">
        <div className="grid sm:grid-cols-8 grid-cols-1 gap-3">
          <Input
            placeholder="Global Search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-lg"
          />
          {filterColumns?.map((columnName) => (
            <ColumnFilterDropdown
              key={columnName}
              columnName={columnName}
              data={data}
              onFilterChange={handleColumnFilterChange}
              currentFilters={columnFilters[columnName] || []}
            />
          ))}
          {customButtons}
        </div>

        {/* Custom Buttons */}
      </div>

      {/* Table */}
      <div className="rounded-md border h-[62vh] overflow-scroll relative">
        <Table>
          <TableHeader className="bg-secondary sticky top-0 z-20">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={"dr-" + headerGroup.id} className="">
                {/* Conditionally render expand/collapse header */}
                {enableRowExpansion && (
                  <TableHead className="w-[50px]"></TableHead>
                )}
                {headerGroup.headers.map((header) => (
                  <TableHead key={"dh-" + header.id} className="font-bold">
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="mt-8">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row: any) => (
                <Fragment key={"row-fragment-" + row.id}>
                  <TableRow
                    key={"dt-" + row.id}
                    data-row-key={"dt-" + row.original.id}
                  >
                    {/* Conditionally render expand/collapse cell */}
                    {enableRowExpansion && (
                      <TableCell className="w-[50px]">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            toggleRowExpanded(row.id, row.original)
                          }
                          disabled={loadingRows[row.id]}
                        >
                          {loadingRows[row.id] ? (
                            <Skeleton className="h-4 w-4 rounded-full" />
                          ) : expandedRows[row.id] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                    )}
                    {row.getVisibleCells().map((cell: any) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {/* Row Details Row */}
                  {expandedRows[row.id] && (
                    <TableRow>
                      <TableCell
                        colSpan={
                          enableRowExpansion
                            ? columns.length + 1
                            : columns.length
                        } // Adjust colSpan based on enableRowExpansion
                        className="py-4"
                      >
                        <div className="p-4 bg-muted rounded-md">
                          {/* Render your row details here */}
                          <strong>Details </strong>
                          {loadingRows[row.id] ? (
                            Array.from({ length: 3 }, (_, index) => (
                              <Skeleton key={index} className="mt-2" />
                            ))
                          ) : rowDetails[row.id]?.error ? (
                            <div className="text-red-500 mt-2">
                              {rowDetails[row.id].error}
                            </div>
                          ) : (
                            <pre className="mt-2">{rowDetails[row.id]}</pre>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2 py-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {filteredData.length > 0
            ? `Showing ${pageIndex * pageSize + 1} to ${Math.min(
                pageIndex * pageSize + pageSize,
                filteredData.length
              )} of ${filteredData.length} row(s)`
            : "No results"}
        </div>

        <div className="flex items-center space-x-2">
          <Select
            value={String(pageSize)}
            onValueChange={(value) => handlePageSizeChange(Number(value))}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Page size" />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size, index) => (
                <SelectItem key={"ds-" + index} value={String(size)}>
                  {size === data.length ? "All" : size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            onClick={previousPage}
            disabled={pageIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={pageIndex === table.getPageCount() - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export { DataTable };
