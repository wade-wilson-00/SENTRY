const axios = require('axios');
const JournalEntry = require('../models/journalentry');
const { encrypt } = require('../utils/encryption');

const userJournals = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const encryptedContent = encrypt(content);
        console.log("Joural Content:", content)

        let aiReview = '';
        let emotionLabel = '';
        let emotionConfidence = 0;

        try {
            const aiResponse = await axios.post('http://localhost:8000/analyze', {
                content
            });
            aiReview = aiResponse.data?.Suggestion || '';
        } catch (aiErr) {
            console.error('Gemini AI error:', aiErr.message);
        }

        try {
            const emotionResponse = await axios.post('http://localhost:8002/emotion', {
                text: content,
            });
            emotionLabel = emotionResponse.data?.label || 'unknown';
            emotionConfidence = emotionResponse.data?.confidence || 0;
        } catch(emotionErr) {
            console.error("Emotion Analysis Failed:", emotionErr.message)
        }

        const newEntry = new JournalEntry({
            userId: req.user._id,
            title,
            content: encryptedContent,
            review: aiReview,
            emotion_label: emotionLabel,
            emotion_score: emotionConfidence,
        });

        const savedEntry = await newEntry.save();

        //Return saved journal and AI suggestion to frontend
        res.status(201).json({
            journal: savedEntry,
            review: aiReview
        });

        console.log('Journal entry created for User:', req.user._id);
        console.log('Sentry Suggestion:', aiReview);
    } catch (error) {
        console.error('Error creating journal entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = userJournals;
