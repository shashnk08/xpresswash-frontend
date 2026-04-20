import { useEffect, useRef } from "react";

const items = [
  {
    image: "/media/service-slide-2.webp",
    title: "Doorstep Convenience",
    desc: "We come to you. No effort required.",
  },
  {
    image: "/media/istockphoto-1349262258-612x612.jpg",
    title: "Professional Equipment",
    desc: "Every detail handled right.",
  },
  {
    image: "/media/image.png",
    title: "Eco-Friendly",
    desc: "Minimal water. Maximum care.",
  },
  {
    image: "/media/Headlight-Restoration-p-1080.jpg",
    title: "Time Efficient",
    desc: "Done while you relax.",
  },
  {
    image: "/media/pexels-introspectivedsgn-4876641.jpg",
    title: "Visible Quality",
    desc: "Results you notice instantly.",
  },
  {
    image: "/media/i2.jpg",
    title: "Priority Plans",
    desc: "Consistent premium care.",
  },
];

export function ValueProps() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;
    const speed = 0.6; // smooth speed

    const animate = () => {
      if (!container) return;

      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Your car deserves better
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Effortless cleaning. Premium care.
        </p>
      </div>

      {/* Carousel wrapper (for spacing + fade effect) */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 px-6 md:px-10 overflow-hidden"
        >
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] flex-shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-105">
                {/* Image */}
                <div className="h-36 sm:h-40 md:h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
