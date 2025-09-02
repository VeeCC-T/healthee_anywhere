# HealthEE - AI-Powered Multilingual Health Assistant

**Live Demo:** [https://healthee-anywhere.vercel.app/](https://https://healthee-anywhere.vercel.app/)

## Purpose

HealthEE is a web-based AI health assistant that provides users with:

- Personalized daily health tips.
- AI-powered answers to health questions.
- Guidance to consult physicians when necessary.
- Multilingual support (English, Yoruba, Igbo, Hausa, Swahili).
- Offline-ready tips for easy access anytime.

The goal is to improve health awareness, guide wellness practices, and demonstrate potential monetization via premium content.

## Core Features 

- **Daily Health Tips**: Fetched dynamically from Supabase based on user’s preferred language.  
- **AI Health Assistant Chat**: Users can ask health-related questions; AI provides tips and guidance.  
- **Fallback to English**: If preferred language tips are unavailable.  
- **Premium content**: Paid features via Instasend integration.  (coming soon)
- **Privacy & Security**: Users sign in or create an account; only registered users can access premium content.
- Offline Support – Previously fetched tips are accessible offline.

---

## Prompts Used
1. Initial Project Prompt to Lovable
“Create an AI Community Health Assistant web app that is offline-aware, multilingual, and provides personalized health guidance, daily tips, and AI chat support. Use Supabase for database storage.”

2. Fetch Health Tips Prompt
“Update my project code so the 'Daily Health Tips' section loads live tips from Supabase based on the user's preferred language. Include English fallback if tips are missing.”

3. AI Chat Assistant Prompt
“Update the AI Assistant chat interface so responses include:

### 2. Supabase Prompts (Backend)

- Create tables for `users` and `health_resources`.
- Insert sample multilingual health tips.
- Ensure dynamic fetching based on `users.preferred_language`.
- Fallback to English if tips are missing.

- **AI Chat Guidance** coming soon
A friendly disclaimer: 'I can guide you with general health and wellness tips, but I cannot replace a doctor. For serious or persistent issues, please consult a physician.'

Actionable advice with 2–3 clear suggestions relevant to the user’s query.

A follow-up question to keep the conversation going.

If symptoms are mentioned, end with: '⚠️ Please seek professional medical help for diagnosis and treatment.'”

## How to Use / Demo Guide
Open the app at https://healthee.vercel.app.

Read daily tips under “Daily Health Tips”.

Ask questions in the AI chat box for personalized guidance.

Follow AI suggestions and consult a doctor if needed.

Premium resources will be available soon via InstaSend for additional insights


- **Demo Video Prompt** coming soon
- See daily health tips.

Ask the AI health assistant.

Switch languages.

Understand premium features.

## Tech Stack & Approach

Frontend: Next.js (React, TypeScript, Tailwind CSS)

Backend / Database: Supabase (for user data, preferred language, health tips storage)

AI Features: Lovable AI (prompt-driven generation of chat responses and dynamic content)

Deployment: Vercel
---

*## Notes

The app is designed for hackathon pitching and rapid prototyping.

Premium content via InstaSend will allow users to access exclusive health tips once integrated.

Multilingual support ensures broader accessibility.

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
