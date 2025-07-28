import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.jpeg" alt="Dr. Kesha Logo" className="w-20 h-20 object-contain mr-3" />
              <span className="text-2xl font-bold text-gray-900">Dr. Kesha</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <Link href="/login" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <Link href="/login" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Login
              </Link>
              <Link href="/signup" className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
