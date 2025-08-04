"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"

export default function HomeFAQ() {
  return (
    <section className="container py-16">
      <div className="mb-12 text-center reveal">
        <Badge className="mb-4">
          <HelpCircle className="mr-1 h-3 w-3" />
          FAQ
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Everything you need to know about SOLSUBSCRIBE subscriptions
        </p>
      </div>

      <div className="mx-auto max-w-3xl reveal">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>When does $SCRIBE utility activate?</AccordionTrigger>
            <AccordionContent>Services go live 24 hours after TGE.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do subscriptions work?</AccordionTrigger>
            <AccordionContent>Connect wallet, choose service, send payment receive gift code via email.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I earn discounts?</AccordionTrigger>
            <AccordionContent>Yes - by staking $SCRIBE holders unlock up to 75% off.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is any KYC required?</AccordionTrigger>
            <AccordionContent>No - fully privacy-preserving and self-custodial.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What if I don't have Bitcoin?</AccordionTrigger>
            <AccordionContent>You can pay in SOL, USDC or $SCRIBE - conversion optional and seamless</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}