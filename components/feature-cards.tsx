"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Wallet, Sparkles, Flame } from "lucide-react"

export default function FeatureCards() {
  return (
    <section className="container py-16">
      <div className="mb-12 text-center reveal">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <Sparkles className="mr-1 h-3 w-3" />
          Why Choose Us
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight mb-6">Features / Why $SCRIBE?</h2>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Discover why $SCRIBE is the future of subscription payments
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 reveal">
        <FeatureCard
          icon={<Wallet className="h-8 w-8" />}
          title="Wallet-Native Payments"
          features={[
            "Instant checkout via $SCRIBE, SOL, or USDC",
            "No KYC, no central servers-self-custodial model"
          ]}
          gradient="from-blue-500/10 via-transparent to-transparent"
          iconColor="text-blue-500"
        />
        <FeatureCard
          icon={<Sparkles className="h-8 w-8" />}
          title="Real Utility & Meme Culture"
          features={[
            "Pay real subscriptions from day one",
            "Built-in meme branding, gamified airdrops, vibrant community"
          ]}
          gradient="from-purple-500/10 via-transparent to-transparent"
          iconColor="text-purple-500"
        />
        <FeatureCard
          icon={<Flame className="h-8 w-8" />}
          title="Deflationary Buyback System"
          features={[
            "Every payment triggers a portion used to buyback & burn $SCRIBE",
            "Holders benefit as token supply shrinks over time"
          ]}
          gradient="from-red-500/10 via-transparent to-transparent"
          iconColor="text-red-500"
        />
      </div>
    </section>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  features,
  gradient,
  iconColor
}: {
  icon: React.ReactNode
  title: string
  features: string[]
  gradient: string
  iconColor: string
}) {
  return (
    <Card className="relative overflow-hidden border-2 border-primary/20 p-8 h-full transition-colors hover:bg-primary/5">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>
      <div className="relative">
        <div className={`inline-block rounded-full bg-primary/10 p-3 ${iconColor}`}>
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <ul className="mt-4 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="text-muted-foreground">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}