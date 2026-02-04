UGC.ai – AI Shorts Video Generator

UGC.ai is a production-ready AI SaaS application that generates short-form video content using artificial intelligence.
It helps creators and businesses generate video scripts, captions, and content prompts for platforms such as YouTube Shorts, Instagram Reels, and TikTok.

Features

AI-based short-form video script generation

Automatic caption and prompt generation

Secure user authentication

Subscription-based access to paid features

Production-grade database storage

Error monitoring and performance tracking

Scalable serverless deployment

Tech Stack
Frontend

React

TypeScript

Backend

Node.js

Express.js

Database

PostgreSQL

Neon (Serverless PostgreSQL)

AI Integration

Google Gemini API

Authentication and Billing

Clerk

Monitoring

Sentry

Deployment

Vercel

Architecture Overview

Client-side application built using React and TypeScript

RESTful backend APIs developed with Node.js and Express

AI-powered content generation handled via Google Gemini API

PostgreSQL database used for users, projects, and subscription data

Serverless deployment with environment-based configuration

Getting Started
Prerequisites

Node.js (version 18 or higher)

PostgreSQL database (Neon or local)

Google Gemini API key

Clerk account

Sentry account (optional)

Installation

Clone the repository and install dependencies:

git clone https://github.com/your-username/ugc-ai.git
cd ugc-ai
npm install

Environment Variables

Create a .env file in the root directory and add the following values:

DATABASE_URL=your_postgresql_url
GEMINI_API_KEY=your_gemini_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
SENTRY_DSN=your_sentry_dsn

Running the Application Locally

Start the development server:

npm run dev


The application will be available at:

http://localhost:3000

Deployment

The application is deployed using Vercel with a serverless architecture.

Deployment steps:

Push the repository to GitHub

Connect the repository to Vercel

Configure environment variables in the Vercel dashboard

Deploy the application

Project Status

Core features completed

Performance and UI improvements in progress

Planned features include analytics, templates, and multi-language support
