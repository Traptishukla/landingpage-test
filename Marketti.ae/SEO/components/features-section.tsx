"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, FileText, Search } from "lucide-react";

const tabContent = {
  backlinks: {
    title: "Backlink Building",
    description:
      "Get high-quality backlinks from trusted domains in your niche. We build authority links that Google loves and your competitors envy. Each link is manually vetted and placed on relevant, high-traffic websites.",
    features: [
      "10+ quality backlinks per month",
      "Authority domain placement",
      "Niche-relevant websites",
      "Manual link verification",
      "Competitor backlink analysis",
      "Link building strategy",
    ],
    mockups: [
      {
        title: "High-Quality Backlinks",
        subtitle: "Authority Score: 85+",
        icon: "check",
      },
      {
        title: "Domain Authority",
        subtitle: "DA 70+ Websites",
        icon: "trending",
      },
      {
        title: "Link Placement",
        subtitle: "Contextual & Relevant",
        icon: "link",
      },
    ],
  },
  content: {
    title: "AI Content Creation",
    description:
      "Our AI creates SEO-optimized blogs and guest posts that rank. Each piece is researched, written, and optimized for your target keywords while maintaining quality and readability.",
    features: [
      "4 SEO-optimized blogs per month",
      "Guest post writing & placement",
      "AI-enhanced, expert-reviewed",
      "Keyword-optimized content",
      "Engaging & readable format",
      "Content calendar planning",
    ],
    mockups: [
      {
        title: "SEO Content Created",
        subtitle: "4 Blogs + Guest Posts",
        icon: "check",
      },
      {
        title: "Keyword Optimization",
        subtitle: "Target Keywords: 15+",
        icon: "search",
      },
      {
        title: "Content Quality",
        subtitle: "AI + Human Review",
        icon: "trending",
      },
    ],
  },
  keywords: {
    title: "Keyword Strategy",
    description:
      "Data-driven keyword research tailored to your market. We identify high-value, low-competition keywords that your customers are actually searching for.",
    features: [
      "Comprehensive keyword research",
      "Competitor analysis",
      "Local & global targeting",
      "Search volume analysis",
      "Keyword difficulty assessment",
      "Long-tail keyword discovery",
    ],
    mockups: [
      {
        title: "Keywords Researched",
        subtitle: "500+ Keywords Analyzed",
        icon: "search",
      },
      {
        title: "Competition Analysis",
        subtitle: "Low Competition Found",
        icon: "trending",
      },
      {
        title: "Search Volume",
        subtitle: "High Volume Keywords",
        icon: "check",
      },
    ],
  },
  onpage: {
    title: "On-Page SEO Fixes",
    description:
      "Complete on-page optimization including meta tags, headers, internal linking, and site structure improvements that boost your search rankings.",
    features: [
      "Meta tags optimization",
      "Header structure fixes",
      "Internal linking strategy",
      "Site speed optimization",
      "Mobile responsiveness",
      "Schema markup implementation",
    ],
    mockups: [
      {
        title: "Page Speed Improved",
        subtitle: "Load Time: <2 seconds",
        icon: "trending",
      },
      { title: "SEO Score", subtitle: "95/100 Optimized", icon: "check" },
      { title: "Mobile Friendly", subtitle: "100% Responsive", icon: "check" },
    ],
  },
  reporting: {
    title: "Monthly Reports",
    description:
      "Clear, actionable monthly reports showing your rankings, traffic growth, and ROI. No confusing metrics - just the data that matters for your business.",
    features: [
      "Rankings & traffic data",
      "ROI analysis",
      "Actionable insights",
      "Competitor comparison",
      "Goal tracking",
      "Performance trends",
    ],
    mockups: [
      {
        title: "Rankings Improved",
        subtitle: "Page 1 Rankings: +15",
        icon: "trending",
      },
      {
        title: "Traffic Growth",
        subtitle: "+250% Organic Traffic",
        icon: "trending",
      },
      {
        title: "ROI Tracking",
        subtitle: "300% Return on Investment",
        icon: "check",
      },
    ],
  },
  copywriting: {
    title: "SEO Copywriting",
    description:
      "High-converting, keyword-optimized content crafted to boost your rankings and engage your audience. Our words work hard so you don’t have to.",
    features: [
      "Keyword-rich content",
      "Optimized for SEO & conversions",
      "Tailored to your brand voice",
      "Content for blogs, landing pages, and ads",
      "Persuasive CTAs",
      "Built for engagement & ranking",
    ],
    mockups: [
      {
        title: "Better Rankings",
        subtitle: "Top 3 for 20+ Keywords",
        icon: "trending",
      },
      {
        title: "Engaging Content",
        subtitle: "Avg. Time on Page: +60%",
        icon: "clock",
      },
      {
        title: "Higher Conversions",
        subtitle: "Leads Increased by 3X",
        icon: "check",
      },
    ],
  },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("backlinks");
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
      default:
        return <Check className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            Rank & Grow
          </span>{" "}
          — Done for You
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in-delay">
          Our comprehensive SEO service includes content creation, backlink
          building, and performance tracking to help your business dominate
          search results!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 mx-auto">
          {Object.entries(tabContent).map(([key, content]) => (
            <Button
              key={key}
              className={`${
                activeTab === key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-all duration-300 transform hover:scale-105 text-sm px-3 py-2`}
              onClick={() => setActiveTab(key)}
            >
              {content.title}
            </Button>
          ))}
        </div>

        <div className="bg-yellow-400 rounded-2xl p-6 sm:p-8 grid lg:grid-cols-2 gap-8 items-center animate-slide-up">
          <div className="text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h3>
            <p className="text-gray-800 mb-6">{currentContent.description}</p>
            <div className="space-y-3">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {currentContent.mockups.map((mockup, index) => (
              <div
                key={index}
                className="bg-yellow-300 rounded-lg p-4 transform hover:scale-105 transition-all duration-300"
              >
                <h4 className="font-semibold mb-2">{mockup.title}</h4>
                <div className="bg-white rounded p-3 flex items-center justify-between">
                  <span className="text-sm">{mockup.subtitle}</span>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    {getIcon(mockup.icon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
