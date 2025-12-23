import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const jobType = formData.get("jobType") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    let attachments = [];

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Job Application" <${process.env.SMTP_USER}>`,
      to: "info@airandsunco.com",
      subject: `New Job Application – ${jobType}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${jobType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to send application" },
      { status: 500 }
    );
  }
}
