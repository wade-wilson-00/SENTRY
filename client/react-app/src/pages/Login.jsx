import React, { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import SentryLoading from "../components/SentryLoading";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess("");
    setLoading(true);

    const MIN_DISPLAY_TIME = 4500;
    const wait = new Promise((resolve) =>
      setTimeout(resolve, MIN_DISPLAY_TIME)
    );

    try {
      const loginPromise = loginUser({ username, email, password });
      const [res] = await Promise.all([loginPromise, wait]);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setSuccess("Login Successful!");
        navigate("/dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
        setLoading(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      setLoading(false);
    }
  };

  if (loading) return <SentryLoading />;

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
        <img
          src="logo3.png"
          alt="Logo"
          className="absolute top-6 left-6 w-26 h-26 md:w-24 md:h-24 object-contain z-10"
        />

        {/* Left: Login Form */}
        <motion.div
          className="w-full md:w-1/2 p-8 md:p-12"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Holla User, Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Hope you had a great day...!
          </p>

          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="flex items-center justify-between text-sm text-gray-500">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-purple-600"
                  defaultChecked
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-purple-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Sign In"}
            </motion.button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-purple-600 hover:underline">
              Sign Up
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
            src="login-illustration.gif"
            alt="Login Illustration"
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
