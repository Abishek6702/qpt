export default function Products() {
  return (
    <section id="products" className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">Our Products</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">Products designed to simplify your work.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold">Customer Portal</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">A self-service dashboard for clients to manage orders, feedback, and support.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold">Analytics Toolkit</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Track KPIs, user behavior, and product performance in one place.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-semibold">Automation Suite</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Automate workflows, onboarding, and notifications without developer overhead.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
