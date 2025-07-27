"use client"

import { Card, CardContent } from "./ui/card"
import { LockKeyhole, Users, GraduationCap, Coins } from "lucide-react"
import { Badge } from "./ui/badge"

export default function TokenomicsTransparency() {
  const features = [
    {
      icon: <LockKeyhole className="h-8 w-8 text-primary" />,
      title: "No Team Tokens",
      description: "Zero tokens are held by the team, ensuring complete decentralization and fair distribution"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Driven",
      description: "100% of tokens are distributed to the community and liquidity pools"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Long-term Vision",
      description: "Team is committed to sustainable ecosystem development and growth"
    },
    {
      icon: <Coins className="h-8 w-8 text-primary" />,
      title: "Fair Launch",
      description: "Equal opportunity for all participants with transparent token distribution"
    }
  ]

  return (
    <section className="container py-16 overflow-hidden">
      <div className="text-center mb-12 reveal">
        <Badge className="mb-4 animate-pulse bg-primary/10 text-primary hover:bg-primary/20">
          Tokenomics
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Transparent & Fair Token Economics
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Built on the principles of fairness and sustainability, our token distribution ensures long-term value for all stakeholders
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card 
            key={feature.title}
            className="relative overflow-hidden reveal card-hover"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardContent className="p-6">
              <div className="mb-4 animate-float-slow" style={{ animationDelay: `${index * 200}ms` }}>
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}