import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import type { Mention } from "@shared/schema";

interface ChartsProps {
  mentions: Mention[];
}

export default function Charts({ mentions }: ChartsProps) {
  // Generate mock time series data
  const timeSeriesData = [
    { day: "Mon", mentions: 65 },
    { day: "Tue", mentions: 89 },
    { day: "Wed", mentions: 120 },
    { day: "Thu", mentions: 81 },
    { day: "Fri", mentions: 156 },
    { day: "Sat", mentions: 178 },
    { day: "Sun", mentions: 143 },
  ];

  // Calculate sentiment data from mentions
  const sentimentData = mentions.length > 0 ? [
    {
      name: "Positive",
      value: mentions.filter(m => m.sentiment === "positive").length,
      color: "#10B981"
    },
    {
      name: "Neutral", 
      value: mentions.filter(m => m.sentiment === "neutral").length,
      color: "#F59E0B"
    },
    {
      name: "Negative",
      value: mentions.filter(m => m.sentiment === "negative").length,
      color: "#EF4444"
    }
  ] : [
    { name: "Positive", value: 78, color: "#10B981" },
    { name: "Neutral", value: 15, color: "#F59E0B" },
    { name: "Negative", value: 7, color: "#EF4444" }
  ];

  return (
    <div className="space-y-6">
      {/* Mentions Over Time Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Mentions Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <Line 
                type="monotone" 
                dataKey="mentions" 
                stroke="#2A6DF1" 
                strokeWidth={2}
                dot={{ fill: '#2A6DF1', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#2A6DF1', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Sentiment Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Sentiment Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                height={36}
                iconType="circle"
                wrapperStyle={{ fontSize: '14px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
