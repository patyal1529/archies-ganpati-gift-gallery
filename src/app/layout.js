import { Poppins } from "next/font/google";
import "./globals.css";

// Font setup - clean aur readable font website ke liye
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// SEO Metadata - Google search mein Una, Himachal Pradesh ke liye rank karne ke liye
export const metadata = {
  title: "Archies – Ganpati Gift Gallery | Best Gift Shop in Una, Himachal Pradesh",
  description:
    "Archies – Ganpati Gift Gallery (AR Gift House) in Una, Himachal Pradesh. Shop for wall clocks, soft toys, watches, decorative lamps, scenery frames, god statues, wallets, flower pots, and home decoration items.",
  keywords: [
    "Archies Ganpati Gift Gallery Una",
    "AR Gift House Una",
    "Gift shop in Una Himachal Pradesh",
    "Archies gallery Una HP",
    "Soft toys and watches in Una",
    "Home decoration items Una",
    "Statues and showpieces Una",
    "Best gift store in Una",
  ],
  openGraph: {
    title: "Archies – Ganpati Gift Gallery | Una, Himachal Pradesh",
    description:
      "Explore our collection of gifts, soft toys, watches, clocks, statues, lamps, scenery frames, wallets, and flower pots in Una, HP.",
    images: ["/gcl.jpeg"],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/gcl.jpeg",
  },
};

export default function RootLayout({ children }) {
  // Google Local Business Schema - Local SEO (Una, HP) ke liye
  // Kal jab asli phone number aur exact address aayega toh yahan bhi update kar dena
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GiftShop",
    name: "Archies – Ganpati Gift Gallery (AR Gift House)",
    image: "/gcl.jpeg",
    description:
      "Gift gallery in Una, Himachal Pradesh offering soft toys, watches, wall clocks, lamps, scenery, statues, decoration items, wallets, and artificial flowers with pots.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Market, Near Bus Stand",
      addressLocality: "Una",
      addressRegion: "Himachal Pradesh",
      postalCode: "174303",
      addressCountry: "IN",
    },
    telephone: "+91-9876543210",
    openingHours: "Mo-Su 09:30-21:00",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-[#FFFDFB] text-stone-800 antialiased`}>
        {/* Local SEO Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}