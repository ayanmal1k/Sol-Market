"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, ArrowLeft } from "lucide-react"
import { getSubscriptionLogo } from "@/utils/subscription-logos"

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const categoryId = params.id

  // Define all subscriptions with their categories
  const allSubscriptions = [
    // Streaming (3)
    {
      id: "netflix-premium",
      name: "Netflix Premium",
      provider: "Netflix",
      duration: "1 Month",
      originalPrice: "15.49",
      discountPrice: "8.99",
      discount: "42%",
      category: "streaming",
    },
    {
      id: "disney-plus",
      name: "Disney Plus",
      provider: "Disney",
      duration: "1 Month",
      originalPrice: "7.99",
      discountPrice: "4.99",
      discount: "38%",
      category: "streaming",
    },
    {
      id: "youtube-premium",
      name: "YouTube Premium",
      provider: "YouTube",
      duration: "1 Month",
      originalPrice: "11.99",
      discountPrice: "7.99",
      discount: "33%",
      category: "streaming",
    },
    // Music (1)
    {
      id: "spotify-premium",
      name: "Spotify Premium",
      provider: "Spotify",
      duration: "1 Month",
      originalPrice: "9.99",
      discountPrice: "6.49",
      discount: "35%",
      category: "music",
    },
    // Productivity (1)
    {
      id: "adobe-creative-cloud",
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      duration: "1 Month",
      originalPrice: "52.99",
      discountPrice: "32.99",
      discount: "38%",
      category: "productivity",
    },
    /* More services to be added in future updates:
    {
      id: "hbo-max",
      name: "HBO Max",
      provider: "HBO",
      duration: "1 Month",
      originalPrice: "15.99",
      discountPrice: "9.99",
      discount: "38%",
      category: "streaming",
    },
    {
      id: "amazon-prime",
      name: "Amazon Prime",
      provider: "Amazon",
      duration: "1 Month",
      originalPrice: "14.99",
      discountPrice: "8.99",
      discount: "40%",
      category: "shopping",
    },
    etc...
    */
  ]

  // Filter subscriptions by category
  const filteredSubscriptions = allSubscriptions.filter(
    (sub) =>
      sub.category === categoryId &&
      (searchQuery === "" ||
        sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.provider.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Get category info
  const categoryInfo = {
    streaming: { name: "Streaming Services", description: "Premium streaming platforms" },
    music: { name: "Music Services", description: "Music streaming platforms" },
    productivity: { name: "Productivity Tools", description: "Work and productivity applications" },
    /* More categories to be added in future updates:
    design: { name: "Design & Creative", description: "Design and creative tools" },
    shopping: { name: "Shopping Services", description: "Shopping and e-commerce platforms" },
    */
  }

  const currentCategory = categoryInfo[categoryId as keyof typeof categoryInfo] || {
    name: "Category",
    description: "Subscription services",
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Categories
        </Link>
        <h1 className="text-4xl font-bold tracking-tight">{currentCategory.name}</h1>
        <p className="text-muted-foreground">{currentCategory.description}</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {filteredSubscriptions.length} of {filteredSubscriptions.length} subscriptions
        </div>

        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search subscriptions..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredSubscriptions.map((sub) => (
          <Link href={`/subscription/${sub.id}`} key={sub.id}>
            <Card className="card-hover overflow-hidden h-full">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={getSubscriptionLogo(sub.provider, sub.name) || "/placeholder.svg"}
                  alt={sub.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute left-2 top-2 bg-accent">{sub.discount} OFF</Badge>
                <Badge className="absolute right-2 top-2" variant="secondary">
                  {currentCategory.name}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div>
                  <h3 className="font-semibold">{sub.name}</h3>
                  <p className="text-sm text-muted-foreground">{sub.duration}</p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div>
                  <p className="text-xs text-muted-foreground line-through">${sub.originalPrice}</p>
                  <p className="font-semibold">${sub.discountPrice}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Limited offer</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {filteredSubscriptions.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No subscriptions found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search query</p>
          <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
        </div>
      )}
    </div>
  )
}
