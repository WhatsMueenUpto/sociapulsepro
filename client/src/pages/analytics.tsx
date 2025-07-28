import { useQuery } from "@tanstack/react-query";
import DashboardSidebar from "@/components/dashboard/sidebar";
import Charts from "@/components/dashboard/charts";
import AnalyticsCards from "@/components/dashboard/analytics-cards";
import { Bell, TrendingUp, BarChart3, Calendar, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import type { Mention } from "@shared/schema";

export default function Analytics() {
  const { data: mentions = [] } = useQuery<Mention[]>({
    queryKey: ["/api/mentions"],
  });

  const { data: stats } = useQuery<{
    total: number;
    positive: number;
    neutral: number;
    negative: number;
    totalReach: number;
  }>({
    queryKey: ["/api/mentions/stats"],
  });

  // Generate engagement data over time
  const engagementData = [
    { date: "Jan 1", engagement: 2400, reach: 24000 },
    { date: "Jan 8", engagement: 1398, reach: 18900 },
    { date: "Jan 15", engagement: 3800, reach: 35200 },
    { date: "Jan 22", engagement: 3908, reach: 42100 },
    { date: "Jan 29", engagement: 4800, reach: 51000 },
    { date: "Feb 5", engagement: 3490, reach: 38000 },
    { date: "Feb 12", engagement: 4300, reach: 45600 },
  ];

  // Platform distribution data
  const platformData = [
    { platform: "Twitter", mentions: 245, color: "#1DA1F2" },
    { platform: "Instagram", mentions: 189, color: "#E4405F" },
    { platform: "LinkedIn", mentions: 156, color: "#0077B5" },
    { platform: "Facebook", mentions: 134, color: "#1877F2" },
    { platform: "YouTube", mentions: 98, color: "#FF0000" },
  ];

  // Top keywords data
  const keywordData = [
    { keyword: "oncology", mentions: 234, growth: 12 },
    { keyword: "healthcare", mentions: 189, growth: 8 },
    { keyword: "medical device", mentions: 156, growth: -3 },
    { keyword: "telemedicine", mentions: 134, growth: 15 },
    { keyword: "clinical trial", mentions: 98, growth: 7 },
  ];

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
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Last 30 Days
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGNI6D5bUsxNg/profile-displayphoto-shrink_200_200/B4EZWA0lWpHgAc-/0/1741623023515?e=1756339200&v=beta&t=1fLPU-mQRydLL1nEJqb218a4ffzLaB_GbFxacQgZMCY" 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">Dr.Kesha</span>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Comprehensive insights into your social media monitoring</p>
          </div>

          <AnalyticsCards stats={stats} />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Engagement Over Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Engagement Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <Area
                      type="monotone"
                      dataKey="engagement"
                      stroke="#2A6DF1"
                      fill="#2A6DF1"
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Platform Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={platformData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="platform" tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <Bar dataKey="mentions" fill="#2A6DF1" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Additional Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Charts mentions={mentions} />
            
            {/* Top Keywords */}
            <Card>
              <CardHeader>
                <CardTitle>Top Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keywordData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{item.keyword}</p>
                        <p className="text-sm text-gray-500">{item.mentions} mentions</p>
                      </div>
                      <div className={`text-sm font-medium ${
                        item.growth > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.growth > 0 ? '+' : ''}{item.growth}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}