import React from "react";

function Footer({ year, brand, tagline, links }) {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 mt-16 shadow-inner border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-sm">
          © {year} {brand}. {tagline}
        </p>

        <nav className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              className="underline text-sm hover:text-indigo-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
