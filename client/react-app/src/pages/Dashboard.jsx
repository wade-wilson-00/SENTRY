import React, { useEffect, useState } from "react";
import axios from "axios";
import ResourcesTab from "./Resources";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SentryLoading from "../components/SentryLoading";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [quote, setQuote] = useState("");
  const [date, setDate] = useState();
  const navigate = useNavigate();

  const navigateJournal = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/journalpage");
    }, 2300);
  };

  const navigatePastJournals = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/past-journals");
    })
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    const getTimeGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return "Good Morning";
      if (hour >= 12 && hour < 16) return "Good Afternoon";
      if (hour >= 16 && hour < 21) return "Good Evening";
      return "Time to sleep, Good Night";
    };
    setGreeting(getTimeGreeting());

    const getDate = () => new Date().toDateString();
    setDate(getDate());

    const quoteGenerate = () => {
      const quotes = [
        "You are stronger than you think.",
        "Every day may not be good, but there is something good in every day.",
        "We fail to rise, and that's okay too",
        "Why do we fall...?, so that we could pick ourselves up !",
        "Sometimes to get something, you have to go through some things.",
        "You were never alone, just let it out it'll be fine",
        "Your journey is tough, and that defines who you are",
        "Be kind to everyone, but most importantly be kind to yourself",
        "You may think people don't love you, but the ones who love always show up",
        "It's fine you have a lot of time, you'll figure it out",
      ];
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };
    setQuote(quoteGenerate());
  }, []);

  if (loading) {
    return <SentryLoading />;
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start relative z-0 dash pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo and Greeting */}
      <motion.div
        className="absolute top-4 left-4 flex flex-col items-start z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src="logo3.png"
          alt="Logo"
          className="w-24 h-24 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        {!loading && greeting && (
          <motion.h1
            className="text-3xl font-semibold mt-2 text-gray-800 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {greeting} {user?.username}!
          </motion.h1>
        )}

        <motion.article
          className="flex w-[350px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 shadow-[8px_8px_0_0_#000] transition-transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white hover:shadow-[12px_12px_0_0_#000]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-2 flex items-center gap-x-2 text-xs">
            <p className="border-2 border-black bg-blue-800 px-3 py-1 font-bold text-white text-l hover:scale-110 transition-all">
              {date}
            </p>
          </div>
          <div className="group relative">
            <h3 className="group-hover:text-red-500 mt-3 text-2xl font-black uppercase leading-6 text-black hover:scale-105 hover:text-blue-800 transition-all">
              <span className="absolute inset-0 max-w-xs" />
              Today's Quote
            </h3>
            <p className="text-md text-xl mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 hover:border-blue-500 hover:text-gray-600 transition-all">
              {quote}
            </p>
          </div><br />
        </motion.article><br/>
        <div className="card-wrapper w-[260px] p-4 bg-white border-[4px] border-black shadow-[8px_8px_0_#000] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[12px_12px_0_#000] transition-transform duration-300">
            <span className="card-title block text-[20px] font-black uppercase mb-2">
              Wrote Already ?
            </span>
            <p className="text-l text-black leading-tight mb-3">
              View and revisit your past entries.
            </p>
            <button className="border-[2px] border-black bg-black text-white px-3 py-1 text-[14px] font-bold uppercase cursor-pointer transition-transform duration-300 active:scale-95 hover:bg-gray-800"
            onClick={navigatePastJournals}>
              View
            </button>
          </div>
      </motion.div>

      {/* Navbar */}
      <motion.div
        className="absolute top-10 right-5 flex items-center gap-8 z-50"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <nav className="flex items-center gap-8 bg-transparent text-gray-800 font-medium text-2xl">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span className="hover:text-blue-600 cursor-pointer">About</span>
          <span className="hover:text-blue-600 cursor-pointer">Services</span>
          <span className="hover:text-blue-600 cursor-pointer">Contact</span>
        </nav>
      </motion.div>

      {/* Mood Selector */}
      <motion.div
        className="absolute top-28 right-4 z-40"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="justify-center text-xl">
          Let us Know about your Mood today ?
        </p>
        <br />
        <div className="flex justify-start items-center text-2xl shadow-xl bg-black gap-2 p-2 rounded-full">
          {[
            { emoji: "😊", label: "Happy" },
            { emoji: "😢", label: "Sad" },
            { emoji: "😠", label: "Angry" },
            { emoji: "😌", label: "Relaxed" },
            { emoji: "😰", label: "Anxious" },
          ].map(({ emoji, label }) => (
            <motion.button
              key={label}
              whileHover={{ scale: 1.25 }}
              className="relative before:hidden hover:before:flex before:content-[attr(data-label)] before:absolute before:-top-7 before:px-2 before:rounded-lg before:bg-black before:bg-opacity-60 before:text-white before:text-xs bg-white dark:bg-[#191818] rounded-full p-2 px-3"
              data-label={label}
            >
              {emoji}
            </motion.button>
          ))}
        </div>{" "}
        <br />
        <br />
        <div className="card-wrapper w-[300px] p-5 bg-white border-[6px] border-black shadow-[12px_12px_0_#000] hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[17px_17px_0_#000] transition-transform duration-300 justify-items items-left">
          <span className="card-title relative block text-[32px] font-black uppercase mb-4 after:card-title-underline">
            Feel like Writing ?
          </span>
          <p className="text-[16px] text-black leading-tight mb-5">
            Express through your Journals.
          </p>
          <button
            onClick={navigateJournal}
            className="relative overflow-hidden border-[3px] border-black bg-black text-white px-1 py-2 text-[18px] font-bold uppercase cursor-pointer w-1/2 h-full transition-transform duration-300 active:scale-95 before:card-button-before hover:before:translate-y-0"
          >
            Click Here..
          </button>
        </div>
      </motion.div>

      {/* ResourcesTab Section */}
      <motion.div
        className="w-full px-1 mt-[600px] mb-10 bg-white p-1 shadow-l"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-black justify-items text-center resources text-4xl p-6 resources">
          📚Some Resources that might Help You
        </h1>
        <ResourcesTab />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
