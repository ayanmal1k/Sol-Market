"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingDown } from "lucide-react"

export default function SubscriptionCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const services = [
    { name: "Netflix Premium", regular: 15.49, discounted: 8.99 },
    { name: "Spotify Premium", regular: 9.99, discounted: 6.49 },
    { name: "Adobe Creative Cloud", regular: 52.99, discounted: 32.99 },
    { name: "Disney Plus", regular: 7.99, discounted: 4.99 },
    { name: "YouTube Premium", regular: 11.99, discounted: 7.99 },
    { name: "Microsoft Office 365", regular: 8.33, discounted: 4.99 },
  ]

  const calculateSavings = () => {
    const selected = services.filter((service) => selectedServices.includes(service.name))
    const regularTotal = selected.reduce((sum, service) => sum + service.regular, 0)
    const discountedTotal = selected.reduce((sum, service) => sum + service.discounted, 0)
    const savings = regularTotal - discountedTotal
    const percentage = regularTotal > 0 ? ((savings / regularTotal) * 100).toFixed(0) : 0

    return { regularTotal, discountedTotal, savings, percentage }
  }

  const { regularTotal, discountedTotal, savings, percentage } = calculateSavings()

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            <Calculator className="mr-2 inline-block h-8 w-8 text-primary" />
            Savings Calculator
          </h2>
          <p className="text-muted-foreground">
            See how much you can save by buying your subscriptions through Solsubscription
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Select Your Subscriptions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedServices.includes(service.name)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => {
                    setSelectedServices((prev) =>
                      prev.includes(service.name)
                        ? prev.filter((name) => name !== service.name)
                        : [...prev, service.name],
                    )
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{service.name}</span>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground line-through">${service.regular}/mo</div>
                      <div className="font-semibold text-primary">${service.discounted}/mo</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Savings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Regular Price:</span>
                  <span className="text-lg line-through">${regularTotal.toFixed(2)}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Solcyclix Price:</span>
                  <span className="text-lg font-semibold text-primary">${discountedTotal.toFixed(2)}/mo</span>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Monthly Savings:</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">${savings.toFixed(2)}</div>
                    {percentage > 0 && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        <TrendingDown className="mr-1 h-3 w-3" />
                        {percentage}% OFF
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {savings > 0 && (
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-center">
                    <div className="text-sm text-green-800 dark:text-green-200 mb-1">Annual Savings</div>
                    <div className="text-2xl font-bold text-green-600">${(savings * 12).toFixed(2)}</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
