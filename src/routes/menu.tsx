import { createFileRoute } from "@tanstack/react-router";
import { OrderBlock } from "@/components/OrderBlock";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Food Corridor Manthokha Resort" },
      { name: "description", content: "Pakistani, Chinese, Italian, pizzas, fast food, coffee & our signature organic trout. Order on WhatsApp." },
      { property: "og:title", content: "Menu — The Food Corridor" },
      { property: "og:description", content: "Explore our full menu and order on WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Section = { icon: string; title: string; items: string[] };

const sections: Section[] = [
  { icon: "🔥", title: "Start Me Up", items: ["Spicy Wings", "Honey Wings", "Crispy Wings"] },
  { icon: "🍛", title: "Pakistani Cuisine", items: ["Chicken Kadai", "Chicken Handi", "Chicken Biryani", "White Kadai", "White Handi"] },
  { icon: "🥢", title: "Chinese Cuisine", items: ["Chicken Shashlick", "Manchurian", "Chilly Dry", "Szechuan", "Kung Pao (with fried rice)"] },
  { icon: "🍚", title: "Rice", items: ["Chicken Fried Rice", "Masala Rice", "Corridor Special Rice", "Egg Fried Rice"] },
  { icon: "🍜", title: "Chowmein", items: ["Chicken Chowmein", "Vegetable Chowmein", "Corridor Special Chowmein"] },
  { icon: "🥣", title: "Soups", items: ["Hot & Sour Soup", "Chicken Corn Soup", "Vegetable Soup", "Corridor Special Soup"] },
  { icon: "🍔", title: "Fast Food — Burgers", items: ["Chicken Burger", "Zinger Burger", "Grilled Burger", "Add Cheese 🧀"] },
  { icon: "🍟", title: "Fries & Rolls", items: ["French Fries", "Mayo Fries", "Cheese Fries", "Chicken Roll Paratha", "Jumbo Paratha"] },
  { icon: "🍕", title: "Pizzas", items: ["Corridor Special Pizza", "Chicken Supreme", "Chicken Fajita", "Chicken Tikka", "Chicken Bar BQ"] },
  { icon: "🍝", title: "Italian", items: ["Alfredo Pasta", "Spicy Fettuccine Pasta", "Mushroom Pasta"] },
  { icon: "☕", title: "Coffee & Tea", items: ["Cappuccino", "Black Coffee", "Doodh Patti", "Green Tea"] },
];

function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">📜 Our Menu</span>
        <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">Taste the Corridor 🍽️</h1>
        <p className="text-muted-foreground">From sizzling wings to slow-cooked handis and wood-fired pizzas — every dish is crafted fresh.</p>
      </div>

      {/* Signature card */}
      <div className="rounded-3xl p-8 mb-12 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1 opacity-90">⭐ Signature Dish</p>
            <h2 className="text-3xl font-bold">Organic Fresh Trout Fish 🐟</h2>
            <p className="opacity-90 mt-2 max-w-xl">Wild-caught from Baltistan's mountain streams — grilled, lemon-herbed, unforgettable.</p>
          </div>
          <a href="https://wa.me/923465476046?text=I%27d%20like%20to%20order%20the%20Trout%20Fish" target="_blank" rel="noreferrer" className="rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold">
            💬 Order Trout
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-warm)] transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="text-xl font-semibold">{s.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {s.items.map((i) => (
                <li key={i} className="flex items-start gap-2 before:content-['•'] before:text-primary">
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <OrderBlock />
      </div>
    </div>
  );
}