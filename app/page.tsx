import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, FlameIcon as Fire, Sparkles, TrendingUp, Shield, Zap, DollarSign } from "lucide-react"
import HowItWorks from "@/components/how-it-works"
import Newsletter from "@/components/newsletter"
import ScrollReveal from "@/components/scroll-reveal"
import ServiceStats from "@/components/service-stats"
import WalletInfo from "@/components/wallet-info"
import ComingSoonDeals from "@/components/coming-soon-deals"
import TokenomicsTransparency from "@/components/tokenomics-transparency"
import RoadmapSection from "@/components/roadmap-section"
import { getSubscriptionLogo } from "@/utils/subscription-logos"
import HomeFAQ from "@/components/home-faq"
import CountdownTimer from "@/components/countdown-timer"
import LiveMetrics from "@/components/live-metrics"
import AboutSection from "@/components/about-section"
import FeatureCards from "@/components/feature-cards"

export default function Home() {
  const subscriptions = [
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
  ]

  return (
    <>
      <ScrollReveal />
      <div className="flex flex-col gap-16 pb-16">
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden pt-0">
          <div className="container relative z-10 grid gap-8 pb-16 pt-8 md:grid-cols-2 md:gap-12 md:pb-24 md:pt-16">
            <div className="flex flex-col justify-center gap-6">
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 animate-fade-in">
                <Sparkles className="mr-1 h-3 w-3 animate-pulse" />
                Premium subscriptions with crypto
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slide-in-left">
                Buy <span className="text-primary">Premium</span> Subscriptions Directly with $SOL or $SCRIBE
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-in-left delay-200">
                Pay with SOL / USDC or directly with our own Native Token $SCRIBE to get Discounts upto 75%.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                <Button size="lg" asChild className="animate-bounce-slow">
                  <Link href="/subscriptions">Join Our Waitlist</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 animate-fade-in delay-400">
                <div>
                  <p className="text-3xl font-bold">45+</p>
                  <p className="text-sm text-muted-foreground">Upcoming Subscriptions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">3500+</p>
                  <p className="text-sm text-muted-foreground">People in Waitlist</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50%</p>
                  <p className="text-sm text-muted-foreground">Avg. Savings</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative h-[400px] w-[400px] animate-float">
                <div className="absolute inset-0 animate-spin-slow opacity-30 blur-xl">
                  <Image src="/solistryx-logo-clean.png" alt="Glow effect" fill className="object-contain" priority />
                </div>
                <Image
                  src="/solistryx-logo-clean.png"
                  alt="Solsubscription Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-xl bg-background/80 p-4 backdrop-blur-md animate-fade-in delay-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Netflix Premium</p>
                    <p className="text-sm text-muted-foreground">1 Month Subscription</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground line-through">$15.49</p>
                    <p className="font-semibold text-primary">0.05 SOL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        </section>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Live Metrics Section */}
        <LiveMetrics />

        {/* About Section */}
        <AboutSection />

        {/* Launch Announcement Banner */}
        <section className="container">
          <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-primary/5 p-6 my-8 animate-pulse-slow">
            <div className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-primary/10 blur-3xl"></div>
            <div className="relative flex flex-col items-center justify-center text-center gap-4">
              <Badge className="animate-bounce-slow bg-primary text-primary-foreground">
                Coming Soon
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Service Ready for Launch!
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                Our platform is fully developed and will go live{" "}
                <span className="font-semibold text-primary">24 hours after token launch</span>. Get ready to access
                premium subscriptions with $SOL!
              </p>
            </div>
          </div>
        </section>

        {/* Holder Rewards Section */}
        <section className="container py-16 relative overflow-hidden">
          {/* Animated background coins */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="animate-float absolute top-10 left-[10%] text-yellow-500 opacity-20">
              <DollarSign className="h-16 w-16" />
            </div>
            <div className="animate-float-delayed absolute top-20 right-[15%] text-yellow-500 opacity-20">
              <DollarSign className="h-20 w-20" />
            </div>
            <div className="animate-float-slow absolute bottom-10 left-[20%] text-yellow-500 opacity-20">
              <DollarSign className="h-24 w-24" />
            </div>
            <div className="animate-float absolute bottom-20 right-[25%] text-yellow-500 opacity-20">
              <DollarSign className="h-16 w-16" />
            </div>
          </div>

          <div className="mb-12 text-center reveal">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Sparkles className="mr-1 h-3 w-3" />
              Exclusive Benefit
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 text-transparent bg-clip-text">
                Holder Rewards Program
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
              Hold just 0.01% of the total token supply and get amazing benefits!
            </p>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/20 reveal">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <Badge variant="secondary" className="px-3 py-1 text-lg">
                    Monthly Reward
                  </Badge>
                  <h3 className="text-3xl font-bold">Free YouTube Premium</h3>
                  <p className="text-muted-foreground text-lg">
                    As a token holder with minimum 0.01% supply, you'll receive:
                  </p>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
                      Monthly YouTube Premium subscription
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                      Auto-renewed while holding tokens
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-yellow-500" />
                      More rewards coming soon
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={getSubscriptionLogo("YouTube", "YouTube Premium") || "/placeholder.svg"}
                    alt="YouTube Premium"
                    fill
                    className="object-contain p-8 animate-pulse-slow"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wallet Info Section */}
        <section className="container">
          <div className="flex justify-center">
            <WalletInfo />
          </div>
        </section>

        {/* Service Stats Section */}
        {/* <ServiceStats /> */}

        {/* Tokenomics Transparency Section */}
        <TokenomicsTransparency />

        {/* Trending Subscriptions */}
        <section className="container py-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 reveal">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <TrendingUp className="mr-1 h-3 w-3" />
                Most Popular
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                <TrendingUp className="mr-2 inline-block h-8 w-8 text-primary" />
                Trending Subscriptions
              </h2>
              <p className="text-muted-foreground">The most popular subscriptions on Solsubscription right now</p>
            </div>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="streaming">Streaming</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subscriptions.map((sub, index) => (
              <Link href={`/subscription/${sub.id}`} key={sub.id}>
                <Card className={`card-hover overflow-hidden reveal`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={getSubscriptionLogo(sub.provider, sub.name) || "/placeholder.svg"}
                      alt={sub.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute left-2 top-2 rounded-full bg-accent px-2 py-1 text-xs font-medium">
                      <Fire className="mr-1 inline h-3 w-3" />
                      {sub.discount} OFF
                    </div>
                    <Badge className="absolute right-2 top-2" variant="secondary">
                      {sub.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{sub.name}</h3>
                        <p className="text-sm text-muted-foreground">{sub.duration}</p>
                      </div>
                      <Badge variant="outline" className="gap-1 border-primary/50 text-primary">
                        <Clock className="h-3 w-3" /> Limited
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div>
                      <p className="text-xs text-muted-foreground line-through">${sub.originalPrice}</p>
                      <p className="font-semibold">${sub.discountPrice}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center reveal">
            <Button variant="outline" size="lg" asChild>
              <Link href="/subscriptions">
                View all subscriptions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Why $SCRIBE Features Section */}
        <FeatureCards />

        {/* Coming Soon Deals Section */}
        <ComingSoonDeals />

        {/* How It Works */}
        <HowItWorks />

        {/* Roadmap Section */}
        <RoadmapSection />

        {/* Newsletter */}
        <Newsletter />

        {/* FAQ Section */}
        <HomeFAQ />
      </div>
    </>
  )
}
