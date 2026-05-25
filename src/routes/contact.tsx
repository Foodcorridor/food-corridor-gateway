import { createFileRoute } from "@tanstack/react-router";
import { OrderBlock } from "@/components/OrderBlock";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Food Corridor Manthokha Resort" },
      { name: "description", content: "Call, WhatsApp or visit us at Manthokha Waterfall Road, Kharmang, Gilgit Baltistan." },
      { property: "og:title", content: "Contact — The Food Corridor" },
      { property: "og:description", content: "Reach us by phone, WhatsApp, or visit." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">📞 Get in Touch</span>
        <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">We'd love to hear from you 💬</h1>
        <p className="text-muted-foreground">Reservations, room bookings, take-away or delivery — we're a tap away.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {[
          { icon: "📍", title: "Visit Us", lines: ["Manthokha Waterfall Road", "Kharmang, Gilgit Baltistan"] },
          { icon: "📞", title: "Call Us", lines: [{ t: "+92 346 5476046", href: "tel:+923465476046" }, { t: "0581 5461055", href: "tel:05815461055" }] as any },
          { icon: "💬", title: "WhatsApp", lines: [{ t: "Chat now", href: "https://wa.me/923465476046" }] as any },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl bg-card border border-border p-7">
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              {c.lines.map((l: any, i: number) =>
                typeof l === "string" ? (
                  <p key={i}>{l}</p>
                ) : (
                  <p key={i}>
                    <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-primary">{l.t}</a>
                  </p>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="rounded-2xl bg-card border border-border p-7">
          <h3 className="text-xl font-semibold mb-2">🛵 Home Delivery</h3>
          <p className="text-sm text-muted-foreground">Hot meals delivered to your doorstep in the Kharmang area. Place orders via WhatsApp for fastest service.</p>
        </div>
        <div className="rounded-2xl bg-card border border-border p-7">
          <h3 className="text-xl font-semibold mb-2">🥡 Take Away</h3>
          <p className="text-sm text-muted-foreground">Call ahead, pick up at your time. We'll have it boxed, hot and ready.</p>
        </div>
      </div>

      <OrderBlock />

      <div className="mt-12 rounded-3xl overflow-hidden border border-border">
        <iframe
          title="Map to Manthokha Waterfall"
          src="https://www.google.com/maps?q=Manthokha+Waterfall+Kharmang&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </div>
  );
}