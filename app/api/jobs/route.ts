import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false },
};

export async function POST(req: Request) {
  try {
    // Parse multipart/form-data
    const data = await new Promise<any>((resolve, reject) => {
      const form = formidable({ multiples: false });
      form.parse(req as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { name, email, jobType, message } = data.fields;
    const resume = data.files?.file;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send mail
    const mailOptions: any = {
      from: `"Job Application" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Job Application: ${jobType} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nJob Type: ${jobType}\n\nMessage:\n${message}`,
    };

    // Attach resume if present
    if (resume) {
      mailOptions.attachments = [
        {
          filename: resume.originalFilename,
          content: fs.readFileSync(resume.filepath),
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}
