import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email to:', email);
    console.log('Using Resend API key:', process.env.RESEND_API_KEY?.substring(0, 8) + '...');

    // Send welcome email
    const data = await resend.emails.send({
      // from: 'ramon@newsletter.nocodeguy.dev',
      from: "Ramon <ramon@newsletter.nocodeguy.dev>",
      to: email,
      subject: 'Welcome to my newsletter!',
      replyTo: 'hi@nocodeguy.dev',
      html: `
        <h2>I'm Ramon</h2>
        <p>Thank you for subscribing to my newsletter. You'll receive updates about:</p>
        <ul>
          <li>New AI tools and applications</li>
          <li>Tutorials and guides</li>
          <li>Tips for no-code development</li>
        </ul>
        <p>Stay tuned!</p>
      `
    });

    console.log('Resend API response:', data);

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!', data },
      { status: 200 }
    );
  } catch (error) {
    // Log the full error details
    console.error('Newsletter subscription error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      { 
        error: 'Failed to subscribe to the newsletter',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
