"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Bell, Trash2, ShoppingCart, Star, Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

interface WishlistItem {
  id: string
  name: string
  provider: string
  price: string
  originalPrice: string
  image: string
  category: string
  discount: string
  onSale?: boolean
}

// Sample subscriptions that users can add to wishlist
const availableSubscriptions: WishlistItem[] = [
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    provider: "Netflix",
    price: "8.99",
    originalPrice: "15.49",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop",
    category: "Streaming",
    discount: "42%",
  },
  {
    id: "spotify-family",
    name: "Spotify Family",
    provider: "Spotify",
    price: "12.99",
    originalPrice: "15.99",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400&h=400&fit=crop",
    category: "Music",
    discount: "19%",
  },
  {
    id: "adobe-cc",
    name: "Adobe Creative Cloud",
    provider: "Adobe",
    price: "32.99",
    originalPrice: "52.99",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    category: "Design",
    discount: "38%",
  },
  {
    id: "disney-plus",
    name: "Disney Plus",
    provider: "Disney",
    price: "4.99",
    originalPrice: "7.99",
    image: "https://images.unsplash.com/photo-1489599735734-79b4169c2a78?w=400&h=400&fit=crop",
    category: "Streaming",
    discount: "38%",
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    provider: "YouTube",
    price: "7.99",
    originalPrice: "11.99",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop",
    category: "Entertainment",
    discount: "33%",
  },
  {
    id: "microsoft-office",
    name: "Microsoft Office 365",
    provider: "Microsoft",
    price: "4.99",
    originalPrice: "8.33",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400&h=400&fit=crop",
    category: "Productivity",
    discount: "40%",
  },
]

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [notifications, setNotifications] = useState(true)
  const [showAddOptions, setShowAddOptions] = useState(false)

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("solsubscription-wishlist")
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist))
      } catch (error) {
        console.error("Error loading wishlist:", error)
        setWishlist([])
      }
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0 || localStorage.getItem("solsubscription-wishlist")) {
      localStorage.setItem("solsubscription-wishlist", JSON.stringify(wishlist))
    }
  }, [wishlist])

  const addToWishlist = (subscription: WishlistItem) => {
    if (!wishlist.find((item) => item.id === subscription.id)) {
      // Randomly make some items "on sale" when added
      const itemWithSale = {
        ...subscription,
        onSale: Math.random() > 0.7, // 30% chance of being on sale
      }
      setWishlist([...wishlist, itemWithSale])
      toast.success(`${subscription.name} added to wishlist!`)
    } else {
      toast.error("Item already in wishlist")
    }
  }

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
    toast.success("Removed from wishlist")
  }

  const toggleNotifications = () => {
    setNotifications(!notifications)
    toast.success(notifications ? "Notifications disabled" : "Notifications enabled")
  }

  const onSaleItems = wishlist.filter((item) => item.onSale)
  const availableToAdd = availableSubscriptions.filter((sub) => !wishlist.find((item) => item.id === sub.id))

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <Heart className="mr-1 h-3 w-3" />
          Your Collection
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          <Heart className="mr-2 inline-block h-10 w-10 text-primary" />
          My Wishlist
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Save your favorite subscriptions and get notified when they go on sale
        </p>
      </div>

      {/* Controls */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">Your Wishlist ({wishlist.length} items)</h2>
          {onSaleItems.length > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600">
              <Star className="mr-1 h-3 w-3" />
              {onSaleItems.length} on sale!
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={toggleNotifications} className="gap-2">
            <Bell className={`h-4 w-4 ${notifications ? "text-primary" : "text-muted-foreground"}`} />
            {notifications ? "Notifications On" : "Notifications Off"}
          </Button>
          <Button onClick={() => setShowAddOptions(!showAddOptions)} className="gap-2">
            <Plus className="h-4 w-4" />
            {showAddOptions ? "Hide Options" : "Add Items"}
          </Button>
        </div>
      </div>

      {/* Sale Alert */}
      {onSaleItems.length > 0 && (
        <Card className="mb-8 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-red-600 dark:text-red-400" />
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">Flash Sale Alert!</h3>
            </div>
            <p className="mb-4 text-red-700 dark:text-red-300">
              {onSaleItems.length} item{onSaleItems.length > 1 ? "s" : ""} from your wishlist{" "}
              {onSaleItems.length > 1 ? "are" : "is"} currently on sale!
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {onSaleItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg bg-background p-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-primary">
                      {item.discount} OFF - ${item.price}
                    </p>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/subscription/${item.id}`}>Buy</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Items Section */}
      {(wishlist.length === 0 || showAddOptions) && availableToAdd.length > 0 && (
        <Card className="mb-8 bg-muted/50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Add to Wishlist</h3>
              {wishlist.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setShowAddOptions(false)}>
                  Hide
                </Button>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {availableToAdd.map((sub) => (
                <Card key={sub.id} className="cursor-pointer transition-all hover:scale-105">
                  <CardContent className="p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                        <Image src={sub.image || "/placeholder.svg"} alt={sub.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{sub.name}</h4>
                        <p className="text-sm text-muted-foreground">${sub.price}/mo</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-full" onClick={() => addToWishlist(sub)}>
                      <Heart className="mr-2 h-4 w-4" />
                      Add to Wishlist
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Wishlist Items */}
      {wishlist.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                {item.onSale && <Badge className="absolute left-2 top-2 bg-red-500 animate-pulse">SALE!</Badge>}
                <Badge className="absolute right-2 top-2 bg-green-500">{item.discount} OFF</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-2 right-2 bg-background/80 hover:bg-background"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.provider}</p>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">${item.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                  </div>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <Button className="w-full gap-2" asChild>
                  <Link href={`/subscription/${item.id}`}>
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground mb-6">
            Start adding subscriptions to your wishlist to track deals and sales
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => setShowAddOptions(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Items to Wishlist
            </Button>
            <Button variant="outline" asChild>
              <Link href="/subscriptions">Browse All Subscriptions</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      {wishlist.length > 0 && (
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/subscriptions">Browse More Subscriptions</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/deals">View Current Deals</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
