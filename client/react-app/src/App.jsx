import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import JournalEntry from './components/JournalEntry.jsx';
import ResourcesTab from './pages/Resources.jsx';
import Card from './pages/Quotes.jsx';
import JournalPage from './pages/JournalPage.jsx';
import MoodFeedbackPage from './pages/MoodFeedbackPage.jsx';
import PastJournals from './pages/PastJournals.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journal" element={<JournalEntry />} />
        <Route path="/resources" element={<ResourcesTab />} />
        <Route path="/quotes" element={<Card />} />
        <Route path="/journalpage" element={<JournalPage />} />
        <Route path="/mood-insight" element={<MoodFeedbackPage />} />
        <Route path="/past-journals" element={<PastJournals />} />
      </Routes>
    </Router>
  );
}

export default App;