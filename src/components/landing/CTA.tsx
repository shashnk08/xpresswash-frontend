
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 text-white text-center" style={{ backgroundColor: '#204264' }}>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4">
        Ready to service your car the smart way?
      </h2>
      <p className="mt-3 sm:mt-4 opacity-90 text-sm sm:text-base px-4">
        Book your service in under 2 minutes.
      </p>

      <div className="mt-6 sm:mt-8">
        <Button variant="secondary" onClick={() => navigate("/bookings")} className="text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5">Book Now</Button>
      </div>
    </section>
  );
}
