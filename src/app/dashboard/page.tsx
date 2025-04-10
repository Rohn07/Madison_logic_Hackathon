"use client";
import { AppSidebar } from "@/components/app-sidebar";
import NewInsightsCard from "@/components/NewInsightsCard";
import QualityInsightChart from "@/components/QualityInsightChart";
import RecentLeadsTable from "@/components/RecentLeadsTable";
import ScoreCard from "@/components/ScoreCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";

const DashboardPage = () => {
  // Mock data for the partner dashboard
  const [partnerData] = useState({
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    score: 78,
    rank: "Gold",
    pointsEarned: 1250,
    pointsRedeemed: 750,
    leadsSubmitted: 45,
    acceptanceRate: 82,
    leadsRejected: 10,
  });

  // Mock data for recent leads
  const [recentLeads] = useState([]);

  // Mock data for chart
  const [chartData] = useState([
    { month: "Jan", score: 65, accepted: 12, rejected: 3 },
    { month: "Feb", score: 68, accepted: 18, rejected: 5 },
    { month: "Mar", score: 73, accepted: 22, rejected: 6 },
    { month: "Apr", score: 78, accepted: 27, rejected: 4 },
    { month: "May", score: 82, accepted: 30, rejected: 2 },
    { month: "Jun", score: 80, accepted: 25, rejected: 5 },
  ]);
  // Mock data for rewards

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
                <BreadcrumbLink href="#">Lead Validations</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Partner Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="bg-gray-50">
          <main className="container mx-auto px-4 py-8 ">
            {/* <h1 className="text-3xl font-bold mb-6">Partner Dashboard</h1> */}

            <div className="space-y-6">
              {/* Performance Overview */}
              <ScoreCard
                score={partnerData.score}
                rank={partnerData.rank}
                pointsEarned={partnerData.pointsEarned}
                pointsRedeemed={partnerData.pointsRedeemed}
                leadsSubmitted={partnerData.leadsSubmitted}
                acceptanceRate={partnerData.acceptanceRate}
                leadsRejected={partnerData.leadsRejected}
              />

              {/* Quality Insights Chart */}
              <QualityInsightChart data={chartData} />

              <NewInsightsCard />

              {/* Recent Leads */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Recent Leads Submitted</h2>
                <RecentLeadsTable leads={recentLeads} />
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
