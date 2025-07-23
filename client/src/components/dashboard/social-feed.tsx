import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Repeat, Heart, Eye, Twitter } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Mention } from "@shared/schema";

interface SocialFeedProps {
  mentions: Mention[];
  isLoading: boolean;
}

export default function SocialFeed({ mentions, isLoading }: SocialFeedProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800";
      case "negative":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getSentimentLabel = (sentiment: string) => {
    return sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Recent Mentions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Mentions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          {mentions.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No mentions found for the selected keyword and platform.</p>
            </div>
          ) : (
            mentions.map((mention) => (
              <div key={mention.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      src={mention.authorAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(mention.author)}&background=random`}
                      alt={mention.author}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <p className="font-semibold text-gray-900">{mention.author}</p>
                      <span className="text-gray-500">{mention.authorHandle}</span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500 text-sm">
                        {formatDistanceToNow(new Date(mention.createdAt), { addSuffix: true })}
                      </span>
                      <Badge className={getSentimentColor(mention.sentiment)}>
                        {getSentimentLabel(mention.sentiment)}
                      </Badge>
                    </div>
                    <p className="text-gray-900 mb-3">{mention.content}</p>
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <span className="flex items-center">
                        <Twitter className="w-4 h-4 mr-1" />
                        {mention.platform.charAt(0).toUpperCase() + mention.platform.slice(1)}
                      </span>
                      <span className="flex items-center">
                        <Repeat className="w-4 h-4 mr-1" />
                        {Math.floor((mention.engagement || 0) * 0.3)}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {mention.engagement || 0}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {(mention.reach || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
