import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

// Import the hero background image
const heroBgUrl = "/media/xpresswashjpeg.jpeg";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const headlines = [
    "Booked in Minutes!",
    "#1 Steam Washing Service in India.",
    "Doorstep Car Cleaning.",
    "Premium Car Care Experts.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    containerRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  return (
    <section
      id="hero-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="group relative isolate overflow-hidden bg-background min-h-screen flex items-center"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          filter: "brightness(0.65)",
        }}
        aria-hidden="true"
      />

      {/* Blue gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.75) 35%, rgba(10,37,64,0.35) 60%, rgba(10,37,64,0) 100%)",
        }}
      />

      {/* Mouse glow effect layer */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-mouse-glow"
        aria-hidden="true"
      />

      {/* Text content */}
      <div className="relative z-10 max-w-7xl px-6 py-28 md:px-12 w-full text-left">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          Premium Detailing Service!
          <br />

          <AnimatePresence mode="wait">
            <motion.span
              key={headlines[index]}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6 }}
              className="text-white block"
            >
              {headlines[index]}
            </motion.span>
          </AnimatePresence>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-6 text-lg text-white max-w-xl"
        >
          Hassle-free car servicing with transparent pricing, expert technicians,
          and real-time booking — all from your phone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10 flex justify-start gap-4"
        >
          <Button
            variant="secondary"
            style={{ backgroundColor: '#4169E1', color: '#fff', border: 'none' }}
            onClick={() => {
              const section = document.querySelector(
                "section[id='popular-services']"
              );
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}