// LeadPage.tsx
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import LeaderboardTable from "@/components/LeaderboardTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useCallback, useEffect, useState } from "react";


export default function LeadPage() {
  const [partners] = useState([
    {
      id: 1,
      name: "Jane Cooper",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      score: 74.75,
      rank: "Platinum",
      pointsEarned: 1850,
      leadsSubmitted: 62,
      acceptanceRate: 94,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "200 leads - 10 members",
      campaignGoal: 200,
      leadApprovalRate: "85%",
      leadsApprovedDelivered: "170/200",
      turnaroundTime: "40/week",
      turnaroundSpeedIncrease: "40%",
      campaignCategoryProductType: "HQL",
      campaignCategoryIndustrialFit: "Healthcare",
      campaignCategoryCompanySize: "Small",
      leadsReach: "APAC"
    },
    {
      id: 2,
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      score: 74.25,
      rank: "Gold",
      pointsEarned: 1250,
      leadsSubmitted: 45,
      acceptanceRate: 82,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "500 leads - 20 members",
      campaignGoal: 500,
      leadApprovalRate: "90%",
      leadsApprovedDelivered: "450/500",
      turnaroundTime: "125/week",
      turnaroundSpeedIncrease: "33%",
      campaignCategoryProductType: "Double Touch",
      campaignCategoryIndustrialFit: "Financial Services",
      campaignCategoryCompanySize: "Medium",
      leadsReach: "EMEA"
    },
    {
      id: 3,
      name: "Robert Johnson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      score: 56.25,
      rank: "Gold",
      pointsEarned: 1120,
      leadsSubmitted: 38,
      acceptanceRate: 79,
      isActive: "Yes",
      goodRelation: "No",
      bandwidth: "1000 leads - 40 members",
      campaignGoal: 1000,
      leadApprovalRate: "75%",
      leadsApprovedDelivered: "750/1000",
      turnaroundTime: "250/week",
      turnaroundSpeedIncrease: "0%",
      campaignCategoryProductType: "BANT",
      campaignCategoryIndustrialFit: "IT Services",
      campaignCategoryCompanySize: "Large",
      leadsReach: "APAC"
    },
    {
      id: 4,
      name: "Sarah Williams",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      score: 55.25,
      rank: "Silver",
      pointsEarned: 950,
      leadsSubmitted: 31,
      acceptanceRate: 74,
      isActive: "No",
      goodRelation: "Re-engaging",
      bandwidth: "500 leads - 15 members",
      campaignGoal: 500,
      leadApprovalRate: "80%",
      leadsApprovedDelivered: "400/500",
      turnaroundTime: "125/week",
      turnaroundSpeedIncrease: "0%",
      campaignCategoryProductType: "Double Touch",
      campaignCategoryIndustrialFit: "Retail",
      campaignCategoryCompanySize: "Small",
      leadsReach: "America"
    },
    {
      id: 5,
      name: "Michael Brown",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      score: 76.75,
      rank: "Silver",
      pointsEarned: 890,
      leadsSubmitted: 27,
      acceptanceRate: 70,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "200 leads - 10 members",
      campaignGoal: 200,
      leadApprovalRate: "95%",
      leadsApprovedDelivered: "190/200",
      turnaroundTime: "50/week",
      turnaroundSpeedIncrease: "25%",
      campaignCategoryProductType: "HQL",
      campaignCategoryIndustrialFit: "Technology",
      campaignCategoryCompanySize: "Medium",
      leadsReach: "APAC"
    },
    {
      id: 6,
      name: "Emily Davis",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      score: 68.75,
      rank: "Silver",
      pointsEarned: 820,
      leadsSubmitted: 24,
      acceptanceRate: 66,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "1000 leads - 40 members",
      campaignGoal: 1000,
      leadApprovalRate: "85%",
      leadsApprovedDelivered: "850/1000",
      turnaroundTime: "250/week",
      turnaroundSpeedIncrease: "0%",
      campaignCategoryProductType: "Double Touch",
      campaignCategoryIndustrialFit: "E-commerce",
      campaignCategoryCompanySize: "Large",
      leadsReach: "EMEA"
    },
    {
      id: 7,
      name: "Daniel Wilson",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      score: 70.75,
      rank: "Bronze",
      pointsEarned: 720,
      leadsSubmitted: 20,
      acceptanceRate: 60,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "500 leads - 25 members",
      campaignGoal: 500,
      leadApprovalRate: "80%",
      leadsApprovedDelivered: "400/500",
      turnaroundTime: "125/week",
      turnaroundSpeedIncrease: "40%",
      campaignCategoryProductType: "BANT",
      campaignCategoryIndustrialFit: "Manufacturing",
      campaignCategoryCompanySize: "Large",
      leadsReach: "America"
    },
    {
      id: 8,
      name: "Olivia Taylor",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      score: 69.75,
      rank: "Bronze",
      pointsEarned: 650,
      leadsSubmitted: 18,
      acceptanceRate: 55,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "200 leads - 10 members",
      campaignGoal: 200,
      leadApprovalRate: "90%",
      leadsApprovedDelivered: "180/200",
      turnaroundTime: "50/week",
      turnaroundSpeedIncrease: "0%",
      campaignCategoryProductType: "HQL",
      campaignCategoryIndustrialFit: "Education",
      campaignCategoryCompanySize: "Small",
      leadsReach: "APAC"
    },
    {
      id: 9,
      name: "Chris Martin",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      score: 60.25,
      rank: "Silver",
      pointsEarned: 460,
      leadsSubmitted: 16,
      acceptanceRate: 60,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "1000 leads - 40 members",
      campaignGoal: 1000,
      leadApprovalRate: "70%",
      leadsApprovedDelivered: "700/1000",
      turnaroundTime: "250/week",
      turnaroundSpeedIncrease: "0%",
      campaignCategoryProductType: "Double Touch",
      campaignCategoryIndustrialFit: "Fintech",
      campaignCategoryCompanySize: "Mid-size",
      leadsReach: "EMEA"
    },
    {
      id: 10,
      name: "Sophia Green",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      score: 71.25,
      rank: "Silver",
      pointsEarned: 760,
      leadsSubmitted: 28,
      acceptanceRate: 70,
      isActive: "Yes",
      goodRelation: "Yes",
      bandwidth: "500 leads - 20 members",
      campaignGoal: 500,
      leadApprovalRate: "92%",
      leadsApprovedDelivered: "460/500",
      turnaroundTime: "125/week",
      turnaroundSpeedIncrease: "0%",
      campaignCategoryProductType: "BANT",
      campaignCategoryIndustrialFit: "Healthcare",
      campaignCategoryCompanySize: "Large",
      leadsReach: "America"
    }
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
                <BreadcrumbLink href="#">
                  Lead Validations
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Lead Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="font-semibold text-2xl  text-primary">Lead Management</h1> {/* Title */}

         <LeaderboardTable partners={partners} />
        </div>
        </SidebarInset>
      </SidebarProvider>
        
  );
}
