import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Sparkles } from "lucide-react"
import { getSubscriptionLogo } from "@/utils/subscription-logos"

export default function ComingSoonDeals() {
  const upcomingServices = [
    {
      name: "HBO Max",
      provider: "HBO",
      category: "Streaming",
      description: "Premium streaming service with HBO originals, movies, and TV shows",
    },
    {
      name: "Microsoft 365",
      provider: "Microsoft",
      category: "Productivity",
      description: "Complete suite of productivity tools including Word, Excel, and PowerPoint",
    },
    {
      name: "Amazon Prime",
      provider: "Amazon",
      category: "Shopping",
      description: "All-in-one subscription with fast shipping, video streaming, and more",
    },
    {
      name: "Notion Pro",
      provider: "Notion",
      category: "Productivity",
      description: "All-in-one workspace for notes, docs, projects, and team collaboration",
    },
    {
      name: "Figma Professional",
      provider: "Figma",
      category: "Design",
      description: "Professional design and prototyping platform for teams and individuals",
    }
  ]

  return (
    <section className="container py-16">
      <div className="mb-12 text-center reveal">
        <Badge className="mb-4 animate-pulse bg-primary/10 text-primary hover:bg-primary/20">
          <Sparkles className="mr-1 h-3 w-3" />
          Coming Soon
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          <Clock className="mr-2 inline-block h-8 w-8 text-primary" />
          Premium Services Coming Soon
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Get ready for these exciting premium services that will be available in future updates
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {upcomingServices.map((service, index) => (
          <Card key={service.name} className={`card-hover overflow-hidden reveal`} style={{ animationDelay: `${index * 150}ms` }}>
            <div className="relative aspect-square overflow-hidden bg-primary/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-32 w-32">
                  <Image
                    src={getSubscriptionLogo(service.provider, service.name)}
                    alt={service.name}
                    fill
                    className="object-contain transition-opacity hover:opacity-75"
                  />
                </div>
              </div>
              <Badge className="absolute right-2 top-2" variant="secondary">
                {service.category}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{service.name}</h3>
                  <Badge variant="outline" className="animate-pulse">
                    <Clock className="mr-1 h-3 w-3" /> Coming Soon
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}