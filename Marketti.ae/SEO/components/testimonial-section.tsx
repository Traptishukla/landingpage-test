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
      "Our website was invisible on search engines. After partnering with Marketti’s SEO team, we ranked on the first page within weeks. Leads are now consistent and our online visibility is stronger than ever.",
    name: "Aarav Mehta",
    title: "Owner, Urban Threads Retail",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Marketti helped us streamline our SEO, content, and backlink strategies—all from one place.",
    name: "Riya Malhotra",
    title: "Co-Founder, PixelPop Marketing",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "We were struggling to attract quality candidates online. Marketti’s local SEO and career page optimization brought in relevant applications without paid ads.",
    name: "Nikhil Verma",
    title: "HR Manager, CoreAxis Technologies",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "As a solo consultant, SEO felt overwhelming. Marketti made it simple. My site now ranks for coaching keywords, and I’ve seen a 4x increase in client inquiries—all organic!",
    name: "Sneha Kapoor",
    title: "Freelance Business Coach",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "In the SaaS space, visibility is everything. Marketti’s technical SEO audit and keyword strategy helped us boost signups and reduce bounce rates",
    name: "Tushar Raj",
    title: "Founder, ZentroTech (SaaS Startup)",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Our e-commerce store saw a massive boost in search rankings and conversions after Marketti optimized our product pages and fixed backend SEO issues",
    name: "Neha Shah",
    title: "Finance Lead, StyleFi E-Commerce",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex flex-col items-center text-center p-6">
                    <p className="text-xl md:text-2xl font-medium italic mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.hint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm opacity-80">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black/20 text-white hover:bg-white/30 border-0 -left-4" />
          <CarouselNext className="bg-black/20 text-white hover:bg-white/30 border-0 -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
