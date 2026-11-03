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

          <div className="flex items-center gap-3">
            <Link
              href="/#collections"
              className="hidden sm:inline-flex bg-rose-50 hover:bg-rose-100 text-[#D91424] border border-rose-200 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              ← All Categories
            </Link>
            <Link
              href="/#collections"
              className="inline-flex items-center gap-1.5 bg-[#D91424] hover:bg-[#b50f1d] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md shadow-rose-600/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Order Now</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Category Hero Header (Extra Badge Removed) */}
      <section className="bg-gradient-to-br from-rose-50/80 via-white to-orange-50/60 border-b border-rose-100 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
            <Link href="/" className="hover:text-[#D91424]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D91424]">{category.title}</span>
          </div>

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
        <CategorySlider items={category.items} categoryTitle={category.title} />
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