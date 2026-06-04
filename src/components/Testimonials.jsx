export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">Client Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-semibold">What our clients say.</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <blockquote className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <p className="text-slate-600 dark:text-slate-300">“The team delivered a beautifully designed product ahead of schedule, and their support helped us launch with confidence.”</p>
          <footer className="mt-6 text-sm font-medium text-slate-900 dark:text-slate-100">— Maya K., VP of Growth</footer>
        </blockquote>
        <blockquote className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <p className="text-slate-600 dark:text-slate-300">“Their product suite made it easy to keep our customers informed and our team aligned across every launch.”</p>
          <footer className="mt-6 text-sm font-medium text-slate-900 dark:text-slate-100">— Jordan L., Product Lead</footer>
        </blockquote>
      </div>
    </section>
  );
}
