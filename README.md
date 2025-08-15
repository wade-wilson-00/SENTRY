
# SENTRY

[![Frontend: React](https://img.shields.io/badge/Frontend-React-blue)](https://reactjs.org)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-teal)](https://tailwindcss.com)
[![Animations: Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-lightgrey)](https://www.framer.com/motion/)
[![Backend: Node.js](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org)
[![Framework: Express.js](https://img.shields.io/badge/Framework-Express.js-lightgrey)](https://expressjs.com)
[![Database: MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)](https://www.mongodb.com)
[![Auth: JWT & bcrypt](https://img.shields.io/badge/Auth-JWT%20%26%20bcrypt-orange)](https://jwt.io)
[![AI: FastAPI](https://img.shields.io/badge/AI-FastAPI-blue)](https://fastapi.tiangolo.com)
[![Transformers: Hugging Face](https://img.shields.io/badge/Transformers-Hugging%20Face-purple)](https://huggingface.co/transformers)
[![APIs: Gemini](https://img.shields.io/badge/API-Gemini--)](https://developers.google.com/)

## Description

Inspired by Marvel Comics' “Sentry,” this is a **MERN-stack mental health web app** enabling users to securely journal, track their moods—with ML assistance—and access AI-powered coping tips and resources.

**Key Features**  
- ✍️ **Encrypted Journaling** – End-to-end encryption for personal entries.  
-  Sentiment Analysis – AI-driven, compassionate feedback.  
-  Mood Tracking – ML models infer emotional state from journals.  
-  Secure Auth – JWT-based sessions with bcrypt-hashed passwords.  
-  Responsive UI – Minimal, clean, and mobile-first design.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion  
- **Backend:** Node.js, Express.js, MongoDB, JWT, bcrypt  
- **AI Services:** Python FastAPI microservices using Gemini API & Hugging Face Transformers  
- **Other Tools:** Axios (API calls), dotenv (environment variables)

## Project Structure

```

SENTRY/
├── ai-service/         # FastAPI microservices for AI/ML tasks
├── client/             # Frontend code
│   └── react-app/
└── server/             # Backend API and core logic

````

## Installation & Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/wade-wilson-00/SENTRY.git
   cd SENTRY
````
2. Setup Environment Variables

Create .env files in the server and ai-service directories with the following values:

server/.env
