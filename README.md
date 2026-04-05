<div align="center">
  <br />
  <img src="client/public/logo.svg" alt="AIGen Logo" width="100"/>
  <h1>🌟 AIGen Studio</h1>
  <p><strong>A Next-Generation Full-Stack AI Image & Video Generation Platform</strong></p>
  <p>
    <img alt="React" src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript">
    <img alt="Express" src="https://img.shields.io/badge/Express-5.2-green?style=for-the-badge&logo=express">
    <img alt="Prisma" src="https://img.shields.io/badge/Prisma-7.3-indigo?style=for-the-badge&logo=prisma">
    <img alt="PostgreSQL" src="https://img.shields.io/badge/Node.js-24-green?style=for-the-badge&logo=node.js">
  </p>
</div>

<br />

## 📖 About The Project

**AIGen Studio** is a state-of-the-art Generative AI Web Application built for creators. It leverages cutting-edge Google Generative AI capabilities coupled with a high-performance React Frontend and a robust Express/Prisma Backend to provide a seamless digital asset creation pipeline. 

From lightning-fast AI prompt digestion to complex aspect-ratio-aware video generations, AIGen brings your creativity to life.

---

## ✨ Key Features

- 🎨 **Generative AI Workflows**: High-quality Image & Video generation utilizing Google GenAI.
- 🔐 **Secure Authentication**: Iron-clad security via **Clerk** Authentication with active webhook syncing.
- ☁️ **Cloud Storage Integration**: Seamless asset uploading, storage, and retrieval optimized with **Cloudinary**.
- 🚀 **Responsive & Animated UI**: Crafted with **TailwindCSS** and **Framer Motion** for butter-smooth interactions.
- 💳 **Integrated Pricing Architecture**: Comprehensive billing models using active payment endpoints.
- 📈 **Error Observability**: Deep application monitoring powered securely by **Sentry**.

---

## 🛠 Tech Stack

### Client (Frontend)
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Lenis
- **Authentication**: [@clerk/clerk-react](https://clerk.com/)

### Server (Backend)
- **Runtime Environment**: [Node.js](https://nodejs.org/en) & [Express](https://expressjs.com/)
- **Database & ORM**: [PostgreSQL] via [Prisma](https://www.prisma.io/) Configured for NeonDB
- **AI Integrations**: [@google/genai](https://ai.google.dev/)
- **Media Optimization**: [Cloudinary](https://cloudinary.com/)
- **Monitoring**: [Sentry](https://sentry.io/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/Saneajayy/aigen.git
cd aigen
```

### 2. Environment Variables setup
Make sure to create a `.env` file in both the `client` and `server` directories based on your local requirements.
> **Note:** The server strictly requires Google GenAI keys, Prisma Database URLs, and Clerk Webhook signers.

### 3. Install & Run Server
```bash
cd server
npm install
npm run server
```

### 4. Install & Run Client (in a new terminal)
```bash
cd client
npm install
npm run dev
```

---

## 🌎 Deployment (Vercel)

AIGen Studio has been rigorously configured for native Vercel Edge & Severless operations.

1. **Deploying Server**: Import the repository and select `/server` as root. Set up your production `.env` variables and verify Vercel executes standard `npm run build` and `prisma generate` natively.
2. **Deploying Client**: Import similarly utilizing the `/client` directory. Assure `VITE_BASEURL` bridges identical domain parameters against the Vercel-generated server URL!

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/Saneajayy">Ajay Kumar</a></p>
</div>
