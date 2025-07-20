import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/Liquid-glass-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Trophy, Clock, Star, MapPin, Phone, Mail, PlayCircle, Download, Award, BookOpen, Code, Database, Globe, Lightbulb, ThumbsUp, MessageCircle, Flag, Code2, Cloud, DollarSign, Heart, HelpCircle, Settings2, ArrowUpRight } from "lucide-react";
import DemoCtaSection from "@/components/DemoCtaSection";
import GallerySection from "@/components/GallerySection";
import CourseSyllabusSection from "@/components/CourseSyllabusSection";
import CoursesWeOfferSection from "@/components/CoursesWeOfferSection";
import MeetYourMentors from "@/components/MeetYourMentors";
import SuccessStatsGlow from "@/components/SuccessStatsGlow";
import TestimonialsSection from "@/components/TestimonialsSection";
import CSV from "@/components/CSV";
import PopupCareerExpert from "@/components/PopupCareerExpert";
import { useRef } from "react";

// Counter component for animated numbers
const Counter = ({ end, prefix = '', suffix = '', duration = 2500, className = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let raf;
    const animate = () => {
      start += increment;
      if ((increment > 0 && start < end) || (increment < 0 && start > end)) {
        setCount(Math.round(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return <span className={className}>{prefix}{count}{suffix}</span>;
};

// Marquee/Announcement Bar component
const AnnouncementBar = () => (
  <div className="w-full bg-[#fff6e5] py-2 border-b border-[#f5e2c0] overflow-hidden fixed top-0 left-0 z-50 mb-2">
    <div className="relative w-full h-8 flex items-center"> {/* h-8 = 32px */}
      <div className="absolute whitespace-nowrap animate-marquee flex items-center gap-2">
        <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded mr-2">🚀 Become a Full Stack Web Developer</span>
        <span className="text-black font-medium">| Mentorship by Experts | <span className="font-bold">Starts 28th July</span></span>
      </div>
    </div>
  </div>
);

// Company logos marquee for hero section
const CompanyLogosMarquee = () => (
  <div className="w-full overflow-hidden py-6">
    <div className="relative w-full h-24 flex items-center"> {/* Increased height for bigger logos */}
      <div className="absolute flex items-center gap-16 whitespace-nowrap animate-company-marquee"> {/* Increased gap for spacing */}
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="lenskart.png" alt="lenskart" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="ola.png" alt="ola electric" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" alt="walmart" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="duolingo.png" alt="duolingo" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" alt="airbnb" className="h-16 inline" /> </span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="adobe.png" alt="adobe" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="mamaearth.png" alt="mamaearth" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="accenture.png" alt="accenture" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="google" className="h-16 inline" /></span>
        <span className="text-white text-lg font-medium flex items-center gap-2"> <img src="meta.png" alt="meta" className="h-16 inline" /></span>
      </div>
    </div>
    <style>{`
      @keyframes company-marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-company-marquee {
        animation: company-marquee 15s linear infinite;
      }
    `}</style>
  </div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [navAtTop, setNavAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavAtTop(window.scrollY < 10);
      if (heroRef.current && !popupDismissed) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom < 0 && !showPopup) {
          setShowPopup(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup, popupDismissed]);

  // When popup is closed, mark as dismissed
  const handlePopupChange = (open) => {
    setShowPopup(open);
    if (!open) setPopupDismissed(true);
  };

  const curriculumData = {
    frontend: [
      { module: "HTML5 & CSS3", topics: ["Semantic HTML", "Flexbox & Grid", "Responsive Design", "CSS Animations"] },
      { module: "JavaScript", topics: ["ES6+ Features", "DOM Manipulation", "Async/Await", "Promises"] },
      { module: "React.js", topics: ["Components & JSX", "State Management", "Hooks", "Context API"] },
      { module: "Advanced Frontend", topics: ["TypeScript", "Redux", "Testing", "Performance Optimization"] }
    ],
    backend: [
      { module: "Node.js", topics: ["Express.js", "RESTful APIs", "Middleware", "Authentication"] },
      { module: "Database", topics: ["MongoDB", "MySQL", "Database Design", "Queries & Optimization"] },
      { module: "Server Technologies", topics: ["Cloud Deployment", "Docker", "CI/CD", "Security"] },
      { module: "Advanced Backend", topics: ["Microservices", "GraphQL", "WebSockets", "Caching"] }
    ],
    projects: [
      { name: "E-commerce Platform", tech: "React, Node.js, MongoDB", duration: "4 weeks" },
      { name: "Social Media App", tech: "React, Express, MySQL", duration: "3 weeks" },
      { name: "Portfolio Website", tech: "HTML, CSS, JavaScript", duration: "2 weeks" },
      { name: "Real-time Chat App", tech: "Socket.io, React, Node.js", duration: "3 weeks" }
    ]
  };

  const instructors = [
    {
      name: "Rohit Sharma",
      role: "Senior Full Stack Developer",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Expert in MERN stack with extensive industry experience at top tech companies."
    },
    {
      name: "Priya Singh",
      role: "Frontend Specialist",
      experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=200&h=200&fit=crop&crop=face",
      bio: "UI/UX focused developer with expertise in modern frontend frameworks and design systems."
    }
  ];

  const faqs = [
    {
      question: "What is the duration of the Full Stack Developer Course?",
      answer: "The course duration is 6 months with flexible batch timings. We offer both weekday and weekend batches to accommodate working professionals."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "No prior experience is required. Our course is designed for beginners and covers programming fundamentals before moving to advanced topics."
    },
    {
      question: "What kind of placement assistance do you provide?",
      answer: "We provide 100% placement assistance including resume building, interview preparation, mock interviews, and direct connections with our hiring partners."
    },
    {
      question: "Will I get a certificate after completion?",
      answer: "Yes, you'll receive an industry-recognized certificate upon successful completion of the course and all projects."
    },
    {
      question: "What is the fee structure?",
      answer: "We offer flexible payment options including EMI. Contact our counselors for detailed fee structure and available discounts."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />
      {/* Navigation */}
      <nav
        className={`transition-all duration-300 border-b sticky z-50 top-10 ${
          navAtTop
            ? "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 border-transparent text-white"
            : "bg-white border-gray-200 text-gray-900 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src="/logolh.png" alt="Learnyhive Logo" className="h-14 w-14" />
              <div className="flex flex-col justify-center ml-2">
                <span className="text-2xl font-bold leading-tight">
                  <span className="text-black group-hover:text-orange-500 transition">Learny</span><span className="text-orange-500">Hive</span>
                </span>
                <span className="text-xs text-black-500 font-medium -mt-1">Hive Your Way to Educational Excellence.</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {/*<Button className={`${navAtTop ? "bg-white text-blue-600 hover:bg-blue-100" : "bg-blue-600 text-white hover:bg-blue-700"} border border-blue-600 transition-all`}>Enroll Now</Button>*/}
              <Link to="https://forms.gle/iYHvjacm7pLbT12h9">
                <Button className={`${navAtTop ? "bg-white text-blue-600 border-blue-600 hover:bg-blue-50" : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"} border transition-all ml-2`}>Enquire Now</Button>
              </Link>
            </div>
            {/* Hamburger for mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <Link to="/" className="block py-2 px-4 rounded hover:bg-blue-50">Home</Link>
            <Link to="/FullStackDevelopment" className="block py-2 px-4 rounded hover:bg-blue-50">Full Stack Development</Link>
            <Link to="/CloudComputing" className="block py-2 px-4 rounded hover:bg-blue-50">Cloud Computing</Link>
            <Link to="https://forms.gle/iYHvjacm7pLbT12h9" className="block py-2 px-4 rounded hover:bg-blue-50">Enquire Now</Link>
          </div>
        )}
      </nav>

      {/* Hero Section - Updated to match the image */}
      <section ref={heroRef} className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-8 lg:py-12 pt-8" id="hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Launch Your Tech Career with India’s Most Practical Internship Program
                </h1>
                <div className="text-base lg:text-lg font-semibold text-blue-100">
                  Full Stack & Cloud Internships – 4 Weeks
                </div>
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
                  🔥 Job-Ready Program with Dual Certificates + Live Projects
                </Badge>
              </div>
                <p className="text-lg text-blue-100 leading-relaxed">
                Join 25,000+ learners who've built real-world projects, gained hands-on experience, and boosted their career trajectory. Led by top mentors. Limited seats. Starts on July 28th.
              </p>
              <ul className="text-white text-lg space-y-2 list-disc list-inside">
                <li>Internship Certificate</li>
                <li>Course Certificate</li>
                <li>Letter Of Recommendation</li>
                <li>1:1 Mentor Support</li>

              </ul>
              {/* Statistics Row (restored, moved above buttons) */}
              <div className="grid grid-cols-3 gap-8 py-6 border-t border-blue-400 mt-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 text-yellow-400 mr-1" />
                    <span className="text-2xl lg:text-3xl font-bold">4.9</span>
                  </div>
                  <p className="text-sm text-blue-200">(24,922 Reviews)</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-blue-300 mr-1" />
                    <span className="text-2xl lg:text-3xl font-bold">27,000+</span>
                  </div>
                  <p className="text-sm text-blue-200">Aspirants Mentored</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-blue-300 mr-1" />
                    <span className="text-2xl lg:text-3xl font-bold">15+</span>
                  </div>
                  <p className="text-sm text-blue-200">Industry Mentors</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/*<LiquidButton size="lg" className="text-white px-8 py-3 rounded-lg font-semibold">Book a Demo Now</LiquidButton>
                <LiquidButton size="lg" className="text-white px-8 py-3 rounded-lg font-semibold">Download Curriculum</LiquidButton>*/}
              </div>
            </div>
            {/* Two program cards replacing the old illustration */}
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-0 w-full max-w-xs flex flex-col items-center min-h-[420px] justify-between">
                <div className="w-full h-40 rounded-t-2xl overflow-hidden">
                  <img src="image9.jpg" alt="Program Thumbnail" className="w-full h-full object-cover" />
                    </div>
                <div className="flex flex-col items-center w-full p-6">
                  <div className="flex items-center gap-2 mb-2 mt-2">
                    {/*<span className="bg-blue-100 text-blue-700 font-bold text-xs px-2 py-1 rounded">CCBP 4.0 ACADEMY</span>*/}
                  </div>
                  <div className="flex flex-col gap-2 mb-4 w-full items-center">
                    <span className="bg-purple-100 text-purple-700 font-bold text-xs px-2 py-1 rounded">LH Internship</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">ANY BRANCH OR DEGREE</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-end w-full">
                    <div className="font-bold text-lg text-black text-center mb-4">Full-Stack Development</div>
                    <div className="flex justify-between w-full text-xs text-gray-500 mb-2">
                      <span className="font-semibold">Starts soon</span>
                      <span className="text-red-500 flex items-center gap-1">🔥 Limited Seats Available</span>
                    </div>
                    <Link to="https://pages.razorpay.com/pl_QutGct2lf243Vp/view"><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg w-full mb-2 flex items-center justify-center gap-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7' /></svg>Enroll Now</button>
                      </Link>
                    <a href="/FullStackDevelopment" className="text-blue-600 text-sm font-medium underline text-center block">Know More</a>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-0 w-full max-w-xs flex flex-col items-center min-h-[420px] justify-between">
                <div className="w-full h-40 rounded-t-2xl overflow-hidden">
                  <img src="image10.jpg" alt="Program Thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-center w-full p-6">
                  <div className="flex items-center gap-2 mb-2 mt-2">
                    <span className="bg-purple-100 text-purple-700 font-bold text-xs px-2 py-1 rounded">LH Internship</span>
                  </div>
                  <div className="flex flex-col gap-2 mb-4 w-full items-center">
                   {/* <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">GRADUATES</span>*/}
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">ANY BRANCH OR DEGREE</span>
                    {/* <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">ANY BRANCH OR DEGREE</span>*/}
                  </div>
                  <div className="flex-1 flex flex-col justify-end w-full">
                    <div className="font-bold  text-black text-lg text-center mb-4">Cloud Computing</div>
                    <div className="flex justify-between w-full text-xs text-gray-500 mb-2">
                      <span className="font-semibold">Today</span>
                      <span className="text-red-500 flex items-center gap-1">🔥 Registrations Open Now</span>
                    </div>
                    <Link to="https://rzp.io/rzp/ge1fky8B"><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg w-full mb-2">Enroll Now</button>
                      </Link>
                    <a href="/CloudComputing" className="text-blue-600 text-sm font-medium underline text-center block">Know More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Heading above company logos marquee */}
        <div className="pt-5">{/* 20px padding top */}
          <h3 className="text-center text-white text-2xl font-bold mb-2 mt-8">Our learners work at top companies</h3>
        </div>
        {/* Company Logos Marquee */}
        <CompanyLogosMarquee />
      </section>
      <PopupCareerExpert open={showPopup} onOpenChange={handlePopupChange} />

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">Why Choose LearnyHive Internships?</h2>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mb-2">
            Learnyhive is among top-rated ed-tech companies providing Online internships with Certificates to professionals degrees.
          </p>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-3xl mb-8">
            We offer industry-focused internships in Full Stack Development and Cloud Computing.
          </p>
          <ul className="text-base sm:text-lg space-y-3 mx-auto text-left max-w-4xl">
            <li className="flex items-center gap-2 text-gray-800"><span className="text-blue-500 text-xl">✓</span> 100k+ Students Enrolled in our internship</li>
            <li className="flex items-center gap-2 text-gray-800"><span className="text-blue-500 text-xl">✓</span> Learn from Industry Mentors – Real engineers, not just instructors</li>
            <li className="flex items-center gap-2 text-gray-800"><span className="text-blue-500 text-xl">✓</span> Dual Certification – Get a Course Completion Certificate + Internship Letter</li>
            <li className="flex items-center gap-2 text-gray-800"><span className="text-blue-500 text-xl">✓</span> 4-Week Job-Oriented Internships – Master real-world skills in Full Stack Development & Cloud Computing</li>
            <li className="flex items-center gap-2 text-gray-800"><span className="text-blue-500 text-xl">✓</span> Live Projects + Career Support – Build portfolio-worthy work with 1:1 guidance</li>
            <li className="flex items-center gap-2 text-gray-800"><span className="text-blue-500 text-xl">✓</span> Placement WhatsApp Group Access – Stay plugged into exclusive job opportunities</li>
          </ul>
          <div className="flex justify-center items-center mt-6">
            <img src="/questionmark.svg" alt="Question Mark" className="w-40 h-40 sm:w-[220px] sm:h-[220px]" />
          </div>
        </div>
      </section>

      {/* Placement & Certification */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-10">Learnyhive Internship Perks</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Placement & Certification</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-yellow-400" />
                  <span>100% Placement Assistance Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-yellow-400" />
                  <span>Industry-Recognized Certificate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-yellow-400" />
                  <span>Resume Building & Interview Prep</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-yellow-400" />
                  <span>Direct Connections with 500+ Companies</span>
                </div>
              </div>
                        </div>
            {/* Success Stats Glow Card */}
            <SuccessStatsGlow />
                    </div>
        </div>
      </section>

      {/* How does this program work? Section - Updated with roadmap design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Title and CTA */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  How does this Internship program work?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your Roadmap to Become a Full-Stack Web Developer
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Right side - Roadmap with curved line */}
            <div className="relative">
              {/* Curved SVG Path */}
              <svg 
                className="absolute top-0 left-0 w-full h-full z-0" 
                viewBox="0 0 400 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M80 80 Q320 80 320 200 Q320 320 80 320 Q320 320 320 440 Q320 560 80 560" 
                  stroke="#e5e7eb" 
                  strokeWidth="2" 
                  strokeDasharray="8,8"
                  fill="none"
                />
                {/* Arrow indicators */}
                <polygon points="340,190 350,200 340,210" fill="#3b82f6" />
                <polygon points="60,330 70,320 60,310" fill="#3b82f6" />
                <polygon points="340,430 350,440 340,450" fill="#3b82f6" />
              </svg>

              {/* Step Cards positioned along the path */}
              <div className="relative z-10 space-y-20">
                {/* Learn Step */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ml-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">💡</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 mr-4">Choose your domain</h3>
                      <div className="flex space-x-2">
                        <Badge className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1">Live Classes</Badge>
                        <Badge className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1">Self-Paced</Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We’ll train you hands-on, Gain in-depth knowledge and skills through expert-led sessions tailored to your chosen tech path.
                    </p>
                  </div>
                </div>

                {/* Practice Step */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mr-4 ml-auto max-w-md">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🌐</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Work on real-world</h3>
                    <p className="text-gray-600 text-sm">
                      Apply your learning by building practical, industry-level projects to strengthen your portfolio.
                    </p>
                  </div>
                </div>

                {/* Ask Step */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ml-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">💼</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Placed</h3>
                    <p className="text-gray-600 text-sm">
                      We help you crack your first job.
Get placement support, resume reviews, mock interviews, and referrals to top companies.
                    </p>
                  </div>
                </div>

                {/* Build Step */}
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mr-4 ml-auto max-w-md">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">📜</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Certify</h3>
                    <p className="text-gray-600 text-sm">
                      Earn 2 Industry-Recognized Certificates.
Receive a Course Completion Certificate and an Internship Certificate to boost your credibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Instructors Section */}
      

      {/* Course Syllabus Section */}
      

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">Work on real-world projects<br/>and gain industry-required skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-10">
            {/* Row 1 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:row-span-1 lg:col-span-1">
              <img src="/p1.jpg" alt="Game like Counter Strike" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">Game like Counter Strike (3D)</div>
                <div className="text-gray-600 text-sm">Build 3D games where two teams compete in game modes to complete objectives, such as defuse a bomb or rescuing, etc.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <div className="flex items-center justify-center w-full h-28 bg-gray-900 rounded-t-xl">
                <img src="/p3.png" alt="Face recognition with AI/ML" className="w-full h-28 object-cover rounded-t-xl" />
              </div>
              <div className="p-6">
                <div className="font-bold text-lg mb-1">Face recognition with AI/ML</div>
                <div className="text-gray-600 text-sm">Build a face recognition software using CNNs that automatically detects the important features without any human supervision.</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <img src="/p2.png" alt="Board games bots" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">Board games bots</div>
                <div className="text-gray-600 text-sm">Create unbeatable bots using ML for board games like chess, checkers, etc using adversarial search based algorithms</div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <img src="/p4.jpg" alt="IPL Dashboard App" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">IPL Dashboard App</div>
                <div className="text-gray-600 text-sm">Implementing IPL Dashboard app where users can list off IPL team, individual team details and respective team matches info</div>
              </div>
                </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <img src="/p5.jpg" alt="Smart Door Light" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">Smart Door Light</div>
                <div className="text-gray-600 text-sm">Build a door activated lighting system which will turn on the light as soon as you open the door</div>
                </div>
                </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <img src="/p6.png" alt="Unemployment Trends due to Covid" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">Unemployment Trends due to Covid</div>
                <div className="text-gray-600 text-sm">Are young generations most affected by Covid 19? With Data Science, develop hypotheses to statistically analyze the unemployment trends</div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <img src="/p7.jpg" alt="Movie recommendation system with AI/ML" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">Movie recommendation system with AI/ML</div>
                <div className="text-gray-600 text-sm">Build a movie recommendation system and compete in a competition similar to the famous 'Netflix Prize'.</div>
                </div>
                </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <img src="/p8.jpg" alt="ECommerce App" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">ECommerce App</div>
                <div className="text-gray-600 text-sm">Implementing Nxt Trendz Ecommerce application like Amazon where users can login and see products with search, filters, etc..</div>
                </div>
                </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-0 min-h-[210px] lg:col-span-1">
              <img src="/p9.jpg" alt="Cyber Warrior Level 1" className="w-full h-28 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="font-bold text-lg mb-1">Cyber Warrior Level 1</div>
                <div className="text-gray-600 text-sm">Band up with 5 peers to attack & compromise targets of different difficulty levels to earn the Cyber Warrior Level 1 Badge.</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link to="https://forms.gle/iYHvjacm7pLbT12h9"><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-md">Request Callback</button>
</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Full Stack Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of students who have transformed their careers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#hero">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-bold text-black ">
              Enroll Now - Limited Seats
            </Button></a>
            <Link to="https://forms.gle/iYHvjacm7pLbT12h9"><Button size="lg" variant="outline" className="bg-orange-500 text-black font-bold hover:bg-white hover:text-blue-600">
              Enquire Now
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Learnyhive</span>
              </div>
              <p className="text-gray-400 mb-4">Leading IT training institute with industry-expert instructors and 100% placement assistance.</p>
              <div className="flex space-x-4">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-gray-400">Kalyan nagar, Bangalore</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="hero" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Placement</a></li>
                <li><a href="+91 8660618676" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="http://localhost:8080/FullStackDevelopment" className="hover:text-white">Full Stack Development</a></li>
                <li><a href="http://localhost:8080/CloudComputing" className="hover:text-white">Cloud Computing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91-8660618676</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="support@learnyhive.com"><span>support@learnyhive.com</span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Learnyhive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
