// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
// import { AlertCircle } from "lucide-react";
import { Award, Star, TrendingUp } from "lucide-react";
import PieChartComponent from "./PieChart";
import { Badge } from "./ui/badge";

// import AreaChartComponent from "./AreaChart";

interface ScoreCardProps {
  score: number;
  rank: string;
  pointsEarned: number;
  pointsRedeemed: number;
  leadsSubmitted: number;
  acceptanceRate: number;
  leadsRejected: number;
}
// type ChartData = {
//   week: string;
//   score: number;
//   totalLeads: number;
//   acceptedLeads: number;
//   rejectedLeads: number;
// }[];

// const areaChartData: ChartData = [
//   {
//     week: "Week 1",
//     score: 65,
//     totalLeads: 100,
//     acceptedLeads: 83,
//     rejectedLeads: 27,
//   },
//   {
//     week: "Week 2",
//     score: 82,
//     totalLeads: 110,
//     acceptedLeads: 70,
//     rejectedLeads: 50,
//   },
//   {
//     week: "Week 3",
//     score: 70,
//     totalLeads: 160,
//     acceptedLeads: 130,
//     rejectedLeads: 30,
//   },
//   {
//     week: "Week 4",
//     score: 85,
//     totalLeads: 200,
//     acceptedLeads: 150,
//     rejectedLeads: 50,
//   },
//   {
//     week: "Week 5",
//     score: 90,
//     totalLeads: 150,
//     acceptedLeads: 130,
//     rejectedLeads: 20,
//   },
// ];

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

const ScoreCard = ({
  // score,
  // pointsEarned,
  pointsRedeemed,
}: // leadsSubmitted,
// leadsRejected,
// acceptanceRate,
ScoreCardProps) => {
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
        <div className="flex items-center">
          <h2 className="text-xl font-bold mr-4">SuperSights Pvt Ltd</h2>
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-xl font-bold">3</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-xl font-bold">4.5 / 5</span>
          </div>
          <Badge className={`${getBadgeColor("Gold")} text-white ml-4`}>
            <Award className="w-4 h-4 mr-1" /> {"Gold"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              {/* <span className="text-sm font-medium text-gray-600">
                Lead Quality Score
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <AlertCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64 text-sm">
                      Your quality score is based on the leads you`ve submitted.
                      Higher quality leads = higher score.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
            </div>
            <div className="flex items-center">
              {/* <div className="w-full mr-4">
                <Progress value={score} className="h-2" />
              </div>
              <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span> */}
              {/* <PieChartComponent data={pieChartData} /> */}
              {/* <AreaChartComponent data={areaChartData} /> */}
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
            <div className="text-sm font-medium text-gray-600 mb-1">
              Avg Lead Score
            </div>
            <div className="mt-2">
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">Avg Lead Score:</span>
                <span>40</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">Total Leads:</span>
                <span>50</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">Accepted Leads:</span>
                <span>60</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">Rejected Leads:</span>
                <span>70</span>
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-800 mb-1">
              Leads Conversion Metrics
            </div>
            <div className="mt-2">
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">SQL:</span>
                <span>40%</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">MQL:</span>
                <span>50%</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">Revenue:</span>
                <span>10%</span>
              </p>
              <p className="text-sm flex justify-between">
                <span className="text-gray-500">Refunds:</span>
                <span>5%</span>
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">
              Total Campaigns
            </div>
            <div className="flex items-center">
              <span className="text-5xl font-bold text-green-600">
                {pointsRedeemed}
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">
              Cost Per Lead
            </div>
            <div className="text-5xl font-bold text-red-600">$12</div>
          </div>

          {/* <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm font-medium text-gray-600 mb-1">
              Acceptance Rate
            </div>
            <div className="text-xl font-bold">{acceptanceRate}%</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
