"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet } from "lucide-react"
import Image from "next/image"
import { useWallet } from "./wallet-provider"

interface WalletConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  const { connectPhantom } = useWallet()

  const handlePhantomConnect = async () => {
    await connectPhantom()
    onClose()
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
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Connect your Phantom wallet to start using SOLSUBSCRIBE.
          </p>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-16 justify-start gap-4 hover:bg-primary/5"
              onClick={handlePhantomConnect}
            >
              <div className="relative h-10 w-10">
                <Image
                  src="/phantom-icon.svg"
                  alt="Phantom"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold">Phantom</div>
                <div className="text-sm text-muted-foreground">Solana wallet</div>
              </div>
              <Badge variant="secondary">Recommended</Badge>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
