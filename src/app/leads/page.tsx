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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Key, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export interface LeadValidation {
  title: string;
  count: number;
}

const businessObjectives = [
  {
    value:
      "Hilton aims to enhance its hospitality footprint by driving corporate partnerships, expanding event bookings, and improving guest experience through digital innovations.Key goals:Attract HR and admin decision-makers for bulk/corporate travel packagesPromote conference/event hosting solutionsTarget finance teams to drive cost-effective lodging solutionsUse data to personalize offers for frequent business travelers",
    label: "Hilton",
  },
  {
    value:
      "Dell Technologies aims to be a global leader in digital transformation by providing scalable, secure, and innovative technology solutions. Its business objectives are to:Expand its B2B customer base through strategic partnerships.Deliver AI-powered and sustainable computing solutions across industries.Accelerate enterprise adoption of Dell’s laptops, desktops, and cloud infrastructure.Strengthen relationships with IT decision-makers and tech leaders in medium to large companies.Provide tailored solutions that match the scale and workflow of enterprise clients.",
    label: "Dell",
  },
  {
    value:
      "Airtel aims to strengthen its position as a leading telecommunications provider by offering innovative and affordable communication solutions. Its business objectives include:Expanding its 5G network coverage and increasing customer adoption of 5G services.Developing strategic partnerships with content providers to offer bundled services.Enhancing customer experience through personalized digital platforms and self-service options.Targeting small and medium-sized businesses with tailored communication packages.",
    label: "Airtel",
  },
];
const mockFetch = (): Promise<{
  ok: boolean;
  json: () => Promise<LeadValidation[]>;
}> => {
  const data = {
    "First Name": 5,
    "Last Name": 5,
    Email: 10,
    "Phone Number": 5,
    "Job Title": 15,
    "Seniority Level": 10,
    Department: 5,
    "Years in Current Role": 5,
    "Company Name": 10,
    "Company Size": 5,
    "Annual Revenue": 5,
    Industry: 10,
    "Headquarters Location": 5,
    "IT Budget Estimate": 5,
    "Interaction Date": 2,
    "Engagement Level": 5,
    "Lead Source": 2,
    "Marketing Campaign Touchpoint": 2,
    "Address Line 1": 2,
    "Address Line 2": 2,
    City: 2,
    "State / Province": 2,
    "Zip / Postal Code": 2,
    Country: 2,
    "Is Decision Maker?": 5,
    "Existing Dell Customer?": 2,
  };

  // Convert data object to LeadValidation array
  const sampleData = convertToLeadValidationArray(data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => Promise.resolve(sampleData),
      });
    }, 500); // Simulating API delay
  });
};

const convertToLeadValidationArray = (
  obj: { [key: string]: number },
  sortOrder: "asc" | "desc" = "desc"
): LeadValidation[] => {
  return Object.keys(obj)
    .map((key) => ({
      title: key,
      count: obj[key],
    }))
    .sort((a, b) =>
      sortOrder === "asc" ? a.count - b.count : b.count - a.count
    );
};

export default function LeadPage() {
  const [selectedBusinessObjective, setSelectedBusinessObjective] = useState<
    string | null
  >(null);
  const [textAreaValue2, setTextAreaValue2] = useState("");
  const [textAreaValue3, setTextAreaValue3] = useState("");
  const [results, setResults] = useState<LeadValidation[] | null>(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!selectedBusinessObjective || !textAreaValue2 || !textAreaValue3) {
      toast.error("Please fill in all fields.");
      return; // Prevent form submission if not all fields are filled
    }

    setLoading(true); // Start loading
    try {
      const response = await mockFetch();
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error submitting data:", error);
      setResults(null);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <SidebarProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6 py-4 bg-white shadow-md">
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
                <BreadcrumbPage>Field Score</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-2 bg-gray-100 rounded-lg">
          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="mb-6 flex flex-col gap-6 bg-white p-4 rounded-lg shadow-lg"
          >
            <h1 className="text-2xl flex font-semibold">
              <span className=" text-primary">Define the score for fields</span>
              <div className="ml-auto w-48">
                <Label
                  htmlFor="businessObjective"
                  className="text-xs font-semibold text-gray-500 mb-1"
                >
                  Clients&nbsp; &nbsp;
                </Label>
                <Select
                  onValueChange={setSelectedBusinessObjective}
                  value={selectedBusinessObjective}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Business Objective" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessObjectives.map((objective) => (
                      <SelectItem key={objective.value} value={objective.value}>
                        {objective.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </h1>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="textArea1" className="text-sm font-semibold">
                  Campaign Objective
                </Label>
                <textarea
                  value={textAreaValue2}
                  onChange={(e) => setTextAreaValue2(e.target.value)}
                  className="w-full border p-5 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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
                  className="w-full border p-5 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  rows={4}
                  placeholder="Enter Fields here..."
                />
              </div>
            </div>

            <button
              type="submit"
              className=" w-36 ml-auto bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Results Section */}
          {results && (
            <h1 className="text-2xl font-semibold text-primary">
              Field Scores
            </h1>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {results ? (
              results.map(
                (result: LeadValidation, index: Key | null | undefined) => (
                  <Card
                    key={index}
                    className="bg-white p-3 rounded-xl shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <CardHeader className="flex items-center justify-between">
                      <span className="text-sm font-semibold">
                        {result.title}
                      </span>
                      <p className="text-xl font-bold text-primary">
                        {result.count}
                      </p>
                    </CardHeader>
                  </Card>
                )
              )
            ) : (
              <p className="col-span-full text-center text-gray-500">
                {loading ? "Loading..." : ""}
              </p>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
