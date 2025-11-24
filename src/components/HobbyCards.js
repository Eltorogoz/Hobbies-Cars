import React from "react";

function HobbyCards({ hobbies }) {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        My Car Interests
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => (
          <article
            key={hobby.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl" aria-hidden="true">
                {hobby.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {hobby.title}
              </h3>
            </div>

            <p className="text-sm text-gray-600 flex-1">
              {hobby.description}
            </p>

            {hobby.link && (
              <a
                href={hobby.link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 underline"
              >
                {hobby.link.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default HobbyCards;
