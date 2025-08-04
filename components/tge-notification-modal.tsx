"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Clock } from "lucide-react"

interface TGENotificationModalProps {
  subscriptionName: string
}

export default function TGENotificationModal({ subscriptionName }: TGENotificationModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal when component mounts
    setIsOpen(true)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary animate-pulse" />
            Available at TGE
          </DialogTitle>
          <DialogDescription>
            {subscriptionName} will be available for purchase after our Token Generation Event (TGE) on
            August 2025. Follow us for updates and be the first to know when it launches!
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex flex-col gap-4">
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() => window.open("https://t.me/SolSubscribe", "_blank")}
          >
            <i className="fa-brands fa-telegram h-5 w-5" />
            Join Telegram Community
          </Button>
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() => window.open("https://x.com/Solsubscribe", "_blank")}
          >
            <i className="fa-brands fa-x-twitter h-5 w-5" />
            Follow on X
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}