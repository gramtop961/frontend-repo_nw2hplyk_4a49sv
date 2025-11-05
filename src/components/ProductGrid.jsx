import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Arctic Down Parka',
    price: 229,
    rating: 4.8,
    tag: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1548883354-7622d2b57554?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Glacier Puffer Jacket',
    price: 189,
    rating: 4.7,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Nordic Knit Sweater',
    price: 89,
    rating: 4.6,
    tag: 'Cozy',
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Thermal Base Layer',
    price: 49,
    rating: 4.5,
    tag: 'Essential',
    image:
      'https://images.unsplash.com/photo-1520975928503-85ce36f7d1f8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Fleece Lined Beanie',
    price: 29,
    rating: 4.4,
    tag: 'Warm',
    image:
      'https://images.unsplash.com/photo-1578932750294-7832b86b9bcd?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Insulated Gloves',
    price: 39,
    rating: 4.6,
    tag: 'Windproof',
    image:
      'https://images.unsplash.com/photo-1543956260-d9d0c4e2a6bd?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800">
              Featured Winter Gear
            </h2>
            <p className="text-slate-600 mt-2">Hand-picked pieces to keep you warm this season.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md border border-slate-300 text-slate-700 font-semibold hover:border-cyan-600 hover:text-cyan-700">
            View all
          </a>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="group rounded-xl border border-slate-200 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all overflow-hidden bg-white">
              <div className="aspect-[4/3] bg-slate-100">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-800 group-hover:text-cyan-700">{p.name}</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-cyan-100 text-cyan-700">{p.tag}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-slate-600">{p.rating} / 5</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-slate-800">${p.price}</p>
                  <button className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-md text-sm font-semibold">
                    <ShoppingCart className="h-4 w-4" />
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
