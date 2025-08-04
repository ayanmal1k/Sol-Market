import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/solistryx-logo-clean.png" width={32} height={32} alt="SolScribe Logo" />
              <span className="text-xl font-bold">SolScribe</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Buy premium platform subscriptions with $SOLSCRIBE. Get Netflix, Spotify, Adobe, and more at discounted
              prices.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://t.me/SolSubscribe" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-telegram h-5 w-5"></i>
                  <span className="sr-only">Telegram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://x.com/Solsubscribe" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter h-5 w-5"></i>
                  <span className="sr-only">X (Twitter)</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Popular Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/subscription/netflix-premium" className="text-muted-foreground hover:text-foreground">
                    Netflix Premium
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/subscription/spotify-premium" className="text-muted-foreground hover:text-foreground">
                    Spotify Premium
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/subscription/adobe-creative-cloud" className="text-muted-foreground hover:text-foreground">
                    Adobe Creative Cloud
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/subscription/disney-plus" className="text-muted-foreground hover:text-foreground">
                    Disney Plus
                  </Link>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="text-muted-foreground hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get notified about new deals and platform subscriptions.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SolScribe. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
