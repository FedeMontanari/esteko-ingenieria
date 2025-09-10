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
      rejectUnauthorized: false,
    },
    requireTLS: true,
    debug: true,
  });

  // Verify SMTP connection configuration
  try {
    await transporter.verify();
    console.log("SMTP connection verified successfully");
  } catch (error) {
    console.error("SMTP connection verification failed:", error);
    return { success: false, error: "SMTP connection verification failed" };
  }

  const mailOptions = {
    from: `"Formulario Web" <${EMAIL_USER}>`,
    replyTo: `${name} <${email}>`,
    to: emailTo,
    subject: `Contacto Web - ${name}`,
    text: message,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Mensaje:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
    `,
    headers: {
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
      Importance: "high",
      "X-Mailer": "Formulario Web",
    },
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);
    revalidatePath("/contacto");
    return { success: true };
  } catch (err) {
    console.error("Email sending failed:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";
    return { success: false, error: `Email sending failed: ${errorMessage}` };
  }
}
