import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  "Express Wash",
  "Premium Detailing",
  "Sanitization Package",
  "Interior Deep Clean",
  "Ceramic Protection"
];

const LOCATIONS = [
  "Whitefield",
  "Marathahalli",
  "Indiranagar",
  "HSR Layout",
  "Koramangala",
  "Electronic City",
  "Bellandur",
  "Sarjapur"
];

const ADDONS = [
  "None",
  "Interior Vacuum",
  "Engine Cleaning",
  "Wax Polish",
  "Ceramic Spray Coating"
];

export default function Bookings() {
  const navigate = useNavigate();
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="w-full max-w-lg">

        <div style={{ position: 'fixed', top: 24, left: 24, zIndex: 50 }}>
            <button
              type="button"
              className="px-6 py-2 rounded-full font-semibold text-white bg-blue-500 hover:bg-blue-700 transition-all duration-300 shadow-lg"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Go Back to Home
            </button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Book Your Car Wash</h1>
          <p className="text-gray-500 mt-2">
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
            <div>
              <label className="block text-sm text-gray-700 mb-1">Customer Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Contact Details</label>
              <div className="flex">
                <span className="px-3 py-2 rounded-l-lg bg-white border border-r-0 border-gray-300 text-gray-700 font-semibold">+91</span>
                <input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full px-4 py-2 rounded-r-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Booking Date</label>
              <input
                ref={dateRef}
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                onClick={() => dateRef.current?.showPicker()}
                onFocus={() => dateRef.current?.showPicker()}
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Service Needed</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Service Location</label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {LOCATIONS.map((location) => (
                  <option key={location} value={location}>
                    {location}, Bangalore
                  </option>
                ))}
              </select>
            </div>

            {/* Addons */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Add-ons</label>
              <select
                name="addon"
                value={form.addon}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {ADDONS.map((addon) => (
                  <option key={addon} value={addon}>
                    {addon}
                  </option>
                ))}
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition transform hover:scale-[1.02] shadow-lg"
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
