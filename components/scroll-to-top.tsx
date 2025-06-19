"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // Prevent scroll restoration on page reload
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual"
      }

      // Force scroll to top on initial load
      window.scrollTo(0, 0)
    }
  }, [])

  return null
}
