"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu, Search, Wallet, Sun, Moon, Heart, ChevronDown } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { useTheme } from "next-themes"
import { useWallet } from "./wallet-provider"
import WalletConnectModal from "./wallet-connect-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { isConnected, walletAddress, walletType, balance, disconnect } = useWallet()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Subscriptions", path: "/subscriptions" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
  ]

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const handleWalletClick = () => {
    if (isConnected) {
      // If connected, show dropdown is handled by DropdownMenu
      return
    } else {
      setIsWalletModalOpen(true)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center gap-2 pb-6">
                  <Image src="/solistryx-logo-clean.png" width={32} height={32} alt="SolScribe Logo" />
                  <span className="text-xl font-bold">SolScribe</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === route.path ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {route.name}
                    </Link>
                  ))}
                  <Link
                    href="/wishlist"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/wishlist" ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    Wishlist
                  </Link>
                </nav>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm font-medium">Theme:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme("light")}
                    className={cn(theme === "light" ? "bg-primary/10" : "")}
                  >
                    <Sun className="h-4 w-4 mr-1" /> Light
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className={cn(theme === "dark" ? "bg-primary/10" : "")}
                  >
                    <Moon className="h-4 w-4 mr-1" /> Dark (Default)
                  </Button>
                </div>
                {/* Mobile Wallet Section */}
                <div className="mt-6 pt-6 border-t">
                  {isConnected ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Phantom</Badge>
                        <span className="text-sm text-muted-foreground">Connected</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Address</p>
                        <code className="text-sm font-mono">{walletAddress ? formatAddress(walletAddress) : ""}</code>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Balance</p>
                        <p className="font-semibold">{balance} SOL</p>
                      </div>
                      <Button variant="outline" size="sm" onClick={disconnect} className="w-full">
                        Disconnect Wallet
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => setIsWalletModalOpen(true)} className="w-full gap-2">
                      <Wallet className="h-4 w-4" />
                      Connect Wallet
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <Image src="/solistryx-logo-clean.png" width={32} height={32} alt="SolScribe Logo" />
              <span className="hidden text-xl font-bold sm:inline-block">SolScribe</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {routes.map((route) => (
                  <NavigationMenuItem key={route.path}>
                    <Link href={route.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === route.path ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {route.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            {isSearchOpen ? (
              <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search subscriptions..."
                  className="w-[200px] pl-8 md:w-[300px]"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            <ModeToggle />

            {/* Desktop Wallet */}
            {isConnected ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="hidden gap-2 sm:flex">
                    <Image
                      src="/phantom-icon.svg"
                      width={16}
                      height={16}
                      alt="Phantom"
                      className="rounded"
                    />
                    <span className="hidden lg:inline">{walletAddress ? formatAddress(walletAddress) : ""}</span>
                    <span className="lg:hidden">Wallet</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <div className="p-3 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Connected Wallet</span>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Image
                          src="/phantom-icon.svg"
                          width={14}
                          height={14}
                          alt="Phantom"
                          className="rounded"
                        />
                        Phantom
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Address</p>
                      <code className="text-sm font-mono">{walletAddress ? formatAddress(walletAddress) : ""}</code>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground">Balance</p>
                      <p className="font-semibold">{balance} SOL</p>
                    </div>
                  </div>
                  <DropdownMenuItem onClick={disconnect} className="text-red-600">
                    Disconnect Wallet
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button className="hidden gap-2 sm:flex" onClick={handleWalletClick}>
                <Image
                  src="/phantom-icon.svg"
                  width={16}
                  height={16}
                  alt="Phantom"
                  className="rounded"
                />
                Connect Wallet
              </Button>
            )}

            <Button size="icon" className="sm:hidden" onClick={handleWalletClick}>
              <Wallet className="h-5 w-5" />
              <span className="sr-only">Connect Wallet</span>
            </Button>
          </div>
        </div>
      </header>

      <WalletConnectModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
    </>
  )
}
