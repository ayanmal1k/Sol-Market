import { NextResponse } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json')

// Initialize waitlist function
function initializeWaitlist() {
  try {
    // Ensure the data directory exists
    if (!fs.existsSync(path.dirname(WAITLIST_FILE))) {
      fs.mkdirSync(path.dirname(WAITLIST_FILE), { recursive: true })
    }

    // Create waitlist file if it doesn't exist
    if (!fs.existsSync(WAITLIST_FILE)) {
      fs.writeFileSync(WAITLIST_FILE, JSON.stringify({ emails: [] }, null, 2), { mode: 0o666 })
    }

    return true
  } catch (error) {
    console.error('Error initializing waitlist:', error)
    return false
  }
}

export async function POST(req: Request) {
  try {
    // Initialize waitlist file and directory
    const initialized = initializeWaitlist()
    if (!initialized) {
      throw new Error('Failed to initialize waitlist storage')
    }

    const { email, subscriptionName } = await req.json()

    if (!email || !subscriptionName) {
      return NextResponse.json(
        { error: 'Email and subscription name are required' },
        { status: 400 }
      )
    }

    // Read existing waitlist
    let waitlistData
    try {
      const fileContent = fs.readFileSync(WAITLIST_FILE, 'utf-8')
      waitlistData = JSON.parse(fileContent)
    } catch (error) {
      // If reading fails, start with empty waitlist
      waitlistData = { emails: [] }
    }

    // Check if email already exists for this subscription
    const alreadyExists = waitlistData.emails.some(
      (entry: any) => entry.email === email && entry.subscriptionName === subscriptionName
    )

    if (alreadyExists) {
      return NextResponse.json(
        { message: 'Already on waitlist', success: true },
        { status: 200 }
      )
    }

    // Add new email with timestamp and subscription info
    waitlistData.emails.push({
      email,
      subscriptionName,
      timestamp: new Date().toISOString()
    })

    // Write back to file
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlistData, null, 2), { mode: 0o666 })

    return NextResponse.json({ success: true, message: 'Successfully added to waitlist' })
  } catch (error) {
    console.error('Error saving to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    )
  }
}