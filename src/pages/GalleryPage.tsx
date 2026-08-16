import { useState, useEffect, useCallback } from "react";
import { images } from "../data/gallery";

export default function GalleryPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const show = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

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
    <div className="min-h-screen bg-stone-900">
      <section className="relative pb-24 pt-36 px-4 mb-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 mb-4">Gallery</h1>
          <p className="text-xl text-amber-100">A feast for the eyes</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-500 mb-6 text-center">A Taste of The Rustic Plate</h2>
        <p className="text-center text-lg text-stone-300 mb-16 max-w-2xl mx-auto">
          Take a peek at our cozy atmosphere, beautifully crafted dishes, and the warm moments that make The Rustic
          Plate special.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <button
              type="button"
              key={i}
              onClick={() => show(i)}
              className="group relative overflow-hidden rounded-lg border-2 border-amber-200 hover:shadow-lg transition-all duration-300 aspect-square focus:outline-none"
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
      </section>

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
