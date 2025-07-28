import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DashboardSidebar from "@/components/dashboard/sidebar";
import { Bell, TrendingUp, FileText, Download, Calendar, Filter, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function Reports() {
  const [reportName, setReportName] = useState("");
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [emailDelivery, setEmailDelivery] = useState(false);
  const { toast } = useToast();

  const { data: stats } = useQuery({
    queryKey: ["/api/mentions/stats"],
  });

  const keywords = ["oncology", "healthcare", "medical device", "telemedicine", "clinical trial", "pharmaceuticals"];
  const platforms = ["twitter", "instagram", "linkedin", "facebook", "youtube"];

  const handleKeywordChange = (keyword: string, checked: boolean) => {
    if (checked) {
      setSelectedKeywords([...selectedKeywords, keyword]);
    } else {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    }
  };

  const handlePlatformChange = (platform: string, checked: boolean) => {
    if (checked) {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    } else {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    }
  };

  const generateReport = () => {
    if (!reportName || !reportType || !dateRange) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate PDF generation
    toast({
      title: "Report Generated Successfully",
      description: `${reportName} has been generated and is ready for download.`,
    });

    // Create a mock PDF download
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(
      `Dr. Kesha Report: ${reportName}\n\nGenerated on: ${new Date().toLocaleDateString()}\nReport Type: ${reportType}\nDate Range: ${dateRange}\nKeywords: ${selectedKeywords.join(', ')}\nPlatforms: ${selectedPlatforms.join(', ')}`
    ));
    element.setAttribute('download', `${reportName.replace(/\s+/g, '_')}_report.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const quickReports = [
    {
      name: "Weekly Summary Report",
      description: "Summary of all mentions and analytics for the past week",
      type: "Summary",
      lastGenerated: "2 days ago"
    },
    {
      name: "Competitor Analysis",
      description: "Competitive intelligence and brand comparison report",
      type: "Analysis", 
      lastGenerated: "1 week ago"
    },
    {
      name: "Sentiment Analysis Report",
      description: "Detailed sentiment breakdown across all platforms",
      type: "Sentiment",
      lastGenerated: "3 days ago"
    },
    {
      name: "Influencer Report",
      description: "Top influencers and brand advocates identification",
      type: "Influencer",
      lastGenerated: "5 days ago"
    }
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Export Reports</h1>
            <p className="text-gray-600">Generate and download comprehensive analytics reports</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Custom Report Generator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Generate Custom Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="report-name">Report Name *</Label>
                  <Input
                    id="report-name"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    placeholder="Enter report name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="report-type">Report Type *</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summary">Summary Report</SelectItem>
                      <SelectItem value="detailed">Detailed Analytics</SelectItem>
                      <SelectItem value="sentiment">Sentiment Analysis</SelectItem>
                      <SelectItem value="competitor">Competitor Analysis</SelectItem>
                      <SelectItem value="influencer">Influencer Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date-range">Date Range *</Label>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                      <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                      <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                      <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                      <SelectItem value="last-year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Keywords to Include</Label>
                  <div className="mt-2 space-y-2">
                    {keywords.map((keyword) => (
                      <div key={keyword} className="flex items-center space-x-2">
                        <Checkbox
                          id={`keyword-${keyword}`}
                          checked={selectedKeywords.includes(keyword)}
                          onCheckedChange={(checked) => handleKeywordChange(keyword, checked as boolean)}
                        />
                        <Label htmlFor={`keyword-${keyword}`} className="capitalize">
                          {keyword}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Platforms to Include</Label>
                  <div className="mt-2 space-y-2">
                    {platforms.map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox
                          id={`platform-${platform}`}
                          checked={selectedPlatforms.includes(platform)}
                          onCheckedChange={(checked) => handlePlatformChange(platform, checked as boolean)}
                        />
                        <Label htmlFor={`platform-${platform}`} className="capitalize">
                          {platform}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="email-delivery"
                    checked={emailDelivery}
                    onCheckedChange={(checked) => setEmailDelivery(checked as boolean)}
                  />
                  <Label htmlFor="email-delivery" className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    Email report when ready
                  </Label>
                </div>

                <Button onClick={generateReport} className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Generate & Download Report
                </Button>
              </CardContent>
            </Card>

            {/* Quick Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickReports.map((report, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{report.name}</h3>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {report.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Last generated: {report.lastGenerated}</span>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3 mr-1" />
                          Generate
                        </Button>
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