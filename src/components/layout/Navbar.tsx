import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getBookingLink } from "@/utils/adminUtils";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBook = async () => {
    const link = await getBookingLink();
    if (link) {
      window.location.href = link;
    } else {
      alert("Booking link not configured");
    }
  };

  const goToSection = (section: string) => {
    setMenuOpen(false);

    if (window.location.pathname === "/") {
      scrollToSection(section);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(section), 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-muted/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-2 flex items-center justify-between">
        {/* LOGO */}
        <img
          src="/media/final-logo.png"
          alt="XPRESS WASH Logo"
          className="h-12 md:h-16 -ml-1 w-auto object-contain cursor-pointer"
          onClick={() => goToSection("hero-section")}
        />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            className="text-base font-medium text-text hover:text-primary transition"
            onClick={() => goToSection("hero-section")}
          >
            Home
          </button>

          <button
            className="text-base font-medium text-text hover:text-primary transition"
            onClick={() => goToSection("popular-services")}
          >
            Services
          </button>

          <button
            className="text-base font-medium text-text hover:text-primary transition"
            onClick={() => goToSection("faq-section")}
          >
            FAQ
          </button>

          <Button
            style={{ backgroundColor: "#4169E1", color: "#fff" }}
            onClick={handleBook}
          >
            Book Now
          </Button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-background border-t border-muted/20">
          <button
            className="text-left text-base"
            onClick={() => goToSection("hero-section")}
          >
            Home
          </button>

          <button
            className="text-left text-base"
            onClick={() => goToSection("popular-services")}
          >
            Services
          </button>

          <button
            className="text-left text-base"
            onClick={() => {
              setMenuOpen(false);
              goToSection("faq-section");
            }}
          >
            FAQ
          </button>

          <Button
            style={{ backgroundColor: "#4169E1", color: "#fff" }}
            onClick={handleBook}
          >
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}
