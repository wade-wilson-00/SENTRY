import React from 'react';

const Card = () => {
  return (
    <article className="flex w-[350px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white transition-shadow hover:shadow-[12px_12px_0_0_#000]">
      <div className="mb-2 flex items-center gap-x-2 text-xs">
        <time className="border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out transform hover:scale-110" dateTime="2025-01-06">Jan 6, 2025</time>
      </div>
      <div className="group relative">
        <h3 className="group-hover:text-red-500 mt-3 text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800">
          <a href="#"><span className="absolute inset-0 max-w-xs" />Today's Quote</a>
        </h3>
        <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
          "When you struggle with a problem, that's when you understand it."
        </p>
      </div>
    </article>
  );
}

export default Card;
