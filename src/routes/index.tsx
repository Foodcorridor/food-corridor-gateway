import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import troutImg from "@/assets/trout.jpg";
import roomImg from "@/assets/room.jpg";
import { OrderBlock } from "@/components/OrderBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Food Corridor Manthokha Resort — Riverside Dining & Stay" },
      { name: "description", content: "Riverside restaurant & resort beside Manthokha Waterfall, Kharmang. Pakistani, Chinese, Italian & fast food. Order on WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Manthokha waterfall and resort"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center text-primary-foreground">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase opacity-90 mb-4">
            🏔️ Kharmang · Gilgit Baltistan
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold max-w-3xl leading-[1.05]">
            Where the river meets <span className="text-accent">flavour</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
            Dine beside the legendary Manthokha Waterfall. Authentic Pakistani 🍛, sizzling Chinese 🥢, wood-fired pizzas 🍕 and cozy deluxe rooms 🛏️ — all in one corridor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3 text-sm font-semibold hover:opacity-90 transition shadow-lg"
            >
              🍽️ Explore Menu
            </Link>
            <a
              href="https://wa.me/923465476046"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur border border-background/30 text-primary-foreground px-7 py-3 text-sm font-semibold hover:bg-background/25 transition"
            >
              💬 Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🐟", title: "Organic Trout", text: "Our signature dish — fresh trout from mountain streams, grilled to perfection." },
            { icon: "🌊", title: "Waterfall View", text: "Every table & room frames the falls and emerald river below." },
            { icon: "🛵", title: "Home Delivery", text: "Order on WhatsApp — delivery, take-away or dine-in, your choice." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-card border border-border p-7 hover:shadow-[var(--shadow-warm)] transition">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <img src={troutImg} alt="Organic trout dish" loading="lazy" width={1024} height={768} className="rounded-3xl shadow-[var(--shadow-warm)] object-cover w-full h-full max-h-[500px]" />
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">⭐ Signature</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Organic Fresh Trout 🐟</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Caught from the icy streams of Baltistan and prepared the moment you order — our trout is the heart of every visit. Served whole with lemon, mountain herbs, and a side of saffron rice.
          </p>
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90">
            See full menu →
          </Link>
        </div>
      </section>

      {/* RESORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">🛏️ Stay With Us</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Deluxe River View Rooms</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>✨ Luxurious & comfortable rooms</li>
            <li>🚿 Hot water around the clock</li>
            <li>📶 Free high-speed Wi-Fi</li>
            <li>🚗 Free & secure parking</li>
          </ul>
          <a href="https://wa.me/923465476046?text=Hi%2C%20I%27d%20like%20to%20book%20a%20room%20at%20The%20Food%20Corridor%20Manthokha%20Resort" target="_blank" rel="noreferrer" className="inline-flex mt-7 items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90">
            💬 Book on WhatsApp
          </a>
        </div>
        <img src={roomImg} alt="Deluxe river view room" loading="lazy" width={1024} height={768} className="order-1 md:order-2 rounded-3xl shadow-[var(--shadow-warm)] object-cover w-full h-full max-h-[500px]" />
      </section>

      {/* ORDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <OrderBlock />
      </section>
    </div>
  );
}
