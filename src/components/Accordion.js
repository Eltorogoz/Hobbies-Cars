import React, { useState } from "react";

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center py-3 text-left text-gray-800 font-medium hover:bg-gray-50"
      >
        <span>{title}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-3 text-sm text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default Accordion;
