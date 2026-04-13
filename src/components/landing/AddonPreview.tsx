import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { motion } from "framer-motion";

type Addon = {
  id: string;
  label: string;
  description: string;
  price: number;
};

export function AddonPreview() {
  const [addons, setAddons] = useState<Addon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from("config_addons")
          .select("*")
          .eq("is_active", true)
          // Filtering out 'None' if you don't want to show it as a card
          .not("label", "eq", "None")
          .order("price", { ascending: true });

        if (error) throw error;
        setAddons(data || []);
      } catch (err) {
        console.error("Error fetching addons:", err);
      } finally {
        setLoading(false);
      }
    };

    load();

    // Subscribe to real-time changes on config_addons
    const channel = supabase
      .channel("config_addons_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "config_addons" },
        () => {
          // Reload addons when any row is updated/inserted/deleted
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0f172a] relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight"
          >
            Extra <span className="text-blue-400">Add-ons</span>
          </motion.h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-4">
            Enhance your cleaning experience with our specialized treatments.
            Pricing below includes all applicable taxes.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {addons.map((addon) => {
              // GST Calculation: 18%
              const basePrice = addon.price || 0;
              const finalPrice = basePrice * 1.18;

              return (
                <motion.div
                  key={addon.id}
                  whileHover={{ scale: 1.02 }}
                  className="group p-4 sm:p-5 md:p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {addon.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                      {addon.description ||
                        "Specialized treatment for your vehicle's specific needs."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-black text-white">
                        ₹
                        {finalPrice.toLocaleString("en-IN", {
                          maximumFractionDigits: 0,
                        })}
                      </span>
                      <span className="ml-1 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                        incl. GST
                      </span>
                    </div>

                    <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
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
