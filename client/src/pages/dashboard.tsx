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

export default function Dashboard() {
  const [currentKeyword, setCurrentKeyword] = useState("oncology");
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-primary mr-3" />
              <span className="text-2xl font-bold text-gray-900">SociaPulse</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40" 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </div>
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
