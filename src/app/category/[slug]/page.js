import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SHOP_INFO, GIFT_CATEGORIES } from "../../shopData";
import CategorySlider from "./CategorySlider";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = GIFT_CATEGORIES.find((cat) => cat.id === slug);

  if (!category) {
    return { title: "Category Not Found | Archies – Ganpati Gift Gallery" };
  }

  return {
    title: `${category.title} in Una, HP | ${SHOP_INFO.name}`,
    description: `${category.description} Available at ${SHOP_INFO.name} in Una, Himachal Pradesh.`,
  };
}

export default async function CategoryDetailPage({ params }) {
  const { slug } = await params;
  const category = GIFT_CATEGORIES.find((cat) => cat.id === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Clean Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/gcl.jpeg"
              alt="Archies – Ganpati Gift Gallery Logo"
              className="h-11 sm:h-13 w-auto object-contain rounded-lg"
            />
            <div>
              <span className="text-base sm:text-xl font-extrabold text-slate-900 block leading-none">
                Archies <span className="text-[#D91424]">– Ganpati Gift Gallery</span>
              </span>
              <span className="text-xs font-medium text-slate-500 mt-1 block">
                Una, Himachal Pradesh
              </span>
            </div>
          </Link>

          <Link
            href="/#collections"
            className="bg-rose-50 hover:bg-rose-100 text-[#D91424] border border-rose-200 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
          >
            ← All Categories
          </Link>
        </div>
      </header>

      {/* Category Hero Header */}
      <section className="bg-gradient-to-br from-rose-50/80 via-white to-orange-50/60 border-b border-rose-100 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
            <Link href="/" className="hover:text-[#D91424]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D91424]">{category.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block bg-white text-[#D91424] border border-rose-200 text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-2xs">
                {category.subtitle}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {category.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </div>

            <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
              Auto-Sliding Showcase Below
            </span>
          </div>

          {/* Quick Category Switcher Pills */}
          <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-rose-200/60">
            {GIFT_CATEGORIES.map((cat) => {
              const isActive = cat.id === category.id;
              return (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border transition-all ${
                    isActive
                      ? "bg-[#D91424] text-white border-[#D91424] shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:text-[#D91424]"
                  }`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 pb-16">
        {/* ===================================================================
            1. AUTO-SLIDING FEATURED CAROUSEL (Top Showcase)
        =================================================================== */}
        <CategorySlider items={category.items} categoryTitle={category.title} />

        {/* ===================================================================
            2. ALL DESIGNS GRID (Under the Slider for direct comparison)
        =================================================================== */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#D91424]">
                Complete Catalogue
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                All {category.title} Designs
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {category.items.length} Items Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-rose-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-64 w-full bg-slate-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${SHOP_INFO.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-white/95 text-[#FF5A1F] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">{item.name}</h3>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      In Stock • {SHOP_INFO.name}, Una
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hello! I want to check the price and availability of "${item.name}" under "${category.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-gradient-to-r from-[#D91424] to-[#FF5A1F] hover:opacity-95 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-sm transition-opacity"
                  >
                    Enquire Price on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-8 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div>
            <p className="font-extrabold text-white text-base">{SHOP_INFO.name}</p>
            <p className="text-slate-400 mt-0.5">📍 {SHOP_INFO.address}</p>
          </div>
          <Link href="/" className="text-rose-400 hover:underline font-bold">
            ← Back to Home Page
          </Link>
        </div>
      </footer>
    </div>
  );
}