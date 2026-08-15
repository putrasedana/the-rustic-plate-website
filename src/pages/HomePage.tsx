import { Leaf, Calendar, BookOpen, Home } from "lucide-react";

const features = [
  {
    title: "Locally Sourced",
    description: "Fresh ingredients from nearby farms and producers",
    icon: Leaf,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Daily Specials",
    description: "New seasonal dishes crafted by our chef each day",
    icon: Calendar,
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Family Recipes",
    description: "Time-honored recipes passed down through generations",
    icon: BookOpen,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Cozy Atmosphere",
    description: "Warm, welcoming space that feels like home",
    icon: Home,
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif text-amber-50 mb-6 leading-tight">
            Seasonal Flavors,
            <br />
            Served with Heart
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-12 font-medium leading-relaxed">
            A cozy neighborhood spot for honest, homemade food
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-amber-700 text-white font-medium rounded hover:bg-amber-600 shadow-lg">
              View Our Menu
            </button>
            <a
              href="mailto:reservations@yourrestaurant.com?subject=Table%20Reservation%20Request&body=Hello%2C%20I%20would%20like%20to%20reserve%20a%20table%20for%20___%20people%20on%20___%20at%20___%20time."
              className="px-8 py-4 bg-black/10 backdrop-blur-sm text-white font-medium rounded border-2 border-white/30 hover:bg-white/10 transition-all inline-block"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-stone-900 py-32 px-4">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-amber-500">Welcome to Our Table</h2>
          <p className="text-lg leading-relaxed text-stone-300 mb-16">
            At The Rustic Plate, we craft every dish from scratch using the freshest local ingredients. Come taste the
            difference that passion, care, and quality make in every bite.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="relative overflow-hidden rounded-lg min-h-[280px] group">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${feature.image}')`,
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-stone-900/60 transition-colors duration-300 group-hover:bg-stone-900/50" />

                  {/* Content */}
                  <div className="relative z-10 text-center p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                      <Icon className="text-amber-700" size={32} />
                    </div>

                    <h3 className="text-xl font-serif text-amber-50 mb-2">{feature.title}</h3>

                    <p className="text-stone-200">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-stone-800 to-stone-900">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6">Experience the Difference</h2>

          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Join us for an unforgettable dining experience where every dish tells a story and every meal brings people
            together.
          </p>

          <a
            href="mailto:reservations@yourrestaurant.com?subject=Reservation%20Request&body=Hello%2C%20I%20would%20like%20to%20make%20a%20reservation%20for%20___%20people%20on%20___%20at%20___%20time."
            className="inline-block px-8 py-4 bg-amber-700 text-white font-medium rounded hover:bg-amber-600 shadow-lg"
          >
            Make a Reservation
          </a>
        </div>
      </section>
    </div>
  );
}
