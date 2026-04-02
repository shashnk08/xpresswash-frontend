// Service Cards Data
export const services = [
  {
    id: 1,
    name: "Express Wash",
    description: "Quick exterior wash and dry for a spotless shine in minutes.",
    image: "/media/car_wash.png",
    price: 299,
    durationMinutes: 20,
    inclusions: [
      "Exterior hand wash",
      "Drying with microfiber towels",
      "Tire shine",
      "Window cleaning",
      "Quick vacuum (front seats)",
    ],
  },
  {
    id: 2,
    name: "Premium Detailing",
    description: "Full interior and exterior cleaning, vacuum, polish, and wax.",
    image: "/media/service-slide-2.webp",
    price: 899,
    durationMinutes: 60,
    inclusions: [
      "Full exterior wash & dry",
      "Clay bar treatment",
      "Hand wax application",
      "Complete interior vacuum",
      "Dashboard & console cleaning",
      "Leather/vinyl conditioning",
      "Window cleaning (inside & out)",
      "Tire & wheel deep clean",
      "Air freshener",
    ],
  },
  {
    id: 3,
    name: "Sanitization Package",
    description: "Deep cleaning and disinfection for a safe, hygienic ride.",
    image: "/media/pexels-introspectivedsgn-4876641.jpg",
    price: 499,
    durationMinutes: 40,
    inclusions: [
      "Exterior wash & dry",
      "Interior steam cleaning",
      "AC vent disinfection",
      "Antibacterial wipe-down",
      "Seat & upholstery sanitization",
      "Door handles & high-touch areas",
      "Trunk cleaning",
      "Air purifier treatment",
    ],
  },
  {
    id: 4,
    name: "Interior Deep Clean",
    description: "Thorough cleaning of seats, carpets, dashboard, and upholstery.",
    image: "/media/i2.jpg",
    price: 699,
    durationMinutes: 50,
    inclusions: [
      "Seat shampooing",
      "Carpet vacuum",
      "Dashboard polish",
      "Door panel cleaning",
      "Interior deodorizing",
    ],
  },
  {
    id: 5,
    name: "Ceramic Protection",
    description: "Advanced coating to protect paint and enhance gloss.",
    image: "/media/xpresswashjpeg.jpeg",
    price: 1499,
    durationMinutes: 90,
    inclusions: [
      "Exterior wash",
      "Paint decontamination",
      "Ceramic coating application",
      "High gloss finish",
      "Water repellent protection",
    ],
  },
  {
    id: 6,
    name: "Engine Bay Detailing",
    description: "Professional cleaning and detailing of your car's engine bay.",
    image: "/media/car_wash.png",
    price: 599,
    durationMinutes: 45,
    inclusions: [
      "Engine degreasing",
      "Component cleaning",
      "Protective coating",
      "Hose and wire detailing",
      "Final polish",
    ],
  },
];

// Service Steps Data
export const serviceSteps: Record<number, string[]> = {
  1: ["Pre-rinse", "Foam wash", "Hand wash", "Drying", "Final touch"],
  2: ["Inspection", "Wash", "Clay bar", "Polish", "Wax", "Interior clean"],
  3: ["Wash", "Steam cleaning", "Disinfection", "AC vents clean", "Sanitize"],
  4: ["Vacuum", "Shampoo seats", "Dashboard clean", "Panels wipe", "Deodorize"],
  5: ["Wash", "Decontamination", "Coating", "Curing", "Final inspection"],
  6: ["Degreasing", "Component clean", "Protective coat", "Detail wires", "Polish"],
};

// Add-ons Data
export const addOns = [
  { name: "Body Yellow Marks Removal", price: 199 },
  { name: "Body Water Marks Removal", price: 149 },
  { name: "Glass Water Marks Removal", price: 99 },
  { name: "Tar and Gum Removal", price: 249 },
  { name: "Exterior Shine Plus(CAR POLISH)", price: 299 },
  { name: "Rubbing/Polishing/\n Wax", price: 349 },
];

// Subscription Plans Data
export const subscriptionPlans = [
  {
    id: 1,
    washes: 4,
    isRecommended: false,
    sedan: {
      name: "Sedan / Hatchback",
      icon: "🚗",
      price: 2500,
      pricePerWash: 190.68,
    },
    suv: {
      name: "SUV / Premium",
      icon: "🚙",
      price: 2800,
      pricePerWash: 213.56,
    },
  },
  {
    id: 2,
    washes: 8,
    isRecommended: true,
    sedan: {
      name: "Sedan / Hatchback",
      icon: "🚗",
      price: 4800,
      pricePerWash: 366.1,
    },
    suv: {
      name: "SUV / Premium",
      icon: "🚙",
      price: 5000,
      pricePerWash: 381.36,
    },
  },
];
