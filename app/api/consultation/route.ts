// app/api/consultation/route.ts
import { NextResponse } from 'next/server'

// Make absolutely sure this runs in the Node.js runtime (not Edge)
export const runtime = 'nodejs'

export async function POST(request: Request) {
  const { default: nodemailer } = await import('nodemailer')

  // Debug: Check env vars
  console.log('Env check:', {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
    notif: process.env.NOTIFICATION_EMAIL,
  })

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Gmail env vars missing:', {
      hasUser: !!process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_APP_PASSWORD,
    })
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    const body = await request.json()
    const { name, email, phone, service, message, images, imageNames } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

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

    const suburbMatch = message.match(/Suburb:\s*([^\n]+)/i)
    const suburb = suburbMatch ? suburbMatch[1].trim() : 'Not specified'
    const cleanMessage = message.replace(/Suburb:\s*[^\n]+\n*/i, '').trim()

    const formatPhone = (p: string) => {
      const cleaned = p.replace(/\D/g, '')
      if (cleaned.length === 10 && cleaned.startsWith('0')) {
        return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`
      }
      return p
    }
    const formattedPhone = formatPhone(phone)
    const firstName = name.split(' ')[0]

    const attachments =
      images && images.length > 0
        ? images.map((base64Image: string, index: number) => ({
            filename: imageNames?.[index] || `tree-photo-${index + 1}.jpg`,
            content: base64Image.split(',')[1],
            encoding: 'base64',
          }))
        : []

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

    await transporter.sendMail({
      from: `LMK Tree Services <${process.env.GMAIL_USER}>`,
      to: notificationEmail,
      replyTo: email,
      subject: `🌳 New Quote Request: ${serviceName} - ${name} (${suburb})`,
      html: `<!DOCTYPE html><html><body>${imagePreviewHtml}</body></html>`,
      attachments,
    })

    await transporter.sendMail({
      from: `LMK Tree Services <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks ${firstName}! We've received your quote request`,
      html: `<!DOCTYPE html><html><body><h1>Thanks, ${firstName}! 🌳</h1></body></html>`,
    })

    return NextResponse.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error processing quote request:', {
      message: error?.message,
      code: error?.code,
      response: error?.response,
    })
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}
