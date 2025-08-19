// app/(seller)/page.tsx
export const metadata = {
  title: "Seller Assistant – Dashboard",
  description: "Daily briefing and quick actions for sellers.",
};

export default function SellerDashboard() {
  return (
    <main className="p-4 space-y-4">
      <section>
        <h1 className="text-xl font-semibold">Good morning!</h1>
        <p className="text-gray-600">Here’s your briefing for today.</p>
      </section>

      {/* Quick actions – keep plain <a> links to avoid any client-only imports */}
      <section className="grid grid-cols-2 gap-3">
        {[
          { label: "Map & Route", href: "/map" },
          { label: "New Order", href: "/orders/new" },
          { label: "Buyers", href: "/buyers" },
          { label: "Inventory", href: "/more" },
        ].map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="rounded-xl border bg-white p-3 shadow-sm hover:bg-gray-50"
          >
            <div className="text-sm font-medium">{a.label}</div>
            <div className="text-xs text-gray-500">Tap to open</div>
          </a>
        ))}
      </section>

      {/* Static sample content to keep SSG simple */}
      <section className="rounded-xl border bg-white p-3 shadow-sm">
        <div className="text-sm font-semibold">Reminders</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>Follow up Vegan Café (3 days)</li>
          <li>Confirm Friday delivery for Restaurant A</li>
        </ul>
      </section>
    </main>
  );
}
