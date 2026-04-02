import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type Subscription = {
  id: string;
  label: string;
  description: string;
  base_price: number;
  wash_count: number;
};

export function SubscriptionPreview() {
  const [subs, setSubs] = useState<Subscription[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("config_subscriptions")
        .select("*")
        .eq("is_active", true);

      setSubs(data || []);
    };

    load();
  }, []);

  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Subscription Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {subs.map((sub) => (
            <div
              key={sub.id}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition"
            >
              <h3 className="text-xl font-bold text-white mb-2">{sub.label}</h3>

              <p className="text-gray-400 text-sm mb-4">{sub.description}</p>

              <p className="text-cyan-300 font-semibold mb-4">
                {sub.wash_count} washes / month
              </p>

              <div className="text-3xl font-bold text-white">
                ₹{sub.base_price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
