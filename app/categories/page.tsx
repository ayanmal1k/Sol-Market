import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Layers } from "lucide-react"

export default function CategoriesPage() {
  const categories = [
    {
      id: "streaming",
      name: "Streaming Services",
      description: "Netflix, Disney+, YouTube Premium, HBO Max, and Paramount Plus at discounted prices.",
      count: 5,
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop",
      popular: ["Netflix Premium", "Disney Plus", "YouTube Premium", "HBO Max"],
    },
    {
      id: "music",
      name: "Music Services",
      description: "Spotify, Apple Music, Tidal, and Deezer music streaming services.",
      count: 4,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
      popular: ["Spotify Premium", "Apple Music", "Tidal HiFi", "Deezer Premium"],
    },
    {
      id: "productivity",
      name: "Productivity Tools",
      description: "Microsoft Office, Notion, Grammarly, Slack, Zoom, and other productivity applications.",
      count: 10,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      popular: ["Microsoft Office 365", "Notion Pro", "Grammarly Premium", "Slack Pro"],
    },
    {
      id: "design",
      name: "Design & Creative",
      description: "Adobe Creative Cloud, Canva Pro, Figma, and other design tools for creators.",
      count: 3,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      popular: ["Adobe Creative Cloud", "Canva Pro", "Figma Professional"],
    },
    {
      id: "shopping",
      name: "Shopping Services",
      description: "Amazon Prime with free shipping, Prime Video, and exclusive deals.",
      count: 1,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      popular: ["Amazon Prime"],
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          <Layers className="mr-3 inline-block h-10 w-10 text-primary" />
          Browse Categories
        </h1>
        <p className="text-muted-foreground">Explore our wide range of subscription categories</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <Card className="card-hover h-full overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute right-3 top-3">{category.count} items</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>

                <div className="mt-4">
                  <h4 className="text-sm font-medium">Popular services:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {category.popular.map((service) => (
                      <Badge key={service} variant="outline">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t p-6">
                <Button className="w-full" variant="outline">
                  View All {category.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
