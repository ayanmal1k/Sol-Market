import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  subscriptionName: string
}

export default function WaitlistModal({ isOpen, onClose, subscriptionName }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subscriptionName,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error joining waitlist:', error)
      // Could add error state handling here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
        </DialogHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-muted-foreground text-sm">
              Join the waitlist for {subscriptionName} to get notified when it becomes available.
            </div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-center text-primary">
              <Check className="h-12 w-12" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-semibold">Successfully Joined!</h3>
              <p className="text-muted-foreground text-sm">
                You have been added to the waitlist. We will notify you when {subscriptionName} becomes available.
              </p>
            </div>
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}