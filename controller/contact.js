import { transporter } from "../config/nodemailer.js";
import { Contact } from "../models/contactme.js";

export const contactController = async (req, res) => {
  const { Name, emailid, Message } = req.body;
  if (!Name || !emailid || !Message) {
    return res.status(400).json({ success: false, message: "details missing" });
  }
  try {
    await Contact.create({ Name, emailid, Message });

    const emailOption = {
  from: process.env.SENDER_EMAIL,         
  to: "tanishbatra893@gmail.com",          
  replyTo: emailid,
  subject: `New message from ${Name}`,
  text: `Name: ${Name}\nEmail: ${emailid}\nMessage:\n${Message}`,
};
await transporter.sendMail(emailOption);
    return res.json({ success: true, message: "Message stored & email sent" });
  } catch (error) {
    console.error("contactController error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
