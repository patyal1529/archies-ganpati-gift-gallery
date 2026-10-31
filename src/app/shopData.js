// ============================================================================
// CENTRAL DATA FILE (src/app/shopData.js)
// Kal jab real photos, phone number ya address badalna ho, toh sirf isi ek
// file mein change karna — poori website par khud update ho jayega!
// ============================================================================

export const SHOP_INFO = {
  name: "Archies – Ganpati Gift Gallery",
  city: "Una, Himachal Pradesh",
  tagline:
    "Una's premier destination for thoughtful gifts, home accents, timepieces, and festive keepsakes for every celebration.",
  phoneDisplay: "+91 98765 43210", // Kal yahan asli mobile number dalna
  phoneRaw: "919876543210", // Bina + aur space ke (WhatsApp link ke liye)
  email: "ganpatigiftgallery.una@gmail.com", // Kal yahan asli email dalna
  address: "Main Market, Near Old Bus Stand, Una, Himachal Pradesh - 174303",
  timings: "Open Daily: 9:30 AM – 9:00 PM",
  instagramUrl: "https://instagram.com/", // Kal yahan shop ka Insta link dalna
  instagramHandle: "@archies_ganpati_una",
  facebookUrl: "https://facebook.com/", // Kal yahan Facebook link dalna
  facebookPage: "Archies Ganpati Gift Gallery Una",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.33407778152!2d76.2483956!3d31.4685026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb198180014f%3A0xbf76347093a3aa9a!2sUna%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

// ============================================================================
// ALL 9 GIFT CATEGORIES & INNER PRODUCT PHOTOS
// ============================================================================
export const GIFT_CATEGORIES = [
  {
    id: "clocks",
    title: "Wall & Table Clocks",
    subtitle: "Designer & Vintage Timepieces",
    description:
      "Statement pendulum clocks, silent-sweep modern wall clocks, antique station clocks, and bedside alarm clocks for homes and offices.",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Classic Pendulum Wall Clock",
        tag: "Living Room Bestseller",
        image:
          "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Minimalist Wooden Wall Clock",
        tag: "Modern Interior",
        image:
          "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Double-Sided Vintage Station Clock",
        tag: "Antique Brass Finish",
        image:
          "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Metallic Sunburst Designer Clock",
        tag: "Housewarming Favorite",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Retro Twin-Bell Table Clock",
        tag: "Bedside & Study Desk",
        image:
          "https://images.unsplash.com/photo-1518281361980-b26bfd556770?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Rose-Gold Silent Sweep Clock",
        tag: "Premium Gift Box",
        image:
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "soft-toys",
    title: "Soft Toys & Plushies",
    subtitle: "Teddy Bears & Cuddle Toys",
    description:
      "Ultra-soft teddy bears ranging from compact desk companions to life-size 5-foot plushies, heart cushions, and kids' animal toys.",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Jumbo Brown Teddy Bear (3ft – 5ft)",
        tag: "Top Birthday Gift",
        image:
          "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Archies Signature Pink Plush Bear",
        tag: "Ultra-Soft Fur",
        image:
          "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cute Panda & Character Plushies",
        tag: "Kids Collection",
        image:
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Couple Teddy & Heart Cushion Set",
        tag: "Anniversary Special",
        image:
          "https://images.unsplash.com/photo-1584155828260-3f62706f9e20?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Baby Elephant & Bunny Plush Toy",
        tag: "Skin-Friendly & Washable",
        image:
          "https://images.unsplash.com/photo-1558679908-541bcf1249ff?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Curated Teddy Gift Hamper Basket",
        tag: "Custom Wrapped",
        image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "watches",
    title: "Wrist Watches",
    subtitle: "Men's, Women's & Couple Sets",
    description:
      "Elegant analog, chronograph-style, leather-strap, and metallic bracelet watches along with boxed couple watch sets for weddings.",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Classic Brown Leather Men's Watch",
        tag: "Formal & Everyday",
        image:
          "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "His & Hers Couple Watch Gift Set",
        tag: "Wedding & Anniversary",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Women's Rose-Gold Bracelet Watch",
        tag: "Party & Festive Wear",
        image:
          "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Stainless Steel Chronograph Edition",
        tag: "Luxury Gift Box",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Matte Black Metallic Gents Watch",
        tag: "Trending Design",
        image:
          "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Kids Sport & Cartoon Digital Watches",
        tag: "Birthday Favorites",
        image:
          "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "lamps",
    title: "Decorative Lamps",
    subtitle: "Ambient, Crystal & Night Lamps",
    description:
      "Warm bedside table lamps, touch-sensor crystal diamond lamps, 3D moon lights, and glowing LED showpieces to brighten up any room.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Warm Linen Shade Bedside Lamp",
        tag: "Cozy Bedroom Glow",
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crystal Touch-Sensor Acrylic Lamp",
        tag: "Multi-Color LED",
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "3D Moon & Galaxy Night Light",
        tag: "Wooden Stand Included",
        image:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Vintage Brass & Glass Lantern Lamp",
        tag: "Festive Accent",
        image:
          "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Romantic Couple Figurine Night Lamp",
        tag: "Couple Gift Idea",
        image:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Ceramic Base Study & Desk Lamp",
        tag: "Modern Workspace",
        image:
          "https://images.unsplash.com/photo-1534105615256-13940a56ff44?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "scenery",
    title: "Wall Scenery & Frames",
    subtitle: "Canvas Art, Paintings & Collages",
    description:
      "Framed nature landscapes, Vastu 7-running-horses art, LED backlit wall paintings, and multi-photo family collage frames.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Framed Nature & Waterfall Landscape",
        tag: "Living Room Statement",
        image:
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Vastu 7 Running Horses Gold Frame",
        tag: "Auspicious Home & Office Gift",
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Family Memories Multi-Photo Collage",
        tag: "Holds 6 to 12 Photos",
        image:
          "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Radha Krishna Textured Wall Art",
        tag: "3D & Gold Foil Detailing",
        image:
          "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "3-Panel Modern Abstract Canvas Set",
        tag: "Contemporary Decor",
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "LED Illuminated Wall Scenery Frame",
        tag: "Built-in Warm Backlight",
        image:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "statues",
    title: "All Types of Statues",
    subtitle: "Spiritual Idols & Luxury Showpieces",
    description:
      "Finely crafted Lord Ganesha, Radha-Krishna, Meditating Buddha, Laughing Buddha, and modern resin figurines for home temples and gifting.",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Lord Ganesha Marble & Gold Finish Idol",
        tag: "Mandir & Car Dashboard",
        image:
          "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Serene Meditating Buddha Figurine",
        tag: "Zen Living Room Accent",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Radha Krishna Hand-Painted Statue",
        tag: "Wedding & Housewarming",
        image:
          "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Romantic Couple Resin Sculpture",
        tag: "Anniversary Bestseller",
        image:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Golden Deer & Swan Pair Showpiece",
        tag: "TV Console & Shelf Decor",
        image:
          "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Feng Shui Laughing Buddha Statue",
        tag: "Prosperity & Good Luck",
        image:
          "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "decoration-items",
    title: "Home Decoration Items",
    subtitle: "Showpieces, Hangings & Festive Accents",
    description:
      "Metallic wall hangings, wind chimes, table centerpieces, aroma candle holders, and party decoration supplies.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Metallic Wall Hanging & Wind Chimes",
        tag: "Entrance & Balcony",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Ceramic & Gold Table Centerpieces",
        tag: "Coffee Table Styling",
        image:
          "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Aromatic Candles & Glass Holders",
        tag: "Festive Hamper Favorite",
        image:
          "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Birthday & Anniversary Party Decor Kit",
        tag: "Foil Banners & Balloons",
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crafted Wooden Door Hangings",
        tag: "Traditional & Modern",
        image:
          "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Warm Curtain LED & Fairy String Lights",
        tag: "Celebration Lighting",
        image:
          "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "wallets",
    title: "Wallets & Clutches",
    subtitle: "Men's Leather Wallets & Ladies Purses",
    description:
      "Classic bi-fold men's wallets, executive combo gift boxes (wallet, belt, pen, keychain), and embellished bridal/party clutches.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Classic Tan Leather Bi-Fold Wallet",
        tag: "Comes in Gift Box",
        image:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "4-in-1 Men's Executive Combo Set",
        tag: "Wallet + Belt + Pen + Keychain",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Embellished Bridal & Party Clutch",
        tag: "Ladies Festive Collection",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Designer Women's Sling & Shoulder Bag",
        tag: "Everyday Elegance",
        image:
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Slim RFID Card Holder & Zip Wallet",
        tag: "Sleek Pocket Fit",
        image:
          "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Premium Corporate Gift Hamper Box",
        tag: "Custom Gifting",
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "flowers-with-pot",
    title: "Flowers with Pot",
    subtitle: "Artificial Florals, Bonsai & Vases",
    description:
      "Lifelike washable floral arrangements, decorative ceramic planters, indoor bonsai trees, and tall corner vases.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Ceramic Planter with Pastel Rose Bunch",
        tag: "Center Table Favorite",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Decorative Artificial Bonsai Tree",
        tag: "Office Desk & Console",
        image:
          "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Tall Floor Vase with Botanical Stems",
        tag: "Living Room Corner",
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Blooming Orchid Arrangement in Pot",
        tag: "Washable & Dust-Free",
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mini Tabletop Succulent Trio Set",
        tag: "Set of 3 Ceramic Pots",
        image:
          "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hammered Gold Vase with Sunflowers",
        tag: "Bright Festive Look",
        image:
          "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

// ============================================================================
// SHOWROOM PHOTO GALLERY (Bottom Left Section)
// ============================================================================
export const GALLERY_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80",
    caption: "Archies Greeting Cards & Gift Boxes",
  },
  {
    src: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    caption: "Plush Teddy & Soft Toy Wall",
  },
  {
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    caption: "Framed Scenery & Canvas Art",
  },
  {
    src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    caption: "Designer Lamps & Lighting Display",
  },
  {
    src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    caption: "Watches & Leather Wallet Counter",
  },
  {
    src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    caption: "Artificial Flowers & Planter Pots",
  },
];