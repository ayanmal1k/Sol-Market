"use client"

import { useEffect } from "react"
import { setupScrollReveal } from "@/utils/scroll-reveal"

export default function ScrollReveal() {
  useEffect(() => {
    const cleanup = setupScrollReveal()
    return cleanup
  }, [])

  return null
}
