import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">

        {/* ✅ LOGO — slightly smaller and nudged left */}
        <img
          src="/media/final-logo.png"
          alt="XPRESS WASH Logo"
          className="h-12 md:h-16 -ml-2 w-auto object-contain cursor-pointer"
          onClick={() => {
            if (window.location.pathname === "/") {
              scrollToSection("hero-section");
            } else {
              navigate("/");
              setTimeout(() => scrollToSection("hero-section"), 100);
            }
          }}
        />

        {/* NAVIGATION */}
        <nav className="flex items-center gap-6">
          <button
            className="text-base font-medium text-text hover:text-primary transition"
            onClick={() => {
              if (window.location.pathname === "/") {
                scrollToSection("hero-section");
              } else {
                navigate("/");
                setTimeout(() => scrollToSection("hero-section"), 100);
              }
            }}
          >
            Home
          </button>

          <button
            className="text-base font-medium text-text hover:text-primary transition"
            onClick={() => {
              if (window.location.pathname === "/") {
                scrollToSection("popular-services");
              } else {
                navigate("/");
                setTimeout(() => scrollToSection("popular-services"), 100);
              }
            }}
          >
            Services
          </button>

          <button
            className="text-base font-medium text-text hover:text-primary transition"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>

          <Button
            style={{ backgroundColor: "#4169E1", color: "#fff", border: "none" }}
            onClick={() => navigate("/bookings")}
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}