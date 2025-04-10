import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export interface Lead {
  id: number;
  email: string;
  phone: string;
  designation: string;
  company_revenue: string;
  company_size: string;
  existing_customer: "Yes" | "No";
  leadType: "hot" | "warm" | "cold";
  lead_score: number;
}

interface RecentLeadsTableProps {
  leads: Lead[];
}

const RecentLeadsTable = ({ leads }: RecentLeadsTableProps) => {
  const [statusFilter, setStatusFilter] = useState<"all" | "hot" | "warm" | "cold">("all");

  const filteredLeads =
    statusFilter === "all"
      ? leads
      : leads.filter((lead) => lead.leadType === statusFilter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "hot":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            <CheckCircle className="h-3.5 w-3.5 mr-1" /> Hot
          </Badge>
        );
      case "cold":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
            <XCircle className="h-3.5 w-3.5 mr-1" /> Cold
          </Badge>
        );
      case "warm":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            <AlertCircle className="h-3.5 w-3.5 mr-1" /> Warm
          </Badge>
        );
      default:
        return null;
    }
  };
  console.log(filteredLeads);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-4 border-b border-gray-200 flex gap-2 items-center">
        <select
          className="text-sm px-2 py-2 border border-gray-300 rounded-md"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
        >
          <option value="all">All Leads</option>
          <option value="hot">Hot Leads</option>
          <option value="warm">Warm Leads</option>
          <option value="cold">Cold Leads</option>
        </select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Company Size</TableHead>
            <TableHead>Customer?</TableHead>
            <TableHead>Lead Score</TableHead>
            <TableHead className="text-center">Lead Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLeads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">{lead.email}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.designation}</TableCell>
              <TableCell>{lead.company_revenue}</TableCell>
              <TableCell>{lead.company_size}</TableCell>
              <TableCell>{lead.existing_customer}</TableCell>
              <TableCell className="text-center">{lead.lead_score}</TableCell>
              <TableCell className="text-center">
                {getStatusBadge(lead.leadType)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentLeadsTable;
