import { useState } from "react";
import { Bell, User, Search, Filter, Heart, MessageCircle, Share, TrendingUp } from "lucide-react";

// Static mentions data
const staticMentions = [
  // Twitter mentions
  {
    id: "1",
    platform: "twitter",
    author: "Sarah Johnson",
    authorHandle: "@sarahj_health",
    content: "Just had an amazing consultation with Dr.Kesha! Her approach to holistic wellness is truly revolutionary. Highly recommend! 🙌 #healthcare #wellness",
    keyword: "Dr.Kesha",
    timestamp: "2 hours ago",
    engagement: { likes: 45, comments: 8, shares: 12 },
    sentiment: "positive",
    verified: true
  },
  {
    id: "2",
    platform: "twitter",
    author: "Mike Chen",
    authorHandle: "@mikechen_fit",
    content: "Anyone else following @DrKesha's latest research on preventive medicine? Game-changing stuff! #preventivemedicine",
    keyword: "DrKesha",
    timestamp: "4 hours ago",
    engagement: { likes: 67, comments: 15, shares: 23 },
    sentiment: "positive",
    verified: false
  },
  {
    id: "3",
    platform: "twitter",
    author: "Health News Today",
    authorHandle: "@healthnewstoday",
    content: "Dr.Kesha's new study on patient care protocols shows promising results. Read more in our latest article.",
    keyword: "Dr.Kesha",
    timestamp: "6 hours ago",
    engagement: { likes: 234, comments: 45, shares: 89 },
    sentiment: "neutral",
    verified: true
  },

  // Instagram mentions
  {
    id: "4",
    platform: "instagram",
    author: "Emma Rodriguez",
    authorHandle: "@emmarodriguez_lifestyle",
    content: "Grateful for Dr.Kesha's guidance on my wellness journey! Her personalized approach makes all the difference ✨ #wellnessjourney #grateful",
    keyword: "Dr.Kesha",
    timestamp: "1 hour ago",
    engagement: { likes: 156, comments: 23, shares: 8 },
    sentiment: "positive",
    verified: false
  },
  {
    id: "5",
    platform: "instagram",
    author: "Wellness Studio NYC",
    authorHandle: "@wellnessstudionyc",
    content: "Honored to host Dr.Kesha's workshop on mindful healthcare practices. Amazing turnout and incredible insights! 🧘‍♀️",
    keyword: "Dr.Kesha",
    timestamp: "3 hours ago",
    engagement: { likes: 289, comments: 34, shares: 15 },
    sentiment: "positive",
    verified: true
  },

  // LinkedIn mentions
  {
    id: "6",
    platform: "linkedin",
    author: "Dr. Amanda Wilson",
    authorHandle: "amanda-wilson-md",
    content: "Excellent presentation by Dr.Kesha at the Medical Innovation Summit. Her insights on patient-centered care are invaluable for our industry.",
    keyword: "Dr.Kesha",
    timestamp: "5 hours ago",
    engagement: { likes: 423, comments: 67, shares: 156 },
    sentiment: "positive",
    verified: true
  },
  {
    id: "7",
    platform: "linkedin",
    author: "Healthcare Today Magazine",
    authorHandle: "healthcare-today-mag",
    content: "Dr.Kesha featured in our latest issue discussing the future of telemedicine and digital health solutions.",
    keyword: "Dr.Kesha",
    timestamp: "8 hours ago",
    engagement: { likes: 678, comments: 89, shares: 234 },
    sentiment: "neutral",
    verified: true
  },

  // Facebook mentions
  {
    id: "8",
    platform: "facebook",
    author: "Community Health Group",
    authorHandle: "communityhealthgroup",
    content: "Thank you Dr.Kesha for the informative session on preventive healthcare! Our community members found it extremely valuable.",
    keyword: "Dr.Kesha",
    timestamp: "7 hours ago",
    engagement: { likes: 145, comments: 28, shares: 19 },
    sentiment: "positive",
    verified: false
  },
  {
    id: "9",
    platform: "facebook",
    author: "Maria Santos",
    authorHandle: "maria.santos.health",
    content: "Dr.Kesha's approach to integrative medicine has been life-changing for my family. Couldn't be more grateful! 💙",
    keyword: "Dr.Kesha",
    timestamp: "9 hours ago",
    engagement: { likes: 87, comments: 12, shares: 6 },
    sentiment: "positive",
    verified: false
  },

  // YouTube mentions
  {
    id: "10",
    platform: "youtube",
    author: "Health & Wellness Channel",
    authorHandle: "@healthwellnesschannel",
    content: "New interview with Dr.Kesha about the latest trends in holistic medicine is now live! Don't miss her expert insights.",
    keyword: "Dr.Kesha",
    timestamp: "12 hours ago",
    engagement: { likes: 892, comments: 156, shares: 78 },
    sentiment: "neutral",
    verified: true
  },
  {
    id: "11",
    platform: "youtube",
    author: "Medical Podcast Network",
    authorHandle: "@medicalpodcastnetwork",
    content: "Episode 45: Dr.Kesha discusses breakthrough treatments in personalized medicine. Available now on all platforms!",
    keyword: "Dr.Kesha",
    timestamp: "1 day ago",
    engagement: { likes: 567, comments: 89, shares: 45 },
    sentiment: "neutral",
    verified: true
  }
];

