import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "How does SOLSUBSCRIBE work?",
      answer:
        "SOLSUBSCRIBE allows you to purchase premium subscriptions at discounted prices using Solana cryptocurrency. We buy subscriptions in bulk and pass the savings to you. After payment, you'll receive login credentials via email within 5 minutes.",
    },
    {
      question: "Are these subscriptions legitimate?",
      answer:
        "Yes, all subscriptions are 100% legitimate. We partner with authorized resellers and use bulk purchasing to secure discounted rates. You'll receive official access to the services with full functionality.",
    },
    {
      question: "How do I pay with Solana (SOL)?",
      answer:
        "When you purchase a subscription, you'll be provided with a wallet address. Send the exact SOL amount from your wallet to this address. After payment, email us a screenshot of the transaction for verification.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery is typically within 5 minutes after payment confirmation. You'll receive an email with your login credentials and instructions on how to access your subscription.",
    },
    {
      question: "What if I don't receive my subscription?",
      answer:
        "If you don't receive your subscription within 30 minutes after payment, please contact our support team at support@solsubscription.com with your transaction details and we'll resolve the issue promptly.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We maintain a strict no-refund policy on all purchases. Once payment has been made, we are unable to provide refunds except in very specific circumstances where there was an error on our part. Please see our detailed refund policy for more information.",
    },
    {
      question: "Can I renew my subscription?",
      answer:
        "Yes, you can renew your subscription before it expires. We'll send you a reminder email 7 days before expiration with renewal instructions.",
    },
    {
      question: "Are there any region restrictions?",
      answer:
        "Some subscriptions may have region restrictions. Check the product description for details. We offer global subscriptions whenever possible, and provide instructions for using VPNs when necessary.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, all payments are processed directly on the Solana blockchain, which is secure and transparent. We never store your payment information or wallet private keys.",
    },
    {
      question: "Can I share my subscription with others?",
      answer:
        "This depends on the specific subscription. Family plans can be shared according to the service's terms. Individual accounts should not be shared to avoid account termination.",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <HelpCircle className="mr-1 h-3 w-3" />
          Help Center
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Find answers to common questions about Solcyclix, our subscriptions, payment process, and more.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Button asChild className="w-full">
                <Link href="mailto:support@solsubscription.com">Contact Support</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Get instant help from our support team through live chat. Available 24/7.
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
