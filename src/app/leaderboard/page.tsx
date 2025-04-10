// LeadPage.tsx
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import LeaderboardTable from "@/components/LeaderboardTable";
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
import { useCallback, useEffect, useState } from "react";

export default function LeadPage() {
  const [partners] = useState([
    {
      id: 1,
      name: "Jane Cooper",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      score: 92,
      rank: "Platinum",
      pointsEarned: 1850,
      leadsSubmitted: 62,
      acceptanceRate: 94,
    },
    {
      id: 2,
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      score: 78,
      rank: "Gold",
      pointsEarned: 1250,
      leadsSubmitted: 45,
      acceptanceRate: 82,
    },
    {
      id: 3,
      name: "Robert Johnson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      score: 73,
      rank: "Gold",
      pointsEarned: 1120,
      leadsSubmitted: 38,
      acceptanceRate: 79,
    },
    {
      id: 4,
      name: "Sarah Williams",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      score: 68,
      rank: "Silver",
      pointsEarned: 950,
      leadsSubmitted: 31,
      acceptanceRate: 74,
    },
    {
      id: 5,
      name: "Michael Brown",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      score: 65,
      rank: "Silver",
      pointsEarned: 890,
      leadsSubmitted: 27,
      acceptanceRate: 70,
    },
    {
      id: 6,
      name: "Emily Davis",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      score: 62,
      rank: "Silver",
      pointsEarned: 820,
      leadsSubmitted: 24,
      acceptanceRate: 66,
    },
    {
      id: 7,
      name: "Daniel Wilson",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      score: 55,
      rank: "Bronze",
      pointsEarned: 720,
      leadsSubmitted: 20,
      acceptanceRate: 60,
    },
    {
      id: 8,
      name: "Olivia Taylor",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      score: 49,
      rank: "Bronze",
      pointsEarned: 650,
      leadsSubmitted: 18,
      acceptanceRate: 55,
    },
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
                <BreadcrumbLink href="#"> Lead Validations</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Partners</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="font-semibold text-2xl  text-primary"> Partners </h1>{" "}
          {/* Title */}
          <LeaderboardTable partners={partners} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
