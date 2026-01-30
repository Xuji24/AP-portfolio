interface AdminNotificationTemplateProps {
  senderEmail: string;
  subject: string;
  message: string;
  websiteName: string;
}

export default function AdminNotificationTemplate({
  senderEmail,
  subject,
  message,
  websiteName,
}: AdminNotificationTemplateProps) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
              
              <tr>
                <td align="center" style="background-color:#0c1325; padding:25px 0;">
                  <h2 style="color:#ffffff; margin:0; font-size:22px;">New Contact Submission</h2>
                </td>
              </tr>
              
              <tr>
                <td style="padding:30px;">
                  <h2 style="margin:0 0 20px; color:#222; font-size:18px;">📬 New Message Received</h2>
                  
                  <table width="100%" cellpadding="12" cellspacing="0" style="background-color:#f9f9f9; border:2px solid #FFA500; border-radius:6px; margin:20px 0;">
                    <tr>
                      <td style="border-bottom:1px solid #ddd; padding-bottom:12px;">
                        <p style="margin:0; color:#888; font-size:12px; font-weight:bold; text-transform:uppercase;">From</p>
                        <p style="margin:5px 0 0 0; color:#333; font-size:15px;">
                          <a href="mailto:${senderEmail}" style="color:#FFA500; text-decoration:none; font-weight:bold;">
                            ${senderEmail}
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="border-bottom:1px solid #ddd; padding:12px 0;">
                        <p style="margin:0; color:#888; font-size:12px; font-weight:bold; text-transform:uppercase;">Subject</p>
                        <p style="margin:5px 0 0 0; color:#333; font-size:15px; font-weight:bold;">
                          ${subject}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;">
                        <p style="margin:0; color:#888; font-size:12px; font-weight:bold; text-transform:uppercase;">Message</p>
                        <p style="margin:10px 0 0 0; color:#333; font-size:15px; line-height:1.6; white-space:pre-wrap; word-wrap:break-word;">
                          ${message}
                        </p>
                      </td>
                    </tr>
                  </table>

                  <div style="margin:20px 0; padding:15px; background-color:#f0f0f0; border-left:4px solid #FFA500; border-radius:4px;">
                    <p style="margin:0; color:#555; font-size:13px;">
                      <strong>Quick Action:</strong> 
                      <a href="mailto:${senderEmail}?subject=Re: ${encodeURIComponent(subject)}" style="color:#FFA500; text-decoration:none; font-weight:bold;">
                        Reply to ${senderEmail.split("@")[0]}
                      </a>
                    </p>
                  </div>

                  <p style="color:#888; font-size:13px; margin-top:20px; border-top:1px solid #ddd; padding-top:15px;">
                    Sent via ${websiteName} Contact Form
                  </p>
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
