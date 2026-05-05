import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const email = formData.get('email') as string

  if (!email || !email.includes('@')) {
    return NextResponse.redirect(new URL('/?subscribe=error', req.url))
  }

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey || !audienceId) {
    console.log('Subscribe attempt (Resend not configured):', email)
    return NextResponse.redirect(new URL('/?subscribe=ok', req.url))
  }

  try {
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, unsubscribed: false }),
    })
  } catch (e) {
    console.error('Resend error:', e)
  }

  return NextResponse.redirect(new URL('/?subscribe=ok', req.url))
}
