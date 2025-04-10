// LeadPage.tsx
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import RecentLeadsTable, { Lead } from "@/components/RecentLeadsTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useCallback, useEffect, useState } from "react";



export default function LeadPage() {
  const [recentLeads] = useState<Lead[]>([
    {
      "id": 1,
      "email": "jdoe@gmail.com",
      "phone": "(555) 123-4567",
      "designation": "Marketing Manager",
      "company_revenue": "$10M-$50M",
      "company_size": "Medium (51-200)",
      "existing_customer": "Yes",
      "leadType": "hot",
      "lead_score": 91
    },
    {
      "id": 2,
      "email": "rsmith@outlook.com",
      "phone": "(555) 234-5678",
      "designation": "Sales Director",
      "company_revenue": "$1M-$10M",
      "company_size": "Small (1-50)",
      "existing_customer": "No",
      "leadType": "cold",
      "lead_score": 53
    },
    {
      "id": 3,
      "email": "ljohnson@yahoo.com",
      "phone": "(555) 345-6789",
      "designation": "CEO",
      "company_revenue": ">$100M",
      "company_size": "Enterprise (>500)",
      "existing_customer": "Yes",
      "leadType": "warm",
      "lead_score": 74
    },
    {
      "id": 4,
      "email": "mwatson@aol.com",
      "phone": "(555) 456-7890",
      "designation": "HR Manager",
      "company_revenue": "$50M-$100M",
      "company_size": "Large (201-500)",
      "existing_customer": "No",
      "leadType": "cold",
      "lead_score": 47
    },
    {
      "id": 5,
      "email": "bwilliams@gmail.com",
      "phone": "(555) 567-8901",
      "designation": "CTO",
      "company_revenue": ">$100M",
      "company_size": "Enterprise (>500)",
      "existing_customer": "Yes",
      "leadType": "hot",
      "lead_score": 97
    },
    {
      "id": 6,
      "email": "tdavis@protonmail.com",
      "phone": "(555) 678-9012",
      "designation": "Finance Director",
      "company_revenue": "$10M-$50M",
      "company_size": "Medium (51-200)",
      "existing_customer": "No",
      "leadType": "warm",
      "lead_score": 68
    },
    {
      "id": 7,
      "email": "cmiller@icloud.com",
      "phone": "(555) 789-0123",
      "designation": "Product Manager",
      "company_revenue": "<$1M",
      "company_size": "Small (1-50)",
      "existing_customer": "Yes",
      "leadType": "cold",
      "lead_score": 45
    },
    {
      "id": 8,
      "email": "jwilson@outlook.com",
      "phone": "(555) 890-1234",
      "designation": "Operations Manager",
      "company_revenue": "$50M-$100M",
      "company_size": "Large (201-500)",
      "existing_customer": "No",
      "leadType": "hot",
      "lead_score": 84
    },
    {
      "id": 9,
      "email": "amoore@gmail.com",
      "phone": "(555) 901-2345",
      "designation": "Customer Success Lead",
      "company_revenue": "$1M-$10M",
      "company_size": "Small (1-50)",
      "existing_customer": "Yes",
      "leadType": "warm",
      "lead_score": 73
    },
    {
      "id": 10,
      "email": "taylorj@icloud.com",
      "phone": "(555) 012-3456",
      "designation": "IT Director",
      "company_revenue": ">$100M",
      "company_size": "Enterprise (>500)",
      "existing_customer": "No",
      "leadType": "cold",
      "lead_score": 59
    },
    {
      "id": 11,
      "email": "andersonm@yahoo.com",
      "phone": "(555) 123-4560",
      "designation": "Marketing Coordinator",
      "company_revenue": "<$1M",
      "company_size": "Small (1-50)",
      "existing_customer": "Yes",
      "leadType": "hot",
      "lead_score": 88
    },
    {
      "id": 12,
      "email": "thomasj@outlook.com",
      "phone": "(555) 234-5670",
      "designation": "Sales Associate",
      "company_revenue": "$10M-$50M",
      "company_size": "Medium (51-200)",
      "existing_customer": "No",
      "leadType": "warm",
      "lead_score": 64
    },
    {
      "id": 13,
      "email": "mitchellj@gmail.com",
      "phone": "(555) 345-6780",
      "designation": "VP of Growth",
      "company_revenue": "$50M-$100M",
      "company_size": "Large (201-500)",
      "existing_customer": "Yes",
      "leadType": "cold",
      "lead_score": 55
    },
    {
      "id": 14,
      "email": "robertsont@icloud.com",
      "phone": "(555) 456-7890",
      "designation": "Finance Analyst",
      "company_revenue": "<$1M",
      "company_size": "Small (1-50)",
      "existing_customer": "No",
      "leadType": "hot",
      "lead_score": 85
    },
    {
      "id": 15,
      "email": "washingtonk@yahoo.com",
      "phone": "(555) 567-8900",
      "designation": "Chief Strategist",
      "company_revenue": ">$100M",
      "company_size": "Enterprise (>500)",
      "existing_customer": "Yes",
      "leadType": "warm",
      "lead_score": 79
    },
    {
      "id": 16,
      "email": "",
      "phone": "(555) 678-9010",
      "designation": "Recruitment Lead",
      "company_revenue": "$1M-$10M",
      "company_size": "Small (1-50)",
      "existing_customer": "No",
      "leadType": "cold",
      "lead_score": 41
    },
    {
      "id": 17,
      "email": "petersons@gmail.com",
      "phone": "(555) 789-0120",
      "designation": "Technical Architect",
      "company_revenue": "$10M-$50M",
      "company_size": "Medium (51-200)",
      "existing_customer": "Yes",
      "leadType": "hot",
      "lead_score": 93
    },
    {
      "id": 18,
      "email": "jacksonm@icloud.com",
      "phone": "(555) 890-1230",
      "designation": "Content Strategist",
      "company_revenue": "$50M-$100M",
      "company_size": "Large (201-500)",
      "existing_customer": "No",
      "leadType": "warm",
      "lead_score": 67
    },
    {
      "id": 19,
      "email": "turnerr@outlook.com",
      "phone": "(555) 901-2340",
      "designation": "Project Manager",
      "company_revenue": "<$1M",
      "company_size": "Small (1-50)",
      "existing_customer": "Yes",
      "leadType": "cold",
      "lead_score": 58
    },
    {
      "id": 20,
      "email": "phillipsk@gmail.com",
      "phone": "(555) 012-3450",
      "designation": "Data Scientist",
      "company_revenue": ">$100M",
      "company_size": "Enterprise (>500)",
      "existing_customer": "No",
      "leadType": "hot",
      "lead_score": 90
    }
  ]
  );

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


  // const columns: ColumnDef<Lead>[] = useMemo(() => {
  //   return [
  //     {
  //       accessorKey: "name",
  //       header: "Name",
  //     },
  //     {
  //       accessorKey: "email",
  //       header: "Email",
  //     },
  //     {
  //       accessorKey: "phone",
  //       header: "Phone",
  //     },
  //     {
  //       accessorKey: "status",
  //       header: "Status",
  //     },
  //     // ... other columns as needed
  //   ];
  // }, []);

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

          {/* DataTable Component */}
          {recentLeads && (
                        <RecentLeadsTable leads={recentLeads} />

            // <DataTable
            //   columns={columns}
            //   data={leadData}
            //   enableRowExpansion={true}
            //   fetchRowDetails={async (row) => {
            //     console.log(row);
                
            //     return new Promise((resolve) => {
            //       setTimeout(() => {
            //         resolve(<div>
            //           <p>Order Details:</p>
            //           {/* <p>Order ID: {row.orderId}</p>
            //           <p>Customer: {row.customerName}</p>
            //           <p>Total: $ {row.total?.toFixed(2)}</p> */}
            //        </div>);
            //       }, 100);
            //     });
            //   }}
            // />
          )}
        </div>
        </SidebarInset>
      </SidebarProvider>
        
  );
}
