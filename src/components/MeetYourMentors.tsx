import React, { useState } from "react";

import AmitjiImg from "../../Amitji.jpeg";

const instructors = [
  {
    name: "Amit Parasher",
    role: "AI specialist",
    image: AmitjiImg,
    testimonial:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll keep returning for more exceptional dining experience.",
  },
  {
    name: "Priya Singh",
    role: "Frontend Specialist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial:
      "The mentorship and support I received here were outstanding. The instructors are knowledgeable and always ready to help.",
  },
  {
    name: "Rohit Sharma",
    role: "Senior Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    testimonial:
      "A fantastic learning environment with real-world projects and hands-on experience. Highly recommended!",
  },
];

const MeetYourMentors: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? instructors.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === instructors.length - 1 ? 0 : c + 1));
  const mentor = instructors[current];
  const prevImg = instructors[(current - 1 + instructors.length) % instructors.length].image;
  const nextImg = instructors[(current + 1) % instructors.length].image;

  return (
    <section className="w-full bg-[#f6f8ff] py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Your Instructors</h2>
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 mx-auto">
        {/* Image stack */}
        <div className="relative w-[320px] h-[340px] flex-shrink-0 flex items-center justify-center">
          {/* Back card (previous) */}
          <img
            src={prevImg}
            alt="prev"
            className="absolute left-4 top-4 w-[260px] h-[300px] object-cover rounded-2xl shadow-lg opacity-60 z-0 rotate-[-4deg]"
          />
          {/* Back card (next) */}
          <img
            src={nextImg}
            alt="next"
            className="absolute right-4 top-4 w-[260px] h-[300px] object-cover rounded-2xl shadow-lg opacity-60 z-0 rotate-[4deg]"
          />
          {/* Main card */}
          <img
            src={mentor.image}
            alt={mentor.name}
            className="relative w-[280px] h-[320px] object-cover rounded-2xl shadow-2xl z-10 border-4 border-white"
          />
        </div>
        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h3 className="text-2xl font-extrabold mb-1">{mentor.name}</h3>
          <div className="text-lg text-blue-700 font-medium mb-4">{mentor.role}</div>
          <p className="text-gray-800 text-lg mb-8 max-w-xl">{mentor.testimonial}</p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-2xl text-black hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              <span>&larr;</span>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-2xl text-black hover:bg-gray-100 transition"
              aria-label="Next"
            >
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourMentors; 