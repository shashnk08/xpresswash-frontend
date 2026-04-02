import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type Location = {
  id: string;
  label: string;
};

export function LocationPreview() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("config_locations")
        .select("*")
        .eq("is_active", true);

      setLocations(data || []);
    };

    load();
  }, []);

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Available Locations
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <span
              key={loc.id}
              className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm text-gray-200"
            >
              {loc.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
