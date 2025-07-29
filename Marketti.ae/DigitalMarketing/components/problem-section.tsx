export default function ProblemSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          Tired of Pages That Look Good but Don't Convert?
        </h2>
        <p className="text-lg text-gray-600 mb-4 max-w-4xl mx-auto animate-fade-in-delay">
          Building beautiful websites that generate zero sales is frustrating. You invest time and money, but visitors just bounce without buying.
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in-delay-2">
          To truly convert visitors into customers, you need more than just pretty design; you need proven templates that sell!
        </p>

        <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 text-white animate-slide-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">How Our Templates Transform Your Business</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-xs sm:text-sm font-semibold">boost in sales conversion</div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">48hrs</div>
              <div className="text-xs sm:text-sm font-semibold">to go live and start selling</div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-xs sm:text-sm font-semibold">faster than building from scratch</div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">$5000</div>
              <div className="text-xs sm:text-sm font-semibold">saved vs agency costs</div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-xs sm:text-sm font-semibold">startups trust our templates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}