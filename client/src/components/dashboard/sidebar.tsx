import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  AtSign, 
  BarChart3, 
  FileText, 
  UserPlus 
} from "lucide-react";

export default function DashboardSidebar() {
  const [location] = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
    { icon: AtSign, label: "Mentions", href: "/mentions", active: false },
    { icon: BarChart3, label: "Analytics", href: "/analytics", active: false },
    { icon: FileText, label: "Export Reports", href: "/reports", active: false },
    { icon: UserPlus, label: "Add Client", href: "/clients", active: false },
  ];

  return (
    <div className="w-64 bg-white shadow-sm h-screen">
      <nav className="mt-8">
        <div className="px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.active; // For demo, only dashboard is active
              
              return (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}>
                      <Icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
