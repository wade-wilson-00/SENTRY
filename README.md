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

## 🛠 Tech Stack
**Frontend:** React, Tailwind CSS, Framer Motion  
**Backend:** Node.js, Express.js, MongoDB  
**AI Services:** FastAPI microservices (Gemini API, Hugging Face models)  
**Other:** Chart.js for data visualization, JWT authentication, bcrypt for hashing  

---

## 📂 Folder Structure
Sentry/
│── client/ 
│── server/
│── ai-services/
│── README.md

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wade-wilson-00/SENTRY.git
   cd sentry
   
2. Setup Environment Variables
   PORT=your_port
   MONGODB_URI=your_mongo_connection_string
   OPENAI_API_KEY=your_openai_api_key_here
   GEMINI_API_KEY=your_gemini_api_key_here
   JWT_SECRET=your_jwt_secret_here
   
3. Install Dependencies
   I) Frontend-
      cd client/react-app
      npm install react-router-dom axios framer-motion react-markdown react-icons
   
   II) Backend-
      cd server
      npm install express axios cors dotenv mongoose jsonwebtoken bcrypt

   III) AI - ML Microservices
      cd ai-service
      pip install dotenv fastapi pydantic uvicorn axios transformers google-generativeai torch
   
📜 License
MIT License — feel free to use and modify for learning purposes.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

