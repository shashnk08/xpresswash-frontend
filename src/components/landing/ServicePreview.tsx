import { motion } from "framer-motion";
import { useState } from "react";
import {
  services,
  serviceSteps,
  addOns,
  subscriptionPlans,
} from "./serviceData";

export function ServicesPreview() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="popular-services" className="py-24" style={{ backgroundColor: "#204264" }}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
            Popular Services
          </h2>
          <p className="mt-2 text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Carefully designed packages for every car and every need.
          </p>
        </header>

        {/* First Row */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {services.slice(0, 3).map((service) => {
            const isPremium = service.name === "Premium Detailing";

            return (
              <motion.div
                key={service.id}
                whileHover={{
                  y: -8,
                  boxShadow: isPremium
                    ? "0 0 0 4px #FFD70088, 0 12px 48px 0 #FFA50099"
                    : "0 8px 32px 0 #2563EB44",
                }}
                transition={{ duration: 0.35 }}
                animate={isPremium ? { boxShadow: "0 0 0 4px #FFD70088, 0 12px 48px 0 #FFA50099" } : undefined}
                className={[
                  "relative flex flex-col items-center justify-between min-h-[300px] p-6",
                  "rounded-[24px] border border-[#1E293B]/30 backdrop-blur-xl",
                  "bg-white/10",
                  "transition-all duration-300",
                  isPremium
                    ? "scale-105 border-2 border-yellow-400/80 shadow-[0_0_0_4px_#FFD70088,0_12px_48px_0_#FFA50099] z-10"
                    : "hover:border-[#2563EB]",
                ].join(" ")}
                style={{
                  background: "rgba(16, 24, 40, 0.65)",
                  borderRadius: 24,
                }}
              >

                {/* ⭐ RECOMMENDED TAG (UNCHANGED) */}
                {isPremium && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold shadow-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                     RECOMMENDED
                  </div>
                )}

                <div className="w-full mb-3 overflow-hidden rounded-lg">
                  <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
                </div>

                <h3 className="text-xl font-bold text-white text-center">
                  {service.name}
                </h3>

                <span className="text-xl font-bold mt-3 text-cyan-300">
                  ₹{service.price}
                </span>

                <div className="flex gap-3 mt-5 w-full">

                  {/* Updated Button */}
                  <button className="ml-auto px-6 py-2 rounded-full font-semibold text-white text-sm shadow-lg transition-all duration-300 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1e40af] hover:to-[#06b6d4] hover:-translate-y-1">
                    Book Now
                  </button>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 px-4 py-2 rounded-full font-semibold text-sm text-white border border-cyan-400/40 hover:bg-white/10"
                  >
                    Show Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Second Row */}
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {services.slice(3).map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative flex flex-col items-center justify-between min-h-[300px] p-6 rounded-[24px] border border-[#1E293B]/30 backdrop-blur-xl bg-white/10"
              style={{ background: "rgba(16, 24, 40, 0.65)" }}
            >
              <div className="w-full mb-3 overflow-hidden rounded-lg">
                <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
              </div>

              <h3 className="text-xl font-bold text-white text-center">
                {service.name}
              </h3>

              <span className="text-xl font-bold mt-3 text-cyan-300">
                ₹{service.price}
              </span>

              <div className="flex gap-3 mt-5 w-full">
                <button className="ml-auto px-6 py-2 rounded-full font-semibold text-white text-sm shadow-lg transition-all duration-300 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1e40af] hover:to-[#06b6d4] hover:-translate-y-1">
                  Book Now
                </button>

                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 px-4 py-2 rounded-full font-semibold text-sm text-white border border-cyan-400/40 hover:bg-white/10"
                >
                  Show Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-24">
          <header className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">
              Add-ons
            </h3>
            <p className="text-lg text-[#94a3b8]">
              Enhance your service with our premium add-ons
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col items-center justify-between p-5 rounded-[20px] border border-[#1E293B]/30 backdrop-blur-xl bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
                style={{ background: "rgba(16, 24, 40, 0.65)" }}
              >
                <h4 className="text-base font-bold text-white text-center mb-4">
                  {addon.name}
                </h4>

                <span className="text-lg font-bold text-cyan-300 mb-4">
                  ₹{addon.price}
                </span>

                <button className="w-full px-4 py-2 rounded-full font-semibold text-white text-sm shadow-lg transition-all duration-300 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1e40af] hover:to-[#06b6d4] hover:-translate-y-1">
                  Add
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monthly Subscription Plans Section */}
        <div className="mt-24">
          <header className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">
              Monthly Subscription Plans
            </h3>
            <p className="text-lg text-[#94a3b8]">
              Unlimited peace of mind with flexible monthly plans
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                animate={plan.isRecommended ? { boxShadow: "0 0 0 4px #FFD70088, 0 12px 48px 0 #FFA50099" } : undefined}
                className={[
                  "relative flex flex-col justify-between p-8 rounded-[24px] border backdrop-blur-xl bg-white/10 min-h-[450px]",
                  plan.isRecommended
                    ? "border-2 border-yellow-400/80 scale-105 z-10 shadow-[0_0_0_4px_#FFD70088,0_12px_48px_0_#FFA50099]"
                    : "border-[#1E293B]/30",
                ].join(" ")}
                style={{ background: "rgba(16, 24, 40, 0.65)" }}
              >
                {plan.isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold shadow-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                     RECOMMENDED
                  </div>
                )}

                <div>
                  <h4 className={[
                    "text-2xl font-bold text-white text-center mb-8",
                    plan.isRecommended ? "mt-4" : "",
                  ].join(" ")}>
                    {plan.washes} WASHES / MONTH
                  </h4>

                  {/* Sedan Block */}
                  <div className={`mb-6 p-4 rounded-[16px] border bg-white/5 ${
                    plan.isRecommended ? "border-cyan-400/60" : "border-cyan-400/40"
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{plan.sedan.icon}</span>
                      <h5 className="text-sm font-semibold text-cyan-300">{plan.sedan.name}</h5>
                    </div>
                    <div className="text-white">
                      <p className="text-2xl font-bold">₹{plan.sedan.price}</p>
                      <p className="text-sm text-gray-400">₹{plan.sedan.pricePerWash} per wash</p>
                    </div>
                  </div>

                  {/* SUV Block */}
                  <div className={`p-4 rounded-[16px] border bg-white/5 ${
                    plan.isRecommended ? "border-cyan-400/60" : "border-cyan-400/40"
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{plan.suv.icon}</span>
                      <h5 className="text-sm font-semibold text-cyan-300">{plan.suv.name}</h5>
                    </div>
                    <div className="text-white">
                      <p className="text-2xl font-bold">₹{plan.suv.price}</p>
                      <p className="text-sm text-gray-400">₹{plan.suv.pricePerWash} per wash</p>
                    </div>
                  </div>
                </div>

                <button className={[
                  "mt-8 w-full px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300",
                  plan.isRecommended
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    : "bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1e40af] hover:to-[#06b6d4]",
                  "hover:-translate-y-1",
                ].join(" ")}>
                  Subscribe Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal (unchanged) */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-4xl p-6 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#204264] mb-4 text-center">
              {selectedService.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#204264] mb-2">Details</h3>
                <p className="text-sm mb-3 text-[#204264]">
                  {selectedService.description}
                </p>

                <ul className="list-disc pl-5 text-sm text-[#204264] space-y-1">
                  {selectedService.inclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l pl-4">
                <h3 className="font-semibold text-[#204264] mb-2">Process Steps</h3>
                <ol className="list-decimal pl-5 text-sm text-[#204264] space-y-1">
                  {serviceSteps[selectedService.id].map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}