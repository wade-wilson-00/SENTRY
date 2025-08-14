from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()
API_KEY = os.getenv("GEMINI_API")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-2.5-pro")
app = FastAPI()

class JournalInput(BaseModel):
    content: str
@app.post("/analyze")
async def analyze_journal(journal: JournalInput):
    prompt = f"""
    The following is a user's journal entry. Analyze it with empathy and offer friendly, actionable suggestions. The user should feel safe and heard:
    "{journal.content}"
    """
    try:
        response = model.generate_content(prompt)
        return {"Suggestion": response.text}
    except Exception as e:
        return {"error": str(e)}
