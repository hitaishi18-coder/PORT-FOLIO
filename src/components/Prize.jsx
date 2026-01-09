export default function Prize() {
  const achievements = [
    {
      title: "3rd Position – “I Am Engineer” Event",
      organization: "Department Level Competition",
      description:
        "Secured 3rd position in the “I Am Engineer” technical event conducted by my department, demonstrating problem-solving and engineering skills.",
      year: "2022",
      icon: "🥉",
      link: "https://drive.google.com/file/d/10nTree9RV5btKTc7DkJE3dEBZuyOaceY/view", 
    },
    {
      title: "Certificate of Appreciation – Tachyon 5.0",
      organization: "Department Technical Fest",
      description:
        "Received a certificate of appreciation for designing and developing the registration website for the department fest “Tachyon 5.0”.",
      year: "2024",
      icon: "🏆",
      link: "https://drive.google.com/file/d/1wNuoN0vKJVSeLgWwVYOMR73_4eDH3kgX/view?usp=drivesdk",
    },
    {
      title: "Participant – HackerWrath 2.0",
      organization: "National Level Hackathon",
      description:
        "Participated in the national-level hackathon “HackerWrath 2.0”, collaborating in a competitive environment to build innovative solutions.",
      year: "2025",
      icon: "💻",
      link: "https://drive.google.com/file/d/1S4NUBGrOJIYs-Wy3ORecHZCfUtCB80hb/view",
    },
    {
      title: "Event Host & Volunteer – DIECAI 2025",
      organization: "International Conference Event",
      description:
        "Hosted and volunteered at the DIECAI event. Also contributed by developing the official event website and supporting event coordination.",
      year: "2025",
      icon: "🎤",
      link: "https://drive.google.com/file/d/1HH5hH-SqDqmSWSNjyNOmUjzTIKo46jBf/view",
    },
  ];

  return (
    <section
      id="achievements"
      className="
        relative
        py-32 px-6
        overflow-hidden
        bg-gradient-to-b from-emerald-50 via-sky-50 to-pink-50
      "
    >
      {/* BACKGROUND BLENDS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#bbf7d0,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#bae6fd,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#fbcfe8,transparent_60%)]" />

      {/* TITLE */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-24">
        Certifications of <span className="text-pink-400">Appreciation</span> 🏅
      </h2>

      {/* ACHIEVEMENTS GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 gap-12">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="
              relative
              p-8
              rounded-[2rem]
              bg-white/70
              backdrop-blur-md
              border border-white/60
              shadow-lg
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
            "
          >
            {/* ICON */}
            <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-gradient-to-r from-sky-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg">
              {item.icon}
            </div>

            {/* CONTENT */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-blue-500 font-semibold mb-3">
              {item.organization} • {item.year}
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* LINK */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-2
                  text-sm
                  font-semibold
                  text-pink-500
                  hover:underline
                "
              >
                🔗 View Certificate / Details
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
