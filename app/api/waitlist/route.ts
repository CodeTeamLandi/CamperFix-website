import { NextResponse } from 'next/server';

// Simple in-memory storage for now - replace with database in production
const waitlist: Array<{ email: string; timestamp: string; locale?: string }> = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const exists = waitlist.some(entry => entry.email === email);
    if (exists) {
      return NextResponse.json(
        { error: 'This email is already on our waitlist!' },
        { status: 400 }
      );
    }

    // Add to waitlist
    const entry = {
      email,
      timestamp: new Date().toISOString(),
      locale: request.headers.get('accept-language')?.split(',')[0] || 'en'
    };
    waitlist.push(entry);

    // Log to console (in production, save to database)
    console.log('✅ New waitlist signup:', entry);
    console.log(`📊 Total waitlist count: ${waitlist.length}`);

    return NextResponse.json({
      message: 'Successfully joined the waitlist!',
      count: waitlist.length
    });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check waitlist count (admin only in production)
export async function GET() {
  return NextResponse.json({
    count: waitlist.length,
    entries: waitlist.map(({ email, timestamp }) => ({
      email: email.replace(/(?<=.{2}).(?=.*@)/g, '*'), // Mask email for privacy
      timestamp
    }))
  });
}
