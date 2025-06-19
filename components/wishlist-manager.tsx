"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Bell, Trash2, ShoppingCart, Star } from "lucide-react"
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

export default function WishlistManager() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [notifications, setNotifications] = useState(true)

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("solsubscription-wishlist")
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("solsubscription-wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const sampleItems: WishlistItem[] = [
    {
      id: "netflix-premium",
      name: "Netflix Premium",
      provider: "Netflix",
      price: "8.99",
      originalPrice: "15.49",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop",
      category: "Streaming",
      discount: "42%",
      onSale: true,
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
      onSale: true,
    },
  ]

  // Initialize with sample items if wishlist is empty
  useEffect(() => {
    if (wishlist.length === 0) {
      setWishlist(sampleItems)
    }
  }, [])

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
    toast.success("Removed from wishlist")
  }

  const toggleNotifications = () => {
    setNotifications(!notifications)
    toast.success(notifications ? "Notifications disabled" : "Notifications enabled")
  }

  const onSaleItems = wishlist.filter((item) => item.onSale)

  return (
    <section className="container py-16">
      <div className="mb-12 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <Heart className="mr-1 h-3 w-3" />
          Your Collection
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          <span className="logo-gradient">Wishlist & Favorites</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Save your favorite subscriptions and get notified when they go on sale
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold">Your Wishlist ({wishlist.length} items)</h3>
          {onSaleItems.length > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600">
              <Star className="mr-1 h-3 w-3" />
              {onSaleItems.length} on sale!
            </Badge>
          )}
        </div>
        <Button variant="outline" onClick={toggleNotifications} className="gap-2">
          <Bell className={`h-4 w-4 ${notifications ? "text-primary" : "text-muted-foreground"}`} />
          {notifications ? "Notifications On" : "Notifications Off"}
        </Button>
      </div>

      {onSaleItems.length > 0 && (
        <Card className="mb-8 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <Star className="h-5 w-5" />
              Flash Sale Alert!
            </CardTitle>
          </CardHeader>
          <CardContent>
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {wishlist.length === 0 && (
        <div className="text-center py-12">
          <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground mb-6">
            Start adding subscriptions to your wishlist to track deals and sales
          </p>
          <Button asChild>
            <Link href="/subscriptions">Browse Subscriptions</Link>
          </Button>
        </div>
      )}
    </section>
  )
}
