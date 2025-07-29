import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24">
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 animate-fade-in leading-tight">
              Get a High-Converting Landing Page or Email Template — Ready to
              Launch Today
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 animate-fade-in-delay leading-relaxed">
              Designed to boost sales by up to 10x on platforms like WordPress,
              Shopify, Webflow, Framer & Wix.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 animate-fade-in-delay-2 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ready-to-use templates that convert. No coding needed. Perfect for
              UAE, India, US & Canada markets.
            </p>

            {/* Benefits */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 animate-slide-in justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-base sm:text-lg">No Code Needed</span>
              </div>
              <div className="flex items-center space-x-3 animate-slide-in-delay justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  Optimized for Sales & Speed
                </span>
              </div>
              <div className="flex items-center space-x-3 animate-slide-in-delay-2 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  UAE | India | US | Canada
                </span>
              </div>
            </div>

            {/* Award Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 items-center justify-center lg:justify-start animate-slide-up">
              <div className="p-2 sm:p-3 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/home-images-asia-pacific-2025.png"
                    alt="asia-pacific"
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 lg:w-24 h-auto"
                  />
                </div>
              </div>
              <div className="p-2 sm:p-3 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/home-images-crm-usability-2025.png"
                    alt="crm-usability"
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 lg:w-24 h-auto"
                  />
                </div>
              </div>
              <div className="p-2 sm:p-3 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/home-images-crm-winter-2025.png"
                    alt="crm-winter"
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 lg:w-24 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="order-1 lg:order-2 w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
            {/* Thick Outer Glass Layer */}
            <div className="relative p-2 sm:p-3 lg:p-4 rounded-xl bg-gradient-to-br from-white/40 via-white/40 to-white/40 backdrop-blur-lg shadow-2xl border border-white/40 animate-slide-up">
              {/* Multiple glass layers for depth */}
              <div className="relative p-3 sm:p-4 lg:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30">
                {/* Enhanced decorative glass elements */}
                <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-br from-white/20 via-transparent to-blue-100/10 pointer-events-none"></div>
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-full blur-xl"></div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-200/40 rounded-full blur-md"></div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-white/25 rounded-full blur-lg"></div>

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 drop-shadow-sm text-center lg:text-left">
                    Grab Your Sales Template
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl font-bold text-blue-600 mb-4 sm:mb-6 drop-shadow-sm text-center lg:text-left">
                    Just 299 DHM / 99 USD / ₹4999
                  </p>

                  <form className="space-y-3 sm:space-y-4">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base py-2 sm:py-3"
                    />
                    <Input
                      placeholder="Enter your name"
                      className="transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base py-2 sm:py-3"
                    />

                    {/* Phone Number Row */}
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                      <Select>
                        <SelectTrigger className="w-full sm:w-24 lg:w-28 bg-white/90 backdrop-blur-md border-white/50 shadow-lg text-sm sm:text-base">
                          <SelectValue placeholder="🇦🇪" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-xl border-white/50 shadow-2xl">
                          <SelectItem value="ae">🇦🇪 +971</SelectItem>
                          <SelectItem value="in">🇮🇳 +91</SelectItem>
                          <SelectItem value="us">🇺🇸 +1</SelectItem>
                          <SelectItem value="ca">🇨🇦 +1</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="Enter your phone"
                        className="flex-1 transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base py-2 sm:py-3"
                      />
                    </div>

                    {/* Platform Selection */}
                    <Select>
                      <SelectTrigger className="w-full bg-white/90 backdrop-blur-md border-white/50 shadow-lg text-sm sm:text-base">
                        <SelectValue placeholder="Choose your platform" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-xl border-white/50 shadow-2xl">
                        <SelectItem value="wordpress">
                          🔨 WordPress / Shopify
                        </SelectItem>
                        <SelectItem value="framer">
                          🌐 Framer / Webflow
                        </SelectItem>
                        <SelectItem value="wix">🖼️ Wix</SelectItem>
                        <SelectItem value="email">
                          📧 Email Templates
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Business Description */}
                    <Textarea
                      placeholder="Tell us about your business and what type of template you need"
                      className="w-full transition-all duration-300 min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base resize-none"
                    />

                    {/* Checkbox */}
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <input
                        type="checkbox"
                        className="rounded accent-blue-600 shadow-sm mt-1 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-black drop-shadow-sm leading-relaxed">
                        I agree to terms and privacy policy
                      </span>
                    </div>

                    {/* Submit Button */}
                    <Button
                      id="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-4 lg:py-5 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-blue-500/30 text-sm sm:text-base lg:text-lg font-semibold"
                    >
                      Get Started Now
                    </Button>

                    {/* Trust Line */}
                    <p className="text-xs sm:text-sm text-black drop-shadow-sm text-center leading-relaxed">
                      ✅ Instant Delivery ✅ Support Included ✅ One-Time
                      Purchase
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
