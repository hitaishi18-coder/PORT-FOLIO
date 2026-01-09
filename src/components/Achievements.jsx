export default function Achievements() {
  const achievements = [
     {
      title: "Engineering Contest",
      subtitle: "Second Runner-Up",
      description:
        "Designed a water level indicator project demonstrating practical engineering application.",
      image: "/src/assets/achievements/engineering.png",
      emoji: "🥈",
    },
    {
      title: "College Fest Competition",
      subtitle: "1st Prize",
      description:
        "Developed a web platform for event registration and scheduling, securing first position.",
      image: "/src/assets/achievements/collegefest.png",
      emoji: "🥇",
    },
    {
      title: "Engineering Contest",
      subtitle: "Second Runner-Up",
      description:
        "Designed a water level indicator project demonstrating practical engineering application.",
      image: "/src/assets/achievements/engineering.png",
      emoji: "🥈",
    },
       {
      title: "HackerWrath Hackathon",
      subtitle: "Top 5 Teams (Out of 60)",
      description:
        "Built a file sharing and real-time chat platform during the hackathon, competing among 60+ teams.",
      image: "/src/assets/achievements/hackathon.png",
      emoji: "🏆",
    }
  ];

  return (
    <section
      id="achievements"
      className="
        relative
        py-32 px-6
        overflow-hidden
        bg-gradient-to-b from-sky-50 via-blue-50 to-emerald-50
      "
    >
      {/* ===== BACKGROUND BLENDS ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#bae6fd,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fbcfe8,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#bbf7d0,transparent_60%)]" />

      {/* ===== TITLE ===== */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-24">
        Achievements & <span className="text-pink-400">Prizes</span> 🏅
      </h2>

      {/* ===== TROPHY TRAIL ===== */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-20">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col md:flex-row items-center gap-10
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            `}
          >
            {/* ===== IMAGE SIDE ===== */}
            <div className="relative w-full md:w-1/2 group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-300 via-pink-300 to-emerald-300 blur-xl opacity-60 group-hover:opacity-90 transition"></div>

              <img
                src={item.image}
                alt={item.title}
                className="
                  relative
                  w-full h-56 md:h-64
                  object-cover
                  rounded-3xl
                  shadow-lg
                  transition
                  group-hover:scale-105
                "
              />

              {/* FLOATING EMOJI */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
                {item.emoji}
              </div>
            </div>

            {/* ===== CONTENT SIDE ===== */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-pink-400 font-semibold mb-4">
                {item.subtitle}
              </p>

              <p className="text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
                {item.description}
              </p>

              {/* BADGE */}
              <div className="inline-block mt-6 px-5 py-2 rounded-full bg-gradient-to-r from-sky-200 to-emerald-200 text-gray-800 font-semibold shadow-md">
                🎉 Achievement Unlocked
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== SOFT FLOAT ANIMATION ===== */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
