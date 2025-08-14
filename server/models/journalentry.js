const mongoose = require('mongoose');
const journalEntry = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: '._id',
    },
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    review:{
        type: String,
    },
    emotion_label:{
        type: String,
    },
    emotion_score:{
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },


});

module.exports = mongoose.model('JournalEntry', journalEntry);