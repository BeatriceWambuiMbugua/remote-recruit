"use client";

import { useState } from "react";
import { faqData } from "@/data/constants";

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCount = showAll ? faqData.length : 3;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-[#11142D] text-4xl font-medium mb-10 text-left">
        Common Questions
      </h1>

      <div className="flex flex-col">
        {faqData.slice(0, visibleCount).map((faq, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-lg font-medium mb-2">{faq.question}</h2>
            <p className="text-gray-500 leading-9">{faq.answer}</p>
          </div>
        ))}
      </div>

      {faqData.length > 3 && (
        <div className="flex justify-start mt-2">
          <button
            onClick={handleToggle}
            className="px-6 py-3 border-2 border-[#53B4DAB1] rounded-xl hover:bg-[#53B4DAB1] hover:text-black transition-colors hover:cursor-pointer text-[#1E3E85] font-medium"
          >
            {showAll ? "View Less" : "More Questions"}
          </button>
        </div>
      )}
    </div>
  );
}
