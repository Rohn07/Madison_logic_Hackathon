import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  TooltipProps,
} from "recharts";

type ChartData = {
  week: string;
  score: number;
  totalLeads: number;
  acceptedLeads: number;
  rejectedLeads: number;
}[];

interface AreaChartComponentProps {
  data: ChartData;
}

// Define the type for the tooltip props
interface CustomTooltipProps extends TooltipProps {
  active: boolean;
  payload: any[] | null;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { totalLeads, acceptedLeads, rejectedLeads, score } =
      payload[0].payload;

    return (
      <div className="custom-tooltip bg-white border border-gray-300 rounded-lg p-2 shadow-md">
        <h4 className="text-sm font-medium text-gray-700">Score Summary</h4>
        <div className="mt-2">
          <p className="text-sm flex justify-between">
            <span className="text-gray-500">Avg Lead Score:</span>
            <span>{score}</span>
          </p>
          <p className="text-sm flex justify-between">
            <span className="text-gray-500">Total Leads:</span>
            <span>{totalLeads}</span>
          </p>
          <p className="text-sm flex justify-between mt-1">
            <span className="text-gray-500">Accepted Leads:</span>
            <span>{acceptedLeads}</span>
          </p>
          <p className="text-sm flex justify-between mt-1">
            <span className="text-gray-500">Rejected Leads:</span>
            <span>{rejectedLeads}</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}`} />
        <Tooltip content={<CustomTooltip active={false} payload={[]} />} />
        <Area
          type="monotone"
          dataKey="score"
          stroke="#4338ca"
          fill="#4338ca"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
