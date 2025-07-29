"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  TrendingUp,
  FileText,
  Search,
  Users,
  MessageCircle,
  Settings,
} from "lucide-react";

const tabContent = {
  profile: {
    title: "Profile Optimization",
    description:
      "Complete LinkedIn profile transformation that makes executives stop scrolling. We rewrite and restructure your profile to rank higher in searches and impress C-level prospects at first glance.",
    features: [
      "Executive-level headline optimization",
      "Authority-building summary rewrite",
      "Strategic keyword placement",
      "Professional experience enhancement",
      "Skills & endorsements optimization",
      "Call-to-action integration",
    ],
    mockups: [
      {
        title: "Profile Views Increased",
        subtitle: "+400% Monthly Views",
        icon: "trending",
      },
      {
        title: "Search Ranking",
        subtitle: "Top 3 for Target Keywords",
        icon: "search",
      },
      {
        title: "Connection Requests",
        subtitle: "+250% Quality Requests",
        icon: "users",
      },
    ],
  },
  content: {
    title: "Content Writing",
    description:
      "AI-assisted, human-refined thought leadership posts that position you as an industry authority. Strategic content that drives engagement, builds credibility, and attracts high-value connections.",
    features: [
      "3-4 thought leadership posts per week",
      "Industry trend commentary",
      "AI-powered content creation",
      "Human expert refinement",
      "Engagement-optimized formatting",
      "Strategic hashtag research",
    ],
    mockups: [
      {
        title: "Content Published",
        subtitle: "15+ Posts Per Month",
        icon: "file",
      },
      {
        title: "Engagement Rate",
        subtitle: "+300% Higher Engagement",
        icon: "trending",
      },
      {
        title: "Thought Leadership",
        subtitle: "Industry Authority Built",
        icon: "check",
      },
    ],
  },
  outreach: {
    title: "CXO Outreach",
    description:
      "Strategic DMs and connection requests to top-level executives, investors, and industry leaders. We identify and connect you with the right people who matter for your business growth.",
    features: [
      "50+ targeted connections per month",
      "Personalized outreach messages",
      "Investor & founder targeting",
      "Industry leader identification",
      "Follow-up sequence management",
      "Relationship nurturing strategy",
    ],
    mockups: [
      {
        title: "New Connections",
        subtitle: "50+ C-Level Per Month",
        icon: "users",
      },
      {
        title: "Response Rate",
        subtitle: "35% Message Response",
        icon: "message",
      },
      {
        title: "Quality Connections",
        subtitle: "90% Target Match Rate",
        icon: "check",
      },
    ],
  },
  reporting: {
    title: "Growth Reporting",
    description:
      "Comprehensive weekly reports tracking your LinkedIn growth metrics, engagement analytics, and lead generation performance. Clear insights that show exactly how your authority is growing.",
    features: [
      "Weekly performance analytics",
      "Follower growth tracking",
      "Engagement rate analysis",
      "Lead generation metrics",
      "Connection quality assessment",
      "Content performance insights",
    ],
    mockups: [
      {
        title: "Followers Growth",
        subtitle: "+200% Monthly Growth",
        icon: "trending",
      },
      {
        title: "Lead Generation",
        subtitle: "25+ Qualified Leads/Month",
        icon: "users",
      },
      {
        title: "Authority Score",
        subtitle: "85+ Industry Ranking",
        icon: "check",
      },
    ],
  },
  engagement: {
    title: "DM Handling",
    description:
      "Professional management of all your LinkedIn interactions. We handle comments, DMs, and engagement activities to keep you top of mind with your network while maintaining your executive voice.",
    features: [
      "Comment response management",
      "DM conversation handling",
      "Engagement activity optimization",
      "Network interaction strategy",
      "Professional tone maintenance",
      "Response time optimization",
    ],
    mockups: [
      {
        title: "Response Time",
        subtitle: "<2 Hours Average",
        icon: "message",
      },
      {
        title: "Engagement Quality",
        subtitle: "95% Professional Rating",
        icon: "check",
      },
      {
        title: "Network Activity",
        subtitle: "Daily Consistent Presence",
        icon: "trending",
      },
    ],
  },
  software: {
    title: "Custom Software",
    description:
      "Optional custom software solutions to complement your LinkedIn growth. From CRM systems to AI tools and MVP development - everything your growing business needs in one package.",
    features: [
      "Custom CRM development",
      "Mobile MVP prototyping",
      "AI automation tools",
      "Workflow optimization systems",
      "Integration with LinkedIn data",
      "Scalable software solutions",
    ],
    mockups: [
      {
        title: "CRM Integration",
        subtitle: "LinkedIn Contacts Synced",
        icon: "settings",
      },
      {
        title: "MVP Development",
        subtitle: "30-Day Launch Ready",
        icon: "trending",
      },
      {
        title: "AI Tools",
        subtitle: "Custom Automations Built",
        icon: "check",
      },
    ],
  },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("profile");
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "check":
        return <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "trending":
        return <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "search":
        return <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "file":
        return <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "users":
        return <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "message":
        return <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "settings":
        return <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      default:
        return <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in leading-tight">
          360° Executive LinkedIn Management
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
          Everything you need to dominate LinkedIn and build executive authority
          — fully managed while you focus on scaling your business.
        </p>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 lg:mb-16">
          {Object.entries(tabContent).map(([key, content]) => (
            <Button
              key={key}
              className={`${
                activeTab === key
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-2 sm:py-3 h-auto min-h-[44px] leading-tight`}
              onClick={() => setActiveTab(key)}
            >
              <span className="break-words hyphens-auto">{content.title}</span>
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center animate-slide-up">
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {currentContent.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-4 sm:mb-6 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="space-y-2 sm:space-y-3">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mockups */}
          <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
            {currentContent.mockups.map((mockup, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 text-gray-900">
                  {mockup.title}
                </h4>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded p-3 sm:p-4 flex items-center justify-between">
                  <span className="text-xs sm:text-sm lg:text-base text-white font-medium">
                    {mockup.subtitle}
                  </span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    {getIcon(mockup.icon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
              Ready to Transform Your LinkedIn Authority?
            </h4>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-blue-100">
              Join 100+ UAE executives who've accelerated their growth with our
              proven system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Only 1499 DHM/month
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-blue-200">
                UAE C-Level Executives Only
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
