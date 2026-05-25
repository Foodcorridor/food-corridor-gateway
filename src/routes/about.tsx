import { createFileRoute } from "@tanstack/react-router";
import { OrderBlock } from "@/components/OrderBlock";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Food Corridor Manthokha Resort" },
      { name: "description", content: "Our story: a riverside restaurant & resort beside Manthokha Waterfall in Kharmang, Gilgit Baltistan." },
      { property: "og:title", content: "About — The Food Corridor" },
      { property: "og:description", content: "Riverside dining & deluxe rooms in Kharmang, Gilgit Baltistan." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={heroImg} alt="Manthokha waterfall" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-12 text-primary-foreground">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-90">🏔️ Our Story</span>
          <h1 className="text-4xl sm:text-6xl font-bold mt-3">About The Food Corridor</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 prose-lg">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Tucked beside the thundering <strong>Manthokha Waterfall</strong> in the breathtaking Kharmang valley of Gilgit Baltistan, <strong>The Food Corridor Manthokha Resort</strong> is more than a restaurant — it's a destination. 🌊🏔️
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We opened our doors with one simple belief: travellers deserve hot, hand-cooked meals and a warm bed after a long mountain road. From sizzling chicken kadai 🍛 and clay-oven pizzas 🍕 to our wild-caught organic trout 🐟, every plate is prepared fresh — by chefs who grew up in these valleys.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Stay the night in one of our <strong>Deluxe River View Rooms</strong> 🛏️ — wake up to the sound of the falls, sip mountain doodh patti ☕ on your balcony, and let Baltistan slow you down.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 my-12">
          {[
            { icon: "🍽️", title: "Fresh, Local, Honest", text: "Locally sourced ingredients, recipes from this valley." },
            { icon: "🤝", title: "Warm Hospitality", text: "Family-run, traveller-tested." },
            { icon: "🌿", title: "Nature First", text: "Designed to live alongside the river — not over it." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl bg-card border border-border p-6 text-center">
              <div className="text-3xl mb-2">{v.icon}</div>
              <h3 className="font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>

        <OrderBlock />
      </section>
    </div>
  );
}