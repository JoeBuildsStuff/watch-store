export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  category: "luxury" | "sport" | "smart" | "classic";
  isNew?: boolean;
  isSale?: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: "rolex-submariner",
    name: "Submariner Date",
    brand: "Rolex",
    price: 9550,
    description: "The Rolex Submariner is a classic diving watch known for its durability and timeless design. Water-resistant to 300 meters, it features a unidirectional rotatable bezel and luminescent display for underwater legibility.",
    features: [
      "Water-resistant to 300m",
      "Unidirectional rotatable bezel",
      "Luminescent display",
      "Self-winding mechanical movement"
    ],
    specifications: {
      "Case material": "Oystersteel",
      "Dial color": "Black",
      "Diameter": "41mm",
      "Movement": "Calibre 3235",
      "Power Reserve": "70 hours"
    },
    images: [
      "/images/watches/rolex-submariner-1.jpg",
      "/images/watches/rolex-submariner-2.jpg",
      "/images/watches/rolex-submariner-3.jpg"
    ],
    category: "luxury",
    stock: 5
  },
  {
    id: "omega-speedmaster",
    name: "Speedmaster Professional",
    brand: "Omega",
    price: 6400,
    description: "The Omega Speedmaster Professional is the first watch worn on the moon. This chronograph is celebrated for its reliability, readability, and iconic design that has remained largely unchanged since the 1960s.",
    features: [
      "Chronograph function",
      "Tachymeter scale",
      "Manual-winding movement",
      "Hesalite crystal"
    ],
    specifications: {
      "Case material": "Stainless steel",
      "Dial color": "Black",
      "Diameter": "42mm",
      "Movement": "Calibre 1861",
      "Power Reserve": "48 hours"
    },
    images: [
      "/images/watches/omega-speedmaster-1.jpg",
      "/images/watches/omega-speedmaster-2.jpg",
      "/images/watches/omega-speedmaster-3.jpg"
    ],
    category: "luxury",
    stock: 8
  },
  {
    id: "apple-watch-series-8",
    name: "Apple Watch Series 8",
    brand: "Apple",
    price: 399,
    description: "The Apple Watch Series 8 features advanced health monitoring including temperature sensing and crash detection. Stay connected with cellular capability and enjoy a large, always-on Retina display.",
    features: [
      "Temperature sensing",
      "Blood oxygen sensor",
      "ECG app",
      "Always-On Retina display",
      "Water resistant to 50m"
    ],
    specifications: {
      "Case material": "Aluminum",
      "Sizes": "41mm, 45mm",
      "Display": "Always-On Retina LTPO OLED",
      "Processor": "S8 SiP",
      "Battery life": "Up to 18 hours"
    },
    images: [
      "/images/watches/apple-watch-1.jpg",
      "/images/watches/apple-watch-2.jpg",
      "/images/watches/apple-watch-3.jpg"
    ],
    category: "smart",
    isNew: true,
    stock: 15
  },
  {
    id: "seiko-prospex",
    name: "Prospex Diver",
    brand: "Seiko",
    price: 595,
    salePrice: 450,
    description: "The Seiko Prospex series is designed for sports enthusiasts and adventure seekers. This professional diver's watch offers water resistance to 200 meters and exceptional durability.",
    features: [
      "Water-resistant to 200m",
      "Automatic movement with manual winding",
      "Unidirectional rotating bezel",
      "LumiBrite hands and markers"
    ],
    specifications: {
      "Case material": "Stainless steel",
      "Dial color": "Blue",
      "Diameter": "42.4mm",
      "Movement": "Caliber 4R36",
      "Power Reserve": "41 hours"
    },
    images: [
      "/images/watches/seiko-prospex-1.jpg",
      "/images/watches/seiko-prospex-2.jpg",
      "/images/watches/seiko-prospex-3.jpg"
    ],
    category: "sport",
    isSale: true,
    stock: 12
  },
  {
    id: "casio-g-shock",
    name: "G-Shock GA2100",
    brand: "Casio",
    price: 99,
    description: "The Casio G-Shock GA2100 combines a thin profile with octagonal bezel design. Known for its shock resistance and durability, this watch offers both analog and digital timekeeping.",
    features: [
      "Shock resistant",
      "200m water resistance",
      "Carbon Core Guard structure",
      "Double LED light",
      "5 daily alarms"
    ],
    specifications: {
      "Case material": "Carbon fiber reinforced resin",
      "Dial color": "Black",
      "Size": "45.4mm",
      "Battery life": "Approximately 3 years",
      "Weight": "51g"
    },
    images: [
      "/images/watches/casio-gshock-1.jpg",
      "/images/watches/casio-gshock-2.jpg",
      "/images/watches/casio-gshock-3.jpg"
    ],
    category: "sport",
    stock: 20
  },
  {
    id: "tissot-prx",
    name: "PRX Powermatic 80",
    brand: "Tissot",
    price: 675,
    description: "The Tissot PRX Powermatic 80 combines 1970s aesthetics with modern mechanics. Featuring a slim profile, integrated bracelet, and waffle-pattern dial, it delivers vintage style with contemporary performance.",
    features: [
      "Powermatic 80 automatic movement",
      "80-hour power reserve",
      "Sapphire crystal",
      "100m water resistance"
    ],
    specifications: {
      "Case material": "Stainless steel",
      "Dial color": "Blue",
      "Diameter": "40mm",
      "Movement": "Powermatic 80",
      "Power Reserve": "80 hours"
    },
    images: [
      "/images/watches/tissot-prx-1.jpg",
      "/images/watches/tissot-prx-2.jpg",
      "/images/watches/tissot-prx-3.jpg"
    ],
    category: "classic",
    stock: 7
  },
  {
    id: "garmin-fenix-7",
    name: "Fenix 7 Sapphire Solar",
    brand: "Garmin",
    price: 899,
    description: "The Garmin Fenix 7 Sapphire Solar offers advanced sports tracking with exceptional battery life enhanced by solar charging. Featuring maps, music storage, and rugged construction for outdoor adventures.",
    features: [
      "Solar charging",
      "Multi-band GPS",
      "Real-time stamina feature",
      "Advanced training metrics",
      "Touchscreen and button interface"
    ],
    specifications: {
      "Case material": "Fiber-reinforced polymer with metal rear cover",
      "Display": "1.3\" transflective memory-in-pixel",
      "Size": "47mm",
      "Battery life": "Up to 37 days in smartwatch mode with solar",
      "Storage": "32GB"
    },
    images: [
      "/images/watches/garmin-fenix-1.jpg",
      "/images/watches/garmin-fenix-2.jpg",
      "/images/watches/garmin-fenix-3.jpg"
    ],
    category: "sport",
    isNew: true,
    stock: 10
  },
  {
    id: "jaeger-lecoultre-reverso",
    name: "Reverso Classic",
    brand: "Jaeger-LeCoultre",
    price: 7050,
    description: "The Jaeger-LeCoultre Reverso is an Art Deco masterpiece with a reversible case originally designed for polo players. This elegant timepiece combines historic innovation with timeless sophistication.",
    features: [
      "Reversible case",
      "Hand-wound movement",
      "Sapphire crystal front and back",
      "Alligator leather strap"
    ],
    specifications: {
      "Case material": "Stainless steel",
      "Dial color": "Silver",
      "Size": "45.6 x 27.4mm",
      "Movement": "Calibre 822/2",
      "Power Reserve": "42 hours"
    },
    images: [
      "/images/watches/reverso-1.jpg",
      "/images/watches/reverso-2.jpg",
      "/images/watches/reverso-3.jpg"
    ],
    category: "luxury",
    stock: 3
  },
  {
    id: "hamilton-khaki-field",
    name: "Khaki Field Mechanical",
    brand: "Hamilton",
    price: 495,
    salePrice: 425,
    description: "The Hamilton Khaki Field Mechanical is inspired by military watches supplied to the U.S. Army. This hand-wound timepiece offers vintage military aesthetics with modern reliability.",
    features: [
      "Hand-wound movement",
      "Sapphire crystal",
      "Super-LumiNova hands and markers",
      "50m water resistance"
    ],
    specifications: {
      "Case material": "Stainless steel",
      "Dial color": "Black",
      "Diameter": "38mm",
      "Movement": "H-50",
      "Power Reserve": "80 hours"
    },
    images: [
      "/images/watches/hamilton-khaki-1.jpg",
      "/images/watches/hamilton-khaki-2.jpg",
      "/images/watches/hamilton-khaki-3.jpg"
    ],
    category: "classic",
    isSale: true,
    stock: 9
  },
  {
    id: "samsung-galaxy-watch5",
    name: "Galaxy Watch5 Pro",
    brand: "Samsung",
    price: 449,
    salePrice: 399,
    description: "The Samsung Galaxy Watch5 Pro features a durable titanium case and sapphire crystal for enhanced durability. With advanced health monitoring and smart features, it's designed for active lifestyles.",
    features: [
      "Body composition analysis",
      "Advanced sleep coaching",
      "Route workout tracking",
      "Turn-by-turn navigation",
      "IP68 and 5ATM water resistance"
    ],
    specifications: {
      "Case material": "Titanium",
      "Display": "1.4\" Super AMOLED",
      "Size": "45mm",
      "Battery": "590mAh",
      "Operating system": "Wear OS Powered by Samsung"
    },
    images: [
      "/images/watches/samsung-galaxy-1.jpg",
      "/images/watches/samsung-galaxy-2.jpg",
      "/images/watches/samsung-galaxy-3.jpg"
    ],
    category: "smart",
    isSale: true,
    stock: 14
  },
  {
    id: "grand-seiko-snowflake",
    name: "Snowflake",
    brand: "Grand Seiko",
    price: 5800,
    description: "The Grand Seiko Snowflake features a unique textured white dial inspired by the winter landscapes of Japan. Powered by the innovative Spring Drive movement, it combines mechanical and electronic technology.",
    features: [
      "Spring Drive movement",
      "Zaratsu polished case",
      "Snowflake textured dial",
      "Titanium case and bracelet",
      "Exhibition caseback"
    ],
    specifications: {
      "Case material": "Titanium",
      "Dial color": "White/Silver",
      "Diameter": "41mm",
      "Movement": "9R65 Spring Drive",
      "Power Reserve": "72 hours"
    },
    images: [
      "/images/watches/grand-seiko-1.jpg",
      "/images/watches/grand-seiko-2.jpg",
      "/images/watches/grand-seiko-3.jpg"
    ],
    category: "luxury",
    stock: 4
  },
  {
    id: "timex-weekender",
    name: "Weekender Chronograph",
    brand: "Timex",
    price: 79,
    description: "The Timex Weekender Chronograph offers versatile style with chronograph functionality. With an INDIGLO® night-light and interchangeable straps, it's both practical and customizable.",
    features: [
      "Chronograph function",
      "INDIGLO® night-light",
      "Quick-release strap system",
      "Water resistant to 30m"
    ],
    specifications: {
      "Case material": "Brass",
      "Dial color": "Cream",
      "Diameter": "40mm",
      "Movement": "Quartz",
      "Battery life": "Approximately 4 years"
    },
    images: [
      "/images/watches/timex-weekender-1.jpg",
      "/images/watches/timex-weekender-2.jpg",
      "/images/watches/timex-weekender-3.jpg"
    ],
    category: "classic",
    stock: 25
  }
]; 