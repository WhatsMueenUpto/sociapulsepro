import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { Cloud, Twitter } from "lucide-react";

interface PlatformTabsProps {
  currentPlatform: string;
  onPlatformChange: (platform: string) => void;
}

export default function PlatformTabs({ currentPlatform, onPlatformChange }: PlatformTabsProps) {
  const platforms = [
    { id: "twitter", name: "Twitter", icon: Twitter },
    { id: "instagram", name: "Instagram", icon: SiInstagram },
    { id: "linkedin", name: "LinkedIn", icon: SiLinkedin },
    { id: "facebook", name: "Facebook", icon: SiFacebook },
    { id: "youtube", name: "YouTube", icon: SiYoutube },
    { id: "bluesky", name: "Bluesky", icon: Cloud },
  ];

  return (
    <div className="mb-8">
      <Card>
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              const isActive = currentPlatform === platform.id;
              
              return (
                <button
                  key={platform.id}
                  onClick={() => onPlatformChange(platform.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {platform.name}
                </button>
              );
            })}
          </nav>
        </div>
      </Card>
    </div>
  );
}
