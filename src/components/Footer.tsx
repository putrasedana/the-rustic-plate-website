import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-4">The Rustic Plate</h3>
            <p className="text-sm leading-relaxed">
              Seasonal flavors, served with heart. A cozy neighborhood spot for honest, homemade food.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Main Street<br />Anytown, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>hello@therusticplate.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Thu: 5pm - 9pm</p>
                  <p>Fri - Sat: 5pm - 10pm</p>
                  <p>Sunday: 11am - 3pm (Brunch)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The Rustic Plate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
