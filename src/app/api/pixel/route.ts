import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = '1002543129235548';
const CAPI_TOKEN = 'EAAMgrLDoDZBoBR3kSMooZB7waNni70R7nrAhrc71BBAt9hHUi7ZAVphsQ1Gq5eiPjoS2vAc55sZAN5ZBb19y4JSXJcvk2Wikj7VW1fBuAwrkqxDf5JZBfHBTikYz06lV3Bl885fxDdZBaZCBj7lypnwlfExPB9QVtEFUdNvFDc4BxB9TTb5KttbbcqTIXRFbqQZDZD';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_name, event_id, event_source_url, fbp, fbc } = body;

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '';
    const userAgent = req.headers.get('user-agent') || '';

    const payload = {
      data: [{
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        action_source: 'website',
        event_source_url,
        user_data: {
          client_ip_address: ip,
          client_user_agent: userAgent,
          ...(fbp ? { fbp } : {}),
          ...(fbc ? { fbc } : {}),
        },
      }],
      access_token: CAPI_TOKEN,
    };

    await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
