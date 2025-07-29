"use client";

import { Card, CardContent } from "@/components/ui/card";
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
      "Before Marketti, juggling leads and inventory was chaotic. Now everything is automated—from follow-ups to invoicing. It’s like having a virtual assistant who never sleeps.",
    name: "Aarav Mehta",
    title: "Owner, Urban Threads Retail",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "We replaced three different tools with Marketti. From client follow-ups to team task management and Zoom integration—it’s all in one dashboard. Huge boost to our productivity!",
    name: "Riya Malhotra",
    title: "Co-Founder, PixelPop Marketing",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "Managing leaves, attendance, and holidays used to be a weekly headache. Marketti’s HR module made it completely hands-free. Employees love the ease too.",
    name: "Nikhil Verma",
    title: "HR Manager, CoreAxis Technologies",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "As a solo consultant, I used to miss follow-ups and lose clients. With Marketti, I stay on track effortlessly. It keeps my deals organized and my reputation sharp.",
    name: "Sneha Kapoor",
    title: "Freelance Business Coach",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "Marketti helped us scale fast. From onboarding to support tickets, everything runs smoothly. The AI-generated reports gave us the clarity we needed to impress investors.",
    name: "Tushar Raj",
    title: "Founder, ZentroTech (SaaS Startup)",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "Our invoicing delays were hurting cash flow. Since moving to Marketti, everything is automated—estimates, payments, e-invoices. No errors, no delays. Total relief.",
    name: "Neha Shah",
    title: "Finance Lead, StyleFi E-Commerce",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
];



const TestimonialSlider = () => {
  return (
    <section
      id="testimonials"
      className="bg-primary text-primary-foreground py-16 sm:py-24"
    >
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
          <CarouselPrevious className="text-primary-foreground bg-white/20 hover:bg-white/30 border-0 -left-4" />
          <CarouselNext className="text-primary-foreground bg-white/20 hover:bg-white/30 border-0 -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSlider;
