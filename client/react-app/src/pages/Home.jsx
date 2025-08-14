import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SentryLoading from "../components/SentryLoading";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/register");
    }, 4500);
  };

  const loginNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 3500);
  };

  const registerNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/register");
    });
  };

  if (loading) return <SentryLoading />;

  return (
    <motion.div
      className="home min-h-screen flex flex-col items-center justify-center relative z-0 bg-gradient-to-br from-lime-100 via-rose-100 to-purple-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.10 }}
    >
      {/* Top Right Buttons */}
      <motion.div
        className="absolute top-10 right-4 flex items-center gap-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="register bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-1 px-10 rounded-md transition-colors text-xl"
          onClick={registerNavigate}
        >
          Register
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="login bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-1 px-10 rounded-md transition-colors text-xl"
          onClick={loginNavigate}
        >
          Login
        </motion.button>
      </motion.div>

      {/* Logo */}
      <motion.img
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
        src="logo3.png"
        alt="Logo"
        className="absolute top-2 left-2 w-29 h-29 md:w-24 md:h-24 object-contain z-10"
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-8 py-12">
        {/* Left Text */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-6xl home font-bold text-blue-800 mb-4">
            Hey I am Sentry
          </h1>
          <p className="text-2xl text-gray-700 mb-6">
            Your personal mental health companion. I can provide tools,
            resources, and AI-driven support to help you manage stress, track
            your mood, and improve your well-being — all in a safe and secure
            environment..
            <br /><br/>
            You're not alone, my friend...
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center text-base rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-violet-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
          >
            Let's get you started
            <svg
              aria-hidden="true"
              viewBox="0 0 10 10"
              height="10"
              width="10"
              fill="none"
              className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
            >
              <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100" />
              <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img src="sentry.png" alt="Sentry illustration" loading="lazy" />
        </motion.div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12 w-full">
        <h2 className="hwt text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">
          {["😊", "💬", "📘"].map((emoji, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * i }}
            >
              <span className="text-5xl mb-4">{emoji}</span>
              <h3 className="text-xl font-semibold mb-2">
                {i === 0 ? "Mood Prediction" : i === 1 ? "Receive AI-guided support" : "Access resources and coping strategies"}
              </h3>
              <p className="text-gray-600">
                {i === 0
                  ? "Stay Aware of your emotions."
                  : i === 1
                  ? "Get tailored, compassionate help when you need it the most."
                  : "Discover techniques and knowledge to support your growth."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What Sentry Can Do */}
        <motion.div
          className="text-3xl font-bold text-gray-900 mb-12 text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          What can Sentry do for you?
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">
          {[
            {
              img: "sentry-feature.png",
              title: "Sentry is always there for you",
              desc: "You can share anything with Sentry whenever you want",
            },
            {
              img: "journal.png",
              title: "Journal Writing",
              desc: "Write and store your journals, thoughts, feelings — we’ll keep it safe.",
            },
            {
              img: "bot.png",
              title: "Sentry as your personal Chatbot",
              desc: "Feel free to chat with Sentry whenever you want (Still Working on It)",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <img src={card.img} height="80px" width="80px" alt={card.title} />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Who Inspired */}
        <motion.div
          className="text-3xl font-bold text-gray-900 mb-12 pl-10 mt-20"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Who Inspired?
        </motion.div>
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center px-6">
          <motion.div
            className="bg-black rounded-2xl shadow-md p-6 flex flex-col text-center hover:shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img src="sentry-hero.png" alt="Sentry" height="600px" width="600px" />
            <h1 className="text-2xl text-white mt-4">Robert Reynolds aka SENTRY</h1>
            <br />
            <iframe
              style={{ borderRadius: "10px" }}
              src="https://open.spotify.com/embed/track/78ATcC2v856GG3IXDZaPEJ?utm_source=generator"
              width="100%"
              height="80%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Embed"
            ></iframe>
          </motion.div>

          <motion.div
            className="bg-black rounded-2xl shadow-md p-6 flex flex-col justify-center hover:shadow-xl max-w-md text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white text-left text-lg">
              After Bob Reynolds drank a serum, he transformed into the Sentry,
              one of Earth's most powerful heroes. But with his unmatched power
              comes a great danger: a dark alter ego, the Void, lurks within his
              psyche. Tormented by his own inner demons, the Sentry's greatest
              battle is with himself and his darker self. Yet, when the world
              needs saving, no one answers the call like the man with the power
              of a million exploding suns!
              <br /><br />
              Sentry is made to help those in need of Mental Health assistance — like
              how Robert needed to feel heard. He’s always there for you, just let it
              out.
              "We learn more from tough times than from easy ones" — Sentry
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
