import React, { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Placement Rate", value: 95, suffix: "%" },
  { label: "Avg. Package", value: 4.5, prefix: "₹", suffix: "L" },
  { label: "Hiring Partners", value: 500, suffix: "+" },
  { label: "Students Enrolled", value: 100, suffix: "K" },
];

const Counter = ({ end, prefix = '', suffix = '', duration = 1200, visible }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) {
      setCount(0);
      return;
    }
    let start = 0;
    const increment = end / (duration / 16);
    let raf;
    const animate = () => {
      start += increment;
      if ((increment > 0 && start < end) || (increment < 0 && start > end)) {
        setCount(Math.round(start * 10) / 10);
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, duration, visible]);
  return (
    <span>
      {prefix}
      {Number.isInteger(count) ? count : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const SuccessStatsGlow: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div ref={ref} className="relative flex items-center justify-center w-full">
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
          boxShadow: "0 0 40px 8px #3b82f6, 0 0 60px 16px #f472b6, 0 0 80px 24px #fdba74"
        }} />
        {/* Card */}
        <div className="relative bg-black rounded-2xl px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 flex flex-col items-center shadow-xl max-w-3xl mx-auto w-full">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:gap-8 w-full justify-between items-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-1">
                  <Counter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    visible={visible}
                  />
                </div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-white opacity-80 whitespace-nowrap text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStatsGlow; 