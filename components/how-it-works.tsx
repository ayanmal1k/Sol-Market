import { Wallet, ShoppingBag, Mail, CheckCircle, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Choose Subscription",
      description: "Browse our marketplace and select the subscription you want. Compare prices and read reviews.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: "Pay with SOL",
      description: "Complete your purchase using Solana. Send the exact amount to our secure wallet address.",
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Send Screenshot",
      description: "Email a screenshot of your payment to our support team along with your email address.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Get Access",
      description: "Receive your subscription credentials within 5 minutes. Start enjoying your premium service!",
    },
  ]

  return (
    <section className="container">
      <div className="mb-12 text-center reveal">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <MessageSquare className="mr-1 h-3 w-3" />
          Simple Process
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <MessageSquare className="mr-2 inline-block h-8 w-8 text-primary" />
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Getting your premium subscriptions is easy with Solcyclix. Follow these simple steps.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center reveal`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 animate-pulse">
              {step.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
