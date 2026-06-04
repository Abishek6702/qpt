export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">MyCompany</p>
            <p className="mt-2 max-w-xl">Delivering design, development, and strategy for modern products.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
            <a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400">Services</a>
            <a href="#products" className="hover:text-indigo-600 dark:hover:text-indigo-400">Products</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </div>
        </div>
        <p className="mt-8">© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}
