
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

Inspired by Robert Reynolds aka 'Sentry' from Marvel Comics a superhero always ready to help others who suffers.

Sentry is designed with a motivation to help users with their mental health and well-being, focused on a personalized level, it offers Digital Journaling with an Encrypted Storage of it where users can openly express their thoughts and feelings.

It also Comes with AI Integration where users will get a more personalized attention on their journals and also ML Mood prediction through sentiment analysis of journals.


## 📌 Features
- 📝 Journaling - Secure Encrypted Journal Entries  
- 😊 Coping Resources - Resources to help in mental wellbeing 
- 📊 Mood Prediction - Sentiment Analysis based on Journal Entries with ML Model  
- 🧠 AI Review and Suggestion - Get Personalized AI Suggestions and Review which help in Expressing more with Journals  
- 🔐 Secure Platform - Strong JWT Token Based Authentication of User Credentials.
                        Encrypted Storage of User Journals. 

## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion, React Router, Axios, React Markdown, React Icons  
- **Backend:** Node.js, Express.js, MongoDB, JWT, Bcrypt, Axios, Hashing  
- **AI Service:** Python-FastAPI, Gemini API, Hartman-BERT ML Model, HuggingFace Transformers

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
npm run dev
```

#### AI Microservices
```bash
cd ai-service
uvicorn gemini_analyzer:app --reload
uvicorn emotion_analyzer:app --reload
```

---
## 🤝 Contributing

Contributions are always welcome!  

If you'd like to contribute to **SENTRY**, please follow these steps:

1. **Fork** the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add: Your descriptive commit message"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a **Pull Request** on GitHub and describe your changes.

**Guidelines:**
- Follow the existing code style and naming conventions.
- Write clear commit messages.
- Add comments where necessary for better understanding.
- Test your code before submitting.

---

## Screenshots

### Dashboard
![Dashboard Screenshot](public/dashboard.png)

### Journal Page
![Journal Page Screenshot](public/journalpage.png)


📜 License

MIT License — Free to use and modify for learning purposes.




    
    
   
   
