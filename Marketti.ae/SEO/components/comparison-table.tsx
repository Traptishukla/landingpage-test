import { Check, X } from "lucide-react"

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-in">
          Why 999 DHM/Month Beats Every SEO Agency Deal
        </h2>

        <div className="bg-white rounded-2xl p-4 sm:p-6 overflow-x-auto animate-slide-up">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 sm:p-4 text-gray-900 font-bold">Feature</th>
                <th className="text-center p-3 sm:p-4 text-gray-900 font-bold">Our Plan</th>
                <th className="text-center p-3 sm:p-4 text-gray-900 font-bold">Traditional Agency</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Pricing</td>
                <td className="text-center p-3 sm:p-4">
                  <div className="font-bold text-green-600">999 DHM</div>
                  <div className="text-sm">per month</div>
                </td>
                <td className="text-center p-3 sm:p-4">
                  <div className="font-bold text-red-600">2000+ DHM</div>
                  <div className="text-sm">per month</div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Setup Time</td>
                <td className="text-center p-3 sm:p-4 font-bold text-green-600">1 Day</td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">7–14 Days</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">AI Assistance</td>
                <td className="text-center p-3 sm:p-4">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="text-center p-3 sm:p-4">
                  <X className="w-5 h-5 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Guest Post Placement</td>
                <td className="text-center p-3 sm:p-4 font-bold text-green-600">Included</td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">Often Extra</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Monthly Reporting</td>
                <td className="text-center p-3 sm:p-4 font-bold text-green-600">Simple & Clear</td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">Complex & Delayed</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Cancel Anytime</td>
                <td className="text-center p-3 sm:p-4">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">Long Contracts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
