const WHATSAPP = "923465476046";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=10&data=https://wa.me/${WHATSAPP}`;

export function OrderBlock() {
  return (
    <section className="relative overflow-hidden rounded-3xl p-8 sm:p-12" style={{ background: "var(--gradient-warm)" }}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-foreground">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2">📲 Order in seconds</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hungry? Scan & WhatsApp us.</h2>
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Scan the QR with your phone camera or tap below to chat with our kitchen on WhatsApp.
            We confirm your order, share live preparation time, and deliver hot to your door — or get it ready for take-away. 🛵🥡
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition shadow-lg"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="tel:+923465476046"
              className="inline-flex items-center gap-2 rounded-full bg-background/90 text-foreground px-6 py-3 text-sm font-semibold hover:bg-background transition"
            >
              📞 +92 346 5476046
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-background p-5 rounded-2xl shadow-2xl">
            <img src={QR} alt="WhatsApp order QR code" width={240} height={240} className="w-60 h-60" />
            <p className="text-center mt-3 text-xs font-medium text-muted-foreground">Scan to order 🍕🍔🍗</p>
          </div>
        </div>
      </div>
    </section>
  );
}