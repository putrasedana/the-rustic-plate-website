import { Heart, Users, Award, Sprout } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-900">
      <section className="relative pb-24 pt-36 px-4 mb-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 mb-4">Our Story</h1>
          <p className="text-xl text-amber-100">A passion for food, a love for community</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="mb-16">
          <div className="space-y-6">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              The Rustic Plate began in our family kitchen, where Sunday dinners brought everyone together around the
              table. Those cherished moments, filled with laughter, stories, and incredible food, inspired us to share
              that same warmth with our community.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              In 2018, we opened our doors with a simple mission: to create a welcoming space where neighbors become
              friends, and every meal feels like coming home. Our chef, drawing from generations of family recipes and a
              deep respect for seasonal ingredients, crafts each dish with care and creativity.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed">
              Our passion for bringing people together over a great meal is at the heart of everything we do. From the
              locally sourced ingredients we carefully select to the warm atmosphere we've cultivated, every detail is
              designed to make you feel like part of our extended family.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <div className="relative h-[700px] rounded-lg overflow-hidden shadow-xl">
            <img src={"images/chef-team.jpg"} alt="Our chef and team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end">
              <div className="p-8">
                <p className="text-white text-lg font-serif">Chef John & Our Dedicated Team</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif text-amber-500 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-800 border border-amber-200/30 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-amber-50 mb-2">Made with Love</h3>
                  <p className="text-stone-300">
                    Every dish is prepared from scratch with attention to detail and genuine care. We take pride in our
                    craft and it shows in every bite.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 border border-amber-200/30 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Sprout className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-amber-50 mb-2">Locally Sourced</h3>
                  <p className="text-stone-300">
                    We partner with local farmers and producers to source the freshest, highest-quality ingredients
                    while supporting our community.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 border border-amber-200/30 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-amber-50 mb-2">Community First</h3>
                  <p className="text-stone-300">
                    We're more than a restaurant—we're a gathering place where neighbors connect, celebrate, and create
                    lasting memories together.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 border border-amber-200/30 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-amber-50 mb-2">Time-Honored Recipes</h3>
                  <p className="text-stone-300">
                    Our menu celebrates traditional family recipes passed down through generations, enhanced with modern
                    techniques and seasonal creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Family</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're celebrating a special occasion or simply craving a home-cooked meal, we can't wait to welcome
            you to our table.
          </p>
          <p className="text-amber-100 italic">"Food is not just eating energy. It's an experience." - Guy Fieri</p>
        </section>
      </section>
    </div>
  );
}
