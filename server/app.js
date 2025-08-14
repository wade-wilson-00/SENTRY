const express = require('express');
const userRoutes = require('./routes/authentication');
const journalRoutes = require('./routes/journalRoute');
const resource = require('./routes/resources');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

// Load environment variables
dotenv.config();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB connection error', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use authentication routes
app.use('/api/users', userRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/resources', resource);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
