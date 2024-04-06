import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_QzR8sYuK_BhB1CBT4ZTjkoXR5HarcUZmC");

export const POST = async function handler(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const formData = await req.formData();

      const cvFile = formData.get("cv") as File;

      if (!cvFile) {
        return NextResponse.json(
          { error: "No CV file received." },
          { status: 400 },
        );
      }

      // Convert the file to a Buffer
      const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

      // Extract other form fields
      const otherFields: { [key: string]: any } = {};
      for (const [key, value] of Array.from(formData.entries())) {
        if (key !== "cv") {
          otherFields[key] = value;
        }
      }
      // Construct email text including other form fields
      let emailText = "Please find attached CV.\n\n";
      emailText += "Details:\n";
      for (const [key, value] of Object.entries(otherFields)) {
        emailText += `${key}: ${value}\n`;
      }

      // Send email with the CV file as attachment and other form fields in the text body
      const { data, error } = await resend.emails.send({
        from: `HD translation & localization <onboarding@resend.dev>`,
        to: ["jobs@hdlocalization.com"],
        subject: "New CV Submission",
        text: emailText,
        attachments: [{ filename: cvFile.name, content: cvBuffer }],
      });

      if (error) {
        return NextResponse.json(
          { error: "Error sending email." },
          { status: 500 },
        );
      }

      return NextResponse.json({ data: "Email sent successfully." });
    } catch (error) {
      return NextResponse.json(
        { error: "Internal server error." },
        { status: 500 },
      );
    }
  } else {
    // Handle any other HTTP methods
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
};
