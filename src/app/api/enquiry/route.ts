import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, travelDate, groupSize, tourInterest, message } = body

  if (!name || !email) {
    return NextResponse.json({ success: false, message: "Name and email are required." }, { status: 400 })
  }

  try {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const nodemailer = require("nodemailer")
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })

      await transporter.sendMail({
        from: `"Fernando Tours Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: `"${name}" <${email}>`,
        subject: `✈️ New Tour Enquiry from ${name} — ${tourInterest}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:12px;overflow:hidden">
            
            <!-- Header -->
            <div style="background:linear-gradient(135deg,#1a3d2b,#2d6a4f);padding:24px 30px;text-align:center">
              <h1 style="color:white;margin:0;font-size:20px">🌿 New Tour Enquiry</h1>
              <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px">Fernando Tours — fernandotourslk.com</p>
            </div>

            <!-- Body -->
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

            <!-- Reply Button -->
            <div style="padding:20px 30px;background:#f9f9f9;text-align:center;border-top:1px solid #eee">
              <a href="mailto:${email}?subject=Re: Your Sri Lanka Tour Enquiry — ${tourInterest}&body=Dear ${name},%0A%0AThank you for your enquiry about our ${tourInterest}.%0A%0A" 
                style="display:inline-block;background:#C8860A;color:white;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:700;font-size:14px">
                ✉️ Reply to ${name}
              </a>
              <p style="color:#999;font-size:12px;margin:12px 0 0">Or simply click Reply in your email client — it will go directly to ${email}</p>
            </div>

            <!-- Footer -->
            <div style="padding:16px 30px;background:#1a3d2b;text-align:center">
              <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0">Fernando Tours · Hikkaduwa, Sri Lanka · fernandotourslk.com</p>
            </div>
          </div>
        `
      })
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