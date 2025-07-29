import { Button } from "@/components/ui/button";
import { Shield, Globe, Zap, Check, Clock, Star } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-16 h-16 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Animated Icons */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-6 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse flex items-center justify-center">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-blue-800" />
          </div>
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse flex items-center justify-center"
            style={{ animationDelay: "0.5s" }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-blue-800" />
          </div>
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse flex items-center justify-center"
            style={{ animationDelay: "1s" }}
          >
            <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-blue-800" />
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 animate-fade-in leading-tight">
          ⚡ Your Sales-Boosting Page or Email Is 1 Click Away
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 lg:mb-12 opacity-90 animate-fade-in-delay leading-relaxed max-w-4xl mx-auto">
          Whether you're a D2C brand, SaaS founder, or service provider — launch
          in hours, not days.
          <br className="hidden sm:block" />
          <span className="text-yellow-300 font-semibold">
            One-time cost. Lifetime value.
          </span>
        </p>

        {/* CTA Button */}
        <Button
          id="footer-button"
          className="bg-white text-blue-800 hover:bg-gray-100 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 mb-8 sm:mb-10 lg:mb-12 animate-bounce-in border-2 border-white/20"
        >
          🔥 Get Your Landing Page or Email Template Now
        </Button>

        {/* Trust Line */}
        <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 text-blue-100 font-medium">
          ✅ UAE | India | US | Canada ✅ Instant Delivery ✅ Support Included
        </p>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
              No Code Needed
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
              48hr Delivery
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
              Global Support
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
              10x Conversion
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
              One-Time Cost
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105 col-span-2 sm:col-span-1">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
              5-Star Rated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
