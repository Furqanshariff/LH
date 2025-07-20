import React from 'react';

const companies = [
  [
    { name: 'Meta', className: 'text-blue-700 font-bold text-lg', logo: true },
    { name: 'vodafone', className: 'text-red-500 font-bold', logo: true },
    { name: 'Google', className: 'text-yellow-500 font-bold', logo: true },
    { name: 'amazon', className: 'text-black font-bold', logo: true },
    { name: 'Microsoft', className: 'text-green-600 font-bold', logo: true },
    { name: 'Walmart', className: 'text-blue-800 font-bold', logo: true },
    { name: 'verizon', className: 'text-black font-bold', logo: true },
  ],
  [
    { name: 'IBM', className: 'text-blue-500 font-bold', logo: true },
    { name: 'YouTube', className: 'text-red-600 font-bold', logo: true },
    { name: 'TATA', className: 'text-blue-900 font-bold', logo: true },
    { name: 'SAMSUNG', className: 'text-blue-700 font-bold', logo: true },
    { name: 'Uber', className: 'text-black font-bold', logo: true },
    { name: 'accenture', className: 'text-purple-700 font-bold', logo: true },
    { name: 'FedEx', className: 'text-purple-800 font-bold', logo: true },
  ],
  [
    { name: 'TikTok', className: 'text-black font-bold', logo: true },
  ],
];

const DemoCtaSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0a2a7e] to-[#0a1a3e] py-12 px-2 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Still Confused? Want to know more?</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            {/* Phone Input */}
            <div className="flex items-center bg-white rounded-md px-3 py-2 w-full sm:w-64 shadow">
              
              <span className="text-gray-700 mr-2">+91</span>
              <input
                type="tel"
                placeholder=""
                className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
            {/* Button */}
            <button className="bg-[#ffb200] hover:bg-[#ff9900] text-gray-900 font-semibold px-6 py-2 rounded-md shadow transition-colors w-full sm:w-auto">
              Book Demo Now
            </button>
          </div>
          <p className="text-sm text-white/80 max-w-md">
            Secure your spot quickly, seats are filling fast! Don’t miss out—enroll now and take the first step towards transforming your career!
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-white rounded-xl border border-orange-400 p-4 md:p-6 min-w-[320px] shadow-lg">
            <div className="text-xs font-semibold text-[#0a2a7e] mb-2 uppercase tracking-wide">
              LEARNYHIVE GRADUATES HAVE BEEN HIRED BY
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              {companies.map((row, i) => (
                <div key={i} className="flex flex-row flex-wrap gap-x-4 gap-y-2 justify-center items-center">
                  {row.map((company) => (
                    <span
                      key={company.name}
                      className={`flex items-center justify-center h-7 px-2 ${company.className}`}
                    >
                      {company.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCtaSection; 