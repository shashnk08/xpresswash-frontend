import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type Addon = {
  id: string;
  label: string;
  description: string;
  price: number;
};

export function AddonPreview() {
  const [addons, setAddons] = useState<Addon[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("config_addons")
        .select("*")
        .eq("is_active", true);

      setAddons(data || []);
    };

    load();
  }, []);

  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Add-ons
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {addon.label}
              </h3>

              <p className="text-sm text-gray-400 mb-4">{addon.description}</p>

              <span className="text-cyan-300 font-bold text-xl">
                ₹{addon.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
