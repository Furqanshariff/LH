import React from "react";

const courses = [
 
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g fill="none"><path stroke="#FFD600" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V25.8824"/><path fill="#FFD600" stroke="#FFD600" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"/><path stroke="#FFD600" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 33L30 37L34 41"/><path stroke="#FFD600" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 33L44 37L40 41"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"/></g></svg>
    ),
    
    name: "Full Stack Development",
    subtitle: "Perfect for aspiring web developers",
    price: " ₹1999",
    period: "/Life-time",
    features: [
      "Live + LMS Classes",
      "Build 2 Real Projects",
      "Course + Internship Certificate",
      "Placement WhatsApp Group",
    ],
    button: "Get Started",
    highlight: true,
    badge: "Most Popular!",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" className="text-white" fill="none"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12"/><path d="m7.5 15l1.842-5.526a.694.694 0 0 1 1.316 0L12.5 15m-4-2h3m4-4v6M8 2v2m8-2v2m-4-2v2M8 20v2m4-2v2m4-2v2m6-6h-2M4 8H2m2 8H2m2-4H2m20-4h-2m2 4h-2"/></g></svg>
    ),
    name: " Cloud Computing",
    subtitle: "Ideal for DevOps & Infra enthusiasts",
    price: "₹2999",
    period: "/Life-time",
    features: [
      "AWS, EC2, S3, Serverless",
      "Live CI/CD Project",
      "Certification + Mentorship",
      "24x7 WhatsApp Support Group",
    ],
    button: "Get Started",
    highlight: false,
  },
];

const CoursesWeOfferSection: React.FC = () => (
  <section className="py-16 bg-black">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Internship We Offer Online</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {courses.map((course, idx) => (
          <div
            key={course.name}
            className={`relative flex flex-col bg-black text-white border border-white rounded-xl p-8 w-full max-w-sm mx-auto shadow-lg transition-transform duration-300 hover:-translate-y-2 ${course.highlight ? "ring-2 ring-yellow-400" : ""}`}
            style={{ minHeight: 480 }}
          >
            {/* Badge */}
            {course.badge && (
              <span className="absolute -top-4 right-6 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg z-10">
                {course.badge}
              </span>
            )}
            {/* Icon */}
            <div className="mb-4 flex items-center justify-center">{course.icon}</div>
            {/* Title & Subtitle */}
            <h3 className="text-2xl font-bold mb-1">{course.name}</h3>
            <p className="text-gray-300 mb-6">{course.subtitle}</p>
            {/* Price */}
            <div className="text-4xl font-extrabold mb-1">{course.price}<span className="text-lg font-medium text-gray-300">{course.period}</span></div>
            {/* Features */}
            <ul className="mb-8 mt-2 space-y-2">
              {course.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-lg">
                  <span className="text-green-400">✔</span> {feature}
                </li>
              ))}
            </ul>
            {/* Know More Button */}
            <button className={`mt-auto w-full py-3 rounded-md font-bold text-lg border-2 transition-all duration-200 focus:outline-none ${course.highlight ? "bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300" : "bg-white text-black border-white hover:bg-gray-100"}`}>
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesWeOfferSection; 