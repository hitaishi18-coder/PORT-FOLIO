import React from 'react';

export default function Footer({ dark }) {
  // Social Links Configuration
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hitaishi-lohtia-99a219256/",
      color: "hover:text-blue-600",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/hitaishi18-coder",
      color: "hover:text-gray-800 dark:hover:text-white",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/hitaishi18", // Add your link
      color: "hover:text-pink-600",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "hitaishi.8.8.8@gmail.com",
      color: "hover:text-red-500",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm12.008 9.071h-13.326l3.855-4.813 2.908 3.435 2.827-3.411 3.736 4.789zm-13.318-15.011l6.636 7.848 6.746-7.848h-13.382zm12.067 9.516l4.62 5.494v-11.17l-4.62 5.676z" />
        </svg>
      ),
    },
    {
      name: "Contact",
      url: "tel:9988467270", // Add your number
      color: "hover:text-green-600",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20.487 17.14c.772.956.285 2.86-.714 3.757-1.129 1.016-2.585.961-3.66.427-4.321-2.149-7.536-5.365-9.685-9.686-.534-1.074-.589-2.531.427-3.66.897-.999 2.801-1.486 3.757-.714 1.074.868.805 2.628-.186 3.619-.481.481-.979.907-1.493 1.285 1.144 2.455 3.125 4.436 5.58 5.58.378-.514.805-1.012 1.285-1.493.991-.991 2.751-1.26 3.619-.186zm-18.487-15.14c.783-.783 2.05-.783 2.833 0l1.968 1.968c.783.783.783 2.05 0 2.833l-1.968 1.968c-.783.783-2.05.783-2.833 0l-1.968-1.968c-.783-.783-.783-2.05 0-2.833l1.968-1.968z"/>
          {/* Simple phone path approximation or replacing with solid icon */}
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative overflow-hidden">

      {/* ===== WAVE DIVIDER ===== */}
      <svg
        className="absolute top-0 left-0 w-full z-0"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,90 480,10 720,30 960,50 1200,20 1440,40 L1440,0 L0,0 Z"
          fill={dark ? "#0f172a" : "#e0f2fe"}
        />
      </svg>

      {/* ===== FLOATING CARTOONS (Big Size Updated) ===== */}
      
      {/* 1. The Bag - Far Left */}
      <img
        src="/Bag.png"
        alt="Bag"
        // Increased from w-10/14 to w-16/24
        className="absolute left-[5%] top-8 w-16 md:w-24 animate-floatSlow pointer-events-none z-30"
      />

      {/* 2. Bandar (Boots) - Left Center */}
      <img
        src="/bandar.png"
        alt="Bandar"
        // Increased to w-20/32 (Big visibility)
        className="absolute left-[20%] top-16 w-20 md:w-32 animate-floatMedium pointer-events-none z-30"
      />

       {/* 3. Swiper - Right Center */}
      <img
        src="/swiper.png"
        alt="Swiper"
        // Increased to w-20/32
        className="absolute right-[25%] top-10 w-20 md:w-32 animate-floatFast pointer-events-none z-30"
      />

      {/* 4. Kuta - Far Right */}
       <img
        src="/kuta.png"
        alt="Kuta"
        // Increased to w-16/24
        className="absolute right-[5%] top-20 w-16 md:w-24 animate-floatMedium pointer-events-none z-30"
      />

      {/* ===== FOOTER CONTENT ===== */}
      <div
        className={`
          relative z-20 
          pt-32 pb-12 px-6
          border-t
          ${
            dark
              ? "bg-slate-900 text-white border-white/10"
              : "bg-gradient-to-b from-sky-50 via-blue-50 to-emerald-50 text-gray-900 border-black/10"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* LEFT: Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-base opacity-80 font-bold">
              © {new Date().getFullYear()}{" "}
              <span className="font-extrabold text-pink-500 text-lg">
                Hitaishi Lohtia
              </span>
            </p>
            <p className="text-xs opacity-60 font-semibold mt-1">
              Built with React & Dora Magic ✨
            </p>
          </div>

          {/* CENTER: Dora Message */}
          <div className="text-center">
            <p className="text-lg font-extrabold text-pink-500 mb-1">
              Dora says Bye 👋
            </p>
            <span className="text-sm font-bold opacity-70">
              Thanks for visiting my world 🌍
            </span>
          </div>

          {/* RIGHT: Social Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className={`
                  p-3 rounded-full shadow-lg transition-transform transform hover:scale-110
                  ${dark ? "bg-slate-800 text-white" : "bg-white text-gray-700"}
                  ${item.color}
                `}
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ===== FLOAT ANIMATIONS ===== */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes floatMedium {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes floatFast {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
        .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-floatMedium { animation: floatMedium 5s ease-in-out infinite; }
        .animate-floatFast { animation: floatFast 4s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}