import React from "react";
import SentryLoading2 from "../components/SentryLoading2";
import { useState } from "react";


const Navbar = () => {
  const [loading, setLoading] = useState(false);

  setLoading(true);

  if (loading) return <SentryLoading2 />;
  return (
    <div className="min-h screen absolute top-10 right-4 flex items-center gap-8 z-50">
      {/* Nav links */}
      <nav className="flex items-center gap-8 bg-transparent text-gray-800 font-medium text-2xl">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <span className="hover:text-blue-600 cursor-pointer">About</span>
        <span className="hover:text-blue-600 cursor-pointer">Services</span>
        <span className="hover:text-blue-600 cursor-pointer">Contact</span>
      </nav>
    </div>
  );
};

export default Navbar;
