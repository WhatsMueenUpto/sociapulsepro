import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DashboardSidebar from "@/components/dashboard/sidebar";
import SearchSection from "@/components/dashboard/search-section";
import PlatformTabs from "@/components/dashboard/platform-tabs";
import AnalyticsCards from "@/components/dashboard/analytics-cards";
import Charts from "@/components/dashboard/charts";
import SocialFeed from "@/components/dashboard/social-feed";
import { Bell, User } from "lucide-react";
import { TrendingUp } from "lucide-react";
import type { Mention } from "@shared/schema";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [, setLocation] = useLocation();

  // Available keywords from demo data
  const availableKeywords = [
    "oncology", "healthcare", "medical device", "telemedicine", 
    "clinical trial", "pharmaceuticals", "biotech", "AI healthcare",
    "precision medicine", "mental health", "digital health"
  ];
  const [currentPlatform, setCurrentPlatform] = useState("twitter");

  const { data: mentions = [], isLoading } = useQuery<Mention[]>({
    queryKey: ["/api/mentions", { keyword: currentKeyword, platform: currentPlatform }],
    refetchInterval: 30000, // Refetch every 30 seconds for real-time feel
  });

  const { data: stats } = useQuery<{
    total: number;
    positive: number;
    neutral: number;
    negative: number;
    totalReach: number;
  }>({
    queryKey: ["/api/mentions/stats", { keyword: currentKeyword }],
  });

  const handleLogout = () => {
    // Clear any user authentication tokens or session data
    localStorage.removeItem("authToken"); 
    // Redirect to login page
    setLocation("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.jpeg" alt="Dr. Kesha Logo" className="w-21 h-10 object-contain mr-3" />
              
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4E03AQGNI6D5bUsxNg/profile-displayphoto-shrink_200_200/B4EZWA0lWpHgAc-/0/1741623023515?e=1756339200&v=beta&t=1fLPU-mQRydLL1nEJqb218a4ffzLaB_GbFxacQgZMCY" 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">Dr.Kesha</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <SearchSection 
            currentKeyword={currentKeyword}
            onKeywordChange={setCurrentKeyword}
            availableKeywords={availableKeywords}
          />

          <PlatformTabs 
            currentPlatform={currentPlatform}
            onPlatformChange={setCurrentPlatform}
          />

          <AnalyticsCards stats={stats} />

          {/* Charts and Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Charts mentions={mentions} />
            </div>
            <div className="lg:col-span-2">
              <SocialFeed mentions={mentions} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


