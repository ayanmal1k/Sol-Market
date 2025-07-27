"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, Clock } from "lucide-react"

export default function HomeFAQ() {
  const faqs = [
    {
      question: "When will the service be fully activated?",
      answer: "Our platform will be fully activated 24 hours after the token launch. This ensures a smooth transition and allows us to properly set up all subscription services for our token holders."
    },
    {
      question: "What is Solscription?",
      answer: "Solscription is a revolutionary marketplace that allows you to purchase premium subscriptions using cryptocurrency. We leverage blockchain technology and bulk purchasing power to offer significant discounts on popular services like Netflix, Spotify, Adobe, and more. Our platform makes it easy to access premium digital services while saving money through crypto payments."
    },
    {
      question: "How does Solscription work?",
      answer: "Our process is simple and efficient:\n\n1. User Pays: Make your purchase using SOL or SOLSCRIBE tokens\n\n2. Internal Fulfillment: Our automated system processes your order and prepares your subscription credentials\n\n3. Subscription Delivery: Within minutes, you'll receive your subscription details via your choice of Email or Telegram\n\nThe entire process is automated and secure, ensuring you get instant access to your subscriptions after payment confirmation."
    },
    {
      question: "How do I prepare for the launch?",
      answer: "1. Set up your Solana wallet\n2. Join our community channels\n3. Get ready to participate in the token launch\n4. After purchase, your subscriptions will activate automatically within 24 hours of launch"
    }
  ]

  return (
    <section className="container py-16">
      <div className="text-center mb-12 reveal">
        <Badge className="mb-4 animate-pulse bg-primary/10 text-primary hover:bg-primary/20">
          <Clock className="mr-1 h-3 w-3" />
          Launch Timeline
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get answers about our launch timeline and service activation process
        </p>
      </div>

      <div className="mx-auto max-w-3xl reveal">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}