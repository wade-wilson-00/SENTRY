import React, { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { FaSpinner, FaSun, FaMoon } from "react-icons/fa";
import SentryLoading from "../components/SentryLoading";

const JournalPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentryLoading, setSentryLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/journal",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReview(response.data.review);
      setMessage("Your Journal has been saved safely.");
    } catch (err) {
      console.error("Error submitting journal:", err);
      setError("❌ Failed to submit or receive review.");
    } finally {
      setLoading(false);
    }
  }
  const handleNextStep = () => {
    setSentryLoading(true);
    setTimeout(() => {
      navigate("/mood-insight");
    },3000);
  };

  if (sentryLoading) return <SentryLoading />

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <header className="w-full px-4 py-2 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <img
            src="logo3.png"
            alt="Logo"
            className="w-20 h-20 object-contain -my-2"
          />
        </div>

        <nav className="nav-icons hidden md:flex gap-6 text-gray-800 dark:text-gray-200 text-2xl font-medium">
          <a href="/dashboard" className="hover:text-blue-600 transition">
            Dashboard
          </a>
          <a href="/journal" className="hover:text-blue-600 transition">
            Journals
          </a>
          <a href="/logout" className="hover:text-red-500 transition">
            Logout
          </a>
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
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* Journal Input Section */}
        <motion.div
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold">
            Express through your Journal...
          </h2>

          <input
            type="text"
            placeholder="Journal Title"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-blue-400 text-base bg-white dark:bg-gray-700 dark:text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Start writing your thoughts here..."
            className="journal-content w-full h-80 p-5 border border-gray-300 dark:border-gray-700 rounded-lg resize-none font-[Patrick_Hand] text-2xl leading-relaxed bg-white dark:bg-gray-700 dark:text-black bg-opacity-50"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              backgroundImage: `url("/journalpage.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="submit-btn text-3xl cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center 
      bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] 
      rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute 
      before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r 
      before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] 
      before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] 
      before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>

          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </motion.div>

        {/* AI Review Section */}
        <motion.div
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold">Sentry is here to Help You</h2>

          <div className="min-h-[400px] max-h-[600px] overflow-auto border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-gray-700 text-base leading-relaxed whitespace-pre-wrap markdown-body">
            {loading ? (
              <div className="flex items-center gap-2 text-blue-600">
                <FaSpinner className="animate-spin text-xl" />
                Sentry is analyzing...
              </div>
            ) : review ? (
              <ReactMarkdown>{review}</ReactMarkdown>
            ) : (
              <p className="text-gray-500 italic dark:text-gray-400">
                AI review will appear here after submission.
              </p>
            )}
          </div>
          <button className="next-step-btn text-3xl cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center 
      bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] 
      rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute 
      before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r 
      before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] 
      before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] 
      before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
      onClick={handleNextStep}>
        Take the next Step...
      </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JournalPage;
