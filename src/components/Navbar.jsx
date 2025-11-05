import { Snowflake, ShoppingCart, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex p-2 rounded-md bg-cyan-100 text-cyan-700">
              <Snowflake className="h-5 w-5" />
            </span>
            <span className="font-extrabold tracking-tight text-slate-800 text-lg">FrostWear</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#home" className="hover:text-cyan-700 transition-colors">Home</a>
            <a href="#shop" className="hover:text-cyan-700 transition-colors">Shop</a>
            <a href="#about" className="hover:text-cyan-700 transition-colors">About</a>
            <a href="#contact" className="hover:text-cyan-700 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+10000000000" className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-cyan-700">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Call</span>
            </a>
            <button className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
