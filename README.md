
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

🛡️ Sentry — Your Mental Health Companion

Sentry is a MERN-stack mental health companion web application designed to help users write journals, track mood trends, and receive AI-powered coping suggestions.
With a focus on privacy, emotional well-being, and clean UI, Sentry integrates machine learning and AI microservices to provide a supportive experience.

✨ Features

✍ Secure Journaling — Store thoughts with AES encryption for privacy.

🤖 AI Sentiment Analysis — Get friendly, human-like feedback from AI.

😃 Mood Tracking — Add moods via emoji & ML-based mood detection.

📊 Mood Trends Dashboard — Weekly & monthly emotional insights with charts.

🔒 User Authentication — Secure sign-up/login with JWT and password hashing.

🌐 Responsive Design — Modern, mobile-friendly interface with smooth animations.

🛠 Tech Stack

Frontend: React, Tailwind CSS, Framer Motion, React Markdown, React Icons
Backend: Node.js, Express.js, MongoDB, JWT, bcrypt
AI Microservices: FastAPI (Gemini API, Hugging Face Transformers, PyTorch)
Other Tools: Chart.js for visualization, Axios for API requests, dotenv for configuration

📂 Project Structure
Sentry/
│── ai-service/      # AI and ML microservices (FastAPI)
│── client/          # React frontend
│── server/          # Express.js backend
│── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/wade-wilson-00/SENTRY.git
cd SENTRY

2️⃣ Configure Environment Variables

Create a .env file in both server/ and ai-service/ directories with:

PORT=your_port
MONGODB_URI=your_mongo_connection_string
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET=your_jwt_secret_here

3️⃣ Install Dependencies
Frontend (client/)
cd client/react-app
npm install react-router-dom axios framer-motion react-markdown react-icons

Backend (server/)
cd server
npm install express axios cors dotenv mongoose jsonwebtoken bcrypt

AI & ML Microservices (ai-service/)
cd ai-service
pip install python-dotenv fastapi pydantic uvicorn requests transformers google-generativeai torch

🚀 Running the App
Backend
cd server
npm run dev

Frontend
cd client/react-app
npm start

AI Service
cd ai-service
uvicorn main:app --reload

📜 License

MIT License — Free to use and modify for learning purposes.

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss the proposed update.
