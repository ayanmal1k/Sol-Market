"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Rocket, Star, Code, Building, Check } from "lucide-react"

interface Phase {
  id: number
  icon: React.ReactNode
  title: string
  date: string
  description: string
  features: string[]
  progress: number
  status: 'completed' | 'in-progress' | 'planned' | 'future'
}

export default function RoadmapSection() {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  
  const phases: Phase[] = [
    {
      id: 1,
      icon: <Building className="h-8 w-8" />,
      title: "Foundation & Core Architecture (Pre-TGE)",
      date: "Q2-Q3 2025",
      description: "Laying the groundwork for the first crypto-native subscription ecosystem on Solana.",
      features: [
        "Modular smart contracts for SOL, USDC, and $SCRIBE with auto-burn and staking vaults",
        "Phantom, Backpack, Solflare support; auto-discounts for stakers; event-based triggers",
        "DAO vaults and proposal registry for future on-chain voting",
        "Hooked revenue to daily $SCRIBE buyback + burn mechanism",
        "Wallet concurrency tests and auditor reviews",
        "Real-time subscription delivery using Bitrefill, Coinsbee, CryptoRefills",
        "Multi-region infra, AES-256 encryption, retry queues, stress testing, and audits",
        "Setup of social bots, multi-sig treasury, and analytics stack",
        "REST/GraphQL APIs for third-party integration",
        "UI/UX finalized; zero vesting; fair launch model"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      id: 2,
      icon: <Star className="h-8 w-8" />,
      title: "Token Launch & Service Activation (TGE)",
      date: "August 2025",
      description: "From architecture to activation — powering live subscriptions and the $SCRIBE economy.",
      features: [
        "No presale/team allocation; fair launch on Raydium/Meteora",
        "Time-weighted staking for premium plans and rewards",
        "Upgraded delivery engine with latency target under 25s",
        "DAO wallet, snapshot voting enabled",
        "Bounty programs, ambassador drives, and KOL outreach",
        "Netflix, Spotify, Canva, etc. activated for crypto-native payment",
        "Buyback + burn on every payment; real-time burn dashboard",
        "SolSubscribe API v1 + webhook system",
        "Post-launch audits and optional enterprise KYC"
      ],
      progress: 0,
      status: 'planned'
    },
    {
      id: 3,
      icon: <Code className="h-8 w-8" />,
      title: "Smart Subscriptions & Autonomous Payments",
      date: "Q1 2026",
      description: "From static plans to intelligent, self-custodial access networks.",
      features: [
        "Auto-renewals via Solana CPI + Clockwork; subsidized gas",
        "SubscribeGPT suggests plans, upgrades, and bundling",
        "Localized prices via IP + FX oracles (try.rn/switchboard)",
        "Fingerprint, OTP, and NFT-bound session support",
        "Detailed real-time service, wallet, and burn stats",
        "Transferable subscription NFTs (S-SNFTs) with access metadata",
        "Automated swaps (via Jupiter) and fee handling",
        "Embeddable widgets, creator bundles, referral tools",
        "Realms + TipLink + token-weighted voting system",
        "Onboard 40-50 new services and creators globally"
      ],
      progress: 0,
      status: 'future'
    },
    {
      id: 4,
      icon: <Rocket className="h-8 w-8" />,
      title: "Decentralized Access Economy (Final Protocol Layer)",
      date: "Q2 2026",
      description: "From subscription payments to governing global access infrastructure.",
      features: [
        "Top 20 stakers rotate to vote on protocol direction",
        "Influencers earn from staking-linked vaults",
        "DAO proposes & governs new service additions",
        "Add real-world services like EV charging and telehealth",
        "AI agent automates renewals, scheduling, and plan optimization",
        "Multi-sig with full community auditing + future chain expansion",
        "SDKs for wallet integration — Stripe for Subscriptions",
        "Revenue → buyback → DAO rewards → grants/burns. No inflation",
        "DAO takes full control; founders shift to advisory roles"
      ],
      progress: 0,
      status: 'future'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhaseIndex((prev) => (prev + 1) % phases.length)
    }, 30000) // 30 seconds

    return () => clearInterval(timer)
  }, [])

  const currentPhase = phases[currentPhaseIndex]

  const splitFeatures = (features: string[]) => {
    const midpoint = Math.ceil(features.length / 2);
    return [features.slice(0, midpoint), features.slice(midpoint)];
  }

  return (
    <section className="container py-16">
      <div className="mb-12 text-center reveal">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          Development Timeline
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          $SCRIBE Roadmap
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Our journey to revolutionize decentralized subscription on Solana.
        </p>
      </div>

      {/* Phase Icons Navigation */}
      <div className="flex justify-center gap-16 mb-16">
        {phases.map((phase, index) => (
          <div key={phase.id} className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium mb-2">Phase {index + 1}</p>
            <button
              onClick={() => setCurrentPhaseIndex(index)}
              className={`relative transition-all duration-300 transform group ${
                index === currentPhaseIndex 
                  ? 'scale-125 text-primary' 
                  : 'text-muted-foreground hover:text-primary hover:scale-110'
              }`}
            >
              <div className={`absolute inset-0 bg-primary/5 rounded-full w-16 h-16 -m-4 blur-lg transition-opacity ${
                index === currentPhaseIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              }`} />
              <div className="relative">
                {phase.icon}
              </div>
            </button>
            <p className="text-sm text-muted-foreground mt-2">{phase.date}</p>
          </div>
        ))}
      </div>

      {/* Current Phase Display */}
      <div className="relative">
        <Card 
          key={currentPhase.id}
          className="relative overflow-hidden border-2 border-primary/20 p-6 animate-fade-in"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-primary/10 p-3">
                {currentPhase.icon}
              </div>
              <div className="flex-1">
                <Badge variant={
                  currentPhase.status === 'completed' ? 'default' :
                  currentPhase.status === 'in-progress' ? 'secondary' :
                  'outline'
                }>
                  {currentPhase.date}
                </Badge>
                <h3 className="text-xl font-semibold mt-2">{currentPhase.title}</h3>
              </div>
            </div>
            <p className="mb-8 text-muted-foreground">{currentPhase.description}</p>
            
            {/* Two-column features layout */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {splitFeatures(currentPhase.features).map((column, colIndex) => (
                <div key={colIndex} className="space-y-3">
                  {column.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 ${
                        feature.includes('✓') ? 'text-muted-foreground line-through' : ''
                      }`}
                    >
                      <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                        currentPhase.status === 'completed' 
                          ? 'text-purple-500' 
                          : 'text-gray-400'
                      }`} />
                      <span className="flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {currentPhase.progress > 0 && (
              <div className="mt-8">
                <Progress value={currentPhase.progress} className="h-2" />
                <p className="mt-2 text-sm text-muted-foreground">
                  {currentPhase.progress}% Completed
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}