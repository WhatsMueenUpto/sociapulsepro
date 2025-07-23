import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/sidebar";
import { Bell, TrendingUp, Plus, Users, Building, Mail, Phone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Client {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  status: "active" | "inactive" | "trial";
  keywords: string[];
  platforms: string[];
  joinDate: string;
}

export default function Clients() {
  const [clients] = useState<Client[]>([
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      company: "MedTech Innovations",
      email: "sarah.mitchell@medtech.com",
      phone: "+1 (555) 123-4567",
      website: "medtech-innovations.com",
      industry: "Healthcare",
      status: "active",
      keywords: ["medical devices", "healthcare", "innovation"],
      platforms: ["twitter", "linkedin", "youtube"],
      joinDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      company: "Pharma Global",
      email: "m.johnson@pharmaglobal.com",
      phone: "+1 (555) 987-6543",
      website: "pharmaglobal.com",
      industry: "Pharmaceuticals",
      status: "active",
      keywords: ["pharmaceuticals", "clinical trials", "drug development"],
      platforms: ["twitter", "instagram", "linkedin"],
      joinDate: "2024-02-01"
    },
    {
      id: 3,
      name: "Lisa Chen",
      company: "HealthCare Analytics",
      email: "lisa.chen@hcanalytics.com",
      phone: "+1 (555) 456-7890",
      website: "hcanalytics.com",
      industry: "Healthcare Technology",
      status: "trial",
      keywords: ["healthcare analytics", "data science", "patient care"],
      platforms: ["linkedin", "twitter"],
      joinDate: "2024-03-10"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    keywords: "",
    platforms: [] as string[]
  });

  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "trial":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddClient = () => {
    if (!newClient.name || !newClient.company || !newClient.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Client Added Successfully",
      description: `${newClient.name} from ${newClient.company} has been added to your client list.`,
    });

    setIsDialogOpen(false);
    setNewClient({
      name: "",
      company: "",
      email: "",
      phone: "",
      website: "",
      industry: "",
      keywords: "",
      platforms: []
    });
  };

  const handlePlatformToggle = (platform: string) => {
    const updatedPlatforms = newClient.platforms.includes(platform)
      ? newClient.platforms.filter(p => p !== platform)
      : [...newClient.platforms, platform];
    
    setNewClient({ ...newClient, platforms: updatedPlatforms });
  };

  const platforms = ["twitter", "instagram", "linkedin", "facebook", "youtube"];

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
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Client
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Client</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="client-name">Full Name *</Label>
                        <Input
                          id="client-name"
                          value={newClient.name}
                          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                          placeholder="Enter client name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="client-company">Company *</Label>
                        <Input
                          id="client-company"
                          value={newClient.company}
                          onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="client-email">Email *</Label>
                        <Input
                          id="client-email"
                          type="email"
                          value={newClient.email}
                          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="client-phone">Phone</Label>
                        <Input
                          id="client-phone"
                          value={newClient.phone}
                          onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="client-website">Website</Label>
                        <Input
                          id="client-website"
                          value={newClient.website}
                          onChange={(e) => setNewClient({ ...newClient, website: e.target.value })}
                          placeholder="Enter website URL"
                        />
                      </div>
                      <div>
                        <Label htmlFor="client-industry">Industry</Label>
                        <Select value={newClient.industry} onValueChange={(value) => setNewClient({ ...newClient, industry: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="client-keywords">Keywords to Monitor</Label>
                      <Textarea
                        id="client-keywords"
                        value={newClient.keywords}
                        onChange={(e) => setNewClient({ ...newClient, keywords: e.target.value })}
                        placeholder="Enter keywords separated by commas"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label>Platforms to Monitor</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {platforms.map((platform) => (
                          <Button
                            key={platform}
                            type="button"
                            variant={newClient.platforms.includes(platform) ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePlatformToggle(platform)}
                            className="capitalize"
                          >
                            {platform}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddClient}>
                        Add Client
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Management</h1>
            <p className="text-gray-600">Manage your clients and their social media monitoring preferences</p>
          </div>

          {/* Client Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
                    <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Active Clients</h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {clients.filter(c => c.status === "active").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Trial Clients</h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {clients.filter(c => c.status === "trial").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client List */}
          <Card>
            <CardHeader>
              <CardTitle>Client Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients.map((client) => (
                  <div key={client.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                        <p className="text-gray-600">{client.company}</p>
                      </div>
                      <Badge className={getStatusColor(client.status)}>
                        {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        {client.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        {client.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Globe className="w-4 h-4 mr-2" />
                        {client.website}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Monitored Keywords:</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.keywords.map((keyword, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Platforms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.platforms.map((platform, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded capitalize">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Client since: {new Date(client.joinDate).toLocaleDateString()}
                      </span>
                      <Button variant="outline" size="sm">
                        View Details
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
  );
}