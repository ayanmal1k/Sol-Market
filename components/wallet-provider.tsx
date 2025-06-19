"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "sonner"

interface WalletContextType {
  isConnected: boolean
  walletAddress: string | null
  walletType: "phantom" | null
  balance: string
  connectPhantom: () => Promise<void>
  disconnect: () => void
  sendTransaction: (amount: string, recipient: string) => Promise<string | null>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

interface WalletProviderProps {
  children: ReactNode
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [walletType, setWalletType] = useState<"phantom" | null>(null)
  const [balance, setBalance] = useState("0.00")

  // Check if wallet is already connected on mount
  useEffect(() => {
    checkExistingConnection()
  }, [])

  const checkExistingConnection = async () => {
    try {
      // Check Phantom
      if (typeof window !== "undefined" && window.solana?.isPhantom) {
        const response = await window.solana.connect({ onlyIfTrusted: true })
        if (response.publicKey) {
          setIsConnected(true)
          setWalletAddress(response.publicKey.toString())
          setWalletType("phantom")
          await getPhantomBalance(response.publicKey.toString())
        }
      }
    } catch (error) {
      console.log("No existing wallet connection found")
    }
  }

  const getPhantomBalance = async (address: string) => {
    try {
      // Here you would typically make a call to get SOL balance
      // For now setting a placeholder value
      setBalance("0.00")
    } catch (error) {
      console.error("Error getting Phantom balance:", error)
      setBalance("0.00")
    }
  }

  const connectPhantom = async () => {
    try {
      if (!window.solana?.isPhantom) {
        toast.error("Phantom wallet not found. Please install Phantom wallet.")
        window.open("https://phantom.app/", "_blank")
        return
      }
      const response = await window.solana.connect()
      if (response.publicKey) {
        setIsConnected(true)
        setWalletAddress(response.publicKey.toString())
        setWalletType("phantom")
        await getPhantomBalance(response.publicKey.toString())
        toast.success("Phantom wallet connected successfully!")
      }
    } catch (error) {
      console.error("Error connecting to Phantom:", error)
      toast.error("Failed to connect to Phantom wallet")
    }
  }

  const disconnect = () => {
    if (window.solana) {
      window.solana.disconnect()
    }
    setIsConnected(false)
    setWalletAddress(null)
    setWalletType(null)
    setBalance("0.00")
    toast.success("Wallet disconnected")
  }

  const sendTransaction = async (amount: string, recipient: string) => {
    // Implement Phantom transaction logic here if needed
    return null
  }

  const value: WalletContextType = {
    isConnected,
    walletAddress,
    walletType,
    balance,
    connectPhantom,
    disconnect,
    sendTransaction,
  }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean
      connect: (options?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: { toString: () => string } }>
      disconnect: () => Promise<void>
      signTransaction: (transaction: any) => Promise<any>
    }
  }
}
