# CamperFix Website

Official website for CamperFix - Expert RV Technical Support mobile application.

## Overview

This is a simple, professional website created to meet Apple App Store requirements during the app registration process. The website provides essential information about the CamperFix app and includes all required legal pages.

## Pages Included

- **Home** (`/`) - Landing page with app description and features
- **Privacy Policy** (`/privacy`) - Comprehensive privacy policy for the app
- **Terms of Service** (`/terms`) - Complete terms and conditions
- **Support** (`/support`) - Contact information and FAQ

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
cd camperfix-website
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account/team
   - Link to existing project? **N**
   - What's your project's name? **camperfix-website**
   - In which directory is your code located? **./**
   - Want to override the settings? **N**

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - CamperFix website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/camperfix-website.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

6. Click "Deploy"

### Custom Domain Setup

After deployment, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your domain (e.g., `camperfix.com` or `www.camperfix.com`)
4. Follow the DNS configuration instructions provided by Vercel
5. Wait for DNS propagation (usually 24-48 hours)

## GitHub Setup

### Initial Commit

If you haven't already pushed to GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - CamperFix marketing website"

# Create main branch
git branch -M main

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/teamlandi/camperfix-website.git

# Push to GitHub
git push -u origin main
```

### Connect to Existing TeamLandi Repo

If integrating into the TeamLandi monorepo:

```bash
# From TeamLandi root directory
git add camperfix-website/
git commit -m "Add CamperFix website for Apple Store registration"
git push
```

## Project Structure

```
camperfix-website/
├── app/
│   ├── components/
│   │   └── Navigation.tsx      # Site navigation component
│   ├── privacy/
│   │   └── page.tsx             # Privacy Policy page
│   ├── support/
│   │   └── page.tsx             # Support page
│   ├── terms/
│   │   └── page.tsx             # Terms of Service page
│   ├── layout.tsx               # Root layout with navigation
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── public/                      # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Environment Variables

This project currently doesn't require any environment variables. If you add features like contact forms or analytics in the future, create a `.env.local` file:

```env
# Example for future use
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Customization

### Updating Content

All content is in the respective page files:
- Home: `app/page.tsx`
- Privacy: `app/privacy/page.tsx`
- Terms: `app/terms/page.tsx`
- Support: `app/support/page.tsx`

### Styling

The site uses Tailwind CSS. Update styles by modifying the className attributes in the TypeScript files, or add custom styles in `app/globals.css`.

### Colors

Current color scheme:
- Primary Blue: `#2563EB` (blue-600)
- Gray backgrounds: `#F9FAFB` (gray-50)
- Dark gray: `#1F2937` (gray-800)

## Apple App Store Requirements

This website satisfies Apple's requirements for app submission:

✅ Publicly accessible website URL
✅ Clear app description and purpose
✅ Privacy Policy page
✅ Terms of Service page
✅ Support/Contact information

## License

Copyright © 2024 CamperFix. All rights reserved.

## Support

For questions about this website:
- Email: support@camperfix.com
- Create an issue in the repository

## Development Team

- **Technical Architecture**: Nikolay Panchev
- **Frontend Development**: Nikolay Markov

---

**Note**: This is a simple marketing/informational website. The actual CamperFix mobile application is developed separately in the `camperfix/mobile-app` directory.
