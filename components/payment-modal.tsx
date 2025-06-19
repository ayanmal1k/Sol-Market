"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Clock, Mail, Send } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  subscription: {
    name: string
    price: string
    solPrice: string
  }
}

// Array of Solana wallet addresses
const WALLET_ADDRESSES = [
  "ABuxnnZURXsR5hyKNa84TAvomUMhHtEuxVNB1wBWEtzT",
  "7YttLkHDoNj6wBcyP3jgN9QRUqFjQZ9VLQgpBmGYqabK",
  "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
  "FZd2xQWqN4jrKgrXmqcY2JAHrRqGjJKKx9YrAxk6wUQs",
  "2xNwwRRrqKAU4AknQCiNYJyTsSMLJg3YrYL6LyKpKuxw",
  "EtBL5nYPNF2YEtHUCc3GByxmYxg7jGXqVFhr9TZyEยE4",
  "HQDRoMZqPHsYx4PhKFKFBJxjj6sFjmZs5YX1DgHcnZEL"
]

export default function PaymentModal({ isOpen, onClose, subscription }: PaymentModalProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds
  const [currentWalletAddress, setCurrentWalletAddress] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"sol" | "solscribe">("sol")

  // Calculate SOLSCRIBE price (50x the SOL price)
  const solscribePrice = (Number(subscription.solPrice) * 50).toFixed(2)

  useEffect(() => {
    if (!isOpen) return

    // Show loading for 2 seconds when modal opens
    setIsLoading(true)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Set random wallet address when modal opens
    setCurrentWalletAddress(WALLET_ADDRESSES[Math.floor(Math.random() * WALLET_ADDRESSES.length)])

    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onClose()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(timer)
    }
  }, [isOpen, onClose])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Address copied to clipboard!")
  }

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter your email address")
      return
    }
    
    toast.success("Payment details submitted successfully!")
    toast.message("Please check your email for further instructions", {
      description: "We'll send your subscription details once payment is confirmed"
    })
    onClose()
  }

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <h3 className="mb-2 text-lg font-semibold">Generating Payment Details</h3>
            <p className="text-sm text-muted-foreground">Please wait...</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Image
              src="/phantom-icon.svg"
              width={24}
              height={24}
              alt="Phantom"
              className="rounded-lg"
            />
            Payment Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Amount:</span>
              <div className="text-right">
                <div className="text-xl font-bold">${subscription.price} USD</div>
                <div className="text-sm text-muted-foreground">
                  ({paymentMethod === "sol" ? `${subscription.solPrice} SOL` : `${solscribePrice} SOLSCRIBE`})
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Session expires in: </span>
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={paymentMethod === "sol" ? "default" : "outline"}
                onClick={() => setPaymentMethod("sol")}
                className="w-full"
              >
                Pay with SOL
              </Button>
              <Button
                variant={paymentMethod === "solscribe" ? "default" : "outline"}
                onClick={() => setPaymentMethod("solscribe")}
                className="w-full"
              >
                Pay with SOLSCRIBE
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium">
                Send {paymentMethod === "sol" ? `${subscription.solPrice} SOL` : `${solscribePrice} SOLSCRIBE`} to this address:
              </p>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <code className="flex-1 text-sm font-mono break-all">{currentWalletAddress}</code>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => copyToClipboard(currentWalletAddress)}
                  className="h-8 w-8"
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy address</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">
                  After sending the payment, email your transaction screenshot to{" "}
                  <Button
                    variant="link"
                    className="h-auto p-0"
                    onClick={() => copyToClipboard("support@solsubscription.com")}
                  >
                    support@solsubscription.com
                  </Button>
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full" onClick={handleSubmit}>
            <Send className="mr-2 h-4 w-4" />
            Submit Payment Details
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
