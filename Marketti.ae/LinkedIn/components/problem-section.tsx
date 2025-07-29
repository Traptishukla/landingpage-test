export default function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in leading-tight">
          Stuck With a Dead LinkedIn Profile?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
          Your profile doesn't reflect your authority, you're missing
          connections with investors, founders & execs, and you've got no time
          to post or engage consistently.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto animate-fade-in-delay-2 leading-relaxed">
          <span className="font-semibold text-gray-800">
            No visibility → No credibility → No growth.
          </span>{" "}
          We fix all that with our done-for-you executive LinkedIn management.
        </p>

        <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 text-white animate-slide-up">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
            How Executive LinkedIn Management Transforms Your Authority
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-5 lg:p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">
                400%
              </div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">
                increase in profile views
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-5 lg:p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">
                250%
              </div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">
                more C-level connections
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-5 lg:p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">
                300%
              </div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">
                boost in engagement rate
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-5 lg:p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">
                75%
              </div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">
                faster investor outreach
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-5 lg:p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">
                90%
              </div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold leading-tight">
                of clients see results in 30 days
              </div>
            </div>
          </div>

          {/* Additional CTA for mobile users */}
          <div className="mt-6 sm:mt-8 lg:hidden">
            <p className="text-sm sm:text-base text-blue-100 mb-4">
              Ready to transform your LinkedIn presence?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <span className="text-lg sm:text-xl font-bold">
                Only 1499 DHM/month
              </span>
              <span className="text-sm text-blue-200">
                UAE C-Level Executives Only
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
