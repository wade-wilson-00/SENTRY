import React, { useEffect, useState } from "react";
import axios from "axios";

const ResourcesTab = () => {
  const [allResources, setAllResources] = useState([]);
  const [displayResources, setDisplayResources] = useState([]);

  const fetchResources = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/resources");

      // Filter out empty or invalid entries
      const validResources = res.data.filter(
        (item) => item.title && item.url && item.type
      );

      setAllResources(validResources);
      selectRandomResources(validResources); // Initial random selection
    } catch (err) {
      console.error("Failed to load resources", err);
    }
  };

  const selectRandomResources = (sourceArray = allResources) => {
    if (!sourceArray.length) return;

    const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
    setDisplayResources(shuffled.slice(0, 6));
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div className="bg-white p-6 shadow-l h-full w-full">
      {/* Refresh Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => selectRandomResources()}
          className="bg-white text-black px-4 py-2 rounded-lg refresh shadow hover:bg-gray-200 transition"
        >
          🔄 Refresh Resources
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayResources.map((item) => (
          <div
            key={item._id}
            className="bg-black rounded-lg shadow-md p-4 flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-white">{item.description}</p>

            {item.type === "youtube" && (
              <iframe
                src={item.url}
                className="w-full h-40 rounded-md"
                allow="autoplay; encrypted-media"
                loading="lazy"
                title={item.title}
              ></iframe>
            )}

            {item.type === "spotify" && (
              <iframe
                src={item.url}
                className="w-full h-[152px] rounded-md"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={item.title}
              ></iframe>
            )}

            {item.type === "podcast" && (
              <iframe
                src={item.url}
                className="w-full h-20 rounded-md"
                allow="autoplay"
                loading="lazy"
                title={item.title}
              ></iframe>
            )}

            {item.type === "book" && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline mt-2"
              >
                View Book →
              </a>
            )}

            {item.type === "tedtalk" && (
              <iframe
                src={item.url}
                className="w-full h-40 rounded-md"
                allow="autoplay; encrypted-media"
                loading="lazy"
                title={item.title}
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesTab;
