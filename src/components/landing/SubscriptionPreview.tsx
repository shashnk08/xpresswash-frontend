import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { motion } from "framer-motion";

type Subscription = {
  id: string;
  label: string;
  description: string;
  base_price: number;
  wash_count: number;
  vehicle_type: string; // Added to match your SQL schema
};

export function SubscriptionPreview() {
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from("config_subscriptions")
          .select("*")
          .eq("is_active", true)
          .order("wash_count", { ascending: true });

        if (error) throw error;
        setSubs(data || []);
      } catch (err) {
        console.error("Error fetching subscriptions:", err);
      } finally {
        setLoading(false);
      }
    };

    load();

    // Subscribe to real-time changes on config_subscriptions
    const channel = supabase
      .channel("config_subscriptions_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "config_subscriptions" },
        () => {
          // Reload subscriptions when any row is updated/inserted/deleted
          load();
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#020617] relative overflow-hidden">
      {/* Background radial gradient for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight uppercase italic"
          >
            Monthly <span className="text-blue-500">Savings</span>
          </motion.h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Get premium care all month long. Choose a plan that fits your
            driving habits and vehicle type.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-white/5 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {subs.map((sub) => {
              // GST Calculation: 18%
              const basePrice = sub.base_price || 0;
              const finalPrice = basePrice * 1.18;

              // Value proposition calculation: Price per wash
              const pricePerWash = finalPrice / sub.wash_count;

              return (
                <motion.div
                  key={sub.id}
                  whileHover={{ y: -8 }}
                  className="p-5 sm:p-6 md:p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                      {sub.label}
                    </h3>
                    <span className="text-[10px] font-bold bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md border border-blue-500/20 uppercase tracking-widest">
                      {sub.vehicle_type}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    {sub.description}
                  </p>

                  <div className="bg-white/5 rounded-2xl p-4 mb-8">
                    <div className="flex items-center gap-3 text-cyan-400 font-bold mb-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{sub.wash_count} Professional Washes</span>
                    </div>
                    <p className="text-[11px] text-slate-500 ml-8 font-medium">
                      Just ₹{pricePerWash.toFixed(0)} per wash
                    </p>
                  </div>

                  <div className="mt-auto border-t border-white/10 pt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">
                        ₹
                        {finalPrice.toLocaleString("en-IN", {
                          maximumFractionDigits: 0,
                        })}
                      </span>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-tighter">
                        / month
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-600 font-medium block mt-1 uppercase tracking-widest">
                      Incl. 18% GST (CGST 9% + SGST 9%)
                    </span>

                    <button className="w-full mt-6 bg-white text-black font-black py-3 rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-xl">
                      SUBSCRIBE NOW
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
