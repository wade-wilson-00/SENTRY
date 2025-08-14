import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMicrophone, FaMusic, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MoodFeedbackPage = () => {
  const [journal, setJournal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateOldJournal = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/journalpage");
    }, 2300);
  }

  const moodMap = {
    joy: {
      icon: "😊",
      message:
        "Hey Stay Happy and Keep smiling like this, you deserve all the Happiness of this world",
      gradient: "from-yellow-400 via-yellow-300 to-yellow-200",
      resources: [
        {
          title: "Feel Good Podcast with Kimberly Snyder - Spotify",
          icon: <FaMicrophone />,
          link: "https://open.spotify.com/show/7eAoCou5o2vm0amfoOCbIG?si=31c915bd0a094c56",
        },
        {
          title:
            "Watch this TED-Ed Video on how to Increase your Happiness :)",
          icon: <FaVideo />,
          link: "https://youtu.be/m4Ics03xzUQ?si=Yjlp0rq4pXqFQpaA",
        },
      ],
    },
    sadness: {
      icon: "😔",
      message:
        "It's Okay Life's been tough, Sadness is just a Phase I've got you don't worry",
      gradient: "from-blue-400 via-blue-300 to-blue-200",
      resources: [
        {
          title:
            "Listen to this Soul soothing scores from Hans Zimmer, which will help you relax",
          icon: <FaMusic />,
          link: "https://open.spotify.com/playlist/36cudwka5A1K2YFc9MSarY?si=d770a6ca024449df",
        },
        {
          title:
            "Listen to Lord Krishna's Teachings which will help you feel more alive",
          icon: <FaMusic />,
          link: "https://open.spotify.com/playlist/4Apd24SgUOjr57vOelreur?si=bd42f6875e9646f5",
        },
      ],
    },
    neutral: {
      icon: "😐",
      message:
        "It's Fine not everything has to make sense, just stay in present you'll get there :)",
      gradient: "from-purple-400 via-purple-300 to-purple-200",
      resources: [
        {
          title: "Explore Some Random TED Talks on Spotify.",
          icon: <FaMusic />,
          link: "https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti?si=f838a5f1b6c24d13",
        },
        {
          title:
            "How to Navigate Through Painful Situations in Life | by Buddhism In English",
          icon: <FaVideo />,
          link: "https://youtu.be/SxHdfOUvnmw?si=wMdrD7ijTRVQXsHG",
        },
      ],
    },
    anger: {
      icon: "😡",
      message: "Let's channel this into something constructive.",
      gradient: "from-red-400 via-red-300 to-red-200",
      resources: [
        {
          title: "How to Control Anger - Sadhguru",
          icon: <FaVideo />,
          link: "https://youtu.be/QAsJvKsd2Xk?si=P6cxpWYtw94l7Wzr",
        },
        {
          title:
            "How to stay calm when you know you'll be stressed | Daniel Levitin | TED",
          icon: <FaVideo />,
          link: "https://youtu.be/8jPQjjsBbIc?si=ZvBJMGRfR2_9CHs2",
        },
      ],
    },
    surprise: {
      icon: "😲",
      message:
        "Well just Go with the flow, let more things come and take those in a positive way, life's good",
      gradient: "from-pink-400 via-pink-300 to-pink-200",
      resources: [
        {
          title:
            "Sunflower - Post Malone | Spiderman into the spider-verse",
          icon: <FaVideo />,
          link: "https://youtu.be/ApXoWvfEYVU?si=gJs2NoLFTMp6rWTk",
        },
        {
          title: "Just :)",
          icon: <FaVideo />,
          link: "https://youtu.be/M5VXCixTdEg?si=2f8hv7dlTer6NP5a",
        },
      ],
    },
  };

  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/journal/latest",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setJournal(res.data);
      } catch (error) {
        console.error("Error fetching journal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJournal();
  }, []);

  if (loading)
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  if (!journal)
    return (
      <div className="text-center mt-20 text-gray-500">
        No recent journal found.
      </div>
    );

  const mood = moodMap[journal.emotion_label] || {
    icon: "📝",
    message: "We couldn't detect your mood, but we're here to listen.",
    gradient: "from-gray-300 via-gray-200 to-gray-100",
    resources: [],
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-6xl px-6 py-4 bg-white dark:bg-white-800 shadow-lg flex items-center justify-between h-20 rounded-xl mb-10">
        <div className="flex items-center gap-4">
          <img
            src="logo3.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <nav className="hidden md:flex gap-8 text-black-800 dark:text-black-200 text-lg font-semibold">
          <a href="/dashboard" className="hover:text-blue-600 transition">
            Dashboard
          </a>
          <a href="/past-journals" className="hover:text-blue-600 transition">
            Journals
          </a>
          <a href="/logout" className="hover:text-red-500 transition">
            Logout
          </a>
        </nav>
      </header>

      {/* Mood Card */}
      <div
        className={`p-8 rounded-2xl shadow-lg bg-gradient-to-r ${mood.gradient} max-w-lg w-full`}
      >
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-5xl">{mood.icon}</span>
          <div>
            <h3 className="text-2xl font-bold capitalize">
              {journal.emotion_label}
            </h3>
            <p className="text-lg">{mood.message}</p>
            <p className="text-sm font-semibold mt-1">
              Intensity: {(journal.emotion_score * 100).toFixed(0)}%
            </p>
          </div>
        </div>

        {/* Resources */}
        {mood.resources.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-3">Recommended for You</h4>
            <div className="space-y-3">
              {mood.resources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/30 dark:bg-black/30 text-gray-900 dark:text-white backdrop-blur-md hover:bg-white/50 dark:hover:bg-black/50 transition"
                >
                  <div className="flex items-center gap-3">
                    {res.icon}
                    <span>{res.title}</span>
                  </div>
                  <span className="text-xl">→</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodFeedbackPage;
