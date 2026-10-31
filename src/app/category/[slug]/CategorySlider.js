"use client";

import React, { useState, useEffect } from "react";
import { SHOP_INFO } from "../../shopData";

export default function CategorySlider({ items, categoryTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused || !items || items.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, items]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div
      className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-rose-200/40 my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Slide Display */}
      <div className="relative h-[340px] sm:h-[460px] md:h-[520px] w-full overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 pointer-events-none scale-105"
            }`}
          >
            <img
              src={item.image}
              alt={`${item.name} - ${categoryTitle}`}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/30" />
          </div>
        ))}

        {/* Slide Info & WhatsApp Action Overlay */}
        <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 text-white max-w-xl">
            <span className="inline-block bg-[#D91424] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {currentItem.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-md">
              {currentItem.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              In Stock at {SHOP_INFO.name}, Una
            </p>
          </div>

          <a
            href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
              `Hello! I am looking at "${currentItem.name}" in "${categoryTitle}" on your website slider. Please share the price and details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D91424] to-[#FF5A1F] hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap self-start sm:self-auto"
          >
            <span>Enquire on WhatsApp</span>
            <span>→</span>
          </a>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-[#D91424] text-white backdrop-blur-md flex items-center justify-center text-lg sm:text-xl font-bold transition-all shadow-md"
        >
          ‹
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-[#D91424] text-white backdrop-blur-md flex items-center justify-center text-lg sm:text-xl font-bold transition-all shadow-md"
        >
          ›
        </button>

        {/* Slide Counter (e.g. 1 / 6) */}
        <div className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
          {currentIndex + 1} / {items.length}
        </div>
      </div>

      {/* Thumbnails Strip at the Bottom */}
      <div className="bg-slate-950/90 p-3 sm:p-4 border-t border-white/10 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative h-12 w-16 sm:h-16 sm:w-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
              idx === currentIndex
                ? "border-[#D91424] scale-105 shadow-md shadow-rose-600/30 opacity-100"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img
              src={item.image}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}