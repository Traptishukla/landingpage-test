import { Zap, Globe, Shield } from "lucide-react"

export default function WhyLoveSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 animate-fade-in">
          Why Businesses Love Our SEO?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-slide-up">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered SEO</h3>
            <p className="text-gray-600">
              Our AI analyzes your market and creates content that ranks. Smart automation meets expert strategy.
            </p>
          </div>
          <div className="text-center animate-slide-up-delay">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Targeting</h3>
            <p className="text-gray-600">
              Reach customers in UAE, India, US & Canada with localized SEO strategies that convert.
            </p>
          </div>
          <div className="text-center animate-slide-up-delay-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Pricing</h3>
            <p className="text-gray-600">
              No hidden fees, no surprises. Just 999 DHM/month for everything you need to rank and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