// Platform colors for visual distinction
const platformColors = {
  twitter: "bg-blue-500",
  instagram: "bg-pink-500",
  linkedin: "bg-blue-700",
  facebook: "bg-blue-600",
  youtube: "bg-red-500"
};

// Sentiment colors
const sentimentColors = {
  positive: "text-green-600",
  neutral: "text-gray-600",
  negative: "text-red-600"
};

function MentionCard({ mention }) {
  return (
    <div className="border-b border-gray-200 p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start space-x-4">
        {/* Platform indicator */}
        <div className={`w-3 h-3 rounded-full ${platformColors[mention.platform]} mt-2`}></div>
        
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">{mention.author}</span>
              {mention.verified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              <span className="text-gray-500 text-sm">@{mention.authorHandle}</span>
              <span className="text-gray-400">•</span>
              <span className={`text-xs px-2 py-1 rounded-full ${platformColors[mention.platform]} text-white capitalize`}>
                {mention.platform}
              </span>
            </div>
            <span className="text-gray-500 text-sm">{mention.timestamp}</span>
          </div>

          {/* Content */}
          <p className="text-gray-800 mb-3">{mention.content}</p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{mention.engagement.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{mention.engagement.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share className="w-4 h-4" />
                <span className="text-sm">{mention.engagement.shares}</span>
              </div>
            </div>
            <div className={`text-sm font-medium ${sentimentColors[mention.sentiment]} capitalize`}>
              {mention.sentiment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialFeed({ mentions, isLoading }) {
  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="text-gray-500 mt-2">Loading mentions...</p>
      </div>
    );
  }

  if (mentions.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">No mentions found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div>
      {mentions.map((mention) => (
        <MentionCard key={mention.id} mention={mention} />
      ))}
    </div>
  );
}

export default function Mentions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");

  const filteredMentions = staticMentions.filter(mention => {
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
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">DK</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Dr. Kesha</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Dr.Kesha</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen">
          <nav className="mt-8">
            <div className="px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Dashboard</h3>
              <div className="mt-2 space-y-1">
                <a href="#" className="bg-blue-50 text-blue-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <TrendingUp className="text-blue-500 mr-3 h-5 w-5" />
                  Mentions
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Mentions</h1>
            <p className="text-gray-600">Monitor and manage all brand mentions across social platforms</p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search mentions, authors, or keywords..."
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="flex gap-2">
                  {platforms.map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setPlatformFilter(platform)}
                      className={`px-3 py-2 text-sm font-medium rounded-md capitalize transition-colors ${
                        platformFilter === platform
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mentions Feed */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtered Results ({filteredMentions.length} mentions)
              </h2>
            </div>
            <div>
              <SocialFeed mentions={filteredMentions} isLoading={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
