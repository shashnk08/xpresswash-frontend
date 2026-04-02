
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchServices } from "@/api/services";
import type { Service } from "@/api/services";


export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  return (
    <div style={{ padding: 40, backgroundColor: 'var(--blue-main)', minHeight: '100vh', color: '#fff' }}>
      <h1>Premium Car Wash</h1>

      {services.map(s => (
          <div key={s.id} style={{ marginTop: 20, padding: 20, border: "1px solid rgba(255,255,255,0.2)", background: 'rgba(255,255,255,0.04)', borderRadius: 8 }}>
          <h2>{s.name}</h2>
          <p>{s.description}</p>
          <p>₹{s.price} • {s.durationMinutes} mins</p>
          <button
            onClick={() => navigate("/bookings")}
            style={{ backgroundColor: 'var(--primary)', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6 }}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}
