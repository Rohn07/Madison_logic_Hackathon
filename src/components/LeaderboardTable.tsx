import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Medal, Trophy } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
//import { Label } from "./ui/label";
//import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Partner {
  id: number;
  name: string;
  avatar?: string;
  score: number;
  rank: string;
  pointsEarned: number;
  leadsSubmitted: number;
  acceptanceRate: number;
}

interface LeaderboardTableProps {
  partners: Partner[];
}

const LeaderboardTable = ({ partners }: LeaderboardTableProps) => {
  const getBadgeColor = (rank: string) => {
    switch (rank.toLowerCase()) {
      case "platinum":
        return "bg-slate-700 hover:bg-slate-800";
      case "gold":
        return "bg-amber-500 hover:bg-amber-600";
      case "silver":
        return "bg-gray-400 hover:bg-gray-500";
      case "bronze":
        return "bg-amber-700 hover:bg-amber-800";
      default:
        return "bg-blue-600 hover:bg-blue-700";
    }
  };

  const getRankIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Trophy className="h-5 w-5 text-amber-500" />;
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 2:
        return <Medal className="h-5 w-5 text-amber-700" />;
      default:
        return (
          <span className="text-gray-500 font-medium">{position + 1}</span>
        );
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center">Rank</TableHead>
            <TableHead>Partner</TableHead>
            <TableHead className="text-center">Quality Score</TableHead>
            <TableHead className="text-center">Partner Level</TableHead>
            <TableHead className="text-center">Leads Submitted</TableHead>
            <TableHead className="text-center">Acceptance Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners?.map((partner, index) => (
            <TableRow key={partner.id}>
              <TableCell className="text-center font-medium">
                {getRankIcon(index)}
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={partner.avatar} alt={partner.name} />
                    <AvatarFallback>
                      {partner.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{partner.name}</span>
                </div>
              </TableCell>
              <TableCell
                className={`text-center font-bold ${getScoreColor(
                  partner.score
                )}`}
              >
                {partner.score}
              </TableCell>
              <TableCell className="text-center">
                <Badge className={`${getBadgeColor(partner.rank)} text-white`}>
                  {partner.rank}
                </Badge>
              </TableCell>
              {/* <TableCell className="text-center">
                <div className="flex items-center justify-center">
                  <Star className="h-4 w-4 text-amber-500 mr-1" />
                  <span>{partner.pointsEarned}</span>
                </div>
              </TableCell> */}
              <TableCell className="text-center">
                {partner.leadsSubmitted}
              </TableCell>
              <TableCell className="text-center">
                {partner.acceptanceRate}%
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">View Insights</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4 space-y-4" side="right">
                    {/* Performance Summary Section */}
                    <div className="bg-gray-50 p-2 rounded-md">
                      <h4 className="text-sm font-bold">Performance Summary</h4>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          Total Leads Generated:
                        </span>
                        <span className="text-sm">142</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          Qualified Leads:
                        </span>
                        <span className="text-sm">87 (61.3%)</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          Conversion Rate:
                        </span>
                        <span className="text-sm text-green-500">22.5%</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          Leaderboard Rank:
                        </span>
                        <span className="text-sm text-amber-500">#3</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Status:</span>
                        <span className="text-sm text-green-500">
                          Active & Recommended
                        </span>
                      </div>
                    </div>

                    {/* Lead Insights Section */}
                    <div className="bg-gray-50 p-2 rounded-md">
                      <h4 className="text-sm font-bold">Lead Insights</h4>
                      <div className="mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Top Industries:
                          </span>
                          <div className="flex space-x-2">
                            <span className="text-xs text-blue-600">
                              Fintech (45%)
                            </span>
                            <span className="text-xs text-blue-600">
                              Retail (30%)
                            </span>
                            <span className="text-xs text-blue-600">
                              EdTech (25%)
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Top Regions:
                          </span>
                          <div className="flex space-x-2">
                            <span className="text-xs text-blue-600">
                              Delhi (50%)
                            </span>
                            <span className="text-xs text-blue-600">
                              Mumbai (30%)
                            </span>
                            <span className="text-xs text-blue-600">
                              Tier-2 Cities (20%)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Weekly Trends Section */}
                    <div className="bg-gray-50 p-2 rounded-md">
                      <h4 className="text-sm font-bold">Weekly Trends</h4>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">▲</span>
                          <span className="text-xs text-gray-500">
                            Consistent volume across the last 4 weeks
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">▲</span>
                          <span className="text-xs text-gray-500">
                            Stable conversion rate with slight growth
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">▲</span>
                          <span className="text-xs text-gray-500">
                            TAT improving week-over-week
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Internal Feedback Section */}
                    <div className="bg-gray-50 p-2 rounded-md">
                      <h4 className="text-sm font-bold">Internal Feedback</h4>
                      <div className="mt-2 space-y-2">
                        <div>
                          <span className="text-xs italic text-gray-600">
                            “Great quality, but a bit slow on follow-ups.”
                          </span>
                        </div>
                        <div>
                          <span className="text-xs italic text-gray-600">
                            “Consistent performance on fintech leads.”
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions Section */}
                    {/* <div className="bg-gray-50 p-2 rounded-md">
                      <h4 className="text-sm font-medium">Actions</h4>
                      <div className="mt-2 flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600"
                        >
                          ✅ Recommend for Next Campaign
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-yellow-600"
                        >
                          ⚠️ Request Follow-Up or Support
                        </Button>
                      </div>
                    </div> */}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardTable;
