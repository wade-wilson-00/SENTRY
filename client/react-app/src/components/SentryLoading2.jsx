// components/SentryLoading.jsx
import { motion } from "framer-motion";

const SentryLoading2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <motion.h1
        className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sentry is getting ready for you...
      </motion.h1>

      <motion.div className="flex space-x-2 mt-2">
        {[0, 0.2, 0.4].map((delay, index) => (
          <motion.span
            key={index}
            className="w-3 h-3 bg-blue-800 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              delay,
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <p className="text-sm text-gray-700 mt-6 max-w-sm">
        “Every small step counts. Let’s take it together.”
      </p>
    </div>
  );
};

export default SentryLoading2;
