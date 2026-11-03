"use client";

import React, { useState, useEffect } from "react";
import { SHOP_INFO } from "../../shopData";

export default function CategorySlider({ items, categoryTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Automatic sliding every 3 seconds
  useEffect(() => {
    if (!isPlaying || !items || items.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPlaying, items]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-rose-900/30 my-8">
      {/* Main Slide Display Box */}
      <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden flex items-center justify-center bg-slate-950">
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                isActive
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Blurred background layer so photos blend nicely */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Main Photo: object-contain use kiya hai taaki photo zoom na ho aur poori frame dikhe */}
              <img
                src={item.image}
                alt={`${item.name} - ${categoryTitle}`}
                className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain p-2 sm:p-4"
              />

              {/* Bottom gradient overlay for clear text readability */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-15 pointer-events-none" />
            </div>
          );
        })}

        {/* Slide Info & WhatsApp Action Overlay */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1 text-white max-w-xl">
            <span className="inline-block bg-[#D91424] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {currentItem.tag}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-md">
              {currentItem.name}
            </h2>
            <p className="text-xs text-slate-300">
              In Stock at {SHOP_INFO.name}, Una
            </p>
          </div>

          <a
            href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
              `Hello! I am looking at "${currentItem.name}" in "${categoryTitle}" on your website slider. Please share the price and details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D91424] to-[#FF5A1F] hover:opacity-95 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap self-start sm:self-auto"
          >
            <span>Enquire on WhatsApp</span>
            <span>→</span>
          </a>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-[#D91424] text-white backdrop-blur-md flex items-center justify-center text-xl font-bold transition-all shadow-md cursor-pointer"
        >
          ‹
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 hover:bg-[#D91424] text-white backdrop-blur-md flex items-center justify-center text-xl font-bold transition-all shadow-md cursor-pointer"
        >
          ›
        </button>

        {/* Top Controls: Auto-Slide Toggle Button + Slide Counter */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          {/* Auto-Slide Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isPlaying ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
              }`}
            />
            <span>{isPlaying ? "Auto: ON" : "Auto: PAUSED"}</span>
          </button>

          {/* Slide Number Counter */}
          <div className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>

      {/* Thumbnails Strip at the Bottom */}
      <div className="bg-slate-950 p-3 sm:p-4 border-t border-white/10 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative h-14 w-14 sm:h-16 sm:w-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-900 cursor-pointer ${
              idx === currentIndex
                ? "border-[#D91424] scale-105 shadow-md shadow-rose-600/40 opacity-100"
                : "border-transparent opacity-50 hover:opacity-85"
            }`}
          >
            <img
              src={item.image}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}