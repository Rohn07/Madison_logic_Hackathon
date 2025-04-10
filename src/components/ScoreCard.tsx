import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";
import PieChartComponent from "./PieChart";

interface ScoreCardProps {
  score: number;
  rank: string;
  pointsEarned: number;
  pointsRedeemed: number;
  leadsSubmitted: number;
  acceptanceRate: number;
  leadsRejected: number;
}

const ScoreCard = ({
  // score,
  pointsEarned,
  pointsRedeemed,
  leadsSubmitted,
  leadsRejected,
  acceptanceRate,
}: ScoreCardProps) => {
  // Define color based on score
  // const getScoreColor = (score: number) => {
  //   if (score >= 80) return "text-green-600";
  //   if (score >= 60) return "text-blue-600";
  //   if (score >= 40) return "text-yellow-600";
  //   return "text-red-600";
  // };

const pieChartData = [
  { name: "Hot Leads", value: 400 },
  { name: "Warm Leads", value: 300 },
  { name: "Cold Leads", value: 100 },
];
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Your Performance</h2>
        {/* <Badge className={`${getBadgeColor(rank)} text-white`}>
          <Award className="w-4 h-4 mr-1" /> {rank}
        </Badge> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-600">Lead Quality Score</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <AlertCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64 text-sm">Your quality score is based on the leads you`ve submitted. Higher quality leads = higher score.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center">
              {/* <div className="w-full mr-4">
                <Progress value={score} className="h-2" />
              </div>
              <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span> */}
            <PieChartComponent data={pieChartData} />

            </div>
          </div>

          {/* <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-600">Points Available</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-xl font-bold">{pointsEarned - pointsRedeemed}</span>
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">Total Campaign</div>
            <div className="flex items-center">
              <span className="text-xl font-bold">{pointsEarned}</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">Leads Submitted</div>
            <div className="text-xl font-bold">{leadsSubmitted}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">Total Delivered Leads</div>
            <div className="flex items-center">
              <span className="text-xl font-bold text-green-600">{pointsRedeemed}</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">Total Rejected Leads</div>
            <div className="text-xl font-bold text-red-600">{leadsRejected}</div>
          </div>
        
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">Acceptance Rate</div>
            <div className="text-xl font-bold">{acceptanceRate}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;