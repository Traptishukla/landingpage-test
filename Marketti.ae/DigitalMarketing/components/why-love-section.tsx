import { Zap, Globe, Shield, TrendingUp, MessageCircle } from "lucide-react";

export default function WhyLoveSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12 animate-fade-in leading-tight">
          Why 200+ Startups & Brands Choose Our Templates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Built for Conversion */}
          <div className="text-center animate-slide-up bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Built for Conversion — Not Just Design
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Every template is crafted with proven conversion principles.
              Strategic CTA placement, psychology-based layouts, and tested
              elements that turn visitors into customers.
            </p>
          </div>

          {/* Performance & Speed */}
          <div className="text-center animate-slide-up-delay bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Loads Fast, Ranks High, Performs Better
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Optimized for speed and SEO out of the box. Our templates achieve
              95+ page speed scores and are built to rank well in search engines
              while converting visitors.
            </p>
          </div>

          {/* Global Support */}
          <div className="text-center animate-slide-up-delay-2 bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Localized Support Across 4 Countries
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Get support in your timezone across UAE, India, US & Canada. Our
              templates work perfectly for local and international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
