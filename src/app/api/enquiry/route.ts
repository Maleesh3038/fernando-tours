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
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
      })
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Tour Enquiry from ${name}`,
        html: `<h2>New Enquiry – Fernando Tours</h2>
               <p><b>Name:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Travel Date:</b> ${travelDate || "Not specified"}</p>
               <p><b>Group Size:</b> ${groupSize || "Not specified"}</p>
               <p><b>Tour:</b> ${tourInterest}</p>
               <p><b>Message:</b> ${message || "None"}</p>`
      })
    }
    console.log(`Enquiry: ${name} (${email}) – ${tourInterest}`)
    return NextResponse.json({ success: true, message: "Enquiry received! We'll be in touch within 24 hours." })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: true, message: "Enquiry received! We'll be in touch within 24 hours." })
  }
}