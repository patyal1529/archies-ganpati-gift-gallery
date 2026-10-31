import React from "react";
import Link from "next/link";
import { SHOP_INFO, GIFT_CATEGORIES, GALLERY_PHOTOS } from "./shopData";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* =====================================================================
          CLEAN PREMIUM NAVBAR (Top red bar removed)
      ===================================================================== */}
      <header className="bg-white/95 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <img
              src="/gcl.jpeg"
              alt="Archies – Ganpati Gift Gallery Logo"
              className="h-12 sm:h-14 w-auto object-contain rounded-lg"
            />
            <div>
              <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 block leading-none">
                Archies <span className="text-[#D91424]">– Ganpati Gift Gallery</span>
              </span>
              <span className="text-xs font-medium text-slate-500 mt-1 block">
                Una, Himachal Pradesh
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#collections" className="hover:text-[#D91424] transition-colors">
              Collections
            </a>
            <a href="#showroom-gallery" className="hover:text-[#D91424] transition-colors">
              Gallery
            </a>
            <a href="#showroom-gallery" className="hover:text-[#D91424] transition-colors">
              Contact
            </a>
            <a href="#location" className="hover:text-[#D91424] transition-colors">
              Store Location
            </a>
          </nav>

          {/* WhatsApp CTA Button */}
          <a
            href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
              "Hello! I would like to enquire about gift items at Archies – Ganpati Gift Gallery, Una."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D91424] hover:bg-[#b50f1d] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md shadow-rose-600/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </header>

      {/* =====================================================================
          SECTION 1: VIBRANT MAGAZINE-STYLE HERO BANNER
      ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50/80 via-white to-orange-50/70 border-b border-rose-100 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white border border-rose-200 text-[#D91424] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#D91424] animate-pulse" />
              <span>Premier Gift Showroom in Una, H.P.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Thoughtful Gifts for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91424] to-[#FF5A1F]">
                Every Celebration.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Welcome to <strong>Archies – Ganpati Gift Gallery</strong> in Una, Himachal
              Pradesh. Discover our handpicked range of designer wall clocks, plush soft toys,
              wrist watches, ambient lamps, framed wall scenery, spiritual idols, wallets, and
              artificial floral planters.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#collections"
                className="bg-gradient-to-r from-[#D91424] to-[#FF5A1F] hover:opacity-95 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-rose-600/25 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore All 9 Categories
              </a>
              <a
                href="#location"
                className="bg-white hover:bg-rose-50/50 text-slate-800 border border-slate-300 font-bold px-7 py-3.5 rounded-xl shadow-2xs transition-colors text-sm sm:text-base"
              >
                Visit Our Una Store
              </a>
            </div>

            {/* Quick Highlights Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-rose-200/60 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D91424]">9+</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                  Gift Categories
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FF5A1F]">1000+</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                  Unique Products
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">7 Days</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                  Open in Una
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Showcase Card (Brand + Bento Preview) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-rose-100 shadow-xl shadow-rose-900/5 space-y-4">
              <div className="bg-gradient-to-b from-rose-50/60 to-white rounded-2xl p-4 border border-rose-100/80">
                <img
                  src="/gcl.jpeg"
                  alt="Archies – Ganpati Gift Gallery Official Logo"
                  className="w-full max-h-48 object-contain mx-auto"
                />
              </div>

              {/* 2-Photo Mini Preview Grid */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/category/soft-toys"
                  className="group relative h-32 rounded-xl overflow-hidden block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&q=80"
                    alt="Soft Toys Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-bold">Soft Toys →</span>
                  </div>
                </Link>
                <Link
                  href="/category/watches"
                  className="group relative h-32 rounded-xl overflow-hidden block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80"
                    alt="Watches Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-bold">Wrist Watches →</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: ALL 9 GIFT CATEGORIES (Bright Boutique Cards)
      ===================================================================== */}
      <section id="collections" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D91424] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Shop By Category
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Explore Our Gift Collections
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md">
            Click on any category below to view our full photo gallery of designs available at
            our Una showroom.
          </p>
        </div>

        {/* 9 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {GIFT_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-rose-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Category Image with Gradient Overlay */}
              <div className="h-60 w-full bg-slate-100 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={`${cat.title} at Archies Ganpati Gift Gallery Una`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                {/* Top Pill */}
                <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#D91424] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {cat.subtitle}
                </span>

                {/* Photo Count Badge */}
                <span className="absolute top-3.5 right-3.5 bg-slate-900/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {cat.items.length} Designs
                </span>

                {/* Title Over Image Bottom */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="text-xl font-extrabold tracking-tight group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">{cat.description}</p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#D91424] group-hover:text-[#FF5A1F] transition-colors">
                  <span>View {cat.title} Gallery</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: WIREFRAME LAYOUT (Left: Photos | Right: Contact | Below: Social)
      ===================================================================== */}
      <section
        id="showroom-gallery"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-rose-50/50 via-orange-50/30 to-white border-y border-rose-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT BOX: PHOTO GALLERY */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-lg shadow-rose-900/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5A1F]">
                      Inside Our Store
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                      Showroom Photo Gallery
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-[#D91424] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    Una, H.P.
                  </span>
                </div>

                {/* 6 Photos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {GALLERY_PHOTOS.map((photo, index) => (
                    <div
                      key={index}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200 aspect-square bg-slate-100 shadow-2xs"
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-xs font-semibold p-2.5 pt-6 text-center">
                        {photo.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT BOX: CONTACT US (WhatsApp, Call, Email) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-lg shadow-rose-900/5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#D91424]">
                  Direct Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Contact Our Showroom
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Have a question about gift availability, pricing, or bulk return-gift orders?
                  Reach out to us directly on WhatsApp, phone, or email.
                </p>

                <div className="space-y-3.5 mt-6">
                  {/* WhatsApp Card */}
                  <a
                    href={`https://wa.me/${SHOP_INFO.phoneRaw}?text=${encodeURIComponent(
                      "Hello! I would like to check gift options and prices at Archies – Ganpati Gift Gallery, Una."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200 hover:bg-emerald-100/80 transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider block">
                        WhatsApp Quick Chat
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-900">
                        {SHOP_INFO.phoneDisplay}
                      </span>
                    </div>
                    <span className="bg-[#25D366] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs">
                      Chat Now →
                    </span>
                  </a>

                  {/* Phone Call Card */}
                  <a
                    href={`tel:${SHOP_INFO.phoneDisplay}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-rose-50/80 border border-rose-200 hover:bg-rose-100/70 transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-extrabold text-[#D91424] uppercase tracking-wider block">
                        Direct Store Call
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-900">
                        {SHOP_INFO.phoneDisplay}
                      </span>
                    </div>
                    <span className="bg-[#D91424] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs">
                      Call Us →
                    </span>
                  </a>

                  {/* Email Card */}
                  <a
                    href={`mailto:${SHOP_INFO.email}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    <div className="overflow-hidden pr-2">
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
                        Email Address
                      </span>
                      <span className="text-sm font-bold text-slate-800 truncate block">
                        {SHOP_INFO.email}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#FF5A1F] shrink-0">
                      Email →
                    </span>
                  </a>
                </div>
              </div>

              {/* Store Hours Box */}
              <div className="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200/70 rounded-2xl p-4 text-xs sm:text-sm text-slate-700">
                <p className="font-bold text-slate-900">Store Opening Hours</p>
                <p className="mt-0.5">{SHOP_INFO.timings}</p>
              </div>
            </div>
          </div>

          {/* CENTER BELOW: INSTAGRAM & FACEBOOK SOCIAL BAR */}
          <div className="mt-10 bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-md shadow-rose-900/5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D91424]">
              Stay Connected
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Follow Us on Instagram & Facebook
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              See our newest gift arrivals, festive hampers, and showroom updates daily.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
              <a
                href={SHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500 hover:opacity-95 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-transform hover:-translate-y-0.5"
              >
                <span>Instagram: {SHOP_INFO.instagramHandle}</span>
              </a>
              <a
                href={SHOP_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565c0] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-transform hover:-translate-y-0.5"
              >
                <span>Facebook: {SHOP_INFO.facebookPage}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: STORE LOCATION & GOOGLE MAP (Una, Himachal Pradesh)
      ===================================================================== */}
      <section id="location" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D91424] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Find Us In Una
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Visit Our Showroom
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Located conveniently in Una, Himachal Pradesh, our gift gallery offers a walk-in
              experience with hundreds of ready-to-gift items and custom gift wrapping.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2.5 text-sm">
              <p className="font-extrabold text-slate-900 text-base">{SHOP_INFO.name}</p>
              <p className="text-slate-700 font-medium">📍 {SHOP_INFO.address}</p>
              <p className="text-slate-700 font-medium">📞 {SHOP_INFO.phoneDisplay}</p>
              <p className="text-slate-600 text-xs pt-1">{SHOP_INFO.timings}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-80 sm:h-96 bg-slate-100">
              <iframe
                title="Archies Ganpati Gift Gallery Una Map"
                src={SHOP_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER
      ===================================================================== */}
      <footer className="bg-slate-950 text-slate-300 py-10 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div>
            <p className="font-extrabold text-white text-base">{SHOP_INFO.name}</p>
            <p className="text-slate-400 mt-1">
              Clocks • Soft Toys • Watches • Lamps • Scenery • Statues • Home Decor • Wallets •
              Flower Pots in Una, Himachal Pradesh.
            </p>
          </div>
          <p className="text-slate-400">
            © {new Date().getFullYear()} {SHOP_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}