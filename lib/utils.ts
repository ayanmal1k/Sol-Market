import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to generate a consistent waitlist count based on subscription ID
export function getWaitlistCount(subscriptionId: string): number {
  // Use the subscription ID to generate a consistent number between 400-999
  let hash = 0;
  for (let i = 0; i < subscriptionId.length; i++) {
    hash = (hash << 5) - hash + subscriptionId.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Ensure positive number in range 400-999
  return Math.abs(hash % 600) + 400;
}
