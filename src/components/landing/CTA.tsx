
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-15 text-white text-center" style={{ backgroundColor: '#204264' }}>
      <h2 className="text-3xl font-bold">
        Ready to service your car the smart way?
      </h2>
      <p className="mt-4 opacity-90">
        Book your service in under 2 minutes.
      </p>

      <div className="mt-8">
        <Button variant="secondary" onClick={() => navigate("/bookings")}>Book Now</Button>
      </div>
    </section>
  );
}
