"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Lightbulb, CreditCard, Zap, Mail, Globe } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="container py-4">
      <Card className="relative overflow-hidden border-2 border-primary/20 p-8">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="relative">
          <div className="mb-8 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Lightbulb className="mr-1 h-3 w-3" />
              About Us
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-6">What Is SolSubscribe?</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              SolSubscribe is the first crypto-native subscription protocol built on Solana.
              We make it possible to use your crypto directly to unlock mainstream services — fast, private, and borderless.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<CreditCard className="h-8 w-8" />}
              title="Popular Services"
              description="Subscribe to Netflix, Spotify, Canva, X Premium"
            />
            <FeatureCard 
              icon={<Globe className="h-8 w-8" />}
              title="No Restrictions"
              description="No bank, no middleman, no borders"
            />
            <FeatureCard 
              icon={<Mail className="h-8 w-8" />}
              title="Instant Access"
              description="Receive instant gift codes or login credentials via email"
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8" />}
              title="Powered by Solana"
              description="Real-time Solana payments and smart routing"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-primary">
              "Built for crypto users. Not credit cards."
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-background/50 p-6 transition-colors hover:bg-primary/5">
      <div className="mb-4 inline-block rounded-full bg-primary/10 p-3 text-primary group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}