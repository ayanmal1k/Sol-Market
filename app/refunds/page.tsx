import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, ArrowRight, Ban, CheckCircle, Clock, FileText, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RefundPolicyPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          <FileText className="mr-1 h-3 w-3" />
          Official Policy
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Refund Policy</h1>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          Please read our refund policy carefully before making any purchases on Solcyclix.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="flex items-center text-2xl font-bold">
                <Ban className="mr-3 h-6 w-6 text-red-500" />
                No-Refund Policy
              </h2>

              <p className="text-lg">
                At Solsubscription, we maintain a strict <strong>no-refund policy</strong> on all purchases. Once
                payment has been made and processed, we are unable to provide refunds under normal circumstances. This
                policy is in place due to the digital nature of our products and services.
              </p>

              <p>
                When you purchase a subscription through our platform, you are paying for digital access credentials
                that are delivered promptly after payment confirmation. Due to the immediate delivery of these digital
                goods and the inability to "return" digital products, we cannot offer refunds once the transaction is
                complete.
              </p>

              <div className="my-8 rounded-lg bg-amber-50 p-6 dark:bg-amber-950/20">
                <h3 className="mb-3 flex items-center text-xl font-semibold text-amber-800 dark:text-amber-200">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Important Notice
                </h3>
                <p className="text-amber-700 dark:text-amber-300">
                  By proceeding with any purchase on Solsubscription, you acknowledge and agree to our no-refund policy.
                  Please ensure you understand this policy before completing any transaction.
                </p>
              </div>

              <h2 className="mt-10 flex items-center text-2xl font-bold">
                <ShieldAlert className="mr-3 h-6 w-6 text-primary" />
                Exceptions to Our Policy
              </h2>

              <p>
                While we maintain a strict no-refund policy, we recognize that certain exceptional circumstances may
                warrant consideration. Refunds may be considered <strong>only</strong> in the following situations:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    <strong>Service Error:</strong> If you are unable to access the subscription due to an error on our
                    part, and our support team is unable to resolve the issue within 48 hours.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    <strong>Double Charging:</strong> If our system erroneously charged you multiple times for the same
                    subscription.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    <strong>Incorrect Subscription:</strong> If you received access to a different subscription than
                    what you specifically ordered and paid for.
                  </span>
                </li>
              </ul>

              <div className="my-8 rounded-lg bg-muted p-6">
                <h3 className="mb-3 text-xl font-semibold">Refund Request Process</h3>
                <p className="mb-4">
                  If you believe your situation falls under one of the exceptions listed above, please follow these
                  steps:
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      1
                    </span>
                    <span>
                      Contact our support team at <strong>support@solsubscription.com</strong> within 48 hours of your
                      purchase.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      2
                    </span>
                    <span>
                      Include your transaction ID, wallet address used for payment, and detailed explanation of the
                      issue.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      3
                    </span>
                    <span>Provide any relevant screenshots or evidence to support your claim.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      4
                    </span>
                    <span>Our team will review your case and respond within 3-5 business days.</span>
                  </li>
                </ol>
              </div>

              <h2 className="mt-10 flex items-center text-2xl font-bold">
                <Clock className="mr-3 h-6 w-6 text-blue-500" />
                Refund Timeframe
              </h2>

              <p>
                If a refund is approved, please note that it may take 5-10 business days for the funds to be returned to
                your wallet. The exact timing depends on various factors including the blockchain network congestion and
                processing times.
              </p>

              <h2 className="mt-10 text-2xl font-bold">Additional Information</h2>

              <p>
                We strongly encourage all customers to thoroughly review the subscription details before making a
                purchase. If you have any questions about a subscription or our services, please contact our support
                team before completing your transaction.
              </p>

              <p>
                This refund policy is subject to change at any time without prior notice. The policy that was in effect
                at the time of your purchase will apply to your transaction.
              </p>

              <div className="mt-10 border-t pt-8">
                <p className="text-sm text-muted-foreground">Last Updated: June 13, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-muted-foreground">Still have questions about our refund policy?</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
