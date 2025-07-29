import { Check, Shield, Zap, TrendingUp } from "lucide-react";

export default function AwardsSecuritySection() {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10 lg:mb-12 animate-fade-in leading-tight">
          Built to Convert. Designed to Sell.
        </h2>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {/* Quality Guarantee Card */}
          <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white animate-slide-up">
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-400 rounded-full flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
                  Quality Guarantee & Support
                </h3>
                <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  Every template is tested, proven, and comes with our
                  satisfaction guarantee. Your success is our priority.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      One revision included
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Free installation support
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Lifetime ownership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Promise Card */}
          <div className="bg-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white animate-slide-up-delay">
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-400 rounded-full flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
                  Proven Performance Results
                </h3>
                <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  Our templates aren't just pretty - they're built using proven
                  conversion principles that actually drive sales.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 text-green-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      AI-enhanced sales copy
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 text-green-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Tested layouts with proven ROI
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 text-green-200 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Expert-level UX design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
              AI-Enhanced Sales Copy
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
              Tested Layouts
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
              One-Time Purchase
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
              Editable Forever
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors col-span-2 sm:col-span-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">
              No Agency Cost
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="bg-blue-50 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-2xl mx-auto animate-slide-up">
          <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-900 mb-4 sm:mb-6">
            Customer Reviews
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Google Review */}
            <div className="text-center p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">
                4.9/5
              </div>
              <div className="text-yellow-400 text-lg sm:text-xl lg:text-2xl mb-2">
                ★★★★★
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Google Reviews
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                500+ Template Reviews
              </div>
            </div>

            {/* Trustpilot Review */}
            <div className="text-center p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                4.8/5
              </div>
              <div className="text-yellow-400 text-lg sm:text-xl lg:text-2xl mb-2">
                ★★★★★
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Trustpilot
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                200+ Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
