import { Button } from "@/components/ui/button"
import { Shield, Globe, Zap, Check } from "lucide-react"

export default function FinalCTASection() {
  return (
    <section className="py-16 bg-blue-800 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full animate-pulse"></div>
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
          Ready to Grow From Small to Big?
        </h2>
        <p className="text-lg sm:text-xl mb-12 opacity-90 animate-fade-in-delay">
          Let our AI + SEO experts do the heavy lifting while you get more traffic, leads & orders. Start in 1 Day —
          Only 999 DHM/month.
        </p>
        <Button id="footer-button" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 text-lg sm:text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 mb-12 animate-bounce-in">
          Start My SEO Plan
        </Button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">No Setup Fee</span>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">Global Support</span>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">AI-Powered + Human Review</span>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Check className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
