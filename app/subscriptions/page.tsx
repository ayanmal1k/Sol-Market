"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Clock } from "lucide-react"
import { getSubscriptionLogo } from "@/utils/subscription-logos"

export default function SubscriptionsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [displayCount, setDisplayCount] = useState(12)

  // Extended subscription list
  const allSubscriptions = [
    {
      id: "netflix-premium",
      name: "Netflix Premium",
      provider: "Netflix",
      duration: "1 Month",
      originalPrice: "15.49",
      discountPrice: "8.99",
      discount: "42%",
      category: "Streaming",
    },
    {
      id: "spotify-premium",
      name: "Spotify Premium",
      provider: "Spotify",
      duration: "3 Months",
      originalPrice: "29.97",
      discountPrice: "18.50",
      discount: "38%",
      category: "Music",
    },
    {
      id: "adobe-creative-cloud",
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      duration: "1 Month",
      originalPrice: "52.99",
      discountPrice: "32.99",
      discount: "38%",
      category: "Design",
    },
    {
      id: "disney-plus",
      name: "Disney Plus",
      provider: "Disney",
      duration: "6 Months",
      originalPrice: "47.94",
      discountPrice: "28.99",
      discount: "40%",
      category: "Streaming",
    },
    {
      id: "youtube-premium",
      name: "YouTube Premium",
      provider: "YouTube",
      duration: "1 Month",
      originalPrice: "11.99",
      discountPrice: "7.99",
      discount: "33%",
      category: "Streaming",
    },
    // {
    //   id: "microsoft-office-365",
    //   name: "Microsoft Office 365",
    //   provider: "Microsoft",
    //   duration: "1 Year",
    //   originalPrice: "99.99",
    //   discountPrice: "59.99",
    //   discount: "40%",
    //   category: "Productivity",
    // },
    // {
    //   id: "amazon-prime",
    //   name: "Amazon Prime",
    //   provider: "Amazon",
    //   duration: "1 Year",
    //   originalPrice: "139.00",
    //   discountPrice: "79.99",
    //   discount: "42%",
    //   category: "Shopping",
    // },
    // {
    //   id: "hbo-max",
    //   name: "HBO Max",
    //   provider: "HBO",
    //   duration: "3 Months",
    //   originalPrice: "44.97",
    //   discountPrice: "29.99",
    //   discount: "33%",
    //   category: "Streaming",
    // },
    {
      id: "canva-pro",
      name: "Canva Pro",
      provider: "Canva",
      duration: "1 Year",
      originalPrice: "119.99",
      discountPrice: "69.99",
      discount: "42%",
      category: "Design",
    }
    // {
    //   id: "apple-music",
    //   name: "Apple Music",
    //   provider: "Apple",
    //   duration: "6 Months",
    //   originalPrice: "59.94",
    //   discountPrice: "39.99",
    //   discount: "33%",
    //   category: "Music",
    // },
    // {
    //   id: "notion-pro",
    //   name: "Notion Pro",
    //   provider: "Notion",
    //   duration: "1 Year",
    //   originalPrice: "96.00",
    //   discountPrice: "59.99",
    //   discount: "38%",
    //   category: "Productivity",
    // },
    // {
    //   id: "figma-professional",
    //   name: "Figma Professional",
    //   provider: "Figma",
    //   duration: "1 Month",
    //   originalPrice: "12.00",
    //   discountPrice: "7.99",
    //   discount: "33%",
    //   category: "Design",
    // },
    // {
    //   id: "paramount-plus",
    //   name: "Paramount Plus",
    //   provider: "Paramount",
    //   duration: "3 Months",
    //   originalPrice: "29.97",
    //   discountPrice: "19.99",
    //   discount: "33%",
    //   category: "Streaming",
    // },
    // {
    //   id: "tidal-hifi",
    //   name: "Tidal HiFi",
    //   provider: "Tidal",
    //   duration: "3 Months",
    //   originalPrice: "59.97",
    //   discountPrice: "39.99",
    //   discount: "33%",
    //   category: "Music",
    // },
    // {
    //   id: "deezer-premium",
    //   name: "Deezer Premium",
    //   provider: "Deezer",
    //   duration: "6 Months",
    //   originalPrice: "59.94",
    //   discountPrice: "39.99",
    //   discount: "33%",
    //   category: "Music",
    // },
    // {
    //   id: "grammarly-premium",
    //   name: "Grammarly Premium",
    //   provider: "Grammarly",
    //   duration: "1 Year",
    //   originalPrice: "144.00",
    //   discountPrice: "89.99",
    //   discount: "38%",
    //   category: "Productivity",
    // },
    // {
    //   id: "evernote-premium",
    //   name: "Evernote Premium",
    //   provider: "Evernote",
    //   duration: "1 Year",
    //   originalPrice: "84.99",
    //   discountPrice: "54.99",
    //   discount: "35%",
    //   category: "Productivity",
    // },
    // {
    //   id: "slack-pro",
    //   name: "Slack Pro",
    //   provider: "Slack",
    //   duration: "1 Month",
    //   originalPrice: "8.75",
    //   discountPrice: "5.99",
    //   discount: "32%",
    //   category: "Productivity",
    // },
    // {
    //   id: "zoom-pro",
    //   name: "Zoom Pro",
    //   provider: "Zoom",
    //   duration: "1 Month",
    //   originalPrice: "14.99",
    //   discountPrice: "9.99",
    //   discount: "33%",
    //   category: "Productivity",
    // },
    // {
    //   id: "dropbox-plus",
    //   name: "Dropbox Plus",
    //   provider: "Dropbox",
    //   duration: "1 Year",
    //   originalPrice: "119.88",
    //   discountPrice: "79.99",
    //   discount: "33%",
    //   category: "Cloud",
    // },
    // {
    //   id: "github-pro",
    //   name: "GitHub Pro",
    //   provider: "GitHub",
    //   duration: "1 Year",
    //   originalPrice: "48.00",
    //   discountPrice: "32.99",
    //   discount: "31%",
    //   category: "Development",
    // },
    // {
    //   id: "trello-premium",
    //   name: "Trello Premium",
    //   provider: "Trello",
    //   duration: "1 Year",
    //   originalPrice: "60.00",
    //   discountPrice: "39.99",
    //   discount: "33%",
    //   category: "Productivity",
    // },
    // {
    //   id: "asana-premium",
    //   name: "Asana Premium",
    //   provider: "Asana",
    //   duration: "1 Year",
    //   originalPrice: "119.88",
    //   discountPrice: "79.99",
    //   discount: "33%",
    //   category: "Productivity",
    // },
    // {
    //   id: "monday-basic",
    //   name: "Monday.com Basic",
    //   provider: "Monday",
    //   duration: "1 Month",
    //   originalPrice: "8.00",
    //   discountPrice: "5.99",
    //   discount: "25%",
    //   category: "Productivity",
    // },
    // {
    //   id: "mailchimp-standard",
    //   name: "Mailchimp Standard",
    //   provider: "Mailchimp",
    //   duration: "1 Month",
    //   originalPrice: "14.99",
    //   discountPrice: "9.99",
    //   discount: "33%",
    //   category: "Marketing",
    // },
    // {
    //   id: "hubspot-starter",
    //   name: "HubSpot Starter",
    //   provider: "HubSpot",
    //   duration: "1 Month",
    //   originalPrice: "45.00",
    //   discountPrice: "29.99",
    //   discount: "33%",
    //   category: "Marketing",
    // },
    // {
    //   id: "shopify-basic",
    //   name: "Shopify Basic",
    //   provider: "Shopify",
    //   duration: "1 Month",
    //   originalPrice: "29.00",
    //   discountPrice: "19.99",
    //   discount: "31%",
    //   category: "E-commerce",
    // },
    // {
    //   id: "squarespace-personal",
    //   name: "Squarespace Personal",
    //   provider: "Squarespace",
    //   duration: "1 Year",
    //   originalPrice: "144.00",
    //   discountPrice: "99.99",
    //   discount: "31%",
    //   category: "Website",
    // },
    // {
    //   id: "wix-combo",
    //   name: "Wix Combo",
    //   provider: "Wix",
    //   duration: "1 Year",
    //   originalPrice: "168.00",
    //   discountPrice: "119.99",
    //   discount: "29%",
    //   category: "Website",
    // },
    // {
    //   id: "webflow-site",
    //   name: "Webflow Site Plan",
    //   provider: "Webflow",
    //   duration: "1 Year",
    //   originalPrice: "192.00",
    //   discountPrice: "129.99",
    //   discount: "32%",
    //   category: "Website",
    // },
    // {
    //   id: "airtable-plus",
    //   name: "Airtable Plus",
    //   provider: "Airtable",
    //   duration: "1 Year",
    //   originalPrice: "240.00",
    //   discountPrice: "159.99",
    //   discount: "33%",
    //   category: "Database",
    // },
    // {
    //   id: "typeform-basic",
    //   name: "Typeform Basic",
    //   provider: "Typeform",
    //   duration: "1 Year",
    //   originalPrice: "300.00",
    //   discountPrice: "199.99",
    //   discount: "33%",
    //   category: "Forms",
    // },
    // {
    //   id: "calendly-standard",
    //   name: "Calendly Standard",
    //   provider: "Calendly",
    //   duration: "1 Year",
    //   originalPrice: "96.00",
    //   discountPrice: "64.99",
    //   discount: "32%",
    //   category: "Scheduling",
    // },
    // {
    //   id: "loom-business",
    //   name: "Loom Business",
    //   provider: "Loom",
    //   duration: "1 Year",
    //   originalPrice: "96.00",
    //   discountPrice: "64.99",
    //   discount: "32%",
    //   category: "Video",
    // },
    // {
    //   id: "miro-team",
    //   name: "Miro Team",
    //   provider: "Miro",
    //   duration: "1 Year",
    //   originalPrice: "96.00",
    //   discountPrice: "64.99",
    //   discount: "32%",
    //   category: "Collaboration",
    // },
    // {
    //   id: "linear-plus",
    //   name: "Linear Plus",
    //   provider: "Linear",
    //   duration: "1 Year",
    //   originalPrice: "96.00",
    //   discountPrice: "64.99",
    //   discount: "32%",
    //   category: "Project Management",
    // },
    // {
    //   id: "clickup-unlimited",
    //   name: "ClickUp Unlimited",
    //   provider: "ClickUp",
    //   duration: "1 Year",
    //   originalPrice: "60.00",
    //   discountPrice: "39.99",
    //   discount: "33%",
    //   category: "Productivity",
    // },
  ]

  // Filter subscriptions based on category and search
  const filteredSubscriptions = allSubscriptions.filter((sub) => {
    const matchesCategory = activeCategory === "all" || sub.category.toLowerCase() === activeCategory.toLowerCase()
    const matchesSearch =
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.provider.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get subscriptions to display (with pagination)
  const subscriptionsToShow = filteredSubscriptions.slice(0, displayCount)
  const hasMore = filteredSubscriptions.length > displayCount

  const categories = [
    { id: "all", name: "All", count: allSubscriptions.length },
    { id: "streaming", name: "Streaming", count: allSubscriptions.filter((s) => s.category === "Streaming").length },
    { id: "music", name: "Music", count: allSubscriptions.filter((s) => s.category === "Music").length },
    {
      id: "productivity",
      name: "Productivity",
      count: allSubscriptions.filter((s) => s.category === "Productivity").length,
    },
    { id: "design", name: "Design", count: allSubscriptions.filter((s) => s.category === "Design").length },
    { id: "shopping", name: "Shopping", count: allSubscriptions.filter((s) => s.category === "Shopping").length },
  ]

  const loadMore = () => {
    setDisplayCount((prev) => prev + 12)
  }

  const getRandomWaitlistCount = () => {
    return Math.floor(Math.random() * (999 - 412 + 1)) + 412
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">All Subscriptions</h1>
        <p className="text-muted-foreground">Browse our collection of premium subscriptions at discounted prices</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full lg:w-auto">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 lg:w-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                {category.name} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

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

      <div className="mb-4 text-sm text-muted-foreground">
        Showing {subscriptionsToShow.length} of {filteredSubscriptions.length} subscriptions
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {subscriptionsToShow.map((sub) => (
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
                  {sub.category}
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
                  <span>{getRandomWaitlistCount()} in waitlist</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {filteredSubscriptions.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No subscriptions found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or category filter</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setActiveCategory("all")
              setDisplayCount(12)
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" onClick={loadMore}>
            Load More ({filteredSubscriptions.length - displayCount} remaining)
          </Button>
        </div>
      )}
    </div>
  )
}
