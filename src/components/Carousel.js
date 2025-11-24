import React, { useState } from "react";

function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const current = items[index];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {current.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{current.description}</p>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        Prev
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
