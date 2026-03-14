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
    image: "/media/istockphoto-1349262258-612x612.jpg",
    title: "Transparent Pricing",
    desc: "Clear packages with no hidden charges. Pay only for what you choose.",
  },
  {
    image: "/media/i2.jpg",
    title: "Monthly Plans Available",
    desc: "Regular car care at discounted prices with priority service.",
  },
];

export function ValueProps() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationFrame: number;
    const speed = 1;

    function animate() {
      if (!isPaused.current && container) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += speed;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  return (
    <section className="py-10 bg-surface">
      <div className="mx-auto max-w-6xl px-8">

        <h2 className="text-5xl md:text-6xl font-extrabold text-left mb-12 tracking-tight">
          <span
            className="text-6xl md:text-7xl leading-tight font-extrabold text-transparent"
            style={{ WebkitTextStroke: "2px #0b1f3b" }}
          >
            WHY
          </span>
          <br className="hidden md:block" />
          <span className="text-primary">
            CHOOSE{" "}
            <span
              className="font-extrabold text-transparent"
              style={{ WebkitTextStroke: "2px #0b1f3b" }}
            >
              XPRESS
            </span>
            ?
          </span>
        </h2>

        {/* Wrapper for fade edges */}
        <div className="relative">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-surface to-transparent z-10" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-surface to-transparent z-10" />

          <div
            ref={scrollRef}
            className="overflow-x-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-8 min-w-[700px] md:min-w-[900px] lg:min-w-[1200px]">

              {items.map((item, idx) => (
                <Card
                  key={item.title + idx}
                  className="group flex-shrink-0 w-80 relative flex flex-col items-center justify-start p-10 bg-white border border-[#E3EAF5] rounded-[20px] shadow-[0_6px_32px_0_rgba(15,42,79,0.10)] min-h-[366px] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_40px_0_rgba(15,42,79,0.18)] hover:border-[#0F2A4F]"
                  style={{ borderRadius: 20 }}
                >
                  <div className="mb-5 w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-[#0F2A4F] mb-3 text-center"
                    style={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-base text-[#475569] text-center"
                    style={{ lineHeight: 1.6 }}
                  >
                    {item.desc}
                  </p>
                </Card>
              ))}

              {/* Duplicate for infinite effect */}

              {items.map((item, idx) => (
                <Card
                  key={item.title + "-dup-" + idx}
                  className="group flex-shrink-0 w-80 relative flex flex-col items-center justify-start p-10 bg-white border border-[#E3EAF5] rounded-[20px] shadow-[0_6px_32px_0_rgba(15,42,79,0.10)] min-h-[366px] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_40px_0_rgba(15,42,79,0.18)] hover:border-[#0F2A4F] opacity-70"
                  style={{ borderRadius: 20 }}
                >
                  <div className="mb-5 w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-[#0F2A4F] mb-3 text-center"
                    style={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-base text-[#475569] text-center"
                    style={{ lineHeight: 1.6 }}
                  >
                    {item.desc}
                  </p>
                </Card>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}