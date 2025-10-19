"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };

    // Check on mount in case page is already scrolled
    toggleVisible();

    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] shadow-[#1E3E85]/30 z-50 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}