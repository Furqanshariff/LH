import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/Liquid-glass-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Trophy, Clock, Star, MapPin, Phone, Mail, PlayCircle, Download, Award, BookOpen, Code, Database, Globe, Lightbulb, ThumbsUp, MessageCircle, Flag, Code2, Cloud, DollarSign, Heart, HelpCircle, Settings2, ArrowUpRight } from "lucide-react";
import DemoCtaSection from "@/components/DemoCtaSection";
import GallerySection from "@/components/GallerySection";
import Ccs from "@/components/ccs";
import CoursesWeOfferSection from "@/components/CoursesWeOfferSection";
import MeetYourMentors from "@/components/MeetYourMentors";
import SuccessStatsGlow from "@/components/SuccessStatsGlow";
import TestimonialsSection from "@/components/TestimonialsSection";
import CSV from "@/components/CSV";

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
        <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded mr-2">🚀 Become a Cloud Engineer</span>
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

export default function FullStackDevelopment() {
  const [navAtTop, setNavAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <AnnouncementBar />
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
              <Link to="https://forms.gle/iYHvjacm7pLbT12h9">
                <Button className={`${navAtTop ? "bg-white text-blue-600 border-blue-600 hover:bg-blue-50" : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"} border transition-all ml-2`}>Enquire Now</Button>
              </Link>
              <a href="#syllabus"><Button className={`${navAtTop ? "bg-white text-blue-600 border-blue-600 hover:bg-blue-50" : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"} border transition-all ml-2`}>Syllabus</Button></a>

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
            <Link to="https://forms.gle/iYHvjacm7pLbT12h9" className="block py-2 px-4 rounded hover:bg-blue-50">
              <Button className="w-full bg-white text-blue-600 border-blue-600 hover:bg-blue-50">Enquire Now</Button>
            </Link>
            <a href="#syllabus" className="block py-2 px-4 rounded hover:bg-blue-50">
              <Button className="w-full bg-white text-blue-600 border-blue-600 hover:bg-blue-50">Syllabus</Button>
            </a>
          </div>
        )}
      </nav>
      {/* Hero Section - No right side cards */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 lg:py-20 pt-36">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Master Cloud Computing & Architect the Future of Scalable Systems
                </h1>
                <div className="text-base lg:text-lg font-semibold text-blue-100">
                  Cloud Computing Internships – 4 Weeks
                </div>
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
                  🔥 Job-Ready Program with Dual Certificates + Live Projects
                </Badge>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed">
                Join 25,000+ learners who've built real-world projects, gained hands-on experience, and boosted their career trajectory. Led by top mentors. Limited seats. Starts August 1st.
              </p>
              <ul className="text-white text-lg space-y-2 list-disc list-inside">
                <li>Internship Certificate</li>
                <li>Placement WhatsApp Group</li>
                <li>1:1 Mentor Support</li>
              </ul>
              {/* Statistics Row */}
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
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <button onClick={() => document.getElementById('online-internship')?.scrollIntoView({ behavior: 'smooth' })} className="bg-orange-500 hover:bg-blue-700 text-white font-bold text-base px-6 py-2 rounded-xl transition-all focus:outline-none w-full sm:w-auto">Online Internship</button>
                <button onClick={() => document.getElementById('offline-internship')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:border-blue-600 hover:text-blue-700 text-black font-bold text-base px-6 py-2 rounded-xl border-2 border-transparent transition-all focus:outline-none w-full sm:w-auto">Offline Internship</button>
                <button onClick={() => document.getElementById('weekend-internship')?.scrollIntoView({ behavior: 'smooth' })} className="bg-orange-500 hover:bg-blue-700 text-white font-bold text-base px-6 py-2 rounded-xl transition-all focus:outline-none w-full sm:w-auto">Weekend Internship</button>
              </div>
            </div>
            {/* Right side visual card */}
            <div className="flex justify-center items-center -mt-72 z-10 relative">
              <div className="bg-white rounded-[40px] shadow-2xl p-0 max-w-[440px] w-full flex flex-col items-center overflow-hidden">
                <div className="w-full h-auto rounded-t-[40px] overflow-hidden flex items-end justify-end relative p-0 m-0">
                  <img src="image8.jpg" alt="Full Stack Visual" className="w-full h-auto object-cover align-top block p-0 m-0" />
                </div>
                <div className="grid grid-cols-2 w-full rounded-b-[40px]">
                  <div className="flex flex-col items-center justify-center py-7 bg-white">
                    <span className="mb-2">
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 32 32' className='h-8 w-8'><rect width='32' height='32' rx='6' fill='#2563eb'/><path d='M22.667 8H9.333A1.333 1.333 0 0 0 8 9.333v13.334A1.333 1.333 0 0 0 9.333 24h13.334A1.333 1.333 0 0 0 24 22.667V9.333A1.333 1.333 0 0 0 22.667 8ZM12.667 21.333h-2V14.667h2v6.666Zm-1-7.333a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm9.333 7.333h-2v-3.333c0-.368-.299-.667-.667-.667s-.667.299-.667.667v3.333h-2v-6.666h2v.92c.368-.58 1.057-.92 1.667-.92 1.104 0 2 .896 2 2v4.666Z' fill='#fff'/></svg>
                    </span>
                    <div className="text-2xl font-extrabold text-blue-900 mb-1">62,000+</div>
                    <div className="text-sm text-gray-700">Jobs on LinkedIn Alone</div>
                  </div>
                  <div className="flex flex-col items-center justify-center py-7 bg-[#eef3fd]">
                    <span className="mb-2">
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 32 32' className='h-8 w-8'><rect width='32' height='32' rx='6' fill='#2563eb'/><path d='M10 13.333V10.667A2.667 2.667 0 0 1 12.667 8h6.666A2.667 2.667 0 0 1 22 10.667v2.666M8 13.333h16a1.333 1.333 0 0 1 1.333 1.334v6.666A2.667 2.667 0 0 1 22.667 24H9.333A2.667 2.667 0 0 1 6.667 21.333v-6.666A1.333 1.333 0 0 1 8 13.333Zm8 4a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Z' fill='#fff'/></svg>
                    </span>
                    <div className="text-2xl font-extrabold text-blue-900 mb-1">₹24 LPA</div>
                    <div className="text-sm text-gray-700">Maximum Compensation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Heading above company logos marquee */}
          <div className="pt-5">
            <h3 className="text-center text-white text-2xl font-bold mb-2 mt-8">Our learners work at top companies</h3>
          </div>
          <CompanyLogosMarquee />
        </div>
      </section>
      {/* Mobile Sticky Internship Buttons (below hero) */}
      <div className="flex md:hidden gap-2 px-2 py-2 bg-white border-b sticky top-[68px] z-40">
        <button onClick={() => document.getElementById('online-internship')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-orange-500 hover:bg-blue-700 text-white font-bold text-base px-2 py-2 rounded-lg transition-all">Online Internship</button>
        <button onClick={() => document.getElementById('offline-internship')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-white hover:border-blue-600 hover:text-blue-700 text-black font-bold text-base px-2 py-2 rounded-lg border-2 border-gray-200 transition-all">Offline Internship</button>
        <button onClick={() => document.getElementById('weekend-internship')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-orange-500 hover:bg-blue-700 text-white font-bold text-base px-2 py-2 rounded-lg transition-all">Weekend Internship</button>
      </div>
      
      {/* Online Internship Section */}
      <section id="online-internship" className="flex justify-center items-center py-16">
        <div className="w-full max-w-6xl bg-black rounded-[48px] px-8 py-12 flex flex-col lg:flex-row gap-10 items-center shadow-xl">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">Our Online Internship</h2>
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">Get real-world experience from home.</span>
                  <div className="text-white/80 text-base">Work on live projects, collaborate with peers, and build your portfolio remotely.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">No commute, flexible schedule.</span>
                  <div className="text-white/80 text-base">Learn and intern at your own pace, from anywhere in India.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">Mentorship from top industry experts.</span>
                  <div className="text-white/80 text-base">Get guidance, feedback, and career advice from experienced professionals.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">Earn certificates & boost your resume.</span>
                  <div className="text-white/80 text-base">Receive recognized certificates and stand out to employers.</div>
                </div>
              </li>
            </ul>
            <Link to="https://www.learnyhive.com/courses/cloud-computing-internship-learn-core-concepts-real-world-applications-in-4-weeks/"><button className="mt-2 px-8 py-3 border-2 border-green-400 text-white rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-green-400 hover:text-black transition-all w-fit">
              Enroll now
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            </Link>
            
          </div>
          {/* Right: Banner Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src="image6.jpg" alt="Online Internship Banner" className="rounded-2xl max-w-full max-h-[320px] object-contain shadow-lg" />
          </div>
        </div>
      </section>
      {/* Offline Internship Section */}
      <section id="offline-internship" className="flex justify-center items-center py-16">
        <div className="w-full max-w-6xl bg-white border-2 border-black rounded-none relative flex flex-col lg:flex-row gap-10 items-center px-8 py-12 shadow-lg" style={{ boxShadow: '8px 8px 0 #2563eb' }}>
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Offline Internship</h2>
            <p className="text-black text-lg mb-4">Experience the power of in-person collaboration and hands-on learning with our offline internship program. Work side-by-side with peers and mentors, build your professional network, and gain practical skills in a real-world environment.</p>
            <p className="text-black text-base mb-4">Our offline internships offer you the chance to:</p>
            <ul className="list-disc pl-6 text-black mb-6 space-y-2">
              <li>Engage in face-to-face teamwork and communication</li>
              <li>Access on-site resources and facilities</li>
              <li>Participate in live workshops and events</li>
              <li>Build lasting professional relationships</li>
            </ul>
            <h3 className="text-2xl font-bold text-black mb-2">Batches</h3>
            <p className="text-black mb-6">Take the next step in your career with an immersive WeekDay offline internship experience!</p>
            <Link to="https://rzp.io/rzp/ge1fky8B"> <button className="px-8 py-3 border-2 border-black text-black rounded-none font-semibold text-lg bg-white shadow-[4px_4px_0_#000] hover:bg-black hover:text-white transition-all w-fit">Enroll Now</button>
            </Link>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center items-center">
            <img src="image5.jpg" alt="Offline Internship Illustration" className="max-w-full max-h-[320px] object-contain" />
          </div>
          {/* Blue accent line at the bottom */}
          <div className="absolute left-0 right-0 bottom-0 h-2 bg-[#2563eb] rounded-b-none" />
        </div>
      </section>
      {/* weekend offline Internship Section */}
      <section id="weekend-internship" className="flex justify-center items-center py-16">
        <div className="w-full max-w-6xl bg-black rounded-[48px] px-8 py-12 flex flex-col lg:flex-row gap-10 items-center shadow-xl">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">Our weekend Offline Internship</h2>
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">Weekend-only offline sessions.</span>
                  <div className="text-white/80 text-base">Learn in-person without affecting your weekday routine.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">Build real-world projects.</span>
                  <div className="text-white/80 text-base">Gain hands-on experience guided by industry mentors.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">Boost your resume.</span>
                  <div className="text-white/80 text-base">Get certified and improve your profile for top opportunities.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-400">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <span className="font-bold text-white">Network with peers & mentors.</span>
                  <div className="text-white/80 text-base">Connect, collaborate, and grow your professional circle.</div>
                </div>
              </li>
            </ul>
            <Link to="https://rzp.io/rzp/ge1fky8B"><button className="mt-2 px-8 py-3 border-2 border-green-400 text-white rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-green-400 hover:text-black transition-all w-fit">
              Enroll now
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            </Link>
            
          </div>
          {/* Right: Banner Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src="image4.jpg" alt="Online Internship Banner" className="rounded-2xl max-w-full max-h-[320px] object-contain shadow-lg" />
          </div>
        </div>
      </section>
      {/* Who Should Join Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Heading and short description */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl font-bold mb-6">Who Should Join Cloud Computing Course?</h2>
            <p className="text-lg text-gray-700 mb-4">Whether you are a student, graduate, working professional, or looking to switch careers, this program is designed for you. Build real-world skills and unlock top tech opportunities.</p>
          </div>
          {/* Right: Cards */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            <div className="flex flex-col items-center bg-white rounded-2xl border-2 border-gray-200 p-4 shadow-md">
              <img src="techg.webp" alt="Tech Graduates" className="h-24 w-24 object-cover rounded-xl mb-2" />
              <span className="font-semibold text-center">Tech Graduates</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl border-2 border-gray-200 p-4 shadow-md">
              <img src="underg.webp" alt="Undergrads" className="h-24 w-24 object-cover rounded-xl mb-2" />
              <span className="font-semibold text-center">Undergrads</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl border-2 border-gray-200 p-4 shadow-md">
              <img src="career.webp" alt="Freshers" className="h-24 w-24 object-cover rounded-xl mb-2" />
              <span className="font-semibold text-center">Freshers</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl border-2 border-gray-200 p-4 shadow-md">
              <img src="wroking.webp" alt="Career Transitioners" className="h-24 w-24 object-cover rounded-xl mb-2" />
              <span className="font-semibold text-center">Career Transitioners</span>
            </div>
          </div>
        </div>
      </section>
      {/* The rest of the home page sections can be copied here as needed, or you can import and reuse them if modularized. */}
      {/* ... (rest of the Index page content) ... */}
      <div id="syllabus"><Ccs /></div>
      
      
      
      {/* Next Cohort Section */}
      <section className="w-full py-16 bg-gradient-to-br from-[#0a3cff] to-[#050c2a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 flex items-center gap-3"><span className="text-3xl">✨</span> Next Batches Starting From</h2>
          <div className="space-y-8">
            {/* Cohort 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-[#ffe6b3] rounded-2xl px-8 py-4 flex flex-col items-center min-w-[200px] shadow-md">
                <span className="text-base text-[#b48a3a] font-medium mb-1">Batch start on</span>
                <span className="text-2xl font-bold text-gray-900">28nd Jul, 25</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl flex flex-col md:flex-row md:items-center px-6 py-4 gap-4 shadow-md">
                <div className="flex items-center gap-2 text-gray-700 text-lg font-medium">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bdbdbd" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#0a3cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  9:00 AM to 1:00 PM
                </div>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#2563eb"/></svg>Morning</span>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm">Weekday (Mon to Sat)</span>
                <span className="flex items-center gap-1 text-[#f59e42] font-semibold text-sm ml-auto"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/></svg> Filling Fast <span className="text-[#ff3b3b] font-bold ml-1">• 18 Seats Left!</span></span>
                <Link to="https://rzp.io/rzp/ge1fky8B"><button className="ml-4 bg-[#2563eb] hover:bg-[#1741b6] text-white font-bold px-6 py-2 rounded-xl text-base shadow transition-all">Enroll</button>
                  </Link>
              </div>
            </div>
            {/* Cohort 4 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-[#ffe6b3] rounded-2xl px-8 py-4 flex flex-col items-center min-w-[200px] shadow-md">
                <span className="text-base text-[#b48a3a] font-medium mb-1">Batch start on</span>
                <span className="text-2xl font-bold text-gray-900">28nd Jul, 25</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl flex flex-col md:flex-row md:items-center px-6 py-4 gap-4 shadow-md">
                <div className="flex items-center gap-2 text-gray-700 text-lg font-medium">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bdbdbd" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#0a3cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  2:00 PM to 6:00 PM
                </div>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#2563eb"/></svg> Evening</span>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm">Weekday (Mon to Sat)</span>
                <span className="flex items-center gap-1 text-[#f59e42] font-semibold text-sm ml-auto"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/></svg> Filling Fast <span className="text-[#ff3b3b] font-bold ml-1">• 18 Seats Left!</span></span>
                <Link to="https://rzp.io/rzp/ge1fky8B"><button className="ml-4 bg-[#2563eb] hover:bg-[#1741b6] text-white font-bold px-6 py-2 rounded-xl text-base shadow transition-all">Enroll</button>
                  </Link>
                </div>
            </div>
            {/* Cohort 3 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-[#ffe6b3] rounded-2xl px-8 py-4 flex flex-col items-center min-w-[200px] shadow-md">
                <span className="text-base text-[#b48a3a] font-medium mb-1">Batch start on</span>
                <span className="text-2xl font-bold text-gray-900">02d Aug, 25</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl flex flex-col md:flex-row md:items-center px-6 py-4 gap-4 shadow-md">
                <div className="flex items-center gap-2 text-gray-700 text-lg font-medium">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bdbdbd" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#0a3cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  9:00 AM to 3:00 PM
                </div>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#2563eb"/></svg>morning</span>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm">Weekend (Sat to Sun)</span>
                <span className="flex items-center gap-1 text-[#f59e42] font-semibold text-sm ml-auto"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/></svg> Filling Fast <span className="text-[#ff3b3b] font-bold ml-1">• 10 Seats Left!</span></span>
                
                <Link to="https://rzp.io/rzp/ge1fky8B"><button className="ml-4 bg-[#2563eb] hover:bg-[#1741b6] text-white font-bold px-6 py-2 rounded-xl text-base shadow transition-all">Enroll</button>
                  </Link>
              </div>
            </div>
            {/* Cohort 2 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-[#ffe6b3] rounded-2xl px-8 py-4 flex flex-col items-center min-w-[200px] shadow-md">
                <span className="text-base text-[#b48a3a] font-medium mb-1">Batch started on</span>
                <span className="text-2xl font-bold text-gray-900">8th Jul, 25</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl flex flex-col md:flex-row md:items-center px-6 py-4 gap-4 shadow-md">
                <div className="flex items-center gap-2 text-gray-700 text-lg font-medium">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bdbdbd" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#0a3cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  9:30 PM to 10:30 PM
                </div>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#2563eb"/></svg> Evening</span>
                <span className="bg-[#eef3fd] text-[#2563eb] font-semibold px-4 py-1 rounded-full text-sm">Weekday (Mon to Sat)</span>
                <button className="ml-auto bg-[#ff5c5c] text-white font-bold px-6 py-2 rounded-xl text-base shadow transition-all cursor-not-allowed">Sold Out</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fee Structure Section for offline- moved up */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Offline Cloud Computing Internship</h2>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto bg-[#fffbea] rounded-2xl shadow-lg border border-gray-800 overflow-hidden">
            {/* Left: Zoom Screenshot */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6">
              <img
                src="programintern.jpeg"
                alt="Zoom Screenshot"
                className="rounded-lg border border-gray-200 shadow-md max-h-64 object-cover"
              />
            </div>
            {/* Right: Fee Details */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <div className="text-gray-500 text-sm mb-1">Total Program Fee:</div>
              <div className="flex items-end gap-4 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">₹4,999/-</span>
                <span className="text-lg text-gray-400 line-through">₹9,999/-</span>
              </div>
              <ul className="space-y-2 my-6">
                <li className="flex items-center gap-2 text-base text-gray-800">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Live instruction from Industry Veterans
                </li>
                <li className="flex items-center gap-2 text-base text-gray-800">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Official certification in Human Resources
                </li>
                <li className="flex items-center gap-2 text-base text-gray-800">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Vibrant community just like a College Campus
                </li>
                <li className="flex items-center gap-2 text-base text-gray-800">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Hand-on curriculum with Real-Life Projects
                </li>
              </ul>
              <Link to="https://rzp.io/rzp/ge1fky8B"> <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg mt-2 w-full md:w-auto self-start md:self-auto">Avail Now</button>
                </Link>
            </div>
          </div>
        </div>
      </section>
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
      <TestimonialsSection />
      <GallerySection />
      {/* Add other sections as needed */}
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
}
