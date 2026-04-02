import React, { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";

type Item = {
  id: string;
  label: string;
};

export default function Bookings() {
  const [services, setServices] = useState<Item[]>([]);
  const [locations, setLocations] = useState<Item[]>([]);
  const [addons, setAddons] = useState<Item[]>([]);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    location: "",
    addon: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadData = async () => {
      const { data: s } = await supabase
        .from("config_services")
        .select("id, label")
        .eq("is_active", true);

      const { data: l } = await supabase
        .from("config_locations")
        .select("id, label")
        .eq("is_active", true);

      const { data: a } = await supabase
        .from("config_addons")
        .select("id, label")
        .eq("is_active", true);

      setServices(s || []);
      setLocations(l || []);
      setAddons(a || []);

      setForm((prev) => ({
        ...prev,
        service: s?.[0]?.label || "",
        location: l?.[0]?.label || "",
        addon: a?.[0]?.label || "",
      }));
    };

    loadData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `New Booking!
Name: ${form.name}
Contact: ${form.contact}
Service: ${form.service}
Location: ${form.location}
Add-on: ${form.addon}
Date: ${form.date}`;

    const whatsappUrl = `https://wa.me/9538926581?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--blue-main)] via-[#1E3A8A] to-black p-6">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Book Your Car Wash</h1>
          <p className="text-gray-300 mt-2">
            Choose your service and schedule a professional car cleaning.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-xl text-center shadow-md">
            🎉 Your booking request has been sent!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 space-y-5 transition hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg"
            />

            {/* Contact */}
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-lg"
            />

            {/* Date */}
            <input
              ref={dateRef}
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-2 rounded-lg"
            />

            {/* Service */}
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
            >
              {services.map((s) => (
                <option key={s.id} value={s.label}>
                  {s.label}
                </option>
              ))}
            </select>

            {/* Location */}
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
            >
              {locations.map((l) => (
                <option key={l.id} value={l.label}>
                  {l.label}
                </option>
              ))}
            </select>

            {/* Addons */}
            <select
              name="addon"
              value={form.addon}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
            >
              {addons.map((a) => (
                <option key={a.id} value={a.label}>
                  {a.label}
                </option>
              ))}
            </select>

            <button className="w-full py-3 rounded-lg bg-blue-500 text-white">
              Book Service 🚗
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
