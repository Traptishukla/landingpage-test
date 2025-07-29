import { Check, Shield } from "lucide-react";

export default function AwardsSecuritySection() {
  return (
    <section className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Awards and Client Success
        </h2>

        <div className="bg-blue-600 rounded-xl p-4 sm:p-5 text-white grid lg:grid-cols-2 gap-4 items-center animate-slide-up-delay mb-4 max-w-4xl w-full mx-auto">
          <div className="text-center lg:text-left flex justify-center items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-400 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              Data Security & Privacy
            </h3>
            <p className="text-base mb-4">
              Your business data and SEO strategies are fully secure with us. We
              follow best practices in data protection.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">SSL encrypted data transfer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">GDPR compliant processes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">Confidential SEO strategies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 rounded-xl px-4 py-3 mb-6 max-w-md w-full mx-auto animate-slide-up">
          <div className="flex gap-4 justify-center">
            {/* Google Review */}
            <div className="min-w-[100px] text-center pr-3">
              <div className="text-lg font-bold text-orange-500 mb-1">
                4.9/5
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="text-base text-gray-600 mt-1">Google Reviews</div>
            </div>

            {/* Trustpilot Review */}
            <div className="min-w-[100px] text-center pl-3">
              <div className="text-lg font-bold text-blue-600 mb-1">4.8/5</div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="text-base text-gray-600 mt-1">Trustpilot</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
