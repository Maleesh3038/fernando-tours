import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.formData();
  const name = body.get('name')?.toString() || 'Guest';
  const email = body.get('email')?.toString() || 'no-reply@example.com';
  const message = body.get('message')?.toString() || '';

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASSWORD || 'password',
    },
  });

  await transporter.sendMail({
    from: `Fernando Tours <${process.env.SMTP_USER || 'no-reply@example.com'}>`,
    to: process.env.ENQUIRY_RECIPIENT || 'hello@fernandotours.lk',
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
  });

  return NextResponse.json({ success: true, message: 'Enquiry sent.' });
}
