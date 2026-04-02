import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Service = {
  id: string;
  label: string;
  description: string;
  base_price: number;
};

// Sub-component for the Card to keep code clean
const ServiceCard = ({ service }: { service: Service }) => {
  const isPremium = service.label.toLowerCase().includes("premium");

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`relative flex flex-col p-8 rounded-[32px] border transition-all duration-300 backdrop-blur-md
        ${
          isPremium
            ? "bg-gradient-to-b from-white/15 to-white/5 border-cyan-400/50 shadow-[0_20px_50px_rgba(34,211,238,0.15)] scale-105 z-10"
            : "bg-white/5 border-white/10 shadow-xl hover:border-blue-500/50"
        }`}
    >
      {isPremium && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          Best Value
        </span>
      )}

      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{service.label}</h3>
        <div className="h-1 w-12 bg-cyan-400 mx-auto rounded-full opacity-80" />
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      <div className="space-y-3 mb-8">
        <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          Includes:
        </h4>
        <ul className="space-y-2">
          {[
            "Professional cleaning",
            "High-quality products",
            "Trained staff",
          ].map((item, i) => (
            <li key={i} className="flex items-center text-sm text-slate-300">
              <svg
                className="w-4 h-4 mr-2 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
        <div>
          <span className="text-xs text-slate-500 block uppercase font-bold tracking-tight">
            Starting at
          </span>
          <span className="text-3xl font-black text-white">
            ₹{service.base_price}
          </span>
        </div>
        <button className="px-6 py-2.5 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/20">
          Book
        </button>
      </div>
    </motion.div>
  );
};

export function ServicesPreview() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const { data, error } = await supabase
          .from("config_services")
          .select("*")
          .eq("is_active", true)
          .order("display_order");

        if (error) throw error;
        setServices(data || []);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section
      id="popular-services"
      className="py-24 bg-[#0f172a] relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Popular{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Carefully designed packages for every car and every need. Choose the
            perfect treatment for your vehicle.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
