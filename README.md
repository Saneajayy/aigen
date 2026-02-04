🚀 UGC.ai – AI Shorts Video Generator

UGC.ai is a production-ready AI SaaS platform that automatically generates short-form video content using AI. It helps creators and businesses quickly generate scripts, captions, and prompts for short videos (Reels, Shorts, TikTok) with minimal effort.

✨ Features

🤖 AI-Powered Content Generation
Generate short-form video scripts, captions, and prompts using Google Gemini API.

🔐 Authentication & Subscription Billing
Secure user authentication and paid feature access powered by Clerk.

🧠 Scalable Full-Stack Architecture
Built using a PERN stack (PostgreSQL, Express, React, Node.js).

🗄️ Production-Grade Database
PostgreSQL hosted on Neon for reliable and scalable data storage.

📊 Monitoring & Error Tracking
Real-time performance monitoring and error tracking using Sentry.

☁️ Serverless Deployment
Deployed on Vercel for fast, scalable, and reliable production delivery.

🛠️ Tech Stack
Frontend
--------
React
TypeScript

Backend
-------
Node.js
Express.js

Database
--------
PostgreSQL (Neon)

AI Integration
--------------
Google Gemini API

Authentication & Billing
------------------------
Clerk

Monitoring
----------
Sentry

Deployment
----------
Vercel

🏗️ Architecture Overview
------------------------

- Client-side React application for user interaction
- RESTful APIs built with Node.js & Express
- AI content generation handled via Google Gemini API
- PostgreSQL database for users, projects, and subscription data
- Serverless deployment with environment-based configuration

⚙️ Getting Started
Prerequisites
-------------
- Node.js (v18+ recommended)
- PostgreSQL database (Neon or local)
- Google Gemini API key
- Clerk account
- Sentry account (optional)

Installation
git clone https://github.com/your-username/ugc-ai.git
cd ugc-ai
npm install

Environment Variables

Create a .env file in the root directory:

DATABASE_URL=your_postgresql_url
GEMINI_API_KEY=your_gemini_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
SENTRY_DSN=your_sentry_dsn

Run Locally
npm run dev


The application will be available at:

http://localhost:3000

📦 Deployment

The application is deployed on Vercel using a serverless architecture.

To deploy your own version:

Push the repository to GitHub

Connect it to Vercel

Add environment variables in the Vercel dashboard

Deploy 🚀

📌 Project Status

✅ Core features completed
🔄 Actively improving UI, performance, and AI prompts
🧪 Future plans include analytics, templates, and multi-language support
