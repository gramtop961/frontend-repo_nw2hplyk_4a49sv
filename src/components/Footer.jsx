import { Mail, MapPin, Phone, Snowflake } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex p-2 rounded-md bg-cyan-200 text-cyan-800">
                <Snowflake className="h-5 w-5" />
              </span>
              <span className="font-extrabold tracking-tight text-white text-lg">FrostWear</span>
            </div>
            <p className="mt-4 text-slate-400 max-w-sm">
              Quality winter apparel designed for warmth, durability, and effortless style.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white">Store</h4>
              <ul className="mt-4 space-y-2 text-slate-400">
                <li><a href="#shop" className="hover:text-white">Shop</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Get in touch</h4>
              <ul className="mt-4 space-y-2 text-slate-400">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (000) 123-4567</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@frostwear.com</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Winter St, Snowy City</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Newsletter</h4>
            <p className="mt-4 text-slate-400">Be the first to know about drops and exclusive offers.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-md bg-slate-800/60 border border-slate-700 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
              <button type="submit" className="rounded-md bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} FrostWear. All rights reserved.</p>
          <p>
            Built with love for winter days ❄️
          </p>
        </div>
      </div>
    </footer>
  );
}
