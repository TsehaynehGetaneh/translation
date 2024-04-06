import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_QzR8sYuK_BhB1CBT4ZTjkoXR5HarcUZmC");

export const POST = async function handler(req: NextRequest) {
  if (req.method === "POST") {
    const body = await req.json();
    try {
      const { fullname, email, phone, subject, message } = body;

      const text = `Full Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

      const { data, error } = await resend.emails.send({
        from: `HD translation & localization <onboarding@resend.dev>`,
        to: ["Contactus@hdlocalization.com"],
        subject: `${subject}`,
        text: text,
      });

      if (error) {
        return NextResponse.json({ error }, { status: 400 });
      } else {
        return NextResponse.json({ data });
      }
    } catch (error) {
      return NextResponse.json(
        { error: "An error occurred while sending the email." },
        { status: 500 },
      );
    }
  } else {
    // Handle any other HTTP methods
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
};
