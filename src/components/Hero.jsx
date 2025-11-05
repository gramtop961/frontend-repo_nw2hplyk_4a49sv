import { Snowflake } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-700">
              <Snowflake className="h-4 w-4" />
              New Winter Collection
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800">
              Stay Warm. Look Cool.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Premium jackets, cozy knitwear, and cold-weather essentials designed for comfort and style.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-cyan-700">
                Shop Jackets
              </a>
              <a href="#shop" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:border-cyan-600 hover:text-cyan-700">
                View Accessories
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Free shipping over $100 • 30-day returns
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-white border border-slate-200 shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop"
                alt="Winter fashion jackets"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -z-0 -bottom-8 -left-8 right-0 top-0 bg-[radial-gradient(ellipse_at_top_left,rgba(8,145,178,0.10),rgba(255,255,255,0))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
