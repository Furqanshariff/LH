import { link } from "fs";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Frontend Fundamentals + Git",
    content: [
      ["HTML/CSS Crash Course – structure, tags, forms, layout"],
      ["Responsive Design with Flexbox & Media Queries"],
      ["Git & GitHub Essentials for Devs"],
      ["Assignment: Design a Responsive Portfolio Page with header, about, projects, and footer."],
      ["Mini Project: Build and deploy a Portfolio Website on GitHub Pages or Vercel."]
    ],
    tags: ["Live Classes", "Assignment", "Project"],
    open: true,
  },
  {
    title: "JavaScript + React",
    content: [
      ["JavaScript DOM + Events"],
      ["React Fundamentals: Components, Props, State"],
      ["React Hooks (useState, useEffect)"],
      ["Assignment: Build a Dynamic Calculator or Quiz App in Vanilla JS"],
      ["Mini Project: To-do App in React with add/delete/edit functionality + local storage"]
    ],
    tags: ["Live Classes", "Assignment", "Project"],
    open: false,
  },
  {
    title: "Backend with Node.js + APIs",
    content: [
      ["Node.js + Express Basics"],
      ["Building REST APIs (GET, POST, PUT, DELETE)"],
      ["Connecting to MongoDB using Mongoose"],
      ["Assignment: Build a REST API for managing tasks using Express"],
      ["Mini Project: Blog Backend API (CRUD operations + MongoDB)"]
    ],
    tags: ["Live Classes", "Assignment", "Project"],
    open: false,
  },
  {
    title: "Integration + Hosting",
    content: [
      ["Connecting React Frontend to Node Backend"],
      ["Basic Auth System (Login/Register with bcrypt)"],
      ["Hosting Full Stack App (Render/Vercel)"],
      ["Assignment: Create Auth system + connect frontend/backend"],
      ["Final Project: Full MERN Blog App with login/register, post CRUD, user dashboard"]
    ],
    tags: ["Live Classes", "Assignment", "Project"],
    open: false,
  },
];

const tools = [
  { name: "React", color: "#61dafb" },
  { name: "Redux", color: "#764abc" },
  { name: "AWS", color: "#ff9900" },
  { name: "HTML5", color: "#e34c26" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "MongoDB", color: "#47a248" },
  { name: "git", color: "#f34f29" },
  { name: "tailwindcss", color: "#38bdf8" },
  { name: "Bootstrap", color: "#7952b3" },
  { name: "jQuery", color: "#0769ad" },
];

const tagColors: Record<string, string> = {
  "Live Classes": "bg-purple-100 text-purple-700",
  "Assignment": "bg-blue-100 text-blue-700",
  "Project": "bg-orange-100 text-orange-700",
};

const CourseSyllabusSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full bg-[#f6f8ff] py-16 px-2 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Full Stack Developer Course Syllabus</h2>
          {/*<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md text-sm">Download Curriculum</button>*/}
        </div>
        {/* Syllabus summary bar */}
        <div className="relative flex flex-col sm:flex-row items-center w-full max-w-5xl mx-auto mb-8 border border-black rounded-2xl sm:rounded-full bg-transparent gap-2 sm:gap-0 px-2 sm:px-0 overflow-x-auto" style={{background: 'none'}}>
          {/* Left pill (background only) */}
          <div className="flex-1 flex flex-col sm:flex-row items-center bg-[#fff7ea] rounded-t-2xl sm:rounded-l-full py-4 sm:py-6 pl-4 sm:pl-8 pr-2 min-w-0 gap-2 sm:gap-0 w-full">
            {/* Item 1 */}
            <div className="flex items-center gap-2 min-w-[140px]">
              <span className="text-gray-500"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
              <div>
                <div className="text-base text-gray-500 font-medium">Duration</div>
                <div className="font-extrabold text-lg text-black">4 Weeks</div>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-300 mx-6" />
            {/* Item 2 */}
            <div className="flex items-center gap-2 min-w-[120px]">
              <span className="text-gray-500"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M16 3v4H8V3"/></svg></span>
              <div>
                <div className="text-base text-gray-500 font-medium">Mode</div>
                <div className="font-extrabold text-lg text-black">Online/Offline</div>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-300 mx-6" />
            {/* Item 3 */}
            <div className="flex items-center gap-2 min-w-[150px]">
              <span className="text-gray-500"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>
              <div>
                <div className="text-base text-gray-500 font-medium">Live Sessions</div>
                <div className="font-extrabold text-lg text-black">20+ hrs</div>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-300 mx-6" />
            {/* Item 4 */}
            <div className="flex items-center gap-2 min-w-[110px]">
              <span className="text-gray-500"><svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg></span>
              <div>
                <div className="text-base text-gray-500 font-medium">Projects</div>
                <div className="font-extrabold text-lg text-black">2+</div>
              </div>
            </div>
          </div>
          {/* Right pill (background only) */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#fff7ea] to-[#ffb86c] rounded-b-2xl sm:rounded-r-full py-4 sm:py-6 pr-4 sm:pr-10 pl-4 sm:pl-8 min-w-[180px] sm:min-w-[230px] h-full w-full sm:w-auto justify-center">
            {/* SVG illustration placeholder */}
            <span className="inline-block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fff"/><ellipse cx="24" cy="36" rx="12" ry="4" fill="#ffe0b2"/><path d="M20 32c0-2 8-2 8 0v2h-8v-2z" fill="#ff7043"/><circle cx="24" cy="22" r="6" fill="#ff7043"/><circle cx="24" cy="20" r="2" fill="#fff"/><path d="M24 16v-3m0 3l2-2m-2 2l-2-2" stroke="#1976d2" strokeWidth="1.5"/><circle cx="36" cy="12" r="3" fill="#1976d2"/><path d="M36 9v6M33 12h6" stroke="#fff" strokeWidth="1.5"/></svg></span>
            <div className="flex flex-col items-start">
              <span className="font-extrabold text-black text-lg leading-tight">Placement</span>
              <span className="font-extrabold text-black text-lg leading-tight">Support</span>
            </div>
          </div>
        </div>
        {/* Accordion */}
        <div className="space-y-4 mb-6 px-1 sm:px-0">
          {modules.map((mod, idx) => (
            <div
              key={mod.title}
              className={`bg-white border border-gray-300 rounded-xl ${openIdx === idx ? "shadow-lg" : ""}`}
            >
              <button
                className="w-full flex flex-col sm:flex-row justify-between items-center px-3 sm:px-6 py-3 sm:py-4 focus:outline-none gap-2 sm:gap-0"
                onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full text-base sm:text-lg">
                  <span className="font-semibold text-gray-800">Module {idx + 1} <span className="font-bold">{mod.title}</span></span>
                  <div className="flex gap-2 flex-wrap ml-2">
                    {mod.tags?.map((tag) => (
                      <span key={tag} className={`text-xs font-medium px-2 py-1 rounded ${tagColors[tag] || "bg-gray-100 text-gray-700"}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="sm:ml-4 text-gray-500">{openIdx === idx ? "−" : "+"}</span>
              </button>
              {openIdx === idx && mod.content && (
                <div className="px-3 sm:px-8 pb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm break-words">
                    {mod.content.map((row, i) => (
                      <ul key={i} className="list-disc ml-4">
                        {row.map((item, j) => item && <li key={j}>{item}</li>)}
                      </ul>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-10">
          <button className="border border-gray-400 text-gray-700 px-6 py-1 rounded-full text-sm hover:bg-gray-100">View more</button>
        </div>
        {/* Tools you will master */}
        <h3 className="text-xl font-bold text-center mb-6">Tools you will master</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6 max-w-2xl mx-auto">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center justify-center border border-gray-300 rounded-lg py-3 px-2 bg-white">
              <span className="font-semibold" style={{ color: tool.color }}>{tool.name}</span>
            </div>
          ))}
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mb-8">
          <span className="w-2 h-2 bg-blue-600 rounded-full inline-block"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
        </div>
        <div className="flex justify-center">
          <Link to="https://rzp.io/rzp/cX8xyWt"><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg">Apply Now</button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSyllabusSection; 