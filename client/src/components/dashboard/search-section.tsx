import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SearchSectionProps {
  currentKeyword: string;
  onKeywordChange: (keyword: string) => void;
}

export default function SearchSection({ currentKeyword, onKeywordChange }: SearchSectionProps) {
  const [inputValue, setInputValue] = useState(currentKeyword);
  const { toast } = useToast();

  const handleUpdateSearch = () => {
    onKeywordChange(inputValue);
    toast({
      title: "Search Updated",
      description: `Now monitoring mentions for "${inputValue}"`,
    });
  };

  const handleExportReport = () => {
    toast({
      title: "Report Export Started",
      description: "Your report is being generated and will be downloaded shortly.",
    });
  };

  return (
    <div className="mb-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <Label htmlFor="keyword-search" className="block text-sm font-medium text-gray-700 mb-2">
                Monitor Keyword
              </Label>
              <div className="relative">
                <Input
                  id="keyword-search"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="block w-full pl-4 pr-12 py-3 text-lg"
                  placeholder="Enter keyword to monitor..."
                />
                <Search className="absolute inset-y-0 right-0 flex items-center pr-4 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleUpdateSearch} className="px-6 py-3">
                Update Search
              </Button>
              <Button 
                variant="outline" 
                onClick={handleExportReport}
                className="px-6 py-3"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
