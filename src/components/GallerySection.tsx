import React, { useState } from "react";
import image1 from "../../image1.webp";
const gallery = [
  {
    title: "Mystic Mountains",
    image: "/images/image1.webp",
    button: "Explore Component",
  },
  {
    title: "Enchanted Forest",
    image: "/images/image2.jpg",
    button: "Explore Component",
  },
  {
    title: "Desert Mirage",
    image: "/images/image3.jpg",
    button: "Explore Component",
  },
  {
    title: "Desert Mirage",
    image: "/images/image4.jpg",
    button: "Explore Component",
  },
  {
    title: "Desert Mirage",
    image: "/images/image5.jpg",
    button: "Explore Component",
  },
];

const GallerySection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? gallery.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === gallery.length - 1 ? 0 : c + 1));

  // For partial side images
  const leftIdx = (current - 1 + gallery.length) % gallery.length;
  const rightIdx = (current + 1) % gallery.length;

  return (
    <section className="py-20 bg-[#101014] flex flex-col items-center">
      <div className="flex items-center justify-center gap-8 w-full max-w-5xl mx-auto">
        {/* Left (partially visible) */}
        <div className="hidden md:block w-[320px] h-[400px] rounded-xl overflow-hidden opacity-60 scale-90 translate-x-8 pointer-events-none">
          <img src={gallery[leftIdx].image} alt={gallery[leftIdx].title} className="w-full h-full object-cover" />
        </div>
        {/* Center (main) */}
        <div className="relative w-[400px] h-[400px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
          <img src={gallery[current].image} alt={gallery[current].title} className="w-full h-full object-cover" />
        </div>
        {/* Right (partially visible) */}
        <div className="hidden md:block w-[320px] h-[400px] rounded-xl overflow-hidden opacity-60 scale-90 -translate-x-8 pointer-events-none">
          <img src={gallery[rightIdx].image} alt={gallery[rightIdx].title} className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Arrows */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-[#23232a] flex items-center justify-center text-2xl text-white hover:bg-[#33334a] transition"
          aria-label="Previous"
        >
          <span>&larr;</span>
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-[#23232a] flex items-center justify-center text-2xl text-white hover:bg-[#33334a] transition"
          aria-label="Next"
        >
          <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default GallerySection; 