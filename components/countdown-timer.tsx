"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export default function CountdownTimer() {
  const targetDate = new Date("2025-08-12T00:00:00")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    function updateCountdown() {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

        setTimeLeft({ days, hours, minutes })
      }
    }

    // Update immediately
    updateCountdown()

    // Then update every minute
    const timer = setInterval(updateCountdown, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-primary/5 p-8 my-8">
        <div className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="relative flex flex-col items-center justify-center text-center gap-6">
          <Badge className="bg-primary text-primary-foreground">
            <Clock className="mr-2 h-4 w-4" />
            Token Launch Countdown
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            $SCRIBE GOES LIVE IN
          </h2>
          <div className="flex gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">{timeLeft.days}</span>
              <span className="text-sm text-muted-foreground mt-2">Days</span>
            </div>
            <div className="text-4xl font-bold text-muted-foreground">:</div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">{timeLeft.hours}</span>
              <span className="text-sm text-muted-foreground mt-2">Hours</span>
            </div>
            <div className="text-4xl font-bold text-muted-foreground">:</div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-primary">{timeLeft.minutes}</span>
              <span className="text-sm text-muted-foreground mt-2">Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}