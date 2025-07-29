import { Check, X } from "lucide-react"

export default function ComparisonTable() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-blue-800 text-white">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in leading-tight">
          Just 299 DHM / 99 USD Beats Every Agency Quote
        </h2>

        <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 overflow-x-auto animate-slide-up shadow-2xl">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-3 sm:p-4 lg:p-5 text-gray-900 font-bold text-base sm:text-lg">Feature</th>
                <th className="text-center p-3 sm:p-4 lg:p-5 text-gray-900 font-bold text-base sm:text-lg">Our Templates</th>
                <th className="text-center p-3 sm:p-4 lg:p-5 text-gray-900 font-bold text-base sm:text-lg">Agency Quote</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Pricing</td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <div className="font-bold text-green-600 text-lg sm:text-xl">299 DHM / $99</div>
                  <div className="text-sm text-green-600">One-time payment</div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <div className="font-bold text-red-600 text-lg sm:text-xl">$5,000+</div>
                  <div className="text-sm text-red-600">Plus ongoing costs</div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Delivery Time</td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-green-600">Instant to 48 Hours</td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-red-600">4–12 Weeks</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Coding Required</td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto" />
                  <div className="text-sm text-green-600 mt-1">No code needed</div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto" />
                  <div className="text-sm text-red-600 mt-1">Technical complexity</div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Platform Support</td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-green-600">5+ Platforms</td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-red-600">Limited Options</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Revisions Included</td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto" />
                  <div className="text-sm text-green-600 mt-1">1 revision + support</div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-red-600">Extra Charges</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Conversion Optimization</td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto" />
                  <div className="text-sm text-green-600 mt-1">Proven layouts</div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-red-600">Hit or Miss</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Ownership</td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto" />
                  <div className="text-sm text-green-600 mt-1">Yours forever</div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-red-600">Ongoing Dependencies</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-5 font-medium">Support Included</td>
                <td className="text-center p-3 sm:p-4 lg:p-5">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto" />
                  <div className="text-sm text-green-600 mt-1">Free installation help</div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-5 font-bold text-red-600">Hourly Billing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}