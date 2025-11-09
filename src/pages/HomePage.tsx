import { Leaf, Calendar, BookOpen, Home } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
        <div
          className="absolute inset-0 opacity-40"
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
          <p className="text-xl md:text-2xl text-amber-100 mb-12 font-light">
            A cozy neighborhood spot for honest, homemade food
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => onNavigate("menu")}
              className="px-8 py-4 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View Our Menu
            </button>
            <a
              href="mailto:reservations@yourrestaurant.com?subject=Table%20Reservation%20Request&body=Hello%2C%20I%20would%20like%20to%20reserve%20a%20table%20for%20___%20people%20on%20___%20at%20___%20time."
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded border-2 border-white/30 hover:bg-white/20 transition-all inline-block"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-stone-900 mb-6">
            Welcome to Our Table
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            At The Rustic Plate, we craft every dish from scratch using the
            freshest local ingredients. Come taste the difference that passion,
            care, and quality make in every bite.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Leaf className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">
                Locally Sourced
              </h3>
              <p className="text-stone-600">
                Fresh ingredients from nearby farms and producers
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Calendar className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">
                Daily Specials
              </h3>
              <p className="text-stone-600">
                New seasonal dishes crafted by our chef each day
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <BookOpen className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">
                Family Recipes
              </h3>
              <p className="text-stone-600">
                Time-honored recipes passed down through generations
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Home className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-2">
                Cozy Atmosphere
              </h3>
              <p className="text-stone-600">
                Warm, welcoming space that feels like home
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-stone-900/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-amber-50 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Join us for an unforgettable dining experience where every dish
            tells a story and every meal brings people together.
          </p>
          <a
            href="mailto:reservations@yourrestaurant.com?subject=Reservation%20Request&body=Hello%2C%20I%20would%20like%20to%20make%20a%20reservation%20for%20___%20people%20on%20___%20at%20___%20time."
            className="px-8 py-4 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Make a Reservation
          </a>
        </div>
      </section>
    </div>
  );
}
