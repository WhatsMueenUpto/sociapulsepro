import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  Users, 
  Bell, 
  FileText,
  MessageCircle,
  Star,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Track brand mentions across social media, news, blogs, and forums in real-time."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Get detailed analytics on sentiment, reach, engagement, and audience demographics."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Influencer Discovery",
      description: "Identify and connect with industry influencers and brand advocates."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Alerts",
      description: "Receive instant notifications for important mentions and conversations."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Custom Reports",
      description: "Generate detailed reports and export data in multiple formats."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Engagement Tools",
      description: "Respond to mentions and engage with your audience directly from the platform."
    }
  ];

  const platforms = [
    { icon: <Twitter className="w-8 h-8" />, name: "Twitter", color: "text-blue-400" },
    { icon: <Facebook className="w-8 h-8" />, name: "Facebook", color: "text-blue-600" },
    { icon: <Instagram className="w-8 h-8" />, name: "Instagram", color: "text-pink-500" },
    { icon: <Linkedin className="w-8 h-8" />, name: "LinkedIn", color: "text-blue-700" },
    { icon: <Youtube className="w-8 h-8" />, name: "YouTube", color: "text-red-600" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director, TechFlow",
      content: "Dr. Kesha has transformed our brand monitoring strategy. We're now able to respond to customer feedback in real-time and have seen a 40% increase in positive sentiment.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "CEO, StartupXYZ",
      content: "The insights we get from Dr. Kesha are invaluable. It's helped us identify key influencers in our industry and has significantly improved our social media ROI.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      title: "Brand Manager, GlobalCorp",
      content: "Easy to use interface with powerful analytics. Dr. Kesha gives us the competitive intelligence we need to stay ahead in our market.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Monitor Your Brand.<br />
              <span className="text-primary">Track Conversations</span><br />
              Across Social Media.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover brand mentions from all around the web and social media. Track conversations about your business across social media, news, blogs, videos, forums, and reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="Professional team analyzing social media data" 
              className="rounded-xl shadow-2xl w-full h-auto max-w-5xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover each brand mention from all around the Web and social media
            </h2>
            <p className="text-lg text-gray-600">
              Monitor conversations across all major platforms and channels
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className={`${platform.color} mb-4 flex justify-center`}>
                  {platform.icon}
                </div>
                <p className="font-semibold text-gray-900">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Brand Monitoring</h2>
            <p className="text-lg text-gray-600">Everything you need to monitor, analyze, and engage with your audience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">Choose the plan that's right for your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$29</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Start Free Trial
                  </Button>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 5,000 mentions/month</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>3 social platforms</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>Email alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="ring-2 ring-primary transform scale-105">
              <CardContent className="p-8 gradient-card text-white">
                <div className="text-center">
                  <div className="bg-white text-primary text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <p className="text-blue-100 mb-6">For growing companies</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-blue-100">/month</span>
                  </div>
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
                    Start Free Trial
                  </Button>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-white mr-3" />
                    <span>Up to 25,000 mentions/month</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-white mr-3" />
                    <span>All social platforms</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-white mr-3" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-white mr-3" />
                    <span>Real-time alerts</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-white mr-3" />
                    <span>Custom reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-6">For large organizations</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$299</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited mentions</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>All platforms + API access</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom analytics</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                    <span>White-label options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What our customers say</h2>
            <p className="text-lg text-gray-600">See how Dr. Kesha is helping businesses grow their brand awareness</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
