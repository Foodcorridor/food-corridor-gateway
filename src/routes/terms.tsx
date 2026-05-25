import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — The Food Corridor Manthokha Resort" },
      { name: "description", content: "Terms of using our website, ordering food, and booking rooms at The Food Corridor Manthokha Resort." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">📜 Legal</span>
      <h1 className="text-4xl font-bold mt-3 mb-2">Terms & Conditions</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>Welcome to The Food Corridor Manthokha Resort. By using this website, ordering food, or staying with us, you agree to the following terms.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">1. Use of Website</h2>
        <p>This website is provided for informational purposes — to share our menu, room information, and contact details. All content (text, images, branding) is the property of The Food Corridor Manthokha Resort and may not be copied without permission.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">2. Orders</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All food orders are placed via WhatsApp or phone and are confirmed by our staff before preparation begins.</li>
          <li>Menu items, prices, and availability may change without prior notice.</li>
          <li>Delivery times depend on weather, road conditions, and order volume.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground pt-4">3. Room Bookings</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reservations are confirmed once we acknowledge your booking by phone or WhatsApp.</li>
          <li>Check-in / check-out times will be shared at the time of booking.</li>
          <li>Guests are responsible for any damage to room property.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground pt-4">4. Cancellations & Refunds</h2>
        <p>Order or booking cancellations should be made as early as possible. Refund policies are decided on a case-by-case basis and communicated when you book.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">5. Conduct on Premises</h2>
        <p>For the safety and comfort of all guests, we ask visitors to respect our staff, fellow guests, and the natural environment around the resort. We reserve the right to refuse service.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">6. Limitation of Liability</h2>
        <p>The Food Corridor Manthokha Resort is not liable for any indirect loss arising from the use of this website or from circumstances beyond our control (weather, road closures, power outages).</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">7. Changes</h2>
        <p>We may update these terms from time to time. The latest version will always appear on this page.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">8. Contact</h2>
        <p>Questions about these terms? Call +92 346 5476046 / 0581 5461055 or visit us at Manthokha Waterfall Road, Kharmang, Gilgit Baltistan.</p>
      </div>
    </article>
  );
}