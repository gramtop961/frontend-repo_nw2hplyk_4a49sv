import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">Crafted for the Cold</h2>
                <p className="mt-4 text-slate-600">
                  We blend advanced insulation with timeless design. Every piece is tested in real winter
                  conditions to keep you warm without compromising on style.
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="rounded-lg border border-slate-200 bg-white p-4">Premium, sustainable materials</li>
                  <li className="rounded-lg border border-slate-200 bg-white p-4">Engineered for warmth & breathability</li>
                  <li className="rounded-lg border border-slate-200 bg-white p-4">Ethically made, built to last</li>
                  <li className="rounded-lg border border-slate-200 bg-white p-4">Free shipping over $100</li>
                </ul>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1509659523972-517c3bb8fcd1?q=80&w=1400&auto=format&fit=crop"
                  alt="Winter landscape with cozy clothing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
