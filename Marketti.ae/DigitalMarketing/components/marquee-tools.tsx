"use client";

import Fastgrow from "../public/fastgrow.png";
import Crown from "../public/crown.png";
import Lre from "../public/Lre.png";
import GulfTalent from "../public/gulftalent.png";
import HarbourEnergy from "../public/harbourEnergy.png";
import Jinko from "../public/jinko.png";
import Mazaya from "../public/Mazaya.png";
import Master from "../public/master.png";
import Target from "../public/target.png";
import Rigzone from "../public/Rigzone.png";
import WhiteandCo from "../public/white&co.png";
import Image from "next/image";

const clientBrands = [
  {
    id: 1,
    img: Fastgrow,
    name: "FastGrow",
  },
  {
    id: 2,
    img: Crown,
    name: "Crown",
  },
  {
    id: 3,
    img: Lre,
    name: "LRE",
  },
  {
    id: 4,
    img: GulfTalent,
    name: "GulfTalent",
  },
  {
    id: 5,
    img: HarbourEnergy,
    name: "Harbour Energy",
  },
  {
    id: 6,
    img: Jinko,
    name: "Jinko",
  },
  {
    id: 7,
    img: Mazaya,
    name: "Mazaya",
  },
  {
    id: 8,
    img: Master,
    name: "Master",
  },
  {
    id: 9,
    img: Target,
    name: "Target",
  },
  {
    id: 10,
    img: Rigzone,
    name: "Rigzone",
  },
  {
    id: 11,
    img: WhiteandCo,
    name: "White & Co",
  },
];

export default function MarqueeTools() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
          Why 200+ Startups & Brands Use Our Sales Templates
        </h2>
        <p className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
          From D2C brands to SaaS startups and service providers - successful
          companies choose our templates to launch faster and convert better.
          Join the brands that trust our proven designs.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex animate-marquee-left-fast mb-3 sm:mb-4 lg:mb-6">
          {[...clientBrands, ...clientBrands].map((brand, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 flex flex-col justify-center items-center bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 mx-1 sm:mx-2 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-center transition-all duration-300 hover:scale-105 hover:bg-white shadow-lg hover:shadow-xl"
            >
              <Image
                src={brand.img}
                alt={`${brand.name} logo`}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain mb-2 sm:mb-3"
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:block">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex animate-marquee-right-fast">
          {[
            ...clientBrands.slice().reverse(),
            ...clientBrands.slice().reverse(),
          ].map((brand, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 flex flex-col justify-center items-center bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 mx-1 sm:mx-2 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-center transition-all duration-300 hover:scale-105 hover:bg-white shadow-lg hover:shadow-xl"
            >
              <Image
                src={brand.img}
                alt={`${brand.name} logo`}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain mb-2 sm:mb-3"
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:block">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-6 sm:w-8 lg:w-12 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-6 sm:w-8 lg:w-12 h-full bg-gradient-to-l from-blue-600 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Trust Stats */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 mt-8 sm:mt-10 lg:mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-1 sm:mb-2">
              200+
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-blue-100">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-1 sm:mb-2">
              48hrs
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-blue-100">
              Average Launch
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-1 sm:mb-2">
              10x
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-blue-100">
              Sales Boost
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-1 sm:mb-2">
              99%
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-blue-100">
              Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
