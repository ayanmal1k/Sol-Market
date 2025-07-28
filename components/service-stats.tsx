"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Package, Users, Target } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: number
  suffix?: string
  prefix?: string
  color: string
  glowColor: string
  delay?: number
}

function StatCard({ icon, title, value, suffix = "", prefix = "", color, glowColor, delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(counter)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <Card
      className={`relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{
        borderColor: color,
        boxShadow: isVisible ? `0 0 20px ${glowColor}` : "none",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-2 -right-2 h-4 w-4 rounded-full opacity-60 animate-ping"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute top-1/2 -left-1 h-2 w-2 rounded-full opacity-40 animate-pulse"
          style={{ backgroundColor: color, animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-2 right-1/3 h-1 w-1 rounded-full opacity-50 animate-bounce"
          style={{ backgroundColor: color, animationDelay: "0.5s" }}
        />
      </div>

      <CardContent className="relative z-10 p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-300"
            style={{
              borderColor: color,
              backgroundColor: `${color}20`,
              boxShadow: `0 0 15px ${glowColor}`,
            }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{title}</h3>
          <div className="text-3xl font-bold" style={{ color }}>
            {prefix}
            <span className="font-mono">{displayValue.toLocaleString()}</span>
            {suffix}
          </div>
        </div>

        {/* Progress bar animation */}
        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full transition-all duration-2000 ease-out"
            style={{
              backgroundColor: color,
              width: isVisible ? "100%" : "0%",
              boxShadow: `0 0 10px ${glowColor}`,
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default function ServiceStats() {
  // Using colors from the gradient logo: hsl(25, 95%, 65%), hsl(320, 85%, 60%), hsl(280, 75%, 65%)
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Monthly Growth",
      value: 250,
      suffix: "%",
      prefix: "+",
      color: "hsl(25, 95%, 65%)", // Orange from gradient
      glowColor: "hsla(25, 95%, 65%, 0.3)",
      delay: 0,
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Subscriptions Available",
      value: 40,
      suffix: "+",
      color: "hsl(320, 85%, 60%)", // Pink from gradient
      glowColor: "hsla(320, 85%, 60%, 0.3)",
      delay: 300,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Active Users",
      value: 3000,
      suffix: "+",
      color: "hsl(280, 75%, 65%)", // Purple from gradient
      glowColor: "hsla(280, 75%, 65%, 0.3)",
      delay: 600,
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Success Rate",
      value: 99,
      suffix: ".9%",
      color: "hsl(200, 85%, 60%)", // Complementary blue
      glowColor: "hsla(200, 85%, 60%, 0.3)",
      delay: 900,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-2 w-2 rounded-full bg-primary/30 animate-ping" />
        <div className="absolute top-1/3 right-20 h-1 w-1 rounded-full bg-accent/40 animate-pulse" />
        <div className="absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-secondary/20 animate-bounce" />
        <div
          className="absolute top-1/2 right-1/3 h-1 w-1 rounded-full bg-primary/50 animate-ping"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/50">
            <TrendingUp className="mr-1 h-3 w-3 animate-pulse" />
            SYSTEM STATUS
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Service Statistics
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real-time performance metrics and platform statistics
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
