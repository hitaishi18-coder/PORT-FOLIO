export default function Certifications() {
  const certifications = [
    {
      title: "MERN Stack Development",
      issuer: "Professional Certification",
      link: "https://your-certificate-link.com",
      tip: "MongoDB, Express, React & Node.js",
    },
    {
      title: "SQL & Database Management",
      issuer: "Professional Certification",
      link: "https://your-certificate-link.com",
      tip: "Queries, joins, normalization",
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Professional Certification",
      link: "https://your-certificate-link.com",
      tip: "DSA concepts using Java",
    },
  ];

  return (
    <section
      id="certifications"
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
        My <span className="text-pink-400">Certifications</span> 🎓
      </h2>

      {/* ===== PATH CONTAINER ===== */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-20">

        {/* ===== ANIMATED PATH ===== */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[4px] bg-gradient-to-b from-sky-300 via-pink-300 to-emerald-300 rounded-full opacity-60 animate-pulse"></div>

        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`
              relative
              flex
              ${index % 2 === 0 ? "justify-start" : "justify-end"}
            `}
          >
            {/* ===== PATH DOT ===== */}
            <div
              className="
                absolute
                left-1/2 -translate-x-1/2
                top-1/2 -translate-y-1/2
                w-6 h-6
                rounded-full
                bg-gradient-to-r from-sky-400 to-pink-400
                shadow-lg
                animate-bounce
              "
            >
              <span className="absolute inset-0 flex items-center justify-center text-sm">
                🏅
              </span>
            </div>

            {/* ===== CERT CARD ===== */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-full sm:w-[420px]
                p-7
                rounded-[2rem]
                bg-white/70
                backdrop-blur-md
                border border-white/60
                shadow-lg
                transition
                hover:-translate-y-2
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
              "
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                📜 {cert.title}
              </h3>

              <p className="text-sm text-blue-500 font-semibold mb-3">
                {cert.issuer}
              </p>

              <div
                className="
                  inline-block
                  px-4 py-1
                  rounded-full
                  text-xs
                  bg-gradient-to-r from-sky-200 to-emerald-200
                  text-gray-800
                  font-semibold
                "
              >
                {cert.tip}
              </div>

              <p className="mt-4 text-sm text-pink-400 font-semibold">
                🔗 Click to view certificate
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
