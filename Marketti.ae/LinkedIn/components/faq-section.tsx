import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What's included in the 1499 DHM/month plan?",
    answer:
      "Everything you need for LinkedIn dominance: complete profile optimization, AI-powered content creation (15+ posts/month), CXO outreach campaigns (50+ connections), weekly growth reports, comment & DM management, and strategic networking guidance.",
  },
  {
    question: "How quickly can you start working on my LinkedIn?",
    answer:
      "Within 24 hours of onboarding. We'll immediately begin optimizing your profile and can start content creation and outreach campaigns by day 2.",
  },
  {
    question: "Is this only for UAE executives?",
    answer:
      "Yes, we exclusively serve C-level executives (CEOs, CTOs, COOs, etc.) based in the UAE. This focus allows us to provide specialized networking and content strategies tailored to the regional business landscape.",
  },
  {
    question: "Will you actually manage my LinkedIn account?",
    answer:
      "We handle everything behind the scenes while maintaining your authentic voice. You stay in control - we never post without your approval, and you can review all content and connections before they go live.",
  },
  {
    question: "How do you ensure quality connections?",
    answer:
      "We use advanced targeting to identify C-level executives, investors, and industry leaders in your sector. Every connection request is personalized and strategic, with a 35% average response rate.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "No long-term contracts - cancel anytime. However, 90% of our clients see measurable results within 30 days, including increased profile views, quality connections, and engagement growth.",
  },
  {
    question: "Is my data and LinkedIn account secure?",
    answer:
      "Absolutely. We're LinkedIn API compliant, follow strict confidentiality protocols, provide NDA protection, and use enterprise-grade security measures. Your executive privacy is our top priority.",
  },
  {
    question: "Can I add custom software development to my plan?",
    answer:
      "Yes! We offer optional add-ons including custom CRM development, mobile MVP prototyping, and AI automation tools. Perfect for executives who want to scale their business operations alongside their LinkedIn presence.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16 animate-fade-in leading-tight">
          Executive LinkedIn Growth Questions
        </h2>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 sm:p-5 lg:p-6 text-left bg-gray-50 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all duration-300 group border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md">
                <span className="font-medium sm:font-semibold text-sm sm:text-base lg:text-lg text-gray-900 pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-500 group-hover:text-blue-600 flex-shrink-0 group-data-[state=open]:rotate-180 transition-all duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 sm:p-5 lg:p-6 pt-0 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                {faq.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
