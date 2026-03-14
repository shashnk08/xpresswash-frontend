import React, { useRef, useEffect, useState } from "react";

const steps = [
  "Choose your service",
  "Pick date & location",
  "Relax while we handle it",
];

export function HowItWorks() {
  const [visibleStep, setVisibleStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < steps.length; i++) {
        const ref = stepRefs.current[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.7 && visibleStep < i + 1) {
            setVisibleStep(i + 1);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleStep]);

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          {steps.map((step, i) => (
            <div
              key={step}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{
                opacity: visibleStep > i ? 1 : 0,
                transform: visibleStep > i ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
              }}
              className="flex flex-col items-center gap-4 flex-1"
            >
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg mb-2">
                {i + 1}
              </div>
              <p className="font-medium text-lg text-center">{step}</p>
              <img
                src={`/media/${["service_pick", "calender", "car_wash"][i]}.png`}
                alt={step}
                className="w-[200px] h-auto object-contain mt-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
