import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter, Search } from "lucide-react"

export default function ExplorePage() {
  // This would be fetched from an API in a real application
  const nfts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Cosmic Dreamscape #${i + 1}`,
    artist: `artist_${i + 1}`,
    price: ((i + 1) * 0.25 + 1.0).toFixed(2),
    likes: Math.floor(Math.random() * 1000),
    image: `https://picsum.photos/400/400?random=${400 + (i + 1) * 37}`,
  }))

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Explore NFTs</h1>
        <p className="text-muted-foreground">Discover and collect unique digital art</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Tabs defaultValue="all" className="w-full lg:w-auto">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
            <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search NFTs, collections, artists..." className="pl-8" />
          </div>

          <Select defaultValue="recent">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently added</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="hidden lg:block">
          <div className="sticky top-20 rounded-lg border p-6">
            <div className="mb-6">
              <h3 className="mb-2 flex items-center text-lg font-semibold">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </h3>
              <Button variant="outline" size="sm" className="w-full">
                Clear All
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-3 font-medium">Price Range</h4>
                <div className="space-y-4">
                  <Slider defaultValue={[0, 10]} max={10} step={0.1} />
                  <div className="flex items-center gap-2">
                    <Input type="number" placeholder="Min" className="h-8" />
                    <span>to</span>
                    <Input type="number" placeholder="Max" className="h-8" />
                    <Button size="sm" variant="outline" className="h-8">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-medium">Categories</h4>
                <div className="space-y-2">
                  {["Art", "Collectibles", "Photography", "Music", "Virtual Worlds"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-medium">Status</h4>
                <div className="space-y-2">
                  {["Buy Now", "On Auction", "New", "Has Offers"].map((status) => (
                    <div key={status} className="flex items-center space-x-2">
                      <Checkbox id={`status-${status}`} />
                      <label
                        htmlFor={`status-${status}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-medium">Chains</h4>
                <div className="space-y-2">
                  {["Ethereum", "Polygon", "Solana", "Binance"].map((chain) => (
                    <div key={chain} className="flex items-center space-x-2">
                      <Checkbox id={`chain-${chain}`} />
                      <label
                        htmlFor={`chain-${chain}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {chain}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nfts.map((nft) => (
              <Link href={`/nft/${nft.id}`} key={nft.id}>
                <Card className="card-hover overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={nft.image || "/placeholder.svg"}
                      alt={nft.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div>
                      <h3 className="font-semibold">{nft.title}</h3>
                      <p className="text-sm text-muted-foreground">by @{nft.artist}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Price</p>
                      <p className="font-semibold">{nft.price} SOL</p>
                    </div>
                    <Badge variant="outline">{nft.likes} likes</Badge>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
