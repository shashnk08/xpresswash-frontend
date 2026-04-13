export function Footer() {
  return (
    // Fixed: Changed bg-blueDeep to bg-blue-deep to match v4 theme naming
    <footer className="bg-blue-deep text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid gap-6 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-accent">Xpress</h3>
          <p className="mt-3 text-xs sm:text-sm text-white/70">
            Premium car servicing made effortless.
          </p>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-medium">Services</h4>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/70">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Car Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Detailing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-medium">Company</h4>
          <ul className="mt-4 space-y-2 text-xs sm:text-sm text-white/70">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-medium">Get Started</h4>
          <p className="mt-4 text-xs sm:text-sm text-white/70">
            Book your service in under 2 minutes.
          </p>
          {/* Optional: Add a small button or call to action here */}
          <button
            className="mt-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent hover:underline"
            onClick={() => (window.location.href = "https://in.bigin.online/xpresswash/forms/book-your-car-wash-slot-now")}
          >
            Book Now →
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 sm:py-6 text-center text-xs sm:text-sm text-white/60">
        © {new Date().getFullYear()} Xpress. All rights reserved.
      </div>
    </footer>
  );
}
