# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form on your portfolio.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported provider
4. Follow the setup instructions for your provider
5. **Save your Service ID** (you'll need this later)

### For Gmail:
- You'll need to enable "Less secure app access" or use an App Password
- Or use OAuth2 for better security

## Step 3: Create an Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
You have a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Save your Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy this key** (you'll need this later)

## Step 5: Configure Environment Variables

1. In your project, create a `.env` file in the `frontend` directory:

```bash
cd frontend
touch .env
```

2. Add your EmailJS credentials to `.env`:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials from Steps 2-4

## Step 6: Install Dependencies

The `@emailjs/browser` package is already added to `package.json`. Install it:

```bash
cd frontend
npm install
```

## Step 7: Test the Form

1. Start your development server:
```bash
npm start
```

2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email inbox for the message

## Step 8: Deploy

After testing locally:

1. Make sure your `.env` file is configured
2. **Important:** For GitHub Pages, you'll need to set environment variables differently since `.env` files aren't deployed

### Option A: Use GitHub Secrets (Recommended for production)

If you're using GitHub Actions or another CI/CD:
- Add environment variables as secrets in your repository settings

### Option B: Build-time Environment Variables

For Create React App, environment variables starting with `REACT_APP_` are embedded at build time.

1. Set environment variables before building:
```bash
export REACT_APP_EMAILJS_SERVICE_ID=your_service_id
export REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
export REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
npm run build
```

2. Or create a `.env.production` file (but **don't commit it** - add to `.gitignore`)

### Option C: Use a Backend Service (Most Secure)

For production, consider:
- Creating a simple backend API endpoint
- Using services like Formspree, Netlify Forms, or FormSubmit
- This keeps your EmailJS keys server-side

## Security Notes

⚠️ **Important:** 
- Your EmailJS Public Key will be visible in the client-side code
- This is okay for the public key, but never expose private keys
- Consider rate limiting on your EmailJS account
- Monitor your email usage

## Troubleshooting

### "EmailJS configuration is missing"
- Make sure your `.env` file is in the `frontend` directory
- Restart your development server after creating/modifying `.env`
- Check that variable names start with `REACT_APP_`

### Emails not sending
- Verify your EmailJS service is active
- Check that your email provider settings are correct
- Look at EmailJS dashboard logs for error messages
- Verify template variables match ({{from_name}}, {{from_email}}, etc.)

### CORS errors
- EmailJS should handle CORS automatically
- If issues persist, check EmailJS dashboard for any restrictions

## Alternative: Simple Backend Solution

If you prefer not to use EmailJS, you can:
1. Set up a simple Node.js/Express backend
2. Use nodemailer to send emails server-side
3. Create an API endpoint that your form calls

Would you like help setting up a backend solution instead?
