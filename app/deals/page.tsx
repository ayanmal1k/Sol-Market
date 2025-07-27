import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Percent, Clock } from "lucide-react"
import { getSubscriptionLogo } from "@/utils/subscription-logos"

export default function DealsPage() {
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
      endsIn: "2 days",
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
      endsIn: "3 days",
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
      endsIn: "4 days",
    },
    {
      id: "adobe-creative-cloud",
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      duration: "1 Month",
      originalPrice: "52.99",
      discountPrice: "32.99",
      discount: "38%",
      category: "Productivity",
      endsIn: "7 days",
    },
    {
      id: "disney-plus",
      name: "Disney Plus",
      provider: "Disney",
      duration: "1 Month",
      originalPrice: "7.99",
      discountPrice: "4.99",
      discount: "38%",
      category: "Streaming",
      endsIn: "4 days",
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
      endsIn: "5 days",
    }
  ]

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          <Percent className="mr-3 inline-block h-10 w-10 text-primary" />
          Special Deals & Offers
        </h1>
        <p className="text-muted-foreground">Limited time offers with maximum savings</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {deals.map((deal) => (
          <Link href={`/subscription/${deal.id}`} key={deal.id}>
            <Card className="card-hover overflow-hidden h-full">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={getSubscriptionLogo(deal.provider, deal.name) || "/placeholder.svg"}
                  alt={deal.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute left-2 top-2 bg-red-500 hover:bg-red-600">{deal.discount} OFF</Badge>
                <Badge className="absolute right-2 top-2" variant="secondary">
                  {deal.category}
                </Badge>
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
    </div>
  )
}
