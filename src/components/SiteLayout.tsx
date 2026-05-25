import { Link, Outlet } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display">
            <span className="text-2xl">🍽️</span>
            <span className="font-semibold leading-tight text-sm sm:text-base">
              The Food Corridor
              <span className="block text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">
                Manthokha Resort
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923465476046"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              💬 Order on WhatsApp
            </a>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-1"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href="https://wa.me/923465476046"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                💬 Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-foreground text-background mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍽️</span>
              <span className="font-display text-lg font-semibold">The Food Corridor Manthokha Resort</span>
            </div>
            <p className="text-background/70 max-w-md">
              A riverside escape with authentic Pakistani, Chinese, Italian & Fast Food cuisine — beside the legendary Manthokha Waterfall. 🏔️🌊
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-background">Visit</h4>
            <p className="text-background/70">📍 Manthokha Waterfall Road<br/>Kharmang, Gilgit Baltistan</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-background">Contact</h4>
            <p className="text-background/70">
              📞 <a href="tel:+923465476046" className="hover:text-accent">+92 346 5476046</a><br/>
              ☎️ <a href="tel:05815461055" className="hover:text-accent">0581 5461055</a>
            </p>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/60">
            <p>© {new Date().getFullYear()} The Food Corridor Manthokha Resort. All rights reserved.</p>
            <div className="flex gap-5">
              <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}