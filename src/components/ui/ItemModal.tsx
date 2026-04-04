import { FiX } from "react-icons/fi";
import { type BaseItem } from "@/utils/adminUtils";

interface ItemModalProps {
  item: BaseItem;
  table: string;
  onClose: () => void;
  onSave: () => Promise<void>;
  onChange: (updatedItem: BaseItem) => void;
}

export const ItemModal = ({
  item,
  table,
  onClose,
  onSave,
  onChange,
}: ItemModalProps) => {
  // Debugging: This will tell you in the console if the table name is correct
  console.log("Current Table:", table);

  // Robust checks for table names
  const isService = table === "config_services";
  const isAddon = table === "config_addons";
  const isSub = table === "config_subscriptions";

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-slate-200 p-8 rounded-2xl w-full max-w-lg shadow-2xl">
        <header className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
            {item.id ? "Edit" : "Add"} {table.replace("config_", "")}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition"
          >
            <FiX size={20} />
          </button>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave();
          }}
          className="space-y-4"
        >
          {/* ALWAYS SHOW LABEL */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Label
            </label>
            <input
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 outline-none focus:border-blue-500"
              value={item.label || ""}
              onChange={(e) => onChange({ ...item, label: e.target.value })}
            />
          </div>

          {/* SHOW DESCRIPTION FOR SERVICES, ADDONS, AND SUBS */}
          {(isService || isAddon || isSub) && (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-24 outline-none focus:border-blue-500"
                value={item.description || ""}
                onChange={(e) =>
                  onChange({ ...item, description: e.target.value })
                }
              />
            </div>
          )}

          {/* SHOW PRICE FOR SERVICES AND SUBS */}
          {(isService || isSub) && (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Base Price (₹)
              </label>
              <input
                type="number"
                step="0.01"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 outline-none focus:border-blue-500"
                value={item.base_price || 0}
                onChange={(e) =>
                  onChange({ ...item, base_price: Number(e.target.value) })
                }
              />
            </div>
          )}

          {/* SHOW PRICE FOR ADDONS */}
          {isAddon && (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Add-on Price (₹)
              </label>
              <input
                type="number"
                step="0.01"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 outline-none focus:border-blue-500"
                value={item.price || 0}
                onChange={(e) =>
                  onChange({ ...item, price: Number(e.target.value) })
                }
              />
            </div>
          )}

          {/* SHOW SUBSCRIPTION FIELDS */}
          {isSub && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Wash Count
                </label>
                <input
                  type="number"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 outline-none focus:border-blue-500"
                  value={item.wash_count || 0}
                  onChange={(e) =>
                    onChange({ ...item, wash_count: Number(e.target.value) })
                  }
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Vehicle Type
                </label>
                <select
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 outline-none focus:border-blue-500"
                  value={item.vehicle_type || "Sedan"}
                  onChange={(e) =>
                    onChange({ ...item, vehicle_type: e.target.value })
                  }
                >
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                </select>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 font-semibold rounded-lg hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
