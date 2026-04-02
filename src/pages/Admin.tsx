import { useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabaseClient";

type BaseItem = {
  id: string;
  label: string;
  is_active: boolean;
};

// Moving the Section component outside or memoizing it prevents unnecessary re-renders
const Section = ({
  title,
  data,
  table,
  onToggle,
}: {
  title: string;
  data: BaseItem[];
  table: string;
  onToggle: (table: string, id: string, current: boolean) => void;
}) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">
      {title}
    </h2>
    <div className="grid gap-3">
      {data.length === 0 && (
        <p className="text-gray-500 italic text-sm">No items found.</p>
      )}
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all"
        >
          <span className="font-medium">{item.label}</span>
          <button
            onClick={() => onToggle(table, item.id, item.is_active)}
            className={`px-6 py-1.5 rounded-full text-sm font-bold transition-all ${
              item.is_active
                ? "bg-green-500/20 text-green-400 border border-green-500/50 hover:bg-green-500/30"
                : "bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700"
            }`}
          >
            {item.is_active ? "ACTIVE" : "DISABLED"}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default function Admin() {
  const [services, setServices] = useState<BaseItem[]>([]);
  const [addons, setAddons] = useState<BaseItem[]>([]);
  const [subscriptions, setSubscriptions] = useState<BaseItem[]>([]);
  const [locations, setLocations] = useState<BaseItem[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      // PRO TIP: Use Promise.all to fetch all tables simultaneously (faster!)
      const [sRes, aRes, subRes, lRes] = await Promise.all([
        supabase.from("config_services").select("*").order("label"),
        supabase.from("config_addons").select("*").order("label"),
        supabase.from("config_subscriptions").select("*").order("label"),
        supabase.from("config_locations").select("*").order("label"),
      ]);

      setServices(sRes.data || []);
      setAddons(aRes.data || []);
      setSubscriptions(subRes.data || []);
      setLocations(lRes.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const toggle = useCallback(
    async (table: string, id: string, current: boolean) => {
      const nextValue = !current;

      // 1. Optimistic UI Update: Update local state immediately
      const updater = (prev: BaseItem[]) =>
        prev.map((item) =>
          item.id === id ? { ...item, is_active: nextValue } : item,
        );

      if (table === "config_services") setServices(updater);
      if (table === "config_addons") setAddons(updater);
      if (table === "config_subscriptions") setSubscriptions(updater);
      if (table === "config_locations") setLocations(updater);

      // 2. Database Update
      const { error } = await supabase
        .from(table)
        .update({ is_active: nextValue })
        .eq("id", id);

      if (error) {
        console.error("Toggle failed:", error);
        // Revert if database fails
        load();
      }
    },
    [load],
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        <div className="animate-pulse font-medium">
          Initializing Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Admin Control Panel
          </h1>
          <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">
            Global Configuration
          </p>
        </header>

        <Section
          title="Services"
          data={services}
          table="config_services"
          onToggle={toggle}
        />
        <Section
          title="Add-ons"
          data={addons}
          table="config_addons"
          onToggle={toggle}
        />
        <Section
          title="Subscriptions"
          data={subscriptions}
          table="config_subscriptions"
          onToggle={toggle}
        />
        <Section
          title="Locations"
          data={locations}
          table="config_locations"
          onToggle={toggle}
        />
      </div>
    </div>
  );
}
