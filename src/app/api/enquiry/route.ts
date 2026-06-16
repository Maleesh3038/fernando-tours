import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, travelDate, groupSize, tourInterest, message } = body

  if (!name || !email) {
    return NextResponse.json({ success: false, message: "Name and email are required." }, { status: 400 })
  }

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const EMAIL_TO = process.env.EMAIL_TO || "fernandotourshikka@gmail.com"

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Fernando Tours <onboarding@resend.dev>",
          to: [EMAIL_TO],
          reply_to: email,
          subject: `✈️ New Tour Enquiry from ${name} — ${tourInterest}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:12px;overflow:hidden">
              
              <div style="background:linear-gradient(135deg,#1a3d2b,#2d6a4f);padding:24px 30px;text-align:center">
                <h1 style="color:white;margin:0;font-size:20px">🌿 New Tour Enquiry</h1>
                <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px">Fernando Tours — fernandotourslk.com</p>
              </div>

              <div style="padding:28px 30px;background:white">
                <table style="width:100%;border-collapse:collapse">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;width:140px">👤 Name</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#1a1a2e">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">📧 Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a2e"><a href="mailto:${email}" style="color:#C8860A">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">🌿 Tour</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;color:#C8860A">${tourInterest}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">📅 Travel Date</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a2e">${travelDate || "Not specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">👥 Group Size</td>
                    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#1a1a2e">${groupSize || "Not specified"}</td>
                  </tr>
                  ${message ? `
                  <tr>
                    <td style="padding:10px 0;color:#666;font-size:13px;vertical-align:top">💬 Message</td>
                    <td style="padding:10px 0;color:#1a1a2e;line-height:1.6">${message}</td>
                  </tr>
                  ` : ""}
                </table>
              </div>

              <div style="padding:20px 30px;background:#f9f9f9;text-align:center;border-top:1px solid #eee">
                <a href="mailto:${email}?subject=Re: Your Sri Lanka Tour Enquiry — ${tourInterest}&body=Dear ${name},%0A%0AThank you for your enquiry about our ${tourInterest}.%0A%0A" 
                  style="display:inline-block;background:#C8860A;color:white;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:700;font-size:14px">
                  ✉️ Reply to ${name}
                </a>
                <p style="color:#999;font-size:12px;margin:12px 0 0">Click Reply in your email — it will go directly to ${email}</p>
              </div>

              <div style="padding:16px 30px;background:#1a3d2b;text-align:center">
                <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0">Fernando Tours · Hikkaduwa, Sri Lanka · fernandotourslk.com</p>
              </div>
            </div>
          `
        })
      })

      const data = await res.json()
      console.log("Resend response:", data)
    }

    console.log(`New enquiry: ${name} (${email}) — ${tourInterest}`)
    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours. 🌿"
    })

  } catch (err) {
    console.error("Email error:", err)
    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours. 🌿"
    })
  }
}