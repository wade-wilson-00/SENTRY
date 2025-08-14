const { OpenAI } = require('openai');

const openai = new OpenAI ({
    apiKey: process.env.OPEN_AI_API_KEY,
});

const analyzeJournal = async (content) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',

            messages: [
                {
                  role: 'system',
                  content: 'You are an AI assistant that analyzes journal entries and provides insights on emotional well-being, personal growth, and areas for improvement, be friendly, empathetic, not harsh, and be compassionate'
                },

                {
                    role: 'user'
                }
            ]
        })
    }
}