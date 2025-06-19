import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Percent } from "lucide-react"

export default function FeaturedDeals() {
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
          <Link href={`/subscription/${deal.id + 10}`} key={deal.id}>
            <Card className={`card-hover h-full overflow-hidden reveal`} style={{ animationDelay: `${index * 150}ms` }}>
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
