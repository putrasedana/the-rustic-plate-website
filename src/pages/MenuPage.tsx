import { menuItems } from "../data/menuData";
import { MenuItem } from "../types";
import { Leaf, Wheat, Flame } from "lucide-react";

export default function MenuPage() {
  const categories = [
    {
      id: "starters",
      label: "Starters",
      description: "Begin your meal with our handcrafted appetizers",
    },
    {
      id: "mains",
      label: "Main Courses",
      description: "Hearty, satisfying dishes made with love",
    },
    {
      id: "sides",
      label: "Sides",
      description: "Perfect complements to your main course",
    },
    {
      id: "desserts",
      label: "Desserts",
      description: "Sweet endings to your meal",
    },
    {
      id: "drinks",
      label: "Drinks",
      description: "Carefully curated beverage selection",
    },
  ];

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
            <span>V</span>
          </span>
        )}
        {item.isGlutenFree && (
          <span
            className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"
            title="Gluten-Free"
          >
            <Wheat size={12} />
            <span>GF</span>
          </span>
        )}
        {item.isSpicy && (
          <span
            className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-800 px-2 py-1 rounded"
            title="Spicy"
          >
            <Flame size={12} />
            <span>S</span>
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="relative py-20 px-4 bg-stone-900 mb-12">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-amber-100">
            Crafted with care, served with pride
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-20">
        {categories.map((category) => {
          const items = getItemsByCategory(category.id);
          return (
            <section key={category.id} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-serif text-stone-900 mb-2">
                  {category.label}
                </h2>
                <p className="text-stone-600 italic">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-amber-100 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-xl font-serif text-stone-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                      <DietaryIcon item={item} />
                      <div className="mt-4 text-right">
                        <span className="text-2xl font-medium text-amber-700">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-center text-stone-700">
            <span className="font-medium">
              Please inform us of any allergies.
            </span>{" "}
            Our team is happy to accommodate your dietary needs.
          </p>
        </div>
      </div>
    </div>
  );
}
