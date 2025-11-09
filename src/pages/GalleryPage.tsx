import { useState, useEffect, useCallback } from "react";

type GalleryImage = {
  url: string;
  alt: string;
  category: string;
};

export default function GalleryPage() {
  const images: GalleryImage[] = [
    {
      url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Beautifully plated main course",
      category: "food",
    },
    {
      url: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Cozy restaurant interior",
      category: "ambiance",
    },
    {
      url: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Fresh seasonal ingredients",
      category: "food",
    },
    {
      url: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Intimate dining setup",
      category: "ambiance",
    },
    {
      url: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Artisan pasta dish",
      category: "food",
    },
    {
      url: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Rustic table setting",
      category: "ambiance",
    },
    {
      url: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Chef preparing dish",
      category: "team",
    },
    {
      url: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Gourmet appetizer",
      category: "food",
    },
    {
      url: "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Warm lighting and atmosphere",
      category: "ambiance",
    },
    {
      url: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Signature dessert",
      category: "food",
    },
    {
      url: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bar area with craft cocktails",
      category: "ambiance",
    },
    {
      url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Fresh salad presentation",
      category: "food",
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const show = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close, next, prev]);

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="relative py-20 px-4 bg-stone-900 mb-12">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-amber-100">A feast for the eyes</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <p className="text-center text-lg text-stone-700 mb-12 max-w-2xl mx-auto">
          Take a peek at our cozy atmosphere, beautifully crafted dishes, and
          the warm moments that make The Rustic Plate special.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <button
              type="button"
              key={i}
              onClick={() => show(i)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square focus:outline-none"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={images[index].url}
              alt={images[index].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-2xl font-bold focus:outline-none"
            >
              ✕
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute -left-8 top-1/2 -translate-y-1/2 text-white text-6xl focus:outline-none"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute -right-8 top-1/2 -translate-y-1/2 text-white text-6xl focus:outline-none"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
