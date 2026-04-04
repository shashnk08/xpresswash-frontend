import { useEffect, useState, useCallback } from "react";
import {
  fetchAdminData,
  saveItem,
  type AdminData,
  type BaseItem,
} from "@/utils/adminUtils";
import { ItemModal } from "@/components/ui/ItemModal";
import { Section } from "@/components/ui/Section";

interface ModalState {
  open: boolean;
  table: string;
  item: BaseItem | null;
}

export default function Admin() {
  const [data, setData] = useState<AdminData>({
    services: [],
    addons: [],
    subscriptions: [],
    locations: [],
  });

  const [loading, setLoading] = useState<boolean>(true);

  const [modal, setModal] = useState<ModalState>({
    open: false,
    table: "",
    item: null,
  });

  const refresh = useCallback(async () => {
    const res = await fetchAdminData();
    setData(res);
    setLoading(false);
  }, []);

  // Standard async pattern to avoid cascading render warnings
  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const res = await fetchAdminData();
      if (isMounted) {
        setData(res);
        setLoading(false);
      }
    };
    init();
    return () => {
      isMounted = false;
    };
  }, [refresh]);

  const handleOpenModal = (
    table: string,
    item: BaseItem = { label: "", is_active: true },
  ) => {
    setModal({ open: true, table, item });
  };

  const closeModal = () => {
    setModal({ open: false, table: "", item: null });
  };

  const updateModalItem = (newItem: BaseItem) => {
    setModal((prev) => ({ ...prev, item: newItem }));
  };

  const handleSave = async () => {
    if (!modal.item || !modal.table) return;
    await saveItem(modal.table, modal.item);
    closeModal();
    refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white italic">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/50 text-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-black text-slate-900">
              Admin Dashboard
            </h1>
            <p className="text-slate-500 text-sm mt-1 font-medium">
              Manage service pricing, locations, and subscriptions.
            </p>
          </div>
        </header>

        {/* 1. Services Section */}
        <Section
          title="Wash Services"
          color="bg-blue-500"
          data={data.services}
          table="config_services"
          onAdd={() =>
            handleOpenModal("config_services", {
              label: "",
              description: "",
              base_price: 0,
              is_active: true,
            })
          }
          onEdit={handleOpenModal}
          refresh={refresh}
        />

        {/* 2. Add-Ons Section */}
        <Section
          title="Add-Ons"
          color="bg-indigo-500"
          data={data.addons}
          table="config_addons"
          onAdd={() =>
            handleOpenModal("config_addons", {
              label: "",
              description: "",
              price: 0, // SQL uses 'price' for addons
              is_active: true,
            })
          }
          onEdit={handleOpenModal}
          refresh={refresh}
        />

        {/* 3. Subscriptions Section */}
        <Section
          title="Subscription Packages"
          color="bg-emerald-500"
          data={data.subscriptions}
          table="config_subscriptions"
          onAdd={() =>
            handleOpenModal("config_subscriptions", {
              label: "",
              description: "",
              base_price: 0,
              wash_count: 4,
              vehicle_type: "Sedan",
              is_active: true,
            })
          }
          onEdit={handleOpenModal}
          refresh={refresh}
        />

        {/* 4. Locations Section */}
        <Section
          title="Active Locations"
          color="bg-amber-500"
          data={data.locations}
          table="config_locations"
          onAdd={() =>
            handleOpenModal("config_locations", {
              label: "",
              is_active: true,
            })
          }
          onEdit={handleOpenModal}
          refresh={refresh}
        />
      </div>

      {modal.open && modal.item && (
        <ItemModal
          table={modal.table}
          item={modal.item}
          onClose={closeModal}
          onChange={updateModalItem}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
