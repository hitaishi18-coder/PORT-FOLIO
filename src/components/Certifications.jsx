export default function Certifications() {
  const certifications = [
    {
      title: "MERN Stack Development",
      issuer: "Professional Certification",
      link: "https://your-certificate-link.com",
      tip: "Covers MongoDB, Express, React, Node.js",
    },
    {
      title: "SQL & Database Management",
      issuer: "Professional Certification",
      link: "https://your-certificate-link.com",
      tip: "Relational databases, queries, normalization",
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Professional Certification",
      link: "https://your-certificate-link.com",
      tip: "DSA concepts using Java",
    },
  ];

  return (
    <section className="py-24 px-6">
      {/* SECTION TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-pink-400">Certifications</span>
      </h2>

      {/* CERTIFICATION CHIPS */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="relative group">
            {/* CLICKABLE CHIP */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block px-8 py-4 rounded-xl
                bg-pink-500/10
                border border-pink-400/30
                text-center
                transition-all duration-300
                hover:bg-pink-500/20
                hover:scale-105
                hover:shadow-lg
                hover:shadow-pink-500/30
              "
            >
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="text-sm text-pink-300 mt-1">
                {cert.issuer}
              </p>
            </a>

            {/* TOOLTIP */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2
                top-full mt-2
                px-4 py-2
                rounded-lg
                bg-black text-white text-sm
                opacity-0 scale-95
                pointer-events-none
                transition-all duration-300
                group-hover:opacity-100
                group-hover:scale-100
                z-10
                whitespace-nowrap
              "
            >
              {cert.tip}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
