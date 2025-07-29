import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is this really all-inclusive?",
    answer: "Yes! You get blogs, backlinks, reporting, and on-page SEO — all in one plan.",
  },
  {
    question: "When does it start?",
    answer: "Within 24 hours of onboarding.",
  },
  {
    question: "Is it AI generated?",
    answer: "Content is enhanced by AI but reviewed by SEO experts to ensure quality.",
  },
  {
    question: "Can I cancel?",
    answer: "Anytime. You're not locked into long-term contracts.",
  },
  {
    question: "Which countries do you target?",
    answer: "We specialize in UAE, India, US & Canada markets with localized SEO strategies.",
  },
  {
    question: "How do you measure success?",
    answer: "We track rankings, organic traffic, leads generated, and ROI in clear monthly reports.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group">
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 text-gray-600">{faq.answer}</CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )
}
