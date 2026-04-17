import { Button } from "@/components/ui/Button";
import { getBookingLink } from "@/utils/adminUtils";

export function CTA() {
  const handleBook = async () => {
    const link = await getBookingLink();
    if (link) {
      window.location.href = link;
    } else {
      alert("Booking link not configured");
    }
  };

  return (
    <section
      className="py-16 text-white text-center"
      style={{ backgroundColor: "#204264" }}
    >
      <h2 className="text-3xl font-bold">
        Ready to service your car the smart way?
      </h2>

      <p className="mt-4 opacity-90">Book your service in under 2 minutes.</p>

      <div className="mt-8">
        <Button variant="secondary" onClick={handleBook}>
          Book Now
        </Button>
      </div>
    </section>
  );
}
