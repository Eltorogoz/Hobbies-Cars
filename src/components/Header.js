import React from "react";

function Header({ title, subtitle }) {
  return (
    <header className="text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </header>
  );
}

export default Header;
