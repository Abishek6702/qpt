"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(prevState, formData) {
  // Validate fields
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const company = formData.get("company");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all required fields (Name, Email, and Message).",
    };
  }

  // Basic email pattern validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  // Get Gmail environment variables from process.env
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  // If ADMIN_EMAIL is not set, default to EMAIL_USER so you receive emails by default
  const adminEmail = process.env.ADMIN_EMAIL || user;

  const mailContent = `
    New Contact Form Submission:
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Company: ${company || "Not provided"}
    
    Message:
    ${message}
  `;

  // Fallback for development/testing when Gmail environment variables are not configured
  if (!user || !pass) {
    console.log("\n--- CONTACT FORM SUBMISSION (LOCAL DEV / TESTING FALLBACK) ---");
    console.log(mailContent);
    console.log("------------------------------------------------------------\n");
    
    // Simulate network latency for better UX testing
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    return {
      success: true,
      warning: "Gmail environment variables (EMAIL_USER & EMAIL_PASS) are not configured. The submission was logged to the server console.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: pass,
      },
    });

    await transporter.sendMail({
      from: user, // Gmail SMTP requires the authenticated user email in 'from'
      replyTo: email, // Reply-to should be the person who filled the form
      to: adminEmail,
      subject: `New Contact Form Submission from ${name}`,
      text: mailContent,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 8px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 6px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Company:</td>
              <td style="padding: 6px 0;">${company || "Not provided"}</td>
            </tr>
          </table>
          <h3 style="margin-top: 25px; color: #4b5563;">Message:</h3>
          <p style="white-space: pre-wrap; background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #2563EB; font-size: 14px; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Error sending email via Nodemailer Gmail:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later or contact us directly at " + adminEmail,
    };
  }
}
