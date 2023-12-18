import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EmailMessage } from "@/types/mail";

export async function POST(request: { json: any }) {
  try {
    const { message }: { message: EmailMessage } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "zoho",
      host: "smtpro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD_EMAIL,
      },
    });

    const mailOption = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: message.email,
      subject: "The Marketing Department Via Email",
      html: `
        <h3>Hello ${message.name}</h3> 
        <p>Thank you for choosing our package. We appreciate your business!</p>
        
        <h4>Order Details:</h4>
        <ul>
          <li>Receipt: ${message.prices}</li> 
        </ul>

        <p>If you have any questions or concerns, please don't hesitate to contact our team.</p>

        <h4>Contact Information:</h4>
        <p>Email: support@example.com</p>
        <p>Phone: 123-456-7890</p>

        <p>Thank you again for choosing The Marketing Department. We look forward to serving you again in the future!</p>
      `,
    };

    await transporter.sendMail(mailOption);
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
