# UGC.ai – AI Shorts Video Generator

------------------------------------------------------------

UGC.ai is a production-ready AI SaaS application that generates short-form video content using artificial intelligence.

It enables creators and businesses to generate video scripts, captions, and prompts for platforms such as YouTube Shorts, Instagram Reels, and TikTok.

============================================================

## FEATURES

------------------------------------------------------------

- AI-based short-form video script generation
- Automatic caption and prompt generation
- Secure user authentication
- Subscription-based access to paid features
- Production-grade database storage
- Error monitoring and performance tracking
- Scalable serverless deployment

============================================================

## TECH STACK

------------------------------------------------------------

### Frontend
- React
- TypeScript

------------------------------------------------------------

### Backend
- Node.js
- Express.js

------------------------------------------------------------

### Database
- PostgreSQL
- Neon (Serverless PostgreSQL)

------------------------------------------------------------

### AI Integration
- Google Gemini API

------------------------------------------------------------

### Authentication and Billing
- Clerk

------------------------------------------------------------

### Monitoring
- Sentry

------------------------------------------------------------

### Deployment
- Vercel

============================================================

## ARCHITECTURE OVERVIEW

------------------------------------------------------------

- Client-side application built using React and TypeScript
- RESTful APIs developed with Node.js and Express
- AI content generation handled via Google Gemini API
- PostgreSQL database for users, projects, and subscriptions
- Serverless deployment with environment-based configuration

============================================================

## GETTING STARTED

------------------------------------------------------------

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database (Neon or local)
- Google Gemini API key
- Clerk account
- Sentry account (optional)

------------------------------------------------------------

### Installation

```bash
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
Application will be available at:

http://localhost:3000
============================================================

DEPLOYMENT
The application is deployed using Vercel with a serverless architecture.

Steps:

Push the repository to GitHub

Connect the repository to Vercel

Add environment variables in the Vercel dashboard

Deploy the application

============================================================

PROJECT STATUS
Core features completed

Performance and UI improvements in progress

Planned features include analytics and templates

============================================================
