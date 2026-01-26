# Ticketmasterss – Lead Generation Landing Page

A high-performance, responsive landing page modeled after Ticketmaster. This project is designed for lead generation, featuring a functional search form that captures user inquiries and sends them directly to a specified email via EmailJS.

## 🚀 Features

- Modern UI/UX: Fully responsive design inspired by Ticketmaster’s blue branding (#026CDF)
- Lead Generation System: Custom search modal capturing Name, Email, Phone, and Search Query
- Instant Notifications: Real-time email alerts via EmailJS
- Optimized Performance: Uses Next.js next/image and local assets
- Rich Content Sections: Trending, Sports, Arts, Family, and Cities (mock data)

## 🛠️ Tech Stack

- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Icons: Lucide React
- Backend / Mail: EmailJS (Client-side integration)

## 🏁 Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd ticketmasterss-landing
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Setup

Create a file named `.env.local` in the project root:

```env
# General Settings
NEXT_PUBLIC_TM_PHONE_NUMBER="+1 (555) 000-0000"

# EmailJS Configuration
NEXT_PUBLIC_EMAIL_JS_SERVICE_ID="service_xxxxxx"
NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID="template_xxxxxx"
NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID="user_xxxxxx"
```

Replace the placeholder values with your actual EmailJS credentials. Restart the development server after setting environment variables.

### Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📧 EmailJS Setup

Create an account at https://www.emailjs.com and complete the following steps:

- Create a Service (Gmail) to obtain `SERVICE_ID`
- Create an Email Template to obtain `TEMPLATE_ID`
- Get your `PUBLIC_ID` from Account Settings

Your EmailJS template must include the following variables:

```
{{user_name}}
{{user_email}}
{{user_phone}}
{{search_query}}
{{search_location}}
{{search_date}}
```

Paste this code into Template:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Lead Notification</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; margin-top: 20px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

        <tr>
            <td style="background-color: #026CDF; padding: 30px 40px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Ticket Lead</h1>
                <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 14px;"> captured via Website Search</p>
            </td>
        </tr>

        <tr>
            <td style="padding: 40px 40px 20px 40px;">
                <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0;">
                    <strong>Success!</strong> You have received a new inquiry. Here are the details of the potential customer:
                </p>
            </td>
        </tr>

        <tr>
            <td style="padding: 0 40px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 20px;">
                            <h3 style="color: #026CDF; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">👤 Contact Information</h3>
                            <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">
                                <strong>Name:</strong> <span style="color: #1e293b;">{{user_name}}</span>
                            </p>
                            <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">
                                <strong>Email:</strong> <a href="mailto:{{user_email}}" style="color: #026CDF; text-decoration: none;">{{user_email}}</a>
                            </p>
                            <p style="margin: 0; color: #475569; font-size: 14px;">
                                <strong>Phone:</strong> <a href="tel:{{user_phone}}" style="color: #026CDF; text-decoration: none;">{{user_phone}}</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding: 0 40px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px;">
                    <tr>
                        <td style="padding: 20px;">
                            <h3 style="color: #026CDF; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">🔍 Search Request</h3>
                            <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">
                                <strong>Looking For:</strong> <span style="font-weight: bold; color: #0f172a;">{{search_query}}</span>
                            </p>
                            <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">
                                <strong>Location:</strong> {{search_location}}
                            </p>
                            <p style="margin: 0; color: #475569; font-size: 14px;">
                                <strong>Preferred Date:</strong> {{search_date}}
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding: 40px; text-align: center;">
                <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                    This lead was securely captured via your landing page form.<br>
                    &copy; 2026 Ticketmasterss Lead System
                </p>
            </td>
        </tr>

    </table>

    <div style="height: 40px;"></div>

</body>
</html>
```

Save it.

## 📁 Project Structure

```text
├── app/
│   ├── layout.js          # Global layout
│   └── page.js            # Main entry point
├── components/
│   ├── Header.jsx
│   ├── HeroSearch.jsx
│   ├── TrendingCarousel.jsx
│   ├── CategorySection.jsx
│   ├── SponsoredEvents.jsx
│   └── Footer.jsx
├── public/
│   └── images/
└── .env.local             # Ignored by Git
```

## 🚀 Deployment

Push the repository to GitHub. Import the project into Vercel. Add the same environment variables from `.env.local` in the Vercel Dashboard under Settings → Environment Variables, then deploy.

© 2026 Ticketmasterss Project
