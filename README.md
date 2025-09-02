# HealthEE - AI-Powered Multilingual Health Assistant

**Live Demo:** [https://YOUR_VERCEL_DEPLOY_URL](https://https://healthee-anywhere.vercel.app/)

## Purpose

HealthEE is a web-based AI health assistant that provides users with:

- Personalized daily health tips.
- AI-powered answers to health questions.
- Guidance to consult physicians when necessary.
- Multilingual support (English, Yoruba, Igbo, Hausa, Swahili).
- Offline-ready tips for easy access anytime.

The goal is to improve health awareness, guide wellness practices, and demonstrate potential monetization via premium content.

---

## Features

- **Daily Health Tips**: Fetched dynamically from Supabase based on user’s preferred language.  
- **AI Health Assistant Chat**: Users can ask health-related questions; AI provides tips and guidance.  
- **Fallback to English**: If preferred language tips are unavailable.  
- **Future Monetization**: Paid features via Instasend integration.  
- **Privacy & Security**: Users sign in or create an account; only registered users can access premium content.

---

## Prompts Used

### 1. Lovable AI Prompts (Front-End & Chat)

- **Fetch Daily Health Tips**


- **AI Chat Guidance** coming soon
Friendly disclaimer: "I can guide you with general health and wellness tips, but I cannot replace a doctor..."

Actionable advice with 2–3 suggestions.

Follow-up question to continue the conversation.

If symptoms mentioned: "⚠️ Please seek professional medical help for diagnosis and treatment."


- **Demo Video Prompt** coming soon
- See daily health tips.

Ask the AI health assistant.

Switch languages.

Understand premium features.


### 2. Supabase Prompts (Backend)

- Create tables for `users` and `health_resources`.
- Insert sample multilingual health tips.
- Ensure dynamic fetching based on `users.preferred_language`.
- Fallback to English if tips are missing.

---

## Setup Instructions

1. **Clone the repo**  
```bash
git clone https://github.com/VeeCC-T/healthee.git
cd healthee

2. Install dependencies
npm install

3. Create .env.local in root folder and add:
NEXT_PUBLIC_SUPABASE_URL=https://knkbiuaizusuhurxkzxo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtua2JpdWFpenVzdWh1cnhrenhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NTc5MTcsImV4cCI6MjA3MjIzMzkxN30.YdIBXo9lZgxZykacN87Yaygh8YGYSBOxqUx8adEv7W8

4. Run locally
npm run dev
Access via http://localhost:3000

Deployment
Deployed on Vercel: https://https://healthee-anywhere.vercel.app/

Environment variables configured on Vercel for Supabase access

Credits
Frontend: Next.js, Tailwind CSS

Backend: Supabase (PostgreSQL)

AI: Lovable AI prompts for chat and tips

Design & UX: Self-directed implementation


> Replace `YOUR_VERCEL_DEPLOY_URL` and Supabase keys with your real values.

---

## **Step 2: Commit the README to GitHub**

Back in your terminal:

```bash
git add README.md
git commit -m "Add detailed README with purpose, prompts, and live URL"
git push origin main
