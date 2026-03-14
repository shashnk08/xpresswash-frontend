
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Express Wash",
    description: "Quick exterior wash and dry for a spotless shine in minutes.",
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
   price: 1499,
   durationMinutes: 90,
   inclusions: [
     "Exterior wash",
     "Paint decontamination",
     "Ceramic coating application",
     "High gloss finish",
     "Water repellent protection",
    ],
  } 
];

export function ServicesPreview() {
  return (
    <section id="popular-services" className="py-24" style={{ backgroundColor: '#204264' }}>
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">Popular Services</h2>
          <p className="mt-2 text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Carefully designed packages for every car and every need.
          </p>
        </header>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {/* First row */}
          {services.slice(0,3).map((service) => {
            const isPremium = service.name === "Premium Detailing";
            return (
              <motion.div
                key={service.id}
                whileHover={{
                  y: -8,
                  boxShadow: isPremium
                    ? "0 0 0 4px #2563EB88, 0 12px 48px 0 #22D3EE99"
                    : "0 8px 32px 0 #2563EB44"
                }}
                transition={{ duration: 0.35 }}
                className={[
                  "relative flex flex-col items-center justify-between min-h-[480px] p-8",
                  "rounded-[24px] border border-[#1E293B]/30 backdrop-blur-xl",
                  "bg-white/10",
                  "shadow-[0_8px_40px_0_rgba(37,99,235,0.10)]",
                  "transition-all duration-300",
                  isPremium ? "scale-105 border-2 border-cyan-400/80 shadow-[0_0_0_4px_#22D3EE88,0_12px_48px_0_#2563EB99] z-10" : "hover:border-[#2563EB]"
                ].join(' ')}
                style={{
                  background: "rgba(16, 24, 40, 0.65)",
                  boxShadow: isPremium
                    ? "0 0 0 4px #22D3EE88, 0 12px 48px 0 #2563EB99"
                    : "0 8px 32px 0 #2563EB44",
                  borderRadius: 24,
                }}
              >

                {/* Card content */}
                <h3 className="text-2xl font-bold text-white mb-3 text-center drop-shadow-md">
                  {service.name}
                </h3>

                <p className="text-base text-[#94a3b8] text-center mb-4 flex-grow" style={{ lineHeight: 1.6 }}>
                  {service.description}
                </p>

                {/* Inclusions list */}
                <div className="w-full mb-6">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Includes:</h4>
                  <ul className="space-y-1.5 text-sm text-[#cbd5e1] list-disc pl-4">
                    {service.inclusions.map((inclusion, idx) => (
                      <li key={idx}>{inclusion}</li>
                    ))}
                  </ul>
                </div>

                {/* Price & Book button */}
                <div className="flex items-center justify-between w-full mt-4">
                  <span className="text-2xl font-bold text-cyan-300 drop-shadow-md">
                    ₹{service.price}
                  </span>
                  <button
                    className="ml-auto px-7 py-2 rounded-full font-semibold text-white text-base shadow-lg transition-all duration-300 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1e40af] hover:to-[#06b6d4] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    style={{
                      boxShadow: "0 2px 16px 0 #22D3EE55, 0 0px 8px 0 #2563EB44"
                    }}
                  >
                    Book
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
            {/* Second row (centered) */}
            <div className="mt-10 grid gap-10 md:grid-cols-2 max-w-3xl mx-auto">
              {services.slice(3).map((service) => {
                const isPremium = service.name === "Premium Detailing";
                return (
                  <motion.div
                    key={service.id}
                    whileHover={{
                      y: -8,
                      boxShadow: isPremium
                        ? "0 0 0 4px #2563EB88, 0 12px 48px 0 #22D3EE99"
                        : "0 8px 32px 0 #2563EB44"
                    }}
                    transition={{ duration: 0.35 }}
                    className={[
                      "relative flex flex-col items-center justify-between min-h-[480px] p-8",
                      "rounded-[24px] border border-[#1E293B]/30 backdrop-blur-xl",
                      "bg-white/10",
                      "shadow-[0_8px_40px_0_rgba(37,99,235,0.10)]",
                      "transition-all duration-300",
                      isPremium ? "scale-105 border-2 border-cyan-400/80 shadow-[0_0_0_4px_#22D3EE88,0_12px_48px_0_#2563EB99] z-10" : "hover:border-[#2563EB]"
                    ].join(' ')}
                    style={{
                      background: "rgba(16, 24, 40, 0.65)",
                      boxShadow: isPremium
                        ? "0 0 0 4px #22D3EE88, 0 12px 48px 0 #2563EB99"
                        : "0 8px 32px 0 #2563EB44",
                      borderRadius: 24,
                    }}
                  >
                    
                    {/* Card content */}
                    <h3 className="text-2xl font-bold text-white mb-3 text-center drop-shadow-md">
                      {service.name}
                    </h3>
                    <p className="text-base text-[#94a3b8] text-center mb-4 flex-grow" style={{ lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                    {/* Inclusions list */}
                    <div className="w-full mb-6">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Includes:</h4>
                      <ul className="space-y-1.5 text-sm text-[#cbd5e1] list-disc pl-4">
                        {service.inclusions.map((inclusion, idx) => (
                          <li key={idx}>{inclusion}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Price & Book button */}
                    <div className="flex items-center justify-between w-full mt-4">
                      <span className="text-2xl font-bold text-cyan-300 drop-shadow-md">
                        ₹{service.price}
                      </span>
                      <button
                        className="ml-auto px-7 py-2 rounded-full font-semibold text-white text-base shadow-lg transition-all duration-300 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1e40af] hover:to-[#06b6d4] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                        style={{
                          boxShadow: "0 2px 16px 0 #22D3EE55, 0 0px 8px 0 #2563EB44"
                        }}
                      >
                        Book
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
      </div>
    </section>
  );
}
