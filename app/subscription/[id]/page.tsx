"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, Share2, Info, CheckCircle, Shield, Clock, Users } from "lucide-react"
import WaitlistModal from "@/components/waitlist-modal"
import { getSubscriptionLogo } from "@/utils/subscription-logos"

export default function SubscriptionDetailPage({ params }: { params: { id: string } }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const id = params.id

  // Generate subscription details based on ID
  const subscriptionData = getSubscriptionById(id)

  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="sticky top-20 overflow-hidden rounded-lg border">
            <div className="relative aspect-square">
              <Image
                src={getSubscriptionLogo(subscriptionData.provider, subscriptionData.name) || "/placeholder.svg"}
                alt={subscriptionData.name}
                fill
                className="object-contain p-8"
                priority
              />
              <Badge className="absolute left-4 top-4 bg-accent">{subscriptionData.discount} OFF</Badge>
              <Badge className="absolute right-4 top-4" variant="secondary">
                {subscriptionData.category}
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="outline" className="hover:bg-primary/10">
                {subscriptionData.provider}
                <CheckCircle className="ml-1 h-3 w-3 text-primary" />
              </Badge>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            <h1 className="text-3xl font-bold">{subscriptionData.name}</h1>
            <p className="text-lg text-muted-foreground">{subscriptionData.duration} Subscription</p>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < Math.floor(subscriptionData.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium">{subscriptionData.rating}</span>
                <span className="text-sm text-muted-foreground">({subscriptionData.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>{subscriptionData.sold} sold</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Verified seller</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>30-day warranty</span>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground line-through">${subscriptionData.originalPrice}</p>
                  <p className="text-3xl font-bold">${subscriptionData.discountPrice}</p>
                  <p className="text-sm text-muted-foreground">≈ {subscriptionData.solPrice} SOL</p>
                </div>
                <div className="text-right">
                  <Badge className="text-lg px-3 py-1">Save {subscriptionData.discount}</Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{getRandomWaitlistCount()} in waitlist</span>
              </div>

              <Button size="lg" className="w-full" onClick={() => setIsWaitlistOpen(true)}>
                Join Waitlist
              </Button>

              <div className="mt-4 text-xs text-muted-foreground space-y-1">
                <p>• Get notified when available</p>
                <p>• Priority access when launched</p>
                <p>• 24/7 customer support</p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4 space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">About this subscription</h3>
                <p className="text-muted-foreground">{subscriptionData.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <div className="space-y-3">
                {subscriptionData.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Region</p>
                  <p className="text-sm">{subscriptionData.details.region}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Validity</p>
                  <p className="text-sm">{subscriptionData.details.validity}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Delivery</p>
                  <p className="text-sm">{subscriptionData.details.delivery}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Warranty</p>
                  <p className="text-sm">{subscriptionData.details.warranty}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="rounded-lg border p-4">
            <div className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">How it works</h3>
                <p className="text-sm text-muted-foreground">
                  After payment, you'll receive login credentials via email within 5 minutes. All accounts are private
                  and secure. If you face any issues, our support team is available 24/7.
                </p>
                <Button variant="link" className="h-auto p-0 text-primary">
                  Contact support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        subscriptionName={subscriptionData.name}
      />
    </div>
  )
}

// Helper function to generate subscription details based on ID with proper review/sold logic
function getSubscriptionById(id: string) {
  // Generate random numbers with sold always greater than reviews
  const generateReviewsSold = () => {
    const reviews = Math.floor(Math.random() * 46) + 5 // 5-50
    const sold = reviews + Math.floor(Math.random() * 50) + 10 // Always 10-60 more than reviews
    return { reviews, sold }
  }

  // Define specific subscription data based on ID
  const subscriptionMap: Record<string, any> = {
    "netflix-premium": {
      name: "Netflix Premium",
      provider: "Netflix",
      category: "Streaming",
      duration: "1 Month",
      originalPrice: "15.49",
      discountPrice: "8.99",
      discount: "42%",
      solPrice: "0.050",
      description:
        "Enjoy unlimited movies and TV shows in Ultra HD quality. Watch on any device, download for offline viewing, and create up to 5 profiles for your family. This monthly subscription gives you access to thousands of titles including exclusive Netflix Originals.",
      features: [
        "Ultra HD (4K) streaming quality",
        "Watch on multiple screens simultaneously",
        "Download content for offline viewing",
        "No ads or interruptions",
        "Access to exclusive originals",
        "Available on all devices",
      ],
      rating: 4.8,
      ...generateReviewsSold(),
    },
    "spotify-premium": {
      name: "Spotify Premium",
      provider: "Spotify",
      category: "Music",
      duration: "3 Months",
      originalPrice: "29.97",
      discountPrice: "18.50",
      discount: "38%",
      solPrice: "0.103",
      description:
        "Stream millions of songs ad-free with Spotify Premium. Download your favorite tracks for offline listening, enjoy high quality audio, and discover personalized playlists. This 3-month subscription includes unlimited skips and on-demand playback.",
      features: [
        "Ad-free music listening",
        "Download songs for offline listening",
        "High quality audio (320kbps)",
        "Skip unlimited tracks",
        "Create and share playlists",
        "Listen on multiple devices",
      ],
      rating: 4.7,
      ...generateReviewsSold(),
    },
    "adobe-creative-cloud": {
      name: "Adobe Creative Cloud",
      provider: "Adobe",
      category: "Design",
      duration: "1 Month",
      originalPrice: "52.99",
      discountPrice: "32.99",
      discount: "38%",
      solPrice: "0.183",
      description:
        "Boost your creativity with Adobe Creative Cloud. Access premium tools for photo editing, video production, graphic design, and more. This monthly subscription includes cloud storage, regular updates, and access on all your devices.",
      features: [
        "Access to all premium applications",
        "Cloud storage included",
        "Sync across all devices",
        "Priority customer support",
        "Advanced security features",
        "Regular updates and new features",
      ],
      rating: 4.6,
      ...generateReviewsSold(),
    },
    "disney-plus": {
      name: "Disney Plus",
      provider: "Disney",
      category: "Streaming",
      duration: "6 Months",
      originalPrice: "47.94",
      discountPrice: "28.99",
      discount: "40%",
      solPrice: "0.161",
      description:
        "Enjoy unlimited Disney, Pixar, Marvel, Star Wars, and National Geographic content in 4K quality. Watch on any device, download for offline viewing, and create multiple profiles. This 6-month subscription gives you access to thousands of family-friendly titles.",
      features: [
        "4K Content streaming",
        "Multiple user profiles",
        "Download for offline viewing",
        "Marvel & Star Wars content",
        "Family-safe content",
        "Available on all devices",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "youtube-premium": {
      name: "YouTube Premium",
      provider: "YouTube",
      category: "Streaming",
      duration: "1 Month",
      originalPrice: "11.99",
      discountPrice: "7.99",
      discount: "33%",
      solPrice: "0.044",
      description:
        "Enjoy YouTube without ads, download videos for offline viewing, and access YouTube Music Premium. This monthly subscription includes background play and exclusive YouTube Originals content.",
      features: [
        "Ad-free YouTube experience",
        "Download videos for offline viewing",
        "Background play on mobile",
        "YouTube Music Premium included",
        "Access to YouTube Originals",
        "Picture-in-picture mode",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "microsoft-office-365": {
      name: "Microsoft Office 365",
      provider: "Microsoft",
      category: "Productivity",
      duration: "1 Year",
      originalPrice: "99.99",
      discountPrice: "59.99",
      discount: "40%",
      solPrice: "0.333",
      description:
        "Get access to Word, Excel, PowerPoint, Outlook, and more with Microsoft Office 365. Includes 1TB OneDrive storage, premium templates, and advanced security features for personal and professional use.",
      features: [
        "Full Office suite access",
        "1TB OneDrive cloud storage",
        "Premium templates and fonts",
        "Advanced security features",
        "Multi-device installation",
        "24/7 technical support",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "amazon-prime": {
      name: "Amazon Prime",
      provider: "Amazon",
      category: "Shopping",
      duration: "1 Year",
      originalPrice: "139.00",
      discountPrice: "79.99",
      discount: "42%",
      solPrice: "0.444",
      description:
        "Get unlimited access to Prime Video, free shipping on Amazon orders, Prime Music, and exclusive deals. This yearly subscription includes thousands of movies, TV shows, and original content plus shopping benefits.",
      features: [
        "Prime Video streaming",
        "Free shipping on eligible orders",
        "Prime Music access",
        "Exclusive deals and discounts",
        "Prime Reading library",
        "Photo storage unlimited",
      ],
      rating: 4.6,
      ...generateReviewsSold(),
    },
    "hbo-max": {
      name: "HBO Max",
      provider: "HBO",
      category: "Streaming",
      duration: "3 Months",
      originalPrice: "44.97",
      discountPrice: "29.99",
      discount: "33%",
      solPrice: "0.167",
      description:
        "Stream HBO's award-winning series, blockbuster movies, and Max Originals. Get access to the entire HBO catalog plus exclusive Max content, documentaries, and same-day movie premieres.",
      features: [
        "HBO premium content library",
        "Max Originals exclusive shows",
        "Same-day movie premieres",
        "4K and HDR streaming",
        "Multiple user profiles",
        "Download for offline viewing",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "canva-pro": {
      name: "Canva Pro",
      provider: "Canva",
      category: "Design",
      duration: "1 Year",
      originalPrice: "119.99",
      discountPrice: "69.99",
      discount: "42%",
      solPrice: "0.389",
      description:
        "Unlock premium design features with Canva Pro. Access millions of premium photos, graphics, and templates. Create professional designs with advanced tools and collaborate with your team.",
      features: [
        "100+ million premium photos",
        "Premium templates and graphics",
        "Background remover tool",
        "Brand kit and templates",
        "Team collaboration features",
        "Priority customer support",
      ],
      rating: 4.7,
      ...generateReviewsSold(),
    },
    "apple-music": {
      name: "Apple Music",
      provider: "Apple",
      category: "Music",
      duration: "6 Months",
      originalPrice: "59.94",
      discountPrice: "39.99",
      discount: "33%",
      solPrice: "0.222",
      description:
        "Access over 100 million songs with Apple Music. Enjoy lossless audio, spatial audio, and exclusive releases. Download music for offline listening and discover new artists with personalized recommendations.",
      features: [
        "100+ million songs library",
        "Lossless and spatial audio",
        "Offline downloads unlimited",
        "Personalized playlists",
        "Exclusive artist content",
        "Cross-device synchronization",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "notion-pro": {
      name: "Notion Pro",
      provider: "Notion",
      category: "Productivity",
      duration: "1 Year",
      originalPrice: "96.00",
      discountPrice: "59.99",
      discount: "38%",
      solPrice: "0.333",
      description:
        "Organize your work and life with Notion Pro. Get unlimited blocks, file uploads, version history, and advanced permissions. Perfect for personal productivity and team collaboration.",
      features: [
        "Unlimited blocks and pages",
        "Unlimited file uploads",
        "Version history 30 days",
        "Advanced permissions",
        "Priority customer support",
        "API access included",
      ],
      rating: 4.6,
      ...generateReviewsSold(),
    },
    "figma-professional": {
      name: "Figma Professional",
      provider: "Figma",
      category: "Design",
      duration: "1 Month",
      originalPrice: "12.00",
      discountPrice: "7.99",
      discount: "33%",
      solPrice: "0.044",
      description:
        "Design and prototype with Figma Professional. Get unlimited projects, version history, team libraries, and advanced prototyping features. Perfect for designers and design teams.",
      features: [
        "Unlimited projects and files",
        "Version history unlimited",
        "Team libraries and components",
        "Advanced prototyping tools",
        "Developer handoff features",
        "Priority customer support",
      ],
      rating: 4.8,
      ...generateReviewsSold(),
    },
    "paramount-plus": {
      name: "Paramount Plus",
      provider: "Paramount",
      category: "Streaming",
      duration: "3 Months",
      originalPrice: "29.97",
      discountPrice: "19.99",
      discount: "33%",
      solPrice: "0.111",
      description:
        "Stream thousands of episodes and movies from Paramount, CBS, Comedy Central, and more. Get access to live sports, news, and exclusive Paramount+ Originals.",
      features: [
        "Live CBS and sports content",
        "Paramount+ Originals",
        "Comedy Central shows",
        "Nickelodeon content",
        "Movie library access",
        "Multiple device streaming",
      ],
      rating: 4.2,
      ...generateReviewsSold(),
    },
    "tidal-hifi": {
      name: "Tidal HiFi",
      provider: "Tidal",
      category: "Music",
      duration: "3 Months",
      originalPrice: "59.97",
      discountPrice: "39.99",
      discount: "33%",
      solPrice: "0.222",
      description:
        "Experience music in high-fidelity with Tidal HiFi. Stream lossless audio, exclusive content, and music videos. Perfect for audiophiles who demand the highest quality sound.",
      features: [
        "Lossless HiFi audio quality",
        "Master Quality Authenticated",
        "Exclusive artist content",
        "Music videos in HD",
        "Offline downloads",
        "Editorial playlists",
      ],
      rating: 4.3,
      ...generateReviewsSold(),
    },
    "deezer-premium": {
      name: "Deezer Premium",
      provider: "Deezer",
      category: "Music",
      duration: "6 Months",
      originalPrice: "59.94",
      discountPrice: "39.99",
      discount: "33%",
      solPrice: "0.222",
      description:
        "Discover music with Deezer Premium. Get unlimited skips, offline listening, and personalized recommendations. Access millions of songs and podcasts ad-free.",
      features: [
        "Ad-free music streaming",
        "Unlimited skips",
        "Offline listening",
        "High-quality audio",
        "Personalized Flow playlist",
        "Lyrics display",
      ],
      rating: 4.1,
      ...generateReviewsSold(),
    },
    "grammarly-premium": {
      name: "Grammarly Premium",
      provider: "Grammarly",
      category: "Productivity",
      duration: "1 Year",
      originalPrice: "144.00",
      discountPrice: "89.99",
      discount: "38%",
      solPrice: "0.500",
      description:
        "Improve your writing with Grammarly Premium. Get advanced grammar checking, style suggestions, plagiarism detection, and tone adjustments. Works across all your favorite apps and websites.",
      features: [
        "Advanced grammar and spelling",
        "Style and tone suggestions",
        "Plagiarism detection",
        "Vocabulary enhancement",
        "Genre-specific writing style",
        "Priority email support",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "evernote-premium": {
      name: "Evernote Premium",
      provider: "Evernote",
      category: "Productivity",
      duration: "1 Year",
      originalPrice: "84.99",
      discountPrice: "54.99",
      discount: "35%",
      solPrice: "0.306",
      description:
        "Organize your life with Evernote Premium. Get unlimited monthly uploads, offline access, and advanced search capabilities. Perfect for note-taking and document management.",
      features: [
        "Unlimited monthly uploads",
        "Offline notebook access",
        "Advanced search in PDFs",
        "Annotate PDFs and images",
        "Email notes to Evernote",
        "Priority customer support",
      ],
      rating: 4.3,
      ...generateReviewsSold(),
    },
    "slack-pro": {
      name: "Slack Pro",
      provider: "Slack",
      category: "Productivity",
      duration: "1 Month",
      originalPrice: "8.75",
      discountPrice: "5.99",
      discount: "32%",
      solPrice: "0.033",
      description:
        "Enhance team communication with Slack Pro. Get unlimited message history, guest access, voice and video calls, and advanced security features. Perfect for growing teams.",
      features: [
        "Unlimited message history",
        "Guest access controls",
        "Voice and video calls",
        "Screen sharing capability",
        "Advanced security features",
        "Priority customer support",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "zoom-pro": {
      name: "Zoom Pro",
      provider: "Zoom",
      category: "Productivity",
      duration: "1 Month",
      originalPrice: "14.99",
      discountPrice: "9.99",
      discount: "33%",
      solPrice: "0.056",
      description:
        "Host professional video meetings with Zoom Pro. Get unlimited group meetings, cloud recording, and advanced admin features. Perfect for small teams and businesses.",
      features: [
        "Unlimited group meetings",
        "Cloud recording 1GB",
        "Admin feature controls",
        "Reporting and analytics",
        "Customer support priority",
        "Meeting scheduling tools",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "trello-premium": {
      name: "Trello Premium",
      provider: "Trello",
      category: "Productivity",
      duration: "1 Year",
      originalPrice: "60.00",
      discountPrice: "39.99",
      discount: "33%",
      solPrice: "0.222",
      description:
        "Organize projects with Trello Premium. Get unlimited personal boards, advanced checklists, calendar view, and integrations. Perfect for personal and team project management.",
      features: [
        "Unlimited personal boards",
        "Advanced checklists",
        "Calendar and timeline views",
        "Unlimited Power-Ups",
        "Board templates",
        "Priority customer support",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "asana-premium": {
      name: "Asana Premium",
      provider: "Asana",
      category: "Productivity",
      duration: "1 Year",
      originalPrice: "119.88",
      discountPrice: "79.99",
      discount: "33%",
      solPrice: "0.444",
      description:
        "Manage projects efficiently with Asana Premium. Get timeline view, custom fields, advanced search, and reporting. Perfect for teams that need powerful project management tools.",
      features: [
        "Timeline and Gantt charts",
        "Custom fields and forms",
        "Advanced search and reporting",
        "Unlimited dashboards",
        "Priority customer support",
        "Admin controls",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "monday-basic": {
      name: "Monday.com Basic",
      provider: "Monday",
      category: "Productivity",
      duration: "1 Month",
      originalPrice: "8.00",
      discountPrice: "5.99",
      discount: "25%",
      solPrice: "0.033",
      description:
        "Streamline work with Monday.com Basic. Get customizable workflows, project tracking, and team collaboration tools. Perfect for small teams starting with project management.",
      features: [
        "Unlimited individual users",
        "Unlimited boards",
        "20+ column types",
        "iOS and Android apps",
        "Email support",
        "Basic integrations",
      ],
      rating: 4.3,
      ...generateReviewsSold(),
    },
    "mailchimp-standard": {
      name: "Mailchimp Standard",
      provider: "Mailchimp",
      category: "Marketing",
      duration: "1 Month",
      originalPrice: "14.99",
      discountPrice: "9.99",
      discount: "33%",
      solPrice: "0.056",
      description:
        "Grow your audience with Mailchimp Standard. Get advanced audience insights, A/B testing, and custom branding. Perfect for businesses looking to scale their email marketing.",
      features: [
        "Advanced audience insights",
        "A/B testing campaigns",
        "Custom branding",
        "Behavioral targeting",
        "Send time optimization",
        "Phone and chat support",
      ],
      rating: 4.2,
      ...generateReviewsSold(),
    },
    "hubspot-starter": {
      name: "HubSpot Starter",
      provider: "HubSpot",
      category: "Marketing",
      duration: "1 Month",
      originalPrice: "45.00",
      discountPrice: "29.99",
      discount: "33%",
      solPrice: "0.167",
      description:
        "Start your growth journey with HubSpot Starter. Get essential marketing, sales, and service tools in one platform. Perfect for small businesses ready to grow.",
      features: [
        "Contact and company insights",
        "Email marketing tools",
        "Forms and landing pages",
        "Live chat and chatbots",
        "Ticketing system",
        "Mobile app access",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "shopify-basic": {
      name: "Shopify Basic",
      provider: "Shopify",
      category: "E-commerce",
      duration: "1 Month",
      originalPrice: "29.00",
      discountPrice: "19.99",
      discount: "31%",
      solPrice: "0.111",
      description:
        "Start selling online with Shopify Basic. Get everything you need to create an online store, accept payments, and manage inventory. Perfect for new entrepreneurs.",
      features: [
        "Online store and blog",
        "Unlimited products",
        "24/7 customer support",
        "SSL certificate",
        "Abandoned cart recovery",
        "Discount codes",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "squarespace-personal": {
      name: "Squarespace Personal",
      provider: "Squarespace",
      category: "Website",
      duration: "1 Year",
      originalPrice: "144.00",
      discountPrice: "99.99",
      discount: "31%",
      solPrice: "0.556",
      description:
        "Build a beautiful website with Squarespace Personal. Get award-winning templates, hosting, and 24/7 support. Perfect for personal websites, portfolios, and blogs.",
      features: [
        "Award-winning templates",
        "Unlimited bandwidth and storage",
        "SEO features",
        "Website analytics",
        "24/7 customer support",
        "Mobile-optimized",
      ],
      rating: 4.3,
      ...generateReviewsSold(),
    },
    "wix-combo": {
      name: "Wix Combo",
      provider: "Wix",
      category: "Website",
      duration: "1 Year",
      originalPrice: "168.00",
      discountPrice: "119.99",
      discount: "29%",
      solPrice: "0.667",
      description:
        "Create your website with Wix Combo. Get a free domain, remove Wix ads, and access premium support. Perfect for personal websites and small businesses.",
      features: [
        "Free domain for 1 year",
        "Remove Wix ads",
        "3GB bandwidth",
        "2GB storage",
        "Premium support",
        "Favicon",
      ],
      rating: 4.1,
      ...generateReviewsSold(),
    },
    "webflow-site": {
      name: "Webflow Site Plan",
      provider: "Webflow",
      category: "Website",
      duration: "1 Year",
      originalPrice: "192.00",
      discountPrice: "129.99",
      discount: "32%",
      solPrice: "0.722",
      description:
        "Design and launch with Webflow Site Plan. Get custom domain, fast hosting, and advanced SEO controls. Perfect for designers and agencies building client sites.",
      features: [
        "Custom domain connection",
        "Fast, reliable hosting",
        "Advanced SEO controls",
        "Site search functionality",
        "Password protection",
        "Form submissions",
      ],
      rating: 4.6,
      ...generateReviewsSold(),
    },
    "airtable-plus": {
      name: "Airtable Plus",
      provider: "Airtable",
      category: "Database",
      duration: "1 Year",
      originalPrice: "240.00",
      discountPrice: "159.99",
      discount: "33%",
      solPrice: "0.889",
      description:
        "Organize anything with Airtable Plus. Get advanced features like Gantt view, calendar view, and custom field types. Perfect for teams managing complex projects and data.",
      features: [
        "Gantt and calendar views",
        "Custom field types",
        "Expanded color and formatting",
        "Personal and locked views",
        "Revision history",
        "Priority support",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "typeform-basic": {
      name: "Typeform Basic",
      provider: "Typeform",
      category: "Forms",
      duration: "1 Year",
      originalPrice: "300.00",
      discountPrice: "199.99",
      discount: "33%",
      solPrice: "1.111",
      description:
        "Create engaging forms with Typeform Basic. Get unlimited questions, custom thank you screens, and basic integrations. Perfect for surveys, quizzes, and lead generation.",
      features: [
        "Unlimited questions",
        "Custom thank you screens",
        "Basic logic jumps",
        "Data export",
        "Basic integrations",
        "Email support",
      ],
      rating: 4.3,
      ...generateReviewsSold(),
    },
    "calendly-standard": {
      name: "Calendly Standard",
      provider: "Calendly",
      category: "Scheduling",
      duration: "1 Year",
      originalPrice: "96.00",
      discountPrice: "64.99",
      discount: "32%",
      solPrice: "0.361",
      description:
        "Streamline scheduling with Calendly Standard. Get unlimited event types, calendar connections, and automated workflows. Perfect for professionals managing multiple meeting types.",
      features: [
        "Unlimited event types",
        "Calendar connections",
        "Automated workflows",
        "Group events",
        "Buffer times",
        "Email support",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    "loom-business": {
      name: "Loom Business",
      provider: "Loom",
      category: "Video",
      duration: "1 Year",
      originalPrice: "96.00",
      discountPrice: "64.99",
      discount: "32%",
      solPrice: "0.361",
      description:
        "Communicate better with Loom Business. Get unlimited video recording, custom branding, and advanced privacy controls. Perfect for teams using video for communication.",
      features: [
        "Unlimited video recording",
        "Custom branding",
        "Advanced privacy controls",
        "Video editing tools",
        "Team management",
        "Priority support",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "miro-team": {
      name: "Miro Team",
      provider: "Miro",
      category: "Collaboration",
      duration: "1 Year",
      originalPrice: "96.00",
      discountPrice: "64.99",
      discount: "32%",
      solPrice: "0.361",
      description:
        "Collaborate visually with Miro Team. Get unlimited editable boards, advanced diagramming, and integrations. Perfect for teams doing design thinking and agile workflows.",
      features: [
        "Unlimited editable boards",
        "Advanced diagramming",
        "Integrations with tools",
        "Templates library",
        "Team management",
        "Priority support",
      ],
      rating: 4.6,
      ...generateReviewsSold(),
    },
    "linear-plus": {
      name: "Linear Plus",
      provider: "Linear",
      category: "Project Management",
      duration: "1 Year",
      originalPrice: "96.00",
      discountPrice: "64.99",
      discount: "32%",
      solPrice: "0.361",
      description:
        "Build better products with Linear Plus. Get unlimited issues, projects, and advanced workflow automation. Perfect for product teams focused on shipping fast.",
      features: [
        "Unlimited issues and projects",
        "Advanced workflow automation",
        "Custom fields and views",
        "Roadmap planning",
        "GitHub integration",
        "Priority support",
      ],
      rating: 4.7,
      ...generateReviewsSold(),
    },
    "clickup-unlimited": {
      name: "ClickUp Unlimited",
      provider: "ClickUp",
      category: "Productivity",
      duration: "1 Year",
      originalPrice: "60.00",
      discountPrice: "39.99",
      discount: "33%",
      solPrice: "0.222",
      description:
        "Get more done with ClickUp Unlimited. Access unlimited storage, integrations, and advanced features. Perfect for teams that need a comprehensive productivity platform.",
      features: [
        "Unlimited storage",
        "Unlimited integrations",
        "Goals and portfolios",
        "Custom fields",
        "Advanced dashboard",
        "Priority support",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
    // Additional Deal Subscriptions
    "spotify-premium-annual": {
      name: "Spotify Premium Annual",
      provider: "Spotify",
      category: "Music",
      duration: "1 Year",
      originalPrice: "191.88",
      discountPrice: "99.99",
      discount: "48%",
      solPrice: "0.556",
      description: "Get an entire year of Spotify Premium at our best value. Enjoy ad-free music streaming, offline downloads, and high-quality audio across all your devices. Perfect for music lovers who want uninterrupted listening.",
      features: [
        "Ad-free music streaming",
        "Offline downloads",
        "High quality audio (320kbps)",
        "Unlimited skips",
        "On-demand playback",
        "Crossfade and gapless",
      ],
      rating: 4.6,
      ...generateReviewsSold(),
    },
    "hbo-max-premium": {
      name: "HBO Max Premium",
      provider: "HBO",
      category: "Streaming",
      duration: "1 Year",
      originalPrice: "149.99",
      discountPrice: "89.99",
      discount: "40%",
      solPrice: "0.500",
      description: "Get access to HBO Max's premium streaming experience with 4K Ultra HD, Dolby Atmos, and the ability to download content for offline viewing. Watch the latest blockbusters, exclusive series, and HBO originals.",
      features: [
        "4K Ultra HD streaming",
        "Dolby Atmos audio",
        "Ad-free streaming",
        "30 offline downloads",
        "Multiple user profiles",
        "Same-day movie premieres",
      ],
      rating: 4.7,
      ...generateReviewsSold(),
    },
    "adobe-photography": {
      name: "Adobe Photography Plan",
      provider: "Adobe",
      category: "Design",
      duration: "1 Year",
      originalPrice: "239.88",
      discountPrice: "119.99",
      discount: "50%",
      solPrice: "0.667",
      description: "Get the perfect pair of photo editing apps - Adobe Photoshop and Lightroom. Includes 20GB cloud storage, Adobe Portfolio, and premium fonts. Perfect for photographers and creative professionals.",
      features: [
        "Photoshop + Lightroom",
        "20GB cloud storage",
        "Adobe Portfolio",
        "Premium presets",
        "Mobile apps included",
        "Advanced tutorials",
      ],
      rating: 4.8,
      ...generateReviewsSold(),
    },
    "nintendo-switch-online": {
      name: "Nintendo Switch Online",
      provider: "Nintendo",
      category: "Gaming",
      duration: "1 Year",
      originalPrice: "49.99",
      discountPrice: "34.99",
      discount: "30%",
      solPrice: "0.194",
      description: "Enhance your Nintendo Switch experience with online play, a growing collection of classic NES and SNES games, and exclusive member offers. Includes cloud saves and special in-game items.",
      features: [
        "Online multiplayer",
        "Classic games library",
        "Cloud save backup",
        "Special offers",
        "Smartphone app access",
        "Member exclusive items",
      ],
      rating: 4.4,
      ...generateReviewsSold(),
    },
    "xbox-game-pass-ultimate": {
      name: "Xbox Game Pass Ultimate",
      provider: "Microsoft",
      category: "Gaming",
      duration: "6 Months",
      originalPrice: "89.94",
      discountPrice: "59.99",
      discount: "33%",
      solPrice: "0.333",
      description: "Get unlimited access to over 100 high-quality games on Xbox, PC, and mobile devices. Includes Xbox Live Gold, EA Play membership, and exclusive member discounts. Play new games on day one.",
      features: [
        "100+ games library",
        "Xbox Live Gold included",
        "EA Play membership",
        "Cloud gaming",
        "Day one releases",
        "Member discounts",
      ],
      rating: 4.8,
      ...generateReviewsSold(),
    },
    "express-vpn-premium": {
      name: "ExpressVPN Premium",
      provider: "ExpressVPN",
      category: "VPN",
      duration: "15 Months",
      originalPrice: "194.35",
      discountPrice: "99.99",
      discount: "49%",
      solPrice: "0.556",
      description: "Secure your online privacy with the fastest and most reliable VPN service. Access geo-restricted content, protect your data, and browse anonymously with servers in 94 countries.",
      features: [
        "5900+ servers worldwide",
        "Unlimited bandwidth",
        "No activity logs",
        "Split tunneling",
        "Kill switch",
        "24/7 live chat support",
      ],
      rating: 4.7,
      ...generateReviewsSold(),
    },
    "nordvpn-premium": {
      name: "NordVPN Premium",
      provider: "NordVPN",
      category: "VPN",
      duration: "2 Years",
      originalPrice: "223.83",
      discountPrice: "89.99",
      discount: "60%",
      solPrice: "0.500",
      description:
        "Protect your online privacy with NordVPN Premium. Get ultra-fast connection speeds, advanced security features, and access to 5200+ servers in 60 countries. Perfect for streaming, gaming, and secure browsing.",
      features: [
        "5200+ servers in 60 countries",
        "No-logs policy",
        "Military-grade encryption",
        "6 simultaneous connections",
        "P2P & streaming optimized",
        "24/7 customer support",
      ],
      rating: 4.6,
      ...generateReviewsSold(),
    },
    "playstation-plus": {
      name: "PlayStation Plus",
      provider: "Sony",
      category: "Gaming",
      duration: "1 Year",
      originalPrice: "59.99",
      discountPrice: "39.99",
      discount: "33%",
      solPrice: "0.222",
      description:
        "Enhance your PlayStation gaming experience with PlayStation Plus. Get access to online multiplayer, monthly free games, exclusive discounts, and cloud storage for game saves. Perfect for PlayStation gamers.",
      features: [
        "Online multiplayer access",
        "Monthly free games",
        "Exclusive discounts",
        "Cloud storage",
        "Share Play",
        "Game Help",
      ],
      rating: 4.5,
      ...generateReviewsSold(),
    },
  }

  // Get specific data or generate fallback
  const specificData = subscriptionMap[id]
  if (specificData) {
    return {
      id,
      ...specificData,
      details: {
        region: specificData.category === "Streaming" ? "Global (VPN may be required)" : "Global",
        validity:
          specificData.duration === "1 Month"
            ? "30 Days"
            : specificData.duration === "3 Months"
              ? "90 Days"
              : specificData.duration === "6 Months"
                ? "180 Days"
                : "365 Days",
        delivery: "Instant",
        warranty: "30 Days Replacement",
      },
    }
  }

  // Fallback for unknown IDs
  return {
    id,
    name: "Subscription Not Found",
    provider: "Unknown",
    category: "Unknown",
    duration: "1 Month",
    originalPrice: "9.99",
    discountPrice: "6.99",
    discount: "30%",
    solPrice: "0.039",
    description: "This subscription could not be found.",
    features: ["Feature not available"],
    rating: 4.0,
    reviews: 10,
    sold: 25,
    details: {
      region: "Global",
      validity: "30 Days",
      delivery: "Instant",
      warranty: "30 Days Replacement",
    },
  }
}

// Mock function to return a random waitlist count
function getRandomWaitlistCount() {
  return Math.floor(Math.random() * 100) + 1 // 1 to 100
}
