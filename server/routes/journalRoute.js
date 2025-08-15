const express = require('express');
const userJournals = require('../controllers/userJournal');
const authenticateJournal = require('../middleware/journalAuthentication');
const Journal = require('../models/journalentry');
const { encrypt, decrypt } = require('../utils/encryption');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/', authenticateJournal, userJournals);

router.get('/latest', authenticateJournal, async (req, res) => {
  try {
    const latest = await Journal.findOne({ userId: req.user._id }).sort({ createdAt: -1 });

    if (!latest) {
      return res.status(404).json({ message: "No journal found" });
    }

    const decryptedContent = decrypt(latest.content);

    const decryptedLatest = {
      ...latest._doc,
      content: decryptedContent,
    };

    console.log("📓 Latest Journal Entry:", decryptedLatest);
    res.status(200).json(decryptedLatest);
  } catch (err) {
    console.error("❌ Error fetching latest journal:", err);
    res.status(500).json({ message: 'Error retrieving latest journal entry' });
  }
});

router.get('/all', authenticateJournal, async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.user._id })
      .sort({ createdAt: -1 });

    const decryptedJournals = journals.map(journal => ({
      ...journals._doc,
      content: decrypt(journal.content),
      createdAt: journal.createdAt ? new Date(journal.createdAt) : null,
      updatedAt: journal.updatedAt ? new Date(journal.updatedAt) : null,
    }));

    console.log("📚 All Journals Retrieved:", decryptedJournals.length);
    res.status(200).json(decryptedJournals);

  } catch (err) {
    console.error("❌ Error fetching journals:", err);
    res.status(500).json({ message: 'Error retrieving journals' });
  }
});

module.exports = router;
