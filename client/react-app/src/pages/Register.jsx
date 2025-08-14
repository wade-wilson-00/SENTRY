import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const MIN_DISPLAY_TIME = 4500;
    const wait = new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_TIME));

    try {
      const registerPromise = registerUser({ username, email, password });
      const [res] = await Promise.all([registerPromise, wait]);
      setSuccess("Registration successful!");
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg flex w-[90%] max-w-5xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Logo */}
        <motion.img
          initial={{ rotate: -15, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="logo3.png"
          alt="Logo"
          className="absolute top-6 left-6 w-26 h-26 md:w-24 md:h-24 object-contain z-10"
        />

        {/* Left: Form */}
        <motion.div
          className="w-full md:w-1/2 p-8 md:p-12"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Don't Worry, We got you</h2>
          <p className="text-sm text-gray-500 mb-6">Create your account to get started</p>

          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </motion.button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 hover:underline">
              Let's log you in
            </a>
          </p>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          className="hidden md:block w-1/2 bg-gradient-to-br from-purple-400 to-purple-600 p-6"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src="register.png"
            alt="Register Illustration"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Register;
