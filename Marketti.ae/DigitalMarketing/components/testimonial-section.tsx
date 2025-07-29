"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "They delivered a Webflow page with the perfect layout. Sales tripled that week.",
    name: "Nishant R.",
    title: "SaaS Founder, India",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "We got a Shopify landing page and a follow-up email template. ROI positive in 5 days.",
    name: "Lana B.",
    title: "E-commerce Store Owner, UAE",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "I bought one page template and made my first sale in 48 hours. The conversion rate is incredible compared to my old design.",
    name: "Marcus Chen",
    title: "Digital Product Creator, US",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "The email templates are pure gold. Our open rates went from 12% to 45% and click rates doubled. Best investment we made this year.",
    name: "Sarah Williams",
    title: "Marketing Director, Canada",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "As a freelancer, I needed something that looked professional without the agency cost. Got a Framer template and landed 3 new clients in the first month.",
    name: "Ahmed Hassan",
    title: "Freelance Designer, UAE",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "The WordPress template was so easy to customize. Went from zero to 50 leads per month. The CTA placement and forms work like magic.",
    name: "Priya Sharma",
    title: "Business Coach, India",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "We were spending $8000 on a custom design. Got their template for $99 and it converts better than what the agency proposed. Saved us months of time.",
    name: "David Thompson",
    title: "Startup Founder, US",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "The support team helped me set up the Wix template in under 2 hours. Now I have a landing page that actually converts visitors into customers.",
    name: "Lisa Rodriguez",
    title: "Online Course Creator, Canada",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
];

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 sm:pl-4 basis-full lg:basis-1/1"
              >
                <div className="p-2 sm:p-3">
                  <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 min-h-[280px] sm:min-h-[320px] lg:min-h-[300px] justify-center">
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-lg sm:text-xl lg:text-2xl font-medium italic mb-4 sm:mb-6 lg:mb-8 text-gray-800 leading-relaxed max-w-2xl">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 mt-auto">
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.hint}
                        />
                        <AvatarFallback className="bg-blue-600 text-white font-semibold">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 opacity-80">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-blue-600/20 text-blue-600 hover:bg-blue-600 hover:text-white border-0 -left-4 lg:-left-6 w-10 h-10 sm:w-12 sm:h-12" />
          <CarouselNext className="hidden sm:flex bg-blue-600/20 text-blue-600 hover:bg-blue-600 hover:text-white border-0 -right-4 lg:-right-6 w-10 h-10 sm:w-12 sm:h-12" />
        </Carousel>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
