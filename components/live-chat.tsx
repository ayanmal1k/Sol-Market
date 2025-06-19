"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isConnectionInterrupted, setIsConnectionInterrupted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Hi there! I'm Sarah from Solsubscription support. How can I help you today?",
            sender: "agent",
            timestamp: new Date(),
          },
        ])
        setIsTyping(false)
      }, 1000)
      setIsTyping(true)
    }
  }, [isOpen, messages.length])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "" || isConnectionInterrupted) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages([...messages, userMessage])
    setInputValue("")

    // Show typing indicator
    setIsTyping(true)

    // Simulate connection interruption after a delay
    setTimeout(() => {
      setIsTyping(false)
      setIsConnectionInterrupted(true)
    }, 1500)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90",
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "absolute bottom-16 right-0 w-80 transform overflow-hidden rounded-lg shadow-xl transition-all duration-300 sm:w-96",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
        )}
      >
        <Card className="border-2">
          <CardHeader className="bg-primary/10 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-primary">
                  <AvatarImage src="/placeholder.svg" alt="Support Agent" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Support</p>
                  <div className="flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="bg-primary/20">
                Live Chat
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="h-80 overflow-y-auto p-3">
            <div className="flex flex-col gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex max-w-[80%] animate-fade-in flex-col rounded-lg p-3",
                    message.sender === "agent"
                      ? "bg-muted self-start rounded-tl-none"
                      : "bg-primary/10 self-end rounded-tr-none",
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="mt-1 self-end text-xs text-muted-foreground">{formatTime(message.timestamp)}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex max-w-[80%] animate-fade-in flex-col self-start rounded-lg rounded-tl-none bg-muted p-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary"></span>
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-primary"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-primary"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                </div>
              )}

              {isConnectionInterrupted && (
                <div className="mt-2 animate-fade-in rounded-lg bg-red-500/10 p-3 text-center">
                  <AlertCircle className="mx-auto mb-2 h-5 w-5 text-red-500" />
                  <p className="text-sm font-medium text-red-500">Connection to agent interrupted</p>
                  <p className="text-xs text-muted-foreground">Please try again later</p>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <CardFooter className="border-t p-3">
            <div className="flex w-full gap-2">
              <Input
                placeholder={isConnectionInterrupted ? "Connection lost..." : "Type your message..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage()
                }}
                disabled={isConnectionInterrupted}
                className={cn(isConnectionInterrupted && "text-muted-foreground")}
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={isConnectionInterrupted || inputValue.trim() === ""}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
