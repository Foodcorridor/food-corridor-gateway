import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Food Corridor Manthokha Resort" },
      { name: "description", content: "How The Food Corridor Manthokha Resort collects, uses and protects your information." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">🔒 Legal</span>
      <h1 className="text-4xl font-bold mt-3 mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>The Food Corridor Manthokha Resort ("we", "us", "our") respects your privacy. This policy explains what information we collect when you contact us, place an order, or book a room, and how we use it.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">1. Information We Collect</h2>
        <p>When you order food, book a room, or message us on WhatsApp / phone, we may collect your name, phone number, delivery address, and order details. We do not require you to create an account on this website.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process and deliver your food orders and room bookings.</li>
          <li>To contact you about your order, reservation, or any related concern.</li>
          <li>To improve our menu, service quality, and guest experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground pt-4">3. Sharing of Information</h2>
        <p>We do not sell or rent your personal information. We may share order details only with our kitchen and delivery staff to fulfill your request.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">4. Cookies & Analytics</h2>
        <p>This website may use basic analytics to understand how visitors use our pages. No personally identifying information is collected through this site itself.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">5. Data Security</h2>
        <p>We take reasonable steps to protect any information you share with us by phone or WhatsApp. Messages on WhatsApp are end-to-end encrypted by WhatsApp itself.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">6. Your Rights</h2>
        <p>You may request that we delete the contact information we hold about you by calling or messaging us using the details on our Contact page.</p>

        <h2 className="text-2xl font-semibold text-foreground pt-4">7. Contact</h2>
        <p>For any privacy questions, contact us at +92 346 5476046 or 0581 5461055, or visit us at Manthokha Waterfall Road, Kharmang, Gilgit Baltistan.</p>
      </div>
    </article>
  );
}