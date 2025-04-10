import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface InsightDataPoint {
  month: string;
  score: number;
  accepted: number;
  rejected: number;
}

interface QualityInsightChartProps {
  data: InsightDataPoint[];
}

const QualityInsightChart = ({ data }: QualityInsightChartProps) => {
  return (
    <Card className="border border-gray-100">
      <CardHeader>
        <CardTitle>Lead Quality Insights</CardTitle>
        <CardDescription>Track your lead quality scores and acceptance rates over time</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#2563eb" />
              <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="score" name="Quality Score" fill="#2563eb" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="accepted" name="Accepted" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="rejected" name="Rejected" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default QualityInsightChart;