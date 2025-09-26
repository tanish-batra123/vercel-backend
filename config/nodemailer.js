import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config(); 
export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP connection error:", err);
  } else {
    console.log("SMTP server ready");
  }
});
