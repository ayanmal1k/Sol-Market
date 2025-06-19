import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Percent, Clock } from "lucide-react"

export default function DealsPage() {
  const deals = [
    {
      id: 1,
      name: "YouTube Premium Family",
      provider: "YouTube",
      duration: "6 Months",
      originalPrice: "107.94",
      discountPrice: "49.99",
      discount: "54%",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop",
      category: "Entertainment",
      featured: true,
      endsIn: "2 days",
    },
    {
      id: 2,
      name: "Microsoft Office 365",
      provider: "Microsoft",
      duration: "1 Year",
      originalPrice: "99.99",
      discountPrice: "59.99",
      discount: "40%",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400&h=400&fit=crop",
      category: "Productivity",
      featured: true,
      endsIn: "5 days",
    },
    {
      id: 3,
      name: "Amazon Prime",
      provider: "Amazon",
      duration: "1 Year",
      originalPrice: "139.00",
      discountPrice: "79.99",
      discount: "42%",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=400&fit=crop",
      category: "Shopping",
      featured: true,
      endsIn: "3 days",
    },
    {
      id: 4,
      name: "Spotify Family Plan",
      provider: "Spotify",
      duration: "1 Year",
      originalPrice: "191.88",
      discountPrice: "99.99",
      discount: "48%",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop",
      category: "Music",
      featured: false,
      endsIn: "1 week",
    },
    {
      id: 5,
      name: "Netflix Premium Bundle",
      provider: "Netflix",
      duration: "1 Year",
      originalPrice: "185.88",
      discountPrice: "109.99",
      discount: "41%",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop",
      category: "Streaming",
      featured: false,
      endsIn: "4 days",
    },
    {
      id: 6,
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      duration: "1 Year",
      originalPrice: "599.88",
      discountPrice: "349.99",
      discount: "42%",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
      category: "Design",
      featured: false,
      endsIn: "6 days",
    },
    {
      id: 7,
      name: "Disney+ Annual Plan",
      provider: "Disney",
      duration: "1 Year",
      originalPrice: "95.88",
      discountPrice: "59.99",
      discount: "37%",
      image: "https://images.unsplash.com/photo-1489599735734-79b4169c2a78?w=400&h=400&fit=crop",
      category: "Streaming",
      featured: false,
      endsIn: "3 days",
    },
    {
      id: 8,
      name: "NordVPN Premium",
      provider: "NordVPN",
      duration: "2 Years",
      originalPrice: "223.83",
      discountPrice: "89.99",
      discount: "60%",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
      category: "VPN",
      featured: false,
      endsIn: "2 days",
    },
    {
      id: 9,
      name: "PlayStation Plus",
      provider: "Sony",
      duration: "1 Year",
      originalPrice: "59.99",
      discountPrice: "39.99",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=400&fit=crop",
      category: "Gaming",
      featured: false,
      endsIn: "5 days",
    },
  ]

  const featuredDeals = deals.filter((deal) => deal.featured)
  const allDeals = deals

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          <Percent className="mr-3 inline-block h-10 w-10 text-primary" />
          Special Deals & Offers
        </h1>
        <p className="text-muted-foreground">Limited time offers with maximum savings</p>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Deals</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="ending">Ending Soon</TabsTrigger>
            <TabsTrigger value="new">New Deals</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Featured Deals Section */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Featured Deals</h2>
          <p className="text-muted-foreground">Our best offers with the biggest discounts</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredDeals.map((deal) => (
            <Link href={`/subscription/${deal.id + 100}`} key={deal.id}>
              <Card className="card-hover h-full overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt={`${deal.name} deal`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute left-3 top-3 bg-red-500 hover:bg-red-600">{deal.discount} OFF</Badge>
                  <Badge className="absolute right-3 top-3" variant="secondary">
                    {deal.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{deal.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{deal.duration}</p>

                    <div className="space-y-2">
                      <p className="text-lg text-muted-foreground line-through">${deal.originalPrice}</p>
                      <p className="text-2xl font-bold text-primary">${deal.discountPrice}</p>
                      <p className="text-sm text-muted-foreground">
                        You save $
                        {(Number.parseFloat(deal.originalPrice) - Number.parseFloat(deal.discountPrice)).toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Ends in {deal.endsIn}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full">Get Deal</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* All Deals Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">All Current Deals</h2>
          <p className="text-muted-foreground">Browse all our special offers</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allDeals.map((deal) => (
            <Link href={`/subscription/${deal.id + 100}`} key={`all-${deal.id}`}>
              <Card className="card-hover overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute left-2 top-2 bg-red-500">{deal.discount} OFF</Badge>
                </div>
                <CardContent className="p-4">
                  <div>
                    <h3 className="font-semibold">{deal.name}</h3>
                    <p className="text-sm text-muted-foreground">{deal.duration}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div>
                    <p className="text-xs text-muted-foreground line-through">${deal.originalPrice}</p>
                    <p className="font-semibold">${deal.discountPrice}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Ends in {deal.endsIn}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Deals
          </Button>
        </div>
      </section>
    </div>
  )
}
