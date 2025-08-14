# 🛡️ Sentry — Mental Health Companion App

Sentry is a MERN-stack mental health-focused web application that allows users to write journals, track mood trends with ML, and receive AI-powered coping tips.  
It ensures privacy through encryption and promotes emotional well-being.

---

## 📌 Features
- ✍️ **Journaling** — Securely store your thoughts (encrypted for privacy)
- 🤖 **AI Sentiment Analysis** — Friendly feedback from AI
- 😃 **Mood Tracking** — Emoji-based mood input + ML-powered mood detection
- 📊 **Mood Trends** — Weekly/Monthly mood insights with charts
- 🔒 **Secure User Accounts** — Authentication & hashed data
- 🌐 **Responsive UI** — Clean and modern frontend

---

🛠 Tech Stack

Frontend: React, Tailwind CSS, Framer Motion, Chart.js
Backend: Node.js, Express.js, MongoDB, JWT, bcrypt
AI Services: Python FastAPI microservices using Gemini API & Hugging Face Transformers
Other Tools: Axios for API calls, dotenv for environment variables

---

## 📂 Folder Structure
Sentry/
│── ai-service/      # FastAPI microservices for AI & ML analysis
│── client/          # React frontend
│   └── react-app/   # Main frontend application
│── server/          # Express backend API
│── README.md        # Project documentation


## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wade-wilson-00/SENTRY.git
   cd sentry
   
2️⃣ Setup Environment Variables

Create .env files in the server and ai-service directories with the following values:

server/.env
   PORT=your_port
   MONGODB_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret_here

ai-service/.env
   OPENAI_API_KEY=your_openai_api_key_here
   GEMINI_API_KEY=your_gemini_api_key_here

3️⃣ Install Dependencies
Frontend 
    cd client/react-app
    npm install react-router-dom axios framer-motion react-markdown react-icons 
    
Backend
    cd server
    npm install express axios cors dotenv mongoose jsonwebtoken bcrypt

AI / ML Microservices
    cd ai-service
    pip install dotenv fastapi pydantic uvicorn transformers google-generativeai torch

4️⃣ Run the Application
Frontend
    cd client/react-app
    npm run dev

Backend
    cd server
    node server.js

AI ML MicroService
    cd ai-service
    uvicorn emotion_analyzer:app --reload --port 8002 #For Emotion ML model 
    uvicorn gemini_analyzer:app --reload #For Gemini Analyzer

📜 License

MIT License — You are free to use, modify, and distribute this project for learning and personal use.




 

