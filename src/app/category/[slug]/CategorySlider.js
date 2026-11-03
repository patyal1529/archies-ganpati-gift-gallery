"use client";

import React, { useState, useEffect } from "react";
import { SHOP_INFO } from "../../shopData";

export default function CategorySlider({ items, categoryTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Automatic sliding every 3 seconds (silent background auto-play)
  useEffect(() => {
    if (lightboxOpen || !items || items.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [lightboxOpen, items]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const openLightboxAt = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* ===================================================================
          1. BIG FEATURED SHOWCASE SLIDER (Top Section)
      =================================================================== */}
      <div className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-rose-900/30 my-8">
        <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden flex items-center justify-center bg-slate-950">
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                onClick={() => setLightboxOpen(true)}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center cursor-zoom-in ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Soft blurred background */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-25 scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Main Photo (object-contain ensures photo is NEVER cropped) */}
                <img
                  src={item.image}
                  alt={`${item.name} - ${categoryTitle}`}
                  className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain p-3 sm:p-5"
                />

                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-15 pointer-events-none" />
              </div>
            );
          })}

          {/* Slide Info & WhatsApp Action Overlay */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-none">
            <div className="space-y-1 text-white max-w-xl pointer-events-auto">
              <span className="inline-block bg-[#D91424] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                {currentItem.tag}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-md">
                {currentItem.name}
              </h2>
              <p className="text-xs text-slate-300">
                In Stock at {SHOP_INFO.name}, Una •{" "}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="underline hover:text-amber-300 cursor-pointer font-semibold ml-1"
                >
                  Click Photo for Fullscreen
                </button>
              </p>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md font-semibold text-xs px-3.5 py-3 rounded-xl border border-white/20 transition-all cursor-pointer"
              >
                🔍 Full Photo
              </button>
              <a
                href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
                  `Hello! I am looking at "${currentItem.name}" in "${categoryTitle}" on your website slider. Please share the price and details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D91424] to-[#FF5A1F] hover:opacity-95 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap"
              >
                <span>Enquire on WhatsApp</span>
                <span>→</span>
              </a>
            </div>
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

          {/* Top Controls: Only Clean Slide Number Counter (Auto Button Removed) */}
          <div className="absolute top-4 right-4 z-30">
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

      {/* ===================================================================
          2. COMPLETE PRODUCT CATALOGUE GRID (Cards with Click-to-Fullscreen)
      =================================================================== */}
      <div className="mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#D91424]">
              Complete Catalogue
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
              All {categoryTitle} Designs
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
            {items.length} Items Available • Click any photo for Fullscreen
          </span>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-rose-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Clickable Image Box */}
              <div
                onClick={() => openLightboxAt(idx)}
                className="h-72 w-full bg-slate-950 relative overflow-hidden flex items-center justify-center cursor-pointer group/img"
              >
                {/* Soft blurred background layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-md opacity-25"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Main Image: 100% visible, no cutting of clocks/statues/scenery */}
                <img
                  src={item.image}
                  alt={`${item.name} - ${SHOP_INFO.name}`}
                  className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain p-3 group-hover/img:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Tag Badge */}
                <span className="absolute top-3.5 left-3.5 z-20 bg-white/95 text-[#FF5A1F] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {item.tag}
                </span>

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity z-25 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-xs text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                    <span>🔍 View Full Photo</span>
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => openLightboxAt(idx)}
                    className="text-lg font-extrabold text-slate-900 hover:text-[#D91424] cursor-pointer transition-colors"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    In Stock • {SHOP_INFO.name}, Una
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openLightboxAt(idx)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-3.5 rounded-xl transition-colors cursor-pointer"
                    title="Click to view full photo"
                  >
                    🔍 View
                  </button>
                  <a
                    href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hello! I want to check the price and availability of "${item.name}" under "${categoryTitle}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-[#D91424] to-[#FF5A1F] hover:opacity-95 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm transition-opacity"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================================================================
          3. SHARED FULLSCREEN LIGHTBOX MODAL
      =================================================================== */}
      {lightboxOpen && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Modal Header */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white z-60">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {currentItem.tag} • {categoryTitle} ({currentIndex + 1} / {items.length})
              </span>
              <h3 className="text-lg sm:text-xl font-bold">{currentItem.name}</h3>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-[#D91424] text-white flex items-center justify-center text-2xl font-bold transition-all cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Modal Image Box */}
          <div
            className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="max-h-[75vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
            />

            {/* Left Nav in Modal */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 hover:bg-[#D91424] text-white flex items-center justify-center text-2xl font-bold cursor-pointer transition-all"
            >
              ‹
            </button>

            {/* Right Nav in Modal */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 hover:bg-[#D91424] text-white flex items-center justify-center text-2xl font-bold cursor-pointer transition-all"
            >
              ›
            </button>
          </div>

          {/* Modal Bottom WhatsApp Action */}
          <div
            className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-3 z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
                `Hello! I am viewing "${currentItem.name}" (${categoryTitle}) in full screen on your website. Please share the price and order details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-sm py-3 px-6 rounded-xl shadow-xl transition-all"
            >
              Order / Enquire on WhatsApp →
            </a>
          </div>
        </div>
      )}
    </>
  );
}