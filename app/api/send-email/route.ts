import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_QzR8sYuK_BhB1CBT4ZTjkoXR5HarcUZmC');

export const POST = async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    const body = await req.json();
    try {
      const { name, email, phone, company, projectType, sourceLanguage, targetLanguage, volumeOfContent, subjectMatter, additionalProjectDetails, fileFormat, preferredFileFormat, additionalServices, budget, paymentMethod, date } = body;

      const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nProject Type: ${projectType}\nSource Language: ${sourceLanguage}\nTarget Language: ${targetLanguage}\nVolume of Content: ${volumeOfContent}\nSubject Matter: ${subjectMatter}\nAdditional Project Details: ${additionalProjectDetails}\nFile Format: ${fileFormat}\nPreferred File Format: ${preferredFileFormat}\nAdditional Services: ${additionalServices}\nBudget: ${budget}\nPayment Method: ${paymentMethod}\nDate: ${date}`;

      const { data, error } = await resend.emails.send({
        from: `Acme <onboarding@resend.dev>`,
        to: ['sales@hdlocalization.com'], 
        subject: 'New Quote Request',
        text: text
      });

      if (error) {
        return NextResponse.json({ error }, { status: 400 })
      } else {
        return NextResponse.json({ data });
      }
    } catch (error) {
      return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
    }
  } else {
    // Handle any other HTTP methods
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }
}
