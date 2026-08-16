import { categories, MenuItem, menuItems } from "../data/menuData";
import { Leaf, Wheat, Flame } from "lucide-react";

export default function MenuPage() {
  const getItemsByCategory = (category: string): MenuItem[] => {
    return menuItems.filter((item) => item.category === category);
  };

  const DietaryIcon = ({ item }: { item: MenuItem }) => {
    return (
      <div className="flex gap-2 mt-2">
        {item.isVegetarian && (
          <span
            className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
            title="Vegetarian"
          >
            <Leaf size={12} />
            <span>Vegetarian</span>
          </span>
        )}
        {item.isGlutenFree && (
          <span
            className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"
            title="Gluten-Free"
          >
            <Wheat size={12} />
            <span>Gluten-Free</span>
          </span>
        )}
        {item.isSpicy && (
          <span
            className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-800 px-2 py-1 rounded"
            title="Spicy"
          >
            <Flame size={12} />
            <span>Spicy</span>
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-900">
      <section className="relative pb-24 pt-36 px-4 mb-20 bg-gradient-to-br from-stone-800 to-stone-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(/images/menu-page-img.avif)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 mb-4">Our Menu</h1>
          <p className="text-xl text-amber-100">Crafted with care, served with pride</p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="max-w-7xl mx-auto">
        {categories.map((category) => {
          const items = getItemsByCategory(category.id);
          return (
            <div key={category.id} className="bg-stone-900 pb-20 px-4">
              <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-amber-500">{category.label}</h2>
                <p className="text-lg leading-relaxed text-stone-300">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-transparent rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-amber-200 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                    />

                    <div className="p-6">
                      <div className="text-xl flex items-center justify-between mb-4">
                        <h3 className="font-serif text-stone-100">{item.name}</h3>
                        <span className="text-amber-400">${item.price}</span>
                      </div>
                      <p className="text-stone-300 leading-relaxed mb-4">{item.description}</p>
                      <DietaryIcon item={item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-center text-stone-700">
            <span className="font-medium">Please inform us of any allergies.</span> Our team is happy to accommodate
            your dietary needs.
          </p>
        </div>
      </section>
    </div>
  );
}
