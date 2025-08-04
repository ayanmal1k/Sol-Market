import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletProvider } from "@/components/wallet-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LiveChat from "@/components/live-chat"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "sonner"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
})

export const metadata: Metadata = {
  title: "SOLSUBSCRIBE | Platform Subscriptions Marketplace",
  description:
    "Buy premium platform subscriptions with $SCRIBE. Netflix, Spotify, Adobe, and more at discounted prices.",
  icons: {
    icon: [
      {
        url: "/solistryx-logo-clean.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/solistryx-logo-clean.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/solistryx-logo-clean.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/solistryx-logo-clean.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/solistryx-logo-clean.png" type="image/png" />
        <link rel="apple-touch-icon" href="/solistryx-logo-clean.png" />
        <link rel="shortcut icon" href="/solistryx-logo-clean.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${bricolage.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <WalletProvider>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <LiveChat />
            </div>
            <Toaster />
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
