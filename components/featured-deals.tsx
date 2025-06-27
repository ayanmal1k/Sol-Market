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
      id: "microsoft-office-365",
      name: "Microsoft Office 365",
      provider: "Microsoft",
      duration: "1 Year",
      originalPrice: "99.99",
      discountPrice: "59.99",
      discount: "40%",
      category: "Productivity",
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
    },
  ]

  return (
    <section className="container">
      <div className="mb-8 reveal">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <Percent className="mr-1 h-3 w-3" />
          Limited Time
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
                  className="object-contain p-4 transition-transform duration-300 hover:scale-110"
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

                  <Button className="mt-4 w-full" variant="outline">
                    Get Deal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center reveal">
        <Button variant="outline" size="lg" asChild>
          <Link href="/deals">
            View all deals
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
