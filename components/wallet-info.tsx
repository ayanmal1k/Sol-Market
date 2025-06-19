"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, LogOut } from "lucide-react"
import { useWallet } from "./wallet-provider"
import { toast } from "sonner"
import Image from "next/image"

export default function WalletInfo() {
  const { isConnected, walletAddress, balance, disconnect } = useWallet()

  const copyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress)
      toast.success("Address copied to clipboard!")
    }
  }

  const formatAddress = (address: string | null) => {
    if (!address) return "No address"
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  if (!isConnected) return null

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Image
                src="/phantom-icon.svg"
                width={14}
                height={14}
                alt="Phantom"
                className="rounded"
              />
              Phantom
            </Badge>
            <span className="text-sm text-muted-foreground">Connected</span>
          </div>
          <Button variant="ghost" size="icon" onClick={disconnect}>
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Disconnect</span>
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Wallet Address</p>
              <Button variant="ghost" size="icon" onClick={copyAddress}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy address</span>
              </Button>
            </div>
            <p className="font-mono text-sm">{formatAddress(walletAddress)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Balance</p>
            <p className="text-xl font-semibold">{balance} SOL</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
