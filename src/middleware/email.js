import { transporter } from "../config/email.config.js";

export const sendVerifiactionCode= async (email, verificationCode) => {
    try {
       const response = await transporter.sendMail({
           from: '"Authentication" <testingpurpose8874@gmail.com>',
           to: email,
           subject: "Verify your Email",
           text: "Verify your Email", 
           html: verificationCode,
           });
        console.log("Verification email sent successfully",response);
    } catch (error) {
        console.error("Error sending verification email:", error);
    }
}
