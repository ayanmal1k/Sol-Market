import { NextResponse } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json')

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(WAITLIST_FILE))) {
  fs.mkdirSync(path.dirname(WAITLIST_FILE), { recursive: true })
}

// Ensure the waitlist file exists with initial structure
if (!fs.existsSync(WAITLIST_FILE)) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify({ emails: [] }, null, 2))
}

export async function POST(req: Request) {
  try {
    const { email, subscriptionName } = await req.json()

    // Read existing waitlist
    const waitlistData = JSON.parse(fs.readFileSync(WAITLIST_FILE, 'utf-8'))

    // Add new email with timestamp and subscription info
    waitlistData.emails.push({
      email,
      subscriptionName,
      timestamp: new Date().toISOString()
    })

    // Write back to file
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlistData, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    )
  }
}