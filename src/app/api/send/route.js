import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['ramazansaidgalip@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      reply_to: email,
      text: `From: ${email}\n\nMessage: ${message}`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
} 