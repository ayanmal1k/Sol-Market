"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, DollarSign, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getSubscriptionLogo } from "@/utils/subscription-logos"

interface Subscription {
  id: string
  name: string
  provider: string
  price: string
  originalPrice: string
  duration: string
  features: string[]
  category: string
  discount: string
}

export default function SubscriptionComparison() {
  const [selectedSubs, setSelectedSubs] = useState<string[]>([])

  const subscriptions: Subscription[] = [
    {
      id: "netflix-premium",
      name: "Netflix Premium",
      provider: "Netflix",
      price: "8.99",
      originalPrice: "15.49",
      duration: "1 Month",
      features: ["Ultra HD (4K)", "4 Screens", "Download", "No Ads", "All Content"],
      category: "Streaming",
      discount: "42%",
    },
    {
      id: "spotify-premium",
      name: "Spotify Premium",
      provider: "Spotify",
      price: "6.49",
      originalPrice: "9.99",
      duration: "1 Month",
      features: ["Ad-Free", "Offline Download", "High Quality", "Unlimited Skips", "Podcasts"],
      category: "Music",
      discount: "35%",
    },
    {
      id: "adobe-creative-cloud",
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      price: "32.99",
      originalPrice: "52.99",
      duration: "1 Month",
      features: ["All Apps", "Cloud Storage", "Fonts", "Stock Images", "Tutorials"],
      category: "Design",
      discount: "38%",
    },
    {
      id: "disney-plus",
      name: "Disney Plus",
      provider: "Disney",
      price: "4.99",
      originalPrice: "7.99",
      duration: "1 Month",
      features: ["4K Content", "Multiple Profiles", "Download", "Marvel & Star Wars", "Family Safe"],
      category: "Streaming",
      discount: "38%",
    },
  ]

  const handleSelectSubscription = (subId: string) => {
    if (selectedSubs.includes(subId)) {
      setSelectedSubs(selectedSubs.filter((id) => id !== subId))
    } else if (selectedSubs.length < 3) {
      setSelectedSubs([...selectedSubs, subId])
    }
  }

  const selectedSubscriptions = subscriptions.filter((sub) => selectedSubs.includes(sub.id))

  return (
    <section className="container py-16">
      <div className="mb-12 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <BarChart3 className="mr-1 h-3 w-3" />
          Compare & Choose
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          <BarChart3 className="mr-2 inline-block h-8 w-8 text-primary" />
          Subscription Comparison
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Compare up to 3 subscriptions side by side to find the perfect match for your needs
        </p>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold">Select subscriptions to compare (max 3):</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subscriptions.map((sub) => (
            <Card
              key={sub.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedSubs.includes(sub.id) ? "ring-2 ring-primary bg-primary/5" : ""
              }`}
              onClick={() => handleSelectSubscription(sub.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                    <Image
                      src={getSubscriptionLogo(sub.provider, sub.name) || "/placeholder.svg"}
                      alt={sub.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{sub.name}</h4>
                    <p className="text-sm text-muted-foreground">${sub.price}/mo</p>
                  </div>
                  {selectedSubs.includes(sub.id) && <CheckCircle className="h-5 w-5 text-primary" />}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedSubscriptions.length > 0 && (
        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {selectedSubscriptions.map((sub) => (
              <Card key={sub.id} className="overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image
                    src={getSubscriptionLogo(sub.provider, sub.name) || "/placeholder.svg"}
                    alt={sub.name}
                    fill
                    className="object-contain p-4"
                  />
                  <Badge className="absolute right-2 top-2 bg-green-500">{sub.discount} OFF</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{sub.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">${sub.price}</span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">${sub.originalPrice}</span>
                    </div>
                    <Badge variant="outline">{sub.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-medium">Features:</h4>
                    <ul className="space-y-1">
                      {sub.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/subscription/${sub.id}`}>
                      Buy Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedSubscriptions.length > 1 && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Total Savings Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Original Total</p>
                    <p className="text-2xl font-bold line-through">
                      $
                      {selectedSubscriptions
                        .reduce((sum, sub) => sum + Number.parseFloat(sub.originalPrice), 0)
                        .toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Solcyclix Total</p>
                    <p className="text-2xl font-bold text-primary">
                      ${selectedSubscriptions.reduce((sum, sub) => sum + Number.parseFloat(sub.price), 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">You Save</p>
                    <p className="text-2xl font-bold text-green-500">
                      $
                      {(
                        selectedSubscriptions.reduce((sum, sub) => sum + Number.parseFloat(sub.originalPrice), 0) -
                        selectedSubscriptions.reduce((sum, sub) => sum + Number.parseFloat(sub.price), 0)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </section>
  )
}
