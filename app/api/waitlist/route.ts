import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, subscriptionName } = await req.json()

    if (!email || !subscriptionName) {
      return NextResponse.json(
        { error: 'Email and subscription name are required' },
        { status: 400 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist! We will notify you when it becomes available.' 
    })
    
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}