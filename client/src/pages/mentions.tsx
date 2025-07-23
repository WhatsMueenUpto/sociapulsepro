import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DashboardSidebar from "@/components/dashboard/sidebar";
import SocialFeed from "@/components/dashboard/social-feed";
import { Bell, User, Search, Filter } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Mention } from "@shared/schema";

export default function Mentions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");

  const { data: allMentions = [], isLoading } = useQuery<Mention[]>({
    queryKey: ["/api/mentions"],
  });

  const filteredMentions = allMentions.filter(mention => {
    const matchesSearch = searchQuery === "" || 
      mention.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mention.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mention.keyword.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPlatform = platformFilter === "all" || mention.platform === platformFilter;
    
    return matchesSearch && matchesPlatform;
  });

  const platforms = ["all", "twitter", "instagram", "linkedin", "facebook", "youtube"];

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Mentions</h1>
            <p className="text-gray-600">Monitor and manage all brand mentions across social platforms</p>
          </div>

          {/* Search and Filter Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      placeholder="Search mentions, authors, or keywords..."
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="flex gap-2">
                  {platforms.map((platform) => (
                    <Button
                      key={platform}
                      variant={platformFilter === platform ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPlatformFilter(platform)}
                      className="capitalize"
                    >
                      {platform}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mentions Feed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtered Results ({filteredMentions.length} mentions)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <SocialFeed mentions={filteredMentions} isLoading={isLoading} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}