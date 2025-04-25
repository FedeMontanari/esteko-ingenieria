"use server";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

const {
  EMAIL_DOMAIN,
  EMAIL_CONTACT_ADDRESS,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
} = process.env;

// TODO: Troubleshoot email sometimes not sending
export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const emailTo = `${EMAIL_CONTACT_ADDRESS}@${EMAIL_DOMAIN}`;

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
    secure: true,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    debug: true,
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: emailTo,
    subject: `Contacto Web`,
    text: message,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);
    revalidatePath("/contacto");
    return { success: true };
  } catch (err) {
    console.error("Email sending failed:", err);
    return { success: false, error: "Email sending failed" };
  }
}
