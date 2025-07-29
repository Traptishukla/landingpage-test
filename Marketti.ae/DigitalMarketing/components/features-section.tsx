"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, FileText, Search, Globe, Zap, BarChart } from "lucide-react";

const tabContent = {
  wordpress: {
    title: "WordPress / Shopify",
    description:
      "Fully editable, SEO-optimized sales pages designed for maximum conversions. Perfect for e-commerce stores, service providers, and digital products. Built to work seamlessly with your existing WordPress or Shopify setup.",
    features: [
      "Fully editable in native platform",
      "SEO-optimized for search rankings", 
      "Mobile-responsive design",
      "Fast loading speeds",
      "Conversion-focused layout",
      "Easy customization options",
    ],
    mockups: [
      {
        title: "Sales Conversion Rate",
        subtitle: "Up to 10x Higher",
        icon: "trending",
      },
      {
        title: "Page Load Speed",
        subtitle: "Under 3 seconds",
        icon: "zap",
      },
      {
        title: "Mobile Optimized",
        subtitle: "100% Responsive",
        icon: "check",
      },
    ],
  },
  webflow: {
    title: "Framer / Webflow",
    description:
      "Lightning-fast, modern designs with clean animations that captivate your audience. Perfect for tech startups, SaaS companies, and modern brands that want cutting-edge design aesthetics.",
    features: [
      "Modern, clean animations",
      "Lightning-fast performance",
      "Professional design aesthetic",
      "Interactive elements",
      "Pixel-perfect layouts",
      "Advanced styling options",
    ],
    mockups: [
      {
        title: "Design Quality",
        subtitle: "Premium Modern Look",
        icon: "check",
      },
      {
        title: "Animation Effects",
        subtitle: "Smooth & Engaging",
        icon: "trending",
      },
      {
        title: "Performance Score",
        subtitle: "95+ Page Speed",
        icon: "zap",
      },
    ],
  },
  wix: {
    title: "Wix",
    description:
      "Plug-and-play landing pages and opt-in pages that you can set up in minutes. Perfect for small businesses, freelancers, and anyone who wants quick results without technical complexity.",
    features: [
      "Drag-and-drop simplicity",
      "No coding required",
      "Quick setup process",
      "Built-in forms and CTAs",
      "Wix-optimized design",
      "Instant publishing",
    ],
    mockups: [
      {
        title: "Setup Time",
        subtitle: "Ready in 10 Minutes",
        icon: "zap",
      },
      {
        title: "Ease of Use",
        subtitle: "No Code Needed",
        icon: "check",
      },
      {
        title: "Lead Generation",
        subtitle: "Built-in Opt-ins",
        icon: "trending",
      },
    ],
  },
  email: {
    title: "Email Templates",
    description:
      "Ready-to-send sales, follow-up, and promotional email sequences that convert subscribers into customers. Crafted with proven copywriting techniques and optimized for all email clients.",
    features: [
      "Sales email sequences",
      "Follow-up automation",
      "Promotional campaigns",
      "Welcome series templates",
      "All email clients compatible",
      "Proven copy frameworks",
    ],
    mockups: [
      {
        title: "Open Rate",
        subtitle: "45%+ Average",
        icon: "trending",
      },
      {
        title: "Click Rate",
        subtitle: "15%+ CTR",
        icon: "check",
      },
      {
        title: "Email Sequences",
        subtitle: "5-10 Email Series",
        icon: "file",
      },
    ],
  },
  conversion: {
    title: "Conversion-Focused",
    description:
      "Strategic CTA placements, exit-intent triggers, and mobile optimization designed to turn visitors into customers. Every element is positioned to maximize your conversion rates.",
    features: [
      "Strategic CTA placements",
      "Exit-intent pop-ups",
      "Mobile optimization",
      "A/B tested layouts",
      "Conversion tracking setup",
      "Psychology-based design",
    ],
    mockups: [
      {
        title: "Conversion Rate",
        subtitle: "3-5x Higher",
        icon: "trending",
      },
      {
        title: "CTA Performance",
        subtitle: "Optimized Placement",
        icon: "check",
      },
      {
        title: "Mobile Conversions",
        subtitle: "85%+ Mobile Ready",
        icon: "zap",
      },
    ],
  },
  leadcapture: {
    title: "Lead Capture Ready",
    description:
      "Integrated forms, countdown timers, and upsell sections that capture leads and maximize revenue per visitor. Built with proven psychological triggers that encourage action.",
    features: [
      "Integrated lead forms",
      "Countdown timers",
      "Upsell sections",
      "Social proof elements",
      "Urgency triggers",
      "Trust badges included",
    ],
    mockups: [
      {
        title: "Lead Capture Rate",
        subtitle: "25%+ Conversion",
        icon: "trending",
      },
      {
        title: "Form Completions",
        subtitle: "High Completion Rate",
        icon: "check",
      },
      {
        title: "Upsell Success",
        subtitle: "30%+ Take Upsells",
        icon: "chart",
      },
    ],
  },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("wordpress");
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "check":
        return <Check className="w-4 h-4 text-white" />;
      case "trending":
        return <TrendingUp className="w-4 h-4 text-white" />;
      case "search":
        return <Search className="w-4 h-4 text-white" />;
      case "file":
        return <FileText className="w-4 h-4 text-white" />;
      case "zap":
        return <Zap className="w-4 h-4 text-white" />;
      case "chart":
        return <BarChart className="w-4 h-4 text-white" />;
      default:
        return <Check className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 animate-fade-in leading-tight">
          Choose Your Platform.{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            We'll Deliver a Sales Machine.
          </span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
          Get high-converting templates built specifically for your platform. Whether you're on WordPress, Shopify, Webflow, or need email sequences - we've got you covered!
        </p>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 max-w-6xl mx-auto">
          {Object.entries(tabContent).map(([key, content]) => (
            <Button
              key={key}
              className={`${
                activeTab === key
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base px-2 sm:px-3 py-2 sm:py-3 whitespace-nowrap`}
              onClick={() => setActiveTab(key)}
            >
              {content.title}
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 animate-slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {currentContent.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-4 sm:mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              <div className="space-y-2 sm:space-y-3">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-800 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Mockups */}
            <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
              {currentContent.mockups.map((mockup, index) => (
                <div
                  key={index}
                  className="bg-yellow-300/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <h4 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900 mb-2 sm:mb-3">
                    {mockup.title}
                  </h4>
                  <div className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 lg:p-4 flex items-center justify-between shadow-inner">
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
                      {mockup.subtitle}
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-md">
                      {getIcon(mockup.icon)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}