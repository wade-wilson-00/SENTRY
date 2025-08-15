
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

## 🛠 Tech Stack
- **Frontend:** React, Framer Motion, React Router, Axios, React Markdown, React Icons  
- **Backend:** Node.js, Express.js, MongoDB, JWT, Bcrypt, Axios  
- **AI Service:** FastAPI, Gemini API, Hartman-BERT ML Model, HuggingFace Transformers

## Project Structure

```

SENTRY/
├── ai-service/         # FastAPI microservices for AI/ML tasks
├── client/             # Frontend code
│   └── react-app/
└── server/             # Backend API and core logic

````
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/wade-wilson-00/SENTRY.git
cd SENTRY
```

---

### 2️⃣ Setup Environment Variables

#### `server/.env`
```
PORT=your_port
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_here
```

#### `ai-service/.env`
```
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

---

### 3️⃣ Install Dependencies

#### Frontend
```bash
cd client/react-app
npm install react-router-dom axios framer-motion react-markdown react-icons
```

#### Backend
```bash
cd server
npm install express axios cors dotenv mongoose jsonwebtoken bcrypt
```

#### AI Microservice
```bash
cd ai-service
pip install fastapi uvicorn pydantic requests python-dotenv
```

---

### 4️⃣ Run the Application

#### Backend
```bash
cd server
node server.js
```

#### Frontend
```bash
cd client/react-app
npm start
```

#### AI Microservices
```bash
cd ai-service
uvicorn main:app --reload
```

---
🤝 Contributing

We welcome contributions!

Fork the repository.

Create a feature branch (git checkout -b feature-name).

Commit your changes (git commit -m "Added feature").

Push to the branch (git push origin feature-name).

Open a Pull Request.



📜 License

MIT License — Free to use and modify for learning purposes.




    
    
   
   
