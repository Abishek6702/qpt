export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">Our Services</p>
        <h2 className="text-3xl sm:text-4xl font-semibold">Services built for every stage of your business.</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Design & Branding</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Modern visual systems, UX design, and brand identity that stands out.</p>
        </article>
        <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Web & Mobile Apps</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">High-performance applications optimized for growth and conversion.</p>
        </article>
        <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Strategy & Growth</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Product planning, analytics, and growth guidance to scale reliably.</p>
        </article>
      </div>
    </section>
  );
}
