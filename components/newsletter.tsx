"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="container py-4">
      <div className="relative overflow-hidden rounded-lg bg-primary/5 px-4 py-8 md:px-6">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="relative grid gap-4 md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">Stay Updated</h2>
            <p className="text-muted-foreground">
              Get notified about new subscriptions and exclusive deals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-md border bg-background px-4 py-2"
            />
            <Button type="submit" size="lg" className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
