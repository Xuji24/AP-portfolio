

interface EmailTemplateProps {
  name: string;
  subject: string;
  message: string;
  websiteName: string;
}

export default function EmailTemplate({ name, subject, message, websiteName }: EmailTemplateProps) {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message Received</title>
            </head>
            <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
                <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
                    
                    <tr>
                        <td align="center" style="background-color:#0c1325; padding:25px 0;">
                        <h2 style="color:#ffffff; margin:0; font-size:22px;">${websiteName}</h2>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding:30px;">
                        <h2 style="margin:0 0 10px; color:#222;">Hi ${name},</h2>
                        <p style="color:#555; font-size:15px; line-height:1.6;">
                            Thank you for contacting us! We've received your message and will review it as soon as possible.
                        </p>

                        <table width="100%" cellpadding="8" cellspacing="0" style="background-color:#f9f9f9; border:1px solid #ddd; border-radius:6px; margin:20px 0;">
                            <tr>
                            <td style="font-size:15px; color:#333;">
                                <strong>Subject:</strong> ${subject}<br><br>
                                ${message}
                            </td>
                            </tr>
                        </table>

                        <p style="color:#555; font-size:15px; line-height:1.6;">
                            We'll get back to you as soon as possible.<br><br>
                            — <strong>${websiteName},</strong>
                        </p>

                        <div style="text-align:center; margin-top:25px;">
                            <a href="https://${websiteName}" 
                            style="background-color:#FFA500; color:#ffffff; text-decoration:none; padding:12px 30px; border-radius:6px; font-weight:bold; display:inline-block;">
                            Visit Our Website
                            </a>
                        </div>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="background-color:#f4f4f4; padding:15px; font-size:12px; color:#888;">
                        © 2025 ${websiteName}. All rights reserved.
                        </td>
                    </tr>

                    </table>
                </td>
                </tr>
            </table>
            </body>
        </html>
    `;
}