// LeadPage.tsx
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import RecentLeadsTable from "@/components/RecentLeadsTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useCallback, useEffect, useState } from "react";



export default function LeadPage() {
  const [recentLeads] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      company: "TechNova Inc.",
      jobTitle: "CTO",
      email: "alice@technova.com",
      phone: "+1 (555) 123-4567",
      status: "qualified" as "qualified" | "rejected" | "pending",
      score: 92,
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Bob Williams",
      company: "Global Finance",
      jobTitle: "VP Finance",
      email: "bob@globalfin.com",
      phone: "+1 (555) 234-5678",
      status: "qualified" as "qualified" | "rejected" | "pending",
      score: 85,
      date: "3 days ago"
    },
    {
      id: 3,
      name: "Carol Davis",
      company: "Healthcare Plus",
      jobTitle: "Director of Operations",
      email: "carol@healthcareplus.com",
      phone: "+1 (555) 345-6789",
      status: "pending" as "qualified" | "rejected" | "pending",
      score: 65,
      date: "4 days ago"
    },
    {
      id: 4,
      name: "Dave Miller",
      company: "Retail Solutions",
      jobTitle: "Sales Manager",
      email: "dave@retailsol.com",
      phone: "+1 (555) 456-7890",
      status: "rejected" as "qualified" | "rejected" | "pending",
      score: 35,
      date: "5 days ago"
    },
    {
      id: 5,
      name: "Eve Wilson",
      company: "EdTech Innovations",
      jobTitle: "Product Manager",
      email: "eve@edtech.com",
      phone: "+1 (555) 567-8901",
      status: "qualified" as "qualified" | "rejected" | "pending",
      score: 88,
      date: "1 week ago"
    }
  ]);

  const getLeadList = useCallback(async () => {
    try {
      // let url = `/leads?clientId=${JSON.parse(localStorage.getItem("client") || "")?.id}`; // Adjust API endpoint as needed
      // const response = await getRequest<any>(url);
      // if (response.status) {
      //   setLeadData(response.data);
      // }
    } catch (error) {
      console.error("Failed to fetch leads", error);
      // Consider a more user-friendly error handling approach (e.g., toast message)
    }
  }, []);


  useEffect(() => {
    getLeadList();
  }, [getLeadList]);


  // const columns: ColumnDef<Lead>[] = useMemo(() => {
  //   return [
  //     {
  //       accessorKey: "name",
  //       header: "Name",
  //     },
  //     {
  //       accessorKey: "email",
  //       header: "Email",
  //     },
  //     {
  //       accessorKey: "phone",
  //       header: "Phone",
  //     },
  //     {
  //       accessorKey: "status",
  //       header: "Status",
  //     },
  //     // ... other columns as needed
  //   ];
  // }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Lead Validations
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Lead Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="font-semibold text-2xl  text-primary">Lead Management</h1> {/* Title */}

          {/* DataTable Component */}
          {recentLeads && (
                        <RecentLeadsTable leads={recentLeads} />

            // <DataTable
            //   columns={columns}
            //   data={leadData}
            //   enableRowExpansion={true}
            //   fetchRowDetails={async (row) => {
            //     console.log(row);
                
            //     return new Promise((resolve) => {
            //       setTimeout(() => {
            //         resolve(<div>
            //           <p>Order Details:</p>
            //           {/* <p>Order ID: {row.orderId}</p>
            //           <p>Customer: {row.customerName}</p>
            //           <p>Total: $ {row.total?.toFixed(2)}</p> */}
            //        </div>);
            //       }, 100);
            //     });
            //   }}
            // />
          )}
        </div>
        </SidebarInset>
      </SidebarProvider>
        
  );
}
