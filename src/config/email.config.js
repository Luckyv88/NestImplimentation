import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "testingpurpose8874@gmail.com",
    pass: "xjit dvlc gsje pdut",
  },
});


