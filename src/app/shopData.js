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
  phoneDisplay: "+91 98167 93506",
  phoneRaw: "919816793506",
  email: "ganpatigiftgallery.una@gmail.com",
  address: "Shop No 4, Near DAV Sr Sec School, Nangal Road, Durga Colony, Una, Himachal Pradesh - 174303",
  timings: "Open Daily: 9:30 AM – 9:00 PM",
  instagramUrl: "https://instagram.com/",
  instagramHandle: "@archies_ganpati_una",
  facebookUrl: "https://facebook.com/",
  facebookPage: "Archies Ganpati Gift Gallery Una",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Shop+No+4+NEAR+DAV+Sr+Sec+SCHOOL+Nangal+Road+Durga+Colony+Una+Himachal+Pradesh+174303&t=&z=16&ie=UTF8&iwloc=&output=embed",
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
    image: "/wallclock/1.jpeg",
    // Saari 16 Real Clock Photos (1.jpeg se lekar 16.jpeg tak in public/wallclock/)
    items: [
      { name: "Designer Wall Clock - Model 01", tag: "Living Room Accent", image: "/wallclock/1.jpeg" },
      { name: "Designer Wall Clock - Model 02", tag: "Modern Interior", image: "/wallclock/2.jpeg" },
      { name: "Designer Wall Clock - Model 03", tag: "Antique Finish", image: "/wallclock/3.jpeg" },
      { name: "Designer Wall Clock - Model 04", tag: "Housewarming Special", image: "/wallclock/4.jpeg" },
      { name: "Designer Wall Clock - Model 05", tag: "Bedside & Office", image: "/wallclock/5.jpeg" },
      { name: "Designer Wall Clock - Model 06", tag: "Silent Sweep Movement", image: "/wallclock/6.jpeg" },
      { name: "Designer Wall Clock - Model 07", tag: "Royal Pendulum Series", image: "/wallclock/7.jpeg" },
      { name: "Designer Wall Clock - Model 08", tag: "Classic Round Clock", image: "/wallclock/8.jpeg" },
      { name: "Designer Wall Clock - Model 09", tag: "Contemporary Decor", image: "/wallclock/9.jpeg" },
      { name: "Designer Wall Clock - Model 10", tag: "Luxury Wall Accent", image: "/wallclock/10.jpeg" },
      { name: "Designer Wall Clock - Model 11", tag: "Minimalist Style", image: "/wallclock/11.jpeg" },
      { name: "Designer Wall Clock - Model 12", tag: "Vintage Station Look", image: "/wallclock/12.jpeg" },
      { name: "Designer Wall Clock - Model 13", tag: "Drawing Room Special", image: "/wallclock/13.jpeg" },
      { name: "Designer Wall Clock - Model 14", tag: "Bedroom Timepiece", image: "/wallclock/14.jpeg" },
      { name: "Designer Wall Clock - Model 15", tag: "Decorative Dial Series", image: "/wallclock/15.jpeg" },
      { name: "Designer Wall Clock - Model 16", tag: "Una Showroom Exclusive", image: "/wallclock/16.jpeg" },
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
    subtitle: "Canvas Art, Paintings & Frames",
    description:
      "Exclusive collection of 3D framed nature landscapes, auspicious Vastu wall frames, modern canvas art, and spiritual paintings available at our Una showroom.",
    image: "/scenery/1.jpeg",
    // Saari 24 Real Photos (1.jpeg se lekar 24.jpeg tak)
    items: [
      { name: "Premium Wall Scenery - Design 01", tag: "Living Room Accent", image: "/scenery/1.jpeg" },
      { name: "Premium Wall Scenery - Design 02", tag: "Wall Art Frame", image: "/scenery/2.jpeg" },
      { name: "Premium Wall Scenery - Design 03", tag: "Home & Office Decor", image: "/scenery/3.jpeg" },
      { name: "Premium Wall Scenery - Design 04", tag: "Artistic Frame", image: "/scenery/4.jpeg" },
      { name: "Premium Wall Scenery - Design 05", tag: "Modern Landscape", image: "/scenery/5.jpeg" },
      { name: "Premium Wall Scenery - Design 06", tag: "Vastu & Temple Art", image: "/scenery/6.jpeg" },
      { name: "Premium Wall Scenery - Design 07", tag: "Hall & Dining Decor", image: "/scenery/7.jpeg" },
      { name: "Premium Wall Scenery - Design 08", tag: "Elegant Wall Frame", image: "/scenery/8.jpeg" },
      { name: "Premium Wall Scenery - Design 09", tag: "New Home Gift", image: "/scenery/9.jpeg" },
      { name: "Premium Wall Scenery - Design 10", tag: "Exclusive Artwork", image: "/scenery/10.jpeg" },
      { name: "Premium Wall Scenery - Design 11", tag: "Framed Canvas Art", image: "/scenery/11.jpeg" },
      { name: "Premium Wall Scenery - Design 12", tag: "Decorative Picture", image: "/scenery/12.jpeg" },
      { name: "Premium Wall Scenery - Design 13", tag: "Spiritual & Divine", image: "/scenery/13.jpeg" },
      { name: "Premium Wall Scenery - Design 14", tag: "Contemporary Frame", image: "/scenery/14.jpeg" },
      { name: "Premium Wall Scenery - Design 15", tag: "Gold Border Series", image: "/scenery/15.jpeg" },
      { name: "Premium Wall Scenery - Design 16", tag: "Nature & Waterfall", image: "/scenery/16.jpeg" },
      { name: "Premium Wall Scenery - Design 17", tag: "Bedroom Gallery Art", image: "/scenery/17.jpeg" },
      { name: "Premium Wall Scenery - Design 18", tag: "Housewarming Special", image: "/scenery/18.jpeg" },
      { name: "Premium Wall Scenery - Design 19", tag: "Architectural Art", image: "/scenery/19.jpeg" },
      { name: "Premium Wall Scenery - Design 20", tag: "Modern Minimalist", image: "/scenery/20.jpeg" },
      { name: "Premium Wall Scenery - Design 21", tag: "3D Visual Frame", image: "/scenery/21.jpeg" },
      { name: "Premium Wall Scenery - Design 22", tag: "Statement Art Piece", image: "/scenery/22.jpeg" },
      { name: "Premium Wall Scenery - Design 23", tag: "Luxury Wall Accent", image: "/scenery/23.jpeg" },
      { name: "Premium Wall Scenery - Design 24", tag: "Una Showroom Exclusive", image: "/scenery/24.jpeg" },
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