import { Card, CardContent } from "@/components/ui/card";
import { AtSign, Heart, Eye, Users } from "lucide-react";

interface AnalyticsCardsProps {
  stats?: {
    total: number;
    positive: number;
    neutral: number;
    negative: number;
    totalReach: number;
  };
}

export default function AnalyticsCards({ stats }: AnalyticsCardsProps) {
  const defaultStats = {
    total: 1247,
    positive: 973,
    negative: 87,
    neutral: 187,
    totalReach: 2100000,
  };

  const data = stats || defaultStats;
  const positivePercentage = Math.round((data.positive / data.total) * 100);
  const influencers = 34;

  const cards = [
    {
      title: "Total Mentions",
      value: data.total.toLocaleString(),
      icon: AtSign,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Positive Sentiment",
      value: `${positivePercentage}%`,
      icon: Heart,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Reach",
      value: `${(data.totalReach / 1000000).toFixed(1)}M`,
      icon: Eye,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Influencers",
      value: influencers.toString(),
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
