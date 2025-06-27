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
      id: "microsoft-office-365",
      name: "Microsoft Office 365",
      provider: "Microsoft",
      duration: "1 Year",
      originalPrice: "99.99",
      discountPrice: "59.99",
      discount: "40%",
      category: "Productivity",
      endsIn: "5 days",
    },
    {
      id: "amazon-prime",
      name: "Amazon Prime",
      provider: "Amazon",
      duration: "1 Year",
      originalPrice: "139.00",
      discountPrice: "79.99",
      discount: "42%",
      category: "Shopping",
      endsIn: "3 days",
    },
    {
      id: "spotify-premium-annual",
      name: "Spotify Premium Annual",
      provider: "Spotify",
      duration: "1 Year",
      originalPrice: "191.88",
      discountPrice: "99.99",
      discount: "48%",
      category: "Music",
      endsIn: "1 week",
    },
    {
      id: "adobe-creative-cloud",
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      duration: "1 Year",
      originalPrice: "599.88",
      discountPrice: "349.99",
      discount: "42%",
      category: "Design",
      endsIn: "6 days",
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
      endsIn: "3 days",
    },
    {
      id: "express-vpn-premium",
      name: "ExpressVPN Premium",
      provider: "ExpressVPN",
      duration: "15 Months",
      originalPrice: "194.35",
      discountPrice: "99.99",
      discount: "49%",
      category: "VPN",
      endsIn: "2 days",
    },
    {
      id: "nordvpn-premium",
      name: "NordVPN Premium",
      provider: "NordVPN",
      duration: "2 Years",
      originalPrice: "223.83",
      discountPrice: "89.99",
      discount: "60%",
      category: "VPN",
      endsIn: "2 days",
    },
    {
      id: "playstation-plus",
      name: "PlayStation Plus",
      provider: "Sony",
      duration: "1 Year",
      originalPrice: "59.99",
      discountPrice: "39.99",
      discount: "33%",
      category: "Gaming",
      endsIn: "5 days",
    },
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
