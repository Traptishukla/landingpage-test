import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in leading-tight">
          Why 1499 DHM/Month Beats Every LinkedIn Agency Deal
        </h2>

        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 overflow-x-auto animate-slide-up shadow-2xl">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-3 sm:p-4 lg:p-6 text-gray-900 font-bold text-sm sm:text-base lg:text-lg">
                  Feature
                </th>
                <th className="text-center p-3 sm:p-4 lg:p-6 text-gray-900 font-bold text-sm sm:text-base lg:text-lg">
                  Our Executive Plan
                </th>
                <th className="text-center p-3 sm:p-4 lg:p-6 text-gray-900 font-bold text-sm sm:text-base lg:text-lg">
                  Traditional LinkedIn Agency
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Pricing
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <div className="font-bold text-green-600 text-lg sm:text-xl lg:text-2xl">
                    1499 DHM
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    per month
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <div className="font-bold text-red-600 text-lg sm:text-xl lg:text-2xl">
                    3000+ DHM
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    per month
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Setup Time
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-green-600 text-sm sm:text-base lg:text-lg">
                  24 Hours
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base lg:text-lg">
                  2–4 Weeks
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Profile Optimization
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    Full Rewrite
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <div className="font-bold text-red-600 text-sm sm:text-base">
                    Extra Cost
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    +500-1000 DHM
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  AI-Powered Content
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    15+ Posts/Month
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-gray-600">
                    Manual Only
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  CXO Outreach Campaigns
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    50+ Monthly
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base">
                  Not Included
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Reporting Frequency
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-green-600 text-sm sm:text-base lg:text-lg">
                  Weekly Reports
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base lg:text-lg">
                  Monthly or None
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Comment & DM Management
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    24/7 Coverage
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-gray-600">
                    Self-Managed
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Contract Terms
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    Cancel Anytime
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base lg:text-lg">
                  6-12 Month Lock-in
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
