from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv

from transformers import pipeline

app = FastAPI()

emotion_classifier = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base")

class JournalEntry(BaseModel):
    text: str

@app.post("/emotion")
async def analyze_emotion(journal: JournalEntry):
    print("Received Text", journal.text)
    result = emotion_classifier(journal.text)[0]
    return {
        "label": result["label"],         # e.g., "joy", "anger", etc.
        "confidence": round(result["score"], 4)  # confidence score
    }