import React from "react";

const courses = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#ffb300" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></svg>
    ),
    name: "AI & Machine Learning",
    subtitle: "For future data scientists & ML engineers",
    price: "₹5999",
    period: "/Life-time",
    features: [
      "Python, Pandas, ML Algorithms",
      "Mini + Major ML Projects",
      "Certificates + Deployment Help",
      "Placement Assistance Group",
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#ffd600" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></svg>
    ),
    
    name: "Full Stack Development",
    subtitle: "Perfect for aspiring web developers",
    price: " ₹4999",
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
      <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></svg>
    ),
    name: " Cloud Computing",
    subtitle: "Ideal for DevOps & Infra enthusiasts",
    price: "₹5999",
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
      <h2 className="text-3xl font-bold text-center text-white mb-12">Internship We Offer Offline</h2>
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