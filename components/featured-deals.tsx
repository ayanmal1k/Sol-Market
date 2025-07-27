import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Percent } from "lucide-react"
import { getSubscriptionLogo } from "@/utils/subscription-logos"

export default function FeaturedDeals() {
  const deals = [
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
      duration: "1 Month",
      originalPrice: "9.99",
      discountPrice: "6.49",
      discount: "35%",
      category: "Music",
    },
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
  ]

  return (
    <section className="container py-16">
      <div className="mb-12 text-center reveal">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <Percent className="mr-1 h-3 w-3" />
          Hot Deals
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          <Percent className="mr-2 inline-block h-8 w-8 text-primary" />
          Featured Deals
        </h2>
        <p className="text-muted-foreground">Limited time offers with maximum savings</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal, index) => (
          <Link href={`/subscription/${deal.id}`} key={deal.id}>
            <Card className={`card-hover h-full overflow-hidden reveal`} style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={getSubscriptionLogo(deal.provider, deal.name) || "/placeholder.svg"}
                  alt={`${deal.name} deal`}
                  fill
                  className="object-contain p-8"
                />
                <Badge className="absolute left-2 top-2" variant="secondary">{deal.category}</Badge>
                <Badge className="absolute right-2 top-2 bg-green-500">{deal.discount} OFF</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold">{deal.name}</h3>
                  <Badge variant="outline">{deal.duration}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">${deal.discountPrice}</span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">${deal.originalPrice}</span>
                  </div>
                  <Button size="sm" className="gap-1">
                    Get Deal
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
