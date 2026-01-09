export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr Rajandeep Singh",
      role: "Assistant Professor at Guru Nanak Dev University Amritsar",
      company: "University Department",
      message:
        "I'm incredibly proud of the resilience and dedication shown. Despite the pressure, the team demonstrated remarkable composure. Your ability to balance demanding academic schedules with ongoing responsibilities is truly commendable.",
      linkedin: "https://www.linkedin.com/in/dr-rajandeep-singh-64726955/",
      image: "/rajan.jpg",
    },
    {
      name: "Dr Kuldeep Singh",
      role: "Associate Professor, at Guru Nanak Dev University, Amritsar",
      company: "University Department",
      message:
        "Thank you Rohaz Bhalla Hitaishi Lohtia for developing website of DIECAI 2025 and assisting in this conference as volunteers. Best wishes for your bright future ahead 🙏",
      linkedin: "https://www.linkedin.com/in/dr-kuldeep-singh-27691b82/",
      image: "/kuldeep.jpg",
    },
    {
      name: "Rohaz Bhalla",
      role: "Teammate in Every Project",
      company: "University Department",
      message:
        "Working with Hitaishi Lohtia across HackerWrath, Diecai, and Tachyon has been truly special. Every time we came together, it felt less like collaboration and more like creating something meaningful. Hitaishi brings passion, clarity, and ownership to everything she does, and her presence elevates both the work and the people around her. I wholeheartedly recommend her to any team looking to build something beautiful and impactful.",
      linkedin: "https://www.linkedin.com/in/rohaz-bhalla/",
      image: "/rohaz.webp",
    },
  ];

  return (
    <section
      id="testimonials"
      className="
        relative
        py-32 px-6
        overflow-hidden
        bg-gradient-to-b from-pink-50 via-sky-50 to-emerald-50
      "
    >
      {/* BACKGROUND BLENDS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fbcfe8,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#bae6fd,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#bbf7d0,transparent_60%)]" />

      {/* TITLE */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-24">
        LinkedIn <span className="text-blue-500">Testimonials</span> 💬
      </h2>

      {/* TESTIMONIALS GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((item, index) => (
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
            {/* PROFILE */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-14 h-14
                  rounded-full
                  object-cover
                  border-2 border-blue-400
                "
              />

              <div>
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-blue-500 font-semibold">
                  {item.role}
                </p>
                <p className="text-xs text-gray-500">{item.company}</p>
              </div>
            </div>

            {/* MESSAGE */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              “{item.message}”
            </p>

            {/* LINK */}
            <a
              href={item.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-sm font-semibold
                text-blue-600
                hover:underline
              "
            >
              🔗 View on LinkedIn
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
