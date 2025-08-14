import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const PastJournals = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/journal/all", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(res.data)) {
          setJournals(res.data);
        } else {
          console.warn("Unexpected response format:", res.data);
          setJournals([]);
        }
      } catch (err) {
        console.error("❌ Error fetching journals:", err);
        setJournals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJournals();
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-6 text-lg">
        Loading your past journals...
      </p>
    );
  }

  if (!journals.length) {
    return (
      <p className="text-center mt-6 text-lg">
        No past journals found.
      </p>
    );
  }

  return (
    <div
      className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen transition-colors duration-500`}
    >
      {/* Header */}
      <header
  className={`w-full px-4 py-2 shadow-sm flex items-center justify-between h-20 rounded-xl transition-colors duration-300 ${
    isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white-800 text-gray-800"
  }`}
>
  {/* Logo */}
  <div className="flex items-center gap-4">
    <img
      src="logo3.png"
      alt="Logo"
      className="w-20 h-20 object-contain -my-2"
    />
  </div>

  {/* Nav */}
  <nav className="nav-icons hidden md:flex gap-6 text-2xl font-medium">
    <a
      href="/dashboard"
      className="hover:text-blue-600 transition"
    >
      Dashboard
    </a>
    <a
      href="/journal"
      className="hover:text-blue-600 transition"
    >
      Journals
    </a>
    <a
      href="/logout"
      className="hover:text-red-500 transition"
    >
      Logout
    </a>

    {/* Dark Mode Toggle */}
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="text-xl hover:text-yellow-400"
      title="Toggle Dark Mode"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  </nav>
</header>


      {/* Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center past-journals">
          Your Past Journals - Safe with us.
        </h1>

        {/* Journals Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {journals.map((journal, index) => (
            <motion.div
              key={journal._id}
              className={`p-5 border rounded-lg font-[Patrick_Hand] text-xl leading-relaxed shadow-md ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              style={{
                backgroundImage: `url("/journalpage.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  {new Date(journal.createdAt).toLocaleDateString()}
                </h2>
                <span className="text-sm opacity-80">
                  {new Date(journal.createdAt).toLocaleTimeString()}
                </span>
              </div>
              <p className="whitespace-pre-wrap">{journal.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PastJournals;
