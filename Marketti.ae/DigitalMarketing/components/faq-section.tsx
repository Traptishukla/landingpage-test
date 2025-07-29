import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I edit the template later?",
    answer:
      "Yes — fully editable in your platform's native editor. Whether it's WordPress, Shopify, Webflow, Framer, or Wix, you can customize colors, text, images, and layout to match your brand perfectly.",
  },
  {
    question: "Can I get it installed on my site?",
    answer:
      "Absolutely — we offer free setup assistance. Our team will help you install and configure your template so it's ready to start converting visitors into customers.",
  },
  {
    question: "Will the emails work with my CRM?",
    answer:
      "Yes — works with most tools like Mailchimp, Klaviyo, ConvertKit, ActiveCampaign, and more. Our email templates are designed to integrate seamlessly with popular email marketing platforms.",
  },
  {
    question: "Can I get a bundle or multiple templates?",
    answer:
      "Yes — message us for custom packs or bundles. We offer discounts for multiple templates, industry-specific packages, and enterprise solutions for agencies.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "We create templates for WordPress, Shopify, Webflow, Framer, Wix, and custom email sequences. Choose your platform during checkout and we'll deliver the perfect template for your needs.",
  },
  {
    question: "How quickly will I receive my template?",
    answer:
      "Most templates are delivered instantly to within 48 hours. Custom templates may take 2-5 business days depending on complexity. You'll get everything needed to launch immediately.",
  },
  {
    question: "Is the 299 DHM / $99 really one-time?",
    answer:
      "Yes! Unlike agency contracts, this is a one-time payment. You own the template forever with no recurring fees, hidden costs, or ongoing dependencies.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We stand behind our templates with a satisfaction guarantee. If you're not happy with your template within 7 days, we'll work with you to make it right or provide a full refund.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10 lg:mb-12 animate-fade-in leading-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 sm:p-4 lg:p-6 text-left bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 group border border-gray-100 hover:border-blue-200 hover:shadow-md">
                <span className="font-medium sm:font-semibold text-gray-900 text-sm sm:text-base lg:text-lg pr-3 sm:pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-500 group-hover:text-blue-600 transition-colors flex-shrink-0 group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-3 sm:p-4 lg:p-6 pt-0 sm:pt-0 lg:pt-0">
                <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed bg-blue-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5">
                  {faq.answer}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
