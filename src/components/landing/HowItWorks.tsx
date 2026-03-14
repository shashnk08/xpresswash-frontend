import { useRef, useEffect, useState } from "react";

const steps = [
  "Choose your service",
  "Pick date & location",
  "Relax while we handle it",
];

const images = ["service_pick", "calender", "car_wash"];

export function HowItWorks() {
  const [visibleStep, setVisibleStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.indexOf(
            entry.target as HTMLDivElement
          );

          if (entry.isIntersecting) {
            setVisibleStep((prev) => Math.max(prev, index + 1));
          }
        });
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-5xl px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          How It Works
        </h2>

        {/* Steps container */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 w-full">

          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gray-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={step}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`relative z-10 flex flex-col items-center gap-4 flex-1 transition-all duration-700 ${
                visibleStep > i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >

              {/* Step Number */}
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg mb-2 shadow-md">
                {i + 1}
              </div>

              {/* Step Text */}
              <p className="font-medium text-lg text-center">
                {step}
              </p>

              {/* Step Image */}
              <img
                src={`/media/${images[i]}.png`}
                alt={step}
                loading="lazy"
                className="w-[200px] h-auto object-contain mt-4"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}