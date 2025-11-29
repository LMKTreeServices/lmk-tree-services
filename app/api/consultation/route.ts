// app/api/consultation/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Import Nodemailer dynamically so it only runs on the server
  const { default: nodemailer } = await import('nodemailer')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    const body = await request.json()
    const { name, email, phone, service, message, images, imageNames } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format service name
    const serviceNames: { [key: string]: string } = {
      'tree-removal': 'Tree Removal',
      'tree-lopping': 'Tree Lopping & Pruning',
      'tree-health': 'Tree Health Assessment',
      'emergency': 'Emergency Services',
      'waste-removal': 'Green Waste Removal',
      'land-clearing': 'Land Clearing',
      'stump-grinding': 'Stump Grinding',
      'mulching': 'Mulching',
      'other': 'Other Service',
    }

    const serviceName = serviceNames[service] || service || 'General Enquiry'

    // Extract suburb from message if present
    const suburbMatch = message.match(/Suburb:\s*([^\n]+)/i)
    const suburb = suburbMatch ? suburbMatch[1].trim() : 'Not specified'

    // Clean message (remove suburb prefix if present)
    const cleanMessage = message.replace(/Suburb:\s*[^\n]+\n*/i, '').trim()

    // Format phone for display
    const formatPhone = (p: string) => {
      const cleaned = p.replace(/\D/g, '')
      if (cleaned.length === 10 && cleaned.startsWith('0')) {
        return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(
          7
        )}`
      }
      return p
    }
    const formattedPhone = formatPhone(phone)
    const firstName = name.split(' ')[0]

    // Prepare attachments for email if images exist
    const attachments =
      images && images.length > 0
        ? images.map((base64Image: string, index: number) => ({
            filename: imageNames?.[index] || `tree-photo-${index + 1}.jpg`,
            content: base64Image.split(',')[1],
            encoding: 'base64', // important for Nodemailer
          }))
        : []

    // Generate image preview HTML
    const imagePreviewHtml =
      images && images.length > 0
        ? `
        <tr>
          <td colspan="2" style="padding: 20px 8px 8px 8px;">
            <h3 style="color: #166534; margin: 0 0 12px 0; font-size: 16px;">📷 Attached Photos (${images.length})</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${images
                .map(
                  (img: string, idx: number) => `
                <img src="${img}" alt="Tree photo ${
                    idx + 1
                  }" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px; border: 2px solid #e5e7eb;" />
              `
                )
                .join('')}
            </div>
          </td>
        </tr>
      `
        : ''

    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || 'kyle@lmktreeservices.com.au'

    // ===== 1) EMAIL TO KYLE (THE LEAD) =====
    await transporter.sendMail({
      from: `LMK Tree Services <${process.env.GMAIL_USER}>`,
      to: notificationEmail,
      replyTo: email, // so reply goes to the customer
      subject: `🌳 New Quote Request: ${serviceName} - ${name} (${suburb})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            
            <div style="background: linear-gradient(135deg, #16a34a 0%, #166534 100%); color: white; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700;">🌳 New Quote Request!</h1>
              <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">A potential customer is waiting to hear from you</p>
            </div>
            
            <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
              
              <div style="margin-bottom: 24px;">
                <a href="tel:${phone.replace(
                  /\s/g,
                  ''
                )}" style="display: inline-block; background: #16a34a; color: white; text-decoration: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; text-align: center; font-size: 15px; margin-right: 12px;">
                  📞 Call ${firstName}
                </a>
                <a href="mailto:${email}" style="display: inline-block; background: #f3f4f6; color: #374151; text-decoration: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; text-align: center; font-size: 15px;">
                  ✉️ Email
                </a>
              </div>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 8px; font-weight: 600; color: #6b7280; width: 100px; font-size: 14px;">Name</td>
                  <td style="padding: 14px 8px; color: #111827; font-size: 15px; font-weight: 500;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 8px; font-weight: 600; color: #6b7280; font-size: 14px;">Phone</td>
                  <td style="padding: 14px 8px;">
                    <a href="tel:${phone.replace(
                      /\s/g,
                      ''
                    )}" style="color: #16a34a; text-decoration: none; font-weight: 600; font-size: 15px;">${formattedPhone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 8px; font-weight: 600; color: #6b7280; font-size: 14px;">Email</td>
                  <td style="padding: 14px 8px;">
                    <a href="mailto:${email}" style="color: #16a34a; text-decoration: none; font-size: 15px;">${email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 8px; font-weight: 600; color: #6b7280; font-size: 14px;">Suburb</td>
                  <td style="padding: 14px 8px; color: #111827; font-size: 15px;">📍 ${suburb}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 8px; font-weight: 600; color: #6b7280; font-size: 14px;">Service</td>
                  <td style="padding: 14px 8px;">
                    <span style="background: #dcfce7; color: #166534; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;">${serviceName}</span>
                  </td>
                </tr>
                ${imagePreviewHtml}
              </table>
              
              <div style="margin-top: 20px;">
                <h3 style="color: #166534; margin: 0 0 12px 0; font-size: 16px;">📝 Job Description</h3>
                <div style="background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #16a34a;">
                  <p style="margin: 0; color: #374151; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${cleanMessage}</p>
                </div>
              </div>
              
              <div style="margin-top: 24px; background: #fef3c7; border: 1px solid #f59e0b; padding: 16px; border-radius: 8px;">
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  <strong>⏰ Quick Tip:</strong> Responding within 1 hour increases your chance of winning this job by 7x!
                </p>
              </div>
              
            </div>
            
            <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
              <p style="margin: 0;">This lead was submitted via lmktreeservices.com.au</p>
            </div>
            
          </div>
        </body>
        </html>
      `,
      attachments,
    })

    // ===== 2) CONFIRMATION EMAIL TO CUSTOMER =====
    await transporter.sendMail({
      from: `LMK Tree Services <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks ${firstName}! We've received your quote request`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            
            <div style="background: linear-gradient(135deg, #16a34a 0%, #166534 100%); color: white; padding: 32px 24px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Thanks, ${firstName}! 🌳</h1>
              <p style="margin: 12px 0 0 0; opacity: 0.95; font-size: 16px;">Your quote request has been received</p>
            </div>
            
            <div style="background: white; padding: 32px 24px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
              
              <p style="color: #374151; font-size: 16px; line-height: 1.7; margin: 0 0 24px 0;">
                We've received your request for <strong style="color: #16a34a;">${serviceName}</strong>${
        suburb !== 'Not specified' ? ` in <strong>${suburb}</strong>` : ''
      } and Kyle is reviewing it now.
              </p>
              
              ${
                images && images.length > 0
                  ? `
                <div style="background: #dcfce7; padding: 16px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #16a34a;">
                  <p style="margin: 0; color: #166534; font-size: 14px;">
                    <strong>✅ ${images.length} photo${
                      images.length > 1 ? 's' : ''
                    } received</strong> — this helps us provide a more accurate quote!
                  </p>
                </div>
              `
                  : ''
              }
              
              <div style="background: #f9fafb; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
                <h2 style="color: #166534; margin: 0 0 16px 0; font-size: 18px;">📋 What happens next?</h2>
                <ol style="color: #374151; line-height: 2; margin: 0; padding-left: 20px; font-size: 15px;">
                  <li>Kyle reviews your request${
                    images && images.length > 0 ? ' and photos' : ''
                  }</li>
                  <li>We'll contact you within <strong>24 hours</strong></li>
                  <li>We'll arrange a free on-site assessment if needed</li>
                  <li>You'll receive a detailed, no-obligation quote</li>
                </ol>
              </div>
              
              <div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
                <p style="color: #dcfce7; margin: 0 0 12px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Need it done urgently?</p>
                <a href="tel:0429187791" style="display: inline-block; background: white; color: #166534; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 18px;">
                  📞 Call 0429 187 791
                </a>
              </div>
              
              <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
                <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0;">
                  Thanks for considering LMK Tree Services. We look forward to helping you!
                </p>
                <p style="color: #374151; font-size: 15px; margin: 16px 0 0 0;">
                  Cheers,<br>
                  <strong style="color: #16a34a;">Kyle</strong><br>
                  <span style="color: #6b7280; font-size: 14px;">LMK Tree Services</span>
                </p>
              </div>
              
            </div>
            
            <div style="text-align: center; padding: 24px; color: #9ca3af; font-size: 12px;">
              <p style="margin: 0 0 8px 0;"><strong style="color: #6b7280;">LMK Tree Services</strong></p>
              <p style="margin: 0 0 4px 0;">Servicing Gippsland & Melbourne's Outer South-East</p>
              <p style="margin: 0 0 4px 0;">📞 0429 187 791</p>
              <p style="margin: 16px 0 0 0; color: #d1d5db;">Fully Licensed & Insured</p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}
