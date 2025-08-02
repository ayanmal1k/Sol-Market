"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChartLine, Flame, Wallet, BarChart } from "lucide-react"

// Utility activation check - 24 hours after TGE (Aug 12, 2025)
const isUtilityActive = () => {
  const activationDate = new Date('2025-08-13T00:00:00') // 24h after TGE
  return new Date() >= activationDate
}

export default function LiveMetrics() {
  return (
    <section className="container py-16">
      <div className="mb-12 text-center reveal">
        <Badge className="mb-4">
          <ChartLine className="mr-1 h-3 w-3" />
          Live Metrics
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight mb-6">Platform Statistics</h2>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          {isUtilityActive() 
            ? "Real-time metrics from the SolScribe ecosystem"
            : "Metrics will be available 24 hours after token launch"}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 reveal">
        <MetricCard
          icon={<Wallet className="h-5 w-5" />}
          label="Wallets Holding"
          value={isUtilityActive() ? "0" : "- - -"}
          textColor="text-primary"
        />
        <MetricCard
          icon={<Flame className="h-5 w-5" />}
          label="Tokens Burned"
          value={isUtilityActive() ? "0" : "- - -"}
          textColor="text-red-500"
        />
        <MetricCard
          icon={<BarChart className="h-5 w-5" />}
          label="Subscriptions Processed"
          value={isUtilityActive() ? "0" : "- - -"}
          textColor="text-green-500"
        />
        <MetricCard
          icon={<ChartLine className="h-5 w-5" />}
          label="Buybacks Executed"
          value={isUtilityActive() ? "0" : "- - -"}
          textColor="text-blue-500"
        />
      </div>
    </section>
  )
}

function MetricCard({ icon, label, value, textColor }: {
  icon: React.ReactNode
  label: string
  value: string
  textColor: string
}) {
  return (
    <Card className="p-6 flex flex-col items-center text-center gap-4 relative overflow-hidden border-2 border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="relative">
        <div className="p-3 bg-primary/10 rounded-full">
          {icon}
        </div>
        <h3 className="mt-4 text-sm font-medium text-muted-foreground">{label}</h3>
        <p className={`text-3xl font-bold mt-2 ${textColor}`}>{value}</p>
      </div>
    </Card>
  )
}