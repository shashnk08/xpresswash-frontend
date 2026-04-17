import { Card } from "@/components/ui/Card";
import { useEffect, useRef } from "react";

const items = [
  {
    image: "/media/service-slide-2.webp",
    title: "Doorstep Convenience",
    desc: "We come to your location. No driving, no waiting, no wasting time.",
  },
  {
    image: "/media/istockphoto-1349262258-612x612.jpg",
    title: "Professional Equipment",
    desc: "Advanced machines and tools for a thorough and safe clean.",
  },
  {
    image: "/media/image.png",
    title: "Eco-Friendly Methods",
    desc: "Minimal water usage and safe cleaning products for your car and the environment.",
  },
  {
    image: "/media/Headlight-Restoration-p-1080.jpg",
    title: "Time-Saving Service",
    desc: "Book a slot at your preferred time and get your car cleaned while you relax.",
  },
  {
    image: "/media/pexels-introspectivedsgn-4876641.jpg",
    title: "Quality You Can See",
    desc: "Trained staff, attention to detail, and a spotless finish every time.",
  },
  {
    image: "/media/i2.jpg",
    title: "Monthly Plans Available",
    desc: "Regular car care at discounted prices with priority service.",
  },
];

export function ValueProps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress from 0 → 1
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1,
      );

      const maxScroll = track.scrollWidth - window.innerWidth;

      track.style.transform = `translateX(-${progress * maxScroll}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-slate-50">
      {/* BIG HEIGHT to allow scroll */}
      <div ref={containerRef} className="relative h-[200vh]">
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Heading */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0b1f3b]">
              WHY CHOOSE <span className="text-blue-600">XPRESS</span>?
            </h2>
          </div>

          {/* Horizontal track */}
          <div ref={trackRef} className="flex gap-8 px-8 will-change-transform">
            {items.map((item, idx) => (
              <Card
                key={idx}
                className="
                  flex-shrink-0 w-[300px] md:w-[350px]
                  bg-white border border-slate-200
                  rounded-2xl shadow-md
                  transition-all duration-500
                  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                  group overflow-hidden
                "
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F2A4F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
