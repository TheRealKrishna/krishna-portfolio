import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Escape user input before embedding it in the notification HTML email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Server-side validation — never trust the client.
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, error: "All fields are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { success: false, error: "Message is too long." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  const receiver = process.env.CONTACT_RECEIVING_EMAIL || SMTP_USER;

  // If SMTP isn't configured (e.g. local dev / preview), accept the submission
  // gracefully so the UX still works, and log it server-side.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !receiver) {
    console.info(
      `[contact] SMTP not configured — message from ${firstName} ${lastName} <${email}> was not emailed.`
    );
    return NextResponse.json({ success: true, delivered: false });
  }

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    await transport.sendMail({
      from: SMTP_USER,
      replyTo: email,
      to: receiver,
      subject: `Portfolio contact — ${firstName} ${lastName}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(`${firstName} ${lastName}`)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, delivered: true });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json(
      { success: false, error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
