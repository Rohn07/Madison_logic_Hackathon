import LeadInsights from "./LeadInsights";
import ProgressBar from "./progressBar";
import RecommandInsights from "./recommandInsights";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import WeekInsights from "./weekInsights";

export default function NewInsightsCard() {
  return (
    <>
      <Card className="border border-gray-100">
        <CardHeader>
          <CardTitle>Insights</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <Tabs defaultValue="leadInsights">
            <TabsList>
              <TabsTrigger value="leadInsights">Lead Insights</TabsTrigger>
              <TabsTrigger value="weeklyInsights">Weekly Trends</TabsTrigger>
              <TabsTrigger value="recommandations">Recommandations</TabsTrigger>
            </TabsList>
            <TabsContent value="leadInsights">
              <LeadInsights />
            </TabsContent>

            <TabsContent value="weeklyInsights">
              <WeekInsights />
            </TabsContent>
            <TabsContent value="recommandations">
              <RecommandInsights />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="border border-gray-100">
        <CardHeader>
          <CardTitle>Partner Score</CardTitle>
        </CardHeader>
        <CardContent className="pt-2 flex flex-col items-center">
          {/* Progress Bar showing 40% */}
          <ProgressBar progress={70} />
          {/* You can also add additional content like the actual score */}
          <div className="mt-2 text-sm text-gray-500">70% Partner Score</div>
        </CardContent>
      </Card>
    </>
  );
}
