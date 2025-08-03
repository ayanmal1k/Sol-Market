import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Shield, Zap, Users, Globe, Heart, Target, DollarSign, TrendingDown, TrendingUp } from "lucide-react" 

export default function AboutPage() {
  const stats = [
    { label: "Monthly Growth", value: "250%", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Subscriptions Available", value: "40+", icon: <DollarSign className="h-6 w-6" /> },
    { label: "Active Users", value: "3000+", icon: <Users className="h-6 w-6" /> },
  ]

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Payments",
      description: "All transactions are secured by Solana blockchain technology with instant confirmations.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Instant Delivery",
      description: "Get your subscription credentials within 5 minutes of payment confirmation.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to help you.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Access",
      description: "Access premium subscriptions from anywhere in the world with crypto payments.",
    },
  ]

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <Sparkles className="mr-1 h-3 w-3" />
          About Solsubscription
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Revolutionizing <span className="logo-gradient">Subscription</span> Payments
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
          Solsubscription is the premier marketplace for buying premium platform subscriptions with cryptocurrency. We
          make it easy to access Netflix, Spotify, Adobe, and hundreds of other services at discounted prices using
          Solana.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Start Saving Today</Button>
          <Button size="lg" variant="outline">
            View Subscriptions
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mb-2 flex justify-center text-primary">{stat.icon}</div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              <Target className="mr-2 inline-block h-8 w-8 text-primary" />
              Our Mission
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              We believe everyone should have access to premium digital services without breaking the bank. Our mission
              is to democratize access to subscription services by leveraging the power of cryptocurrency and bulk
              purchasing to offer significant savings.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              Through partnerships with service providers and innovative blockchain technology, we're creating a
              sustainable ecosystem where customers can save money while enjoying premium digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="gap-1">
                <Heart className="h-3 w-3" />
                Customer-First
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Shield className="h-3 w-3" />
                Secure
              </Badge>
              <Badge variant="outline" className="gap-1">
                <DollarSign className="h-3 w-3" />
                Best Prices
              </Badge>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Why Choose Solsubscription?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We've built a platform that prioritizes security, affordability, and user experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="rounded-lg bg-primary/5 p-8 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Transparency</h3>
              <p className="text-muted-foreground">
                Clear pricing, honest communication, and transparent processes in all our operations.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                Leveraging cutting-edge blockchain technology to create new possibilities in digital commerce.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Accessibility</h3>
              <p className="text-muted-foreground">
                Making premium digital services accessible to everyone through affordable crypto payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Start Saving?</h2>
        <p className="mb-8 text-muted-foreground">
          Join thousands of satisfied customers who are saving money on their favorite subscriptions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Browse Subscriptions</Button>
          <Button size="lg" variant="outline">
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  )
}
