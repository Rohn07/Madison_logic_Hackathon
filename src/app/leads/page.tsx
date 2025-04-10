"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export interface LeadValidation {
  title: string;
  count: number;
}

const businessObjectives = [
  {
    value: "Hilton aims to enhance its hospitality footprint by driving corporate partnerships, expanding event bookings, and improving guest experience through digital innovations.Key goals:Attract HR and admin decision-makers for bulk/corporate travel packagesPromote conference/event hosting solutionsTarget finance teams to drive cost-effective lodging solutionsUse data to personalize offers for frequent business travelers",
    label: "Hilton",
  },
  {
    value: "Dell Technologies aims to be a global leader in digital transformation by providing scalable, secure, and innovative technology solutions. Its business objectives are to:Expand its B2B customer base through strategic partnerships.Deliver AI-powered and sustainable computing solutions across industries.Accelerate enterprise adoption of Dell’s laptops, desktops, and cloud infrastructure.Strengthen relationships with IT decision-makers and tech leaders in medium to large companies.Provide tailored solutions that match the scale and workflow of enterprise clients.",
    label: "Dell",
  },
 
];

// const mockFetch = (): Promise<{
//   ok: boolean;
//   json: () => Promise<LeadValidation[]>;
// }> => {
//   const data = {
//     "First Name": 5,
//     "Last Name": 5,
//     Email: 10,
//     "Phone Number": 5,
//     "Job Title": 15,
//     "Seniority Level": 10,
//     Department: 5,
//     "Years in Current Role": 5,
//     "Company Name": 10,
//     "Company Size": 5,
//     "Annual Revenue": 5,
//     Industry: 10,
//     "Headquarters Location": 5,
//     "IT Budget Estimate": 5,
//     "Interaction Date": 2,
//     "Engagement Level": 5,
//     "Lead Source": 2,
//     "Marketing Campaign Touchpoint": 2,
//     "Address Line 1": 2,
//     "Address Line 2": 2,
//     City: 2,
//     "State / Province": 2,
//     "Zip / Postal Code": 2,
//     Country: 2,
//     "Is Decision Maker?": 5,
//     "Existing Dell Customer?": 2,
//   };

//   const sampleData = Object.keys(data).map((key) => ({
//     title: key,
//     count: data[key],
//   }));
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         ok: true,
//         json: () => Promise.resolve(sampleData),
//       });
//     }, 500);
//   });
// };

export default function LeadPage() {
  const [selectedBusinessObjective, setSelectedBusinessObjective] = useState<
    string | null
  >(null);
  const [textAreaValue2, setTextAreaValue2] = useState("");
  const [textAreaValue3, setTextAreaValue3] = useState("");
  const [results, setResults] = useState<LeadValidation[] | null>(null);
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   if (!selectedBusinessObjective || !textAreaValue2 || !textAreaValue3) {
  //     toast.error("Please fill in all fields.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     // const response = await mockFetch();
  //     const response = await fetch("https://904e-49-248-229-115.ngrok-free.app/v1/ai-engine/generate/scoring/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         businessObject: selectedBusinessObjective,
  //         campaignObject: textAreaValue2,
  //         fields: textAreaValue3,
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
      
  //     const data = await response.json();
  //     const sampleData = Object.keys(data.data).map((key) => ({
  //           title: key,
  //           count: data.data[key],
  //         }));
  //     setResults(sampleData);
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //     setResults(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!selectedBusinessObjective || !textAreaValue2 || !textAreaValue3) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setResults(null);

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(
            "https://904e-49-248-229-115.ngrok-free.app/v1/ai-engine/generate/scoring/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                businessObject: selectedBusinessObjective,
                campaignObject: textAreaValue2,
                fields: textAreaValue3,
              }),
            }
          );

          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.status} ${response.statusText}` // More informative error message
            );
          }

          const data = await response.json();
          const sampleData = Object.keys(data.data).map((key) => ({
            title: key,
            count: data.data[key],
          }));
          setSelectedBusinessObjective("");
          setTextAreaValue2("");
          setTextAreaValue3("");
          setResults(sampleData);
          resolve(sampleData); 
        } catch (error) {
          console.error("Error submitting data:", error);
          reject(error); 
        } finally {
          setLoading(false);
        }
      }),
      {
        loading: "Processing...",
        success: () => `Successfully scored fields!`, 
        error: (err) => `Error: ${err.message}`, // Display the full error message
      }
    );
  };

  return (
    <SidebarProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-3 px-5 py-3 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="h-5 border-white opacity-80"
          />
          <Breadcrumb className="animate-fade-in">
            <BreadcrumbList className="flex items-center gap-2 text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="hover:underline">
                  Lead Validations
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="opacity-70" />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">
                  Field Score
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg"
          >
            <h1 className="text-xl font-bold text-gray-800">
              Define Weightage for Fields
            </h1>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 w-full">
                <Label
                  htmlFor="businessObjective"
                  className="text-sm font-semibold"
                >
                  Select Client 
                </Label>
                <select
                  className="text-sm px-2 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setSelectedBusinessObjective(e.target.value)}
                  value={selectedBusinessObjective}
                >
                  <option value="">Select Client</option>
                    {businessObjectives.map((objective) => (
                      <option key={objective.value} value={objective.value}>
                        {objective.label}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="textArea1" className="text-sm font-semibold">
                  Campaign Objective
                </Label>
                <textarea
                  value={textAreaValue2}
                  onChange={(e) => setTextAreaValue2(e.target.value)}
                  className="w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter Campaign Objective here..."
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="textArea2" className="text-sm font-semibold">
                  Fields
                </Label>
                <textarea
                  value={textAreaValue3}
                  onChange={(e) => setTextAreaValue3(e.target.value)}
                  className="w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter Fields here..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-36 ml-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700"
              disabled={loading}
            >
             {"Submit"}
            </button>
          </form>
          {results && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Field Scores
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <Card
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl"
                  >
                    <CardHeader className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">
                        {result.title}
                      </span>
                      <p className="text-xl font-bold text-blue-600">
                        {result.count}
                      </p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
