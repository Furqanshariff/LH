import React from "react";

const testimonials = [
  {
    text: "The internship at Learnyhive gave me real-world experience and confidence to crack my first tech job interview! Highly recommended for freshers.",
    image: "/images/p1.jpg",
    name: "Amit Sharma",
    role: "B.Tech Student, Delhi",
  },
  {
    text: "I loved the hands-on projects and 1:1 mentor support. The placement WhatsApp group was a game changer for me.",
    image: "/images/p2.png",
    name: "Priya Nair",
    role: "MCA Graduate, Kerala",
  },
  {
    text: "The dual certification and live classes made my resume stand out. I got shortlisted for interviews within weeks!",
    image: "/images/p3.png",
    name: "Rahul Verma",
    role: "CS Undergrad, Mumbai",
  },
  {
    text: "Mentors here are industry experts who actually care. I built a real portfolio and got my first internship offer.",
    image: "/images/p4.jpg",
    name: "Sneha Patil",
    role: "Engineering Student, Pune",
  },
  {
    text: "The curriculum is practical and up-to-date. I learned more in 4 weeks than in a whole semester at college!",
    image: "/images/p5.jpg",
    name: "Vikram Singh",
    role: "BCA Student, Jaipur",
  },
  {
    text: "I was able to switch from non-tech to tech thanks to Learnyhive. The support and guidance is unmatched.",
    image: "/images/p6.png",
    name: "Anjali Gupta",
    role: "Graduate, Lucknow",
  },
  {
    text: "The live projects and career support helped me land a job at a startup. The best investment in my career!",
    image: "/images/p7.jpg",
    name: "Siddharth Rao",
    role: "MSc IT, Hyderabad",
  },
  {
    text: "I joined for the internship and ended up learning full stack too. The mentors are super helpful and friendly.",
    image: "/images/p8.jpg",
    name: "Ritika Mehra",
    role: "BSc Student, Chandigarh",
  },
  {
    text: "The placement group is very active and I got interview calls from top companies. Thank you Learnyhive!",
    image: "/images/p9.jpg",
    name: "Arjun Desai",
    role: "B.Tech, Ahmedabad",
  },
];

function chunk(arr, n) {
  return Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
}

const TestimonialsColumn = ({ testimonials, duration = 18, className = "" }) => (
  <div className={`flex flex-col gap-8 ${className} relative w-[340px]`}>
    <div
      className="flex flex-col gap-8 animate-testimonials-scroll"
      style={{
        animationDuration: `${duration}s`,
      }}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between min-h-[220px] border border-gray-100"
        >
          <p className="text-gray-800 text-lg mb-6">{t.text}</p>
          <div className="flex items-center gap-4 mt-auto">
            {/* Letter avatar instead of image */}
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700 border-2 border-white shadow">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-gray-900">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Fade mask */}
    <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10" />
    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />
  </div>
);

const TestimonialsSection: React.FC = () => {
  const columns = chunk(testimonials, Math.ceil(testimonials.length / 3));
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <span className="border px-6 py-2 rounded-lg text-lg mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">What our users say</h2>
          <p className="text-lg text-gray-600 text-center mb-8">See what our customers have to say about us.</p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={columns[0]} duration={18} />
          <TestimonialsColumn testimonials={columns[1]} duration={22} className="hidden md:flex" />
          <TestimonialsColumn testimonials={columns[2]} duration={20} className="hidden lg:flex" />
        </div>
      </div>
      <style>{`
        @keyframes testimonials-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-testimonials-scroll {
          animation-name: testimonials-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection; 