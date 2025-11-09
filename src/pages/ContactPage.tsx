import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="relative py-20 px-4 bg-stone-900 mb-12">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-amber-100">We'd love to hear from you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-lg">
                <MapPin
                  className="text-amber-700 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">Address</h3>
                  <p className="text-stone-700">
                    123 Main Street
                    <br />
                    Anytown, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-lg">
                <Phone
                  className="text-amber-700 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">
                    Phone or Whatsapp
                  </h3>
                  <p className="text-stone-700">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-lg">
                <Mail className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">Email</h3>
                  <p className="text-stone-700">hello@therusticplate.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-lg">
                <Clock
                  className="text-amber-700 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">Hours</h3>
                  <div className="text-stone-700 space-y-1">
                    <p>Monday - Thursday: 5pm - 9pm</p>
                    <p>Friday - Saturday: 5pm - 10pm</p>
                    <p>Sunday: 11am - 3pm (Brunch)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-8">
              Visit Us Today
            </h2>
            <div className="space-y-6">
              <p className="text-stone-700 text-lg">
                We welcome walk-ins based on availability, but for the best
                experience, we recommend calling ahead to check wait times.
              </p>
              <p className="text-stone-700 text-lg">
                For large parties of 8 or more, please call us directly so we
                can provide you with the best possible service.
              </p>
              <p className="text-stone-700 text-lg">
                Have questions about our menu, dietary accommodations, or
                special events? Don't hesitate to reach out - we're happy to
                help!
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841861455356!2d-73.98731492346564!3d40.75801437138824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
