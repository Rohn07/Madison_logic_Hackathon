import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

interface Lead {
  id: number;
  name: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  status: "qualified" | "rejected" | "pending";
  score: number;
  date: string;
}

interface RecentLeadsTableProps {
  leads: Lead[];
}

const RecentLeadsTable = ({ leads }: RecentLeadsTableProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "qualified":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            <CheckCircle className="h-3.5 w-3.5 mr-1" /> Qualified
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
            <XCircle className="h-3.5 w-3.5 mr-1" /> Rejected
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            <AlertCircle className="h-3.5 w-3.5 mr-1" /> Pending
          </Badge>
        );
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lead Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead className="text-center">Score</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>{lead.jobTitle}</TableCell>
              <TableCell className={`text-center font-bold ${getScoreColor(lead.score)}`}>
                {lead.score}
              </TableCell>
              <TableCell className="text-center">{getStatusBadge(lead.status)}</TableCell>
              <TableCell>{lead.date}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentLeadsTable;