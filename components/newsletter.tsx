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
    <section className="bg-primary/5">
      <div className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center reveal">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 animate-bounce-slow">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl reveal">Stay Updated</h2>
          <p className="mb-8 text-muted-foreground reveal">
            Subscribe to our newsletter to get notified about new deals, platform subscriptions, and exclusive offers.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary animate-scale-in">
              <CheckCircle className="h-5 w-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 sm:mx-auto sm:max-w-md reveal">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
