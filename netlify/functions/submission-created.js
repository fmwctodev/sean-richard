const RECIPIENT_EMAIL = process.env.NOTIFICATION_EMAIL || 'contact@seanrichard.com';

export const handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body);
    const { name, email, building, reason } = payload.data;
    const formName = payload.form_name;
    const submittedAt = payload.created_at;

    const emailContent = {
      to: RECIPIENT_EMAIL,
      from: 'noreply@seanrichard.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
New form submission received from ${formName}

---

Name: ${name}
Email: ${email}

What they're building:
${building}

Why they reached out:
${reason}

---

Submitted at: ${new Date(submittedAt).toLocaleString('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'full',
  timeStyle: 'long'
})}

Reply directly to: ${email}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #000; color: #fff; padding: 20px; margin-bottom: 20px; }
    .header h1 { margin: 0; font-size: 18px; font-weight: 600; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #666; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #000; }
    .message-box { background: #fff; border: 1px solid #e0e0e0; padding: 15px; margin-top: 8px; white-space: pre-wrap; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 13px; color: #666; }
    .reply-link { display: inline-block; background: #000; color: #fff; padding: 10px 20px; text-decoration: none; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Contact Form Submission</h1>
  </div>
  <div class="content">
    <div class="field">
      <div class="field-label">Name</div>
      <div class="field-value">${escapeHtml(name)}</div>
    </div>
    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
    </div>
    <div class="field">
      <div class="field-label">What they're building</div>
      <div class="message-box">${escapeHtml(building)}</div>
    </div>
    <div class="field">
      <div class="field-label">Why they reached out</div>
      <div class="message-box">${escapeHtml(reason)}</div>
    </div>
    <a href="mailto:${escapeHtml(email)}?subject=Re: Your inquiry to Sean Richard" class="reply-link">Reply to ${escapeHtml(name)}</a>
  </div>
  <div class="footer">
    Submitted on ${new Date(submittedAt).toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'long'
    })}
  </div>
</body>
</html>
      `.trim(),
    };

    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: emailContent.from,
          to: emailContent.to,
          subject: emailContent.subject,
          text: emailContent.text,
          html: emailContent.html,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Resend API error:', errorData);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to send email notification' }),
        };
      }

      console.log('Email sent successfully via Resend');
    } else {
      console.log('No RESEND_API_KEY configured. Email would have been sent:', {
        to: emailContent.to,
        subject: emailContent.subject,
      });
      console.log('Form submission data:', { name, email, building, reason });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submission processed successfully' }),
    };
  } catch (error) {
    console.error('Error processing submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
