import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import { supabase } from "@/lib/supabaseClient";
import { type BaseItem } from "@/utils/adminUtils";

interface SectionProps {
  title: string;
  data: BaseItem[];
  table: string;
  onAdd: () => void;
  onEdit: (table: string, item: BaseItem) => void;
  refresh: () => void;
  color: string; // Used for the top accent bar
}

export const Section = ({
  title,
  data,
  table,
  onAdd,
  onEdit,
  refresh,
  color,
}: SectionProps) => {
  const handleToggle = async (id: string, currentStatus: boolean) => {
    await supabase
      .from(table)
      .update({ is_active: !currentStatus })
      .eq("id", id);
    refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await supabase.from(table).delete().eq("id", id);
    refresh();
  };

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
      {/* Accent Bar */}
      <div className={`h-1.5 w-full ${color}`} />

      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">
          {title}
        </h2>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
        >
          <FiPlus /> New Entry
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase font-bold tracking-wider">
              <th className="px-6 py-3 border-b border-slate-100">
                Label & Description
              </th>
              <th className="px-6 py-3 border-b border-slate-100">Details</th>
              <th className="px-6 py-3 border-b border-slate-100 text-center">
                Status
              </th>
              <th className="px-6 py-3 border-b border-slate-100 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                <td className="px-6 py-4 max-w-md">
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500 truncate">
                    {item.description || "No description provided."}
                  </p>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700">
                  {item.base_price !== undefined && (
                    <span>₹{item.base_price}</span>
                  )}
                  {item.price !== undefined && <span>₹{item.price}</span>}
                  {item.wash_count && (
                    <span className="block text-xs text-slate-400">
                      {item.wash_count} Washes ({item.vehicle_type})
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleToggle(item.id!, item.is_active)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all
                      ${
                        item.is_active
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-slate-100 text-slate-500 border-slate-200"
                      }`}
                  >
                    {item.is_active ? "Live" : "Draft"}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onEdit(table, item)}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                    >
                      <FiEdit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id!)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
