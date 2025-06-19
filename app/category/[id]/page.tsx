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
    // Streaming (5)
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
      duration: "6 Months",
      originalPrice: "47.94",
      discountPrice: "28.99",
      discount: "40%",
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
    {
      id: "hbo-max",
      name: "HBO Max",
      provider: "HBO",
      duration: "3 Months",
      originalPrice: "44.97",
      discountPrice: "29.99",
      discount: "33%",
      category: "streaming",
    },
    {
      id: "paramount-plus",
      name: "Paramount Plus",
      provider: "Paramount",
      duration: "3 Months",
      originalPrice: "29.97",
      discountPrice: "19.99",
      discount: "33%",
      category: "streaming",
    },
    // Music (4)
    {
      id: "spotify-premium",
      name: "Spotify Premium",
      provider: "Spotify",
      duration: "3 Months",
      originalPrice: "29.97",
      discountPrice: "18.50",
      discount: "38%",
      category: "music",
    },
    {
      id: "apple-music",
      name: "Apple Music",
      provider: "Apple",
      duration: "6 Months",
      originalPrice: "59.94",
      discountPrice: "39.99",
      discount: "33%",
      category: "music",
    },
    {
      id: "tidal-hifi",
      name: "Tidal HiFi",
      provider: "Tidal",
      duration: "3 Months",
      originalPrice: "59.97",
      discountPrice: "39.99",
      discount: "33%",
      category: "music",
    },
    {
      id: "deezer-premium",
      name: "Deezer Premium",
      provider: "Deezer",
      duration: "6 Months",
      originalPrice: "59.94",
      discountPrice: "39.99",
      discount: "33%",
      category: "music",
    },
    // Productivity (10)
    {
      id: "microsoft-office-365",
      name: "Microsoft Office 365",
      provider: "Microsoft",
      duration: "1 Year",
      originalPrice: "99.99",
      discountPrice: "59.99",
      discount: "40%",
      category: "productivity",
    },
    {
      id: "notion-pro",
      name: "Notion Pro",
      provider: "Notion",
      duration: "1 Year",
      originalPrice: "96.00",
      discountPrice: "59.99",
      discount: "38%",
      category: "productivity",
    },
    {
      id: "grammarly-premium",
      name: "Grammarly Premium",
      provider: "Grammarly",
      duration: "1 Year",
      originalPrice: "144.00",
      discountPrice: "89.99",
      discount: "38%",
      category: "productivity",
    },
    {
      id: "slack-pro",
      name: "Slack Pro",
      provider: "Slack",
      duration: "1 Month",
      originalPrice: "8.75",
      discountPrice: "5.99",
      discount: "32%",
      category: "productivity",
    },
    {
      id: "zoom-pro",
      name: "Zoom Pro",
      provider: "Zoom",
      duration: "1 Month",
      originalPrice: "14.99",
      discountPrice: "9.99",
      discount: "33%",
      category: "productivity",
    },
    {
      id: "evernote-premium",
      name: "Evernote Premium",
      provider: "Evernote",
      duration: "1 Year",
      originalPrice: "84.99",
      discountPrice: "54.99",
      discount: "35%",
      category: "productivity",
    },
    {
      id: "trello-premium",
      name: "Trello Premium",
      provider: "Trello",
      duration: "1 Year",
      originalPrice: "60.00",
      discountPrice: "39.99",
      discount: "33%",
      category: "productivity",
    },
    {
      id: "asana-premium",
      name: "Asana Premium",
      provider: "Asana",
      duration: "1 Year",
      originalPrice: "119.88",
      discountPrice: "79.99",
      discount: "33%",
      category: "productivity",
    },
    {
      id: "monday-basic",
      name: "Monday.com Basic",
      provider: "Monday",
      duration: "1 Month",
      originalPrice: "8.00",
      discountPrice: "5.99",
      discount: "25%",
      category: "productivity",
    },
    {
      id: "clickup-unlimited",
      name: "ClickUp Unlimited",
      provider: "ClickUp",
      duration: "1 Year",
      originalPrice: "60.00",
      discountPrice: "39.99",
      discount: "33%",
      category: "productivity",
    },
    // Design (3)
    {
      id: "adobe-creative-cloud",
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      duration: "1 Month",
      originalPrice: "52.99",
      discountPrice: "32.99",
      discount: "38%",
      category: "design",
    },
    {
      id: "canva-pro",
      name: "Canva Pro",
      provider: "Canva",
      duration: "1 Year",
      originalPrice: "119.99",
      discountPrice: "69.99",
      discount: "42%",
      category: "design",
    },
    {
      id: "figma-professional",
      name: "Figma Professional",
      provider: "Figma",
      duration: "1 Month",
      originalPrice: "12.00",
      discountPrice: "7.99",
      discount: "33%",
      category: "design",
    },
    // Shopping (1)
    {
      id: "amazon-prime",
      name: "Amazon Prime",
      provider: "Amazon",
      duration: "1 Year",
      originalPrice: "139.00",
      discountPrice: "79.99",
      discount: "42%",
      category: "shopping",
    },
  ]

  // Filter subscriptions by category
  const categorySubscriptions = allSubscriptions.filter((sub) => sub.category === categoryId)

  // Filter by search query
  const filteredSubscriptions = categorySubscriptions.filter(
    (sub) =>
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.provider.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Get category info
  const categoryInfo = {
    streaming: { name: "Streaming Services", description: "Premium streaming platforms" },
    music: { name: "Music Services", description: "Music streaming platforms" },
    productivity: { name: "Productivity Tools", description: "Work and productivity applications" },
    design: { name: "Design & Creative", description: "Design and creative tools" },
    shopping: { name: "Shopping Services", description: "Shopping and e-commerce platforms" },
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
          Showing {filteredSubscriptions.length} of {categorySubscriptions.length} subscriptions
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
