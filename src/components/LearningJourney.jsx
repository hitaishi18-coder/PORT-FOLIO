export default function LearningJourney() {
  const journey = [
    {
      year: "2022",
      title: "Started Programming with Python",
      description:
        "Began my programming journey by learning Python, focusing on syntax, basic logic, and problem-solving fundamentals.",
    },
    {
      year: "2023",
      title: "Learning C Programming",
      description:
        "Learned the C programming language, understanding core concepts such as memory management and basic algorithms.",
    },
    {
      year: "2023",
      title: "Strengthening Programming Fundamentals",
      description:
        "Although I did not work extensively on C projects, this phase helped strengthen my understanding of low-level programming concepts.",
    },
    {
      year: "2024",
      title: "Introduction to Web Development",
      description:
        "Started web development with HTML, CSS, and JavaScript, building responsive and interactive web interfaces.",
    },
    {
      year: "2024",
      title: "Backend Development with Java & Node.js",
      description:
        "Learned Java and Node.js, explored backend concepts, APIs, and basic database integration.",
    },
    {
      year: "2024",
      title: "Real-World Project Experience",
      description:
        "Built a website for my department’s college fest, gaining hands-on experience in real-world development and collaboration.",
    },
    {
      year: "2025",
      title: "Data Structures & Algorithms",
      description:
        "Focused on Data Structures and Algorithms to improve problem-solving ability and strengthen core computer science fundamentals.",
    },
    {
      year: "2025",
      title: "Full Stack MERN Development",
      description:
        "Worked extensively with the MERN stack to build full stack applications with authentication, CRUD operations, and REST APIs.",
    },
    {
      year: "2025",
      title: "AI Automation & Intelligent Systems",
      description:
        "Explored AI automation tools and frameworks including LangChain, LangFlow, and n8n to build intelligent workflows and applications.",
    },
    {
      year: "2025",
      title: "DIECAI – Concept & System Design",
      description:
        "Started working on DIECAI, a conceptual AI-driven system focused on decision intelligence, structured thinking, and system-level design.",
    },
  ];

  return (
    <section
      id="learning"
      className="
        relative
        py-32 px-6
        overflow-hidden

        /* BASE BLEND */
        bg-gradient-to-b from-yellow-50 via-pink-50 to-sky-50
      "
    >
      {/* ===== COLOR BLEND LAYERS ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fbcfe8,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#bae6fd,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#bbf7d0,transparent_65%)]" />

      {/* ===== HEADING ===== */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-24">
        My <span className="text-pink-400">Learning Journey</span> ✨
      </h2>

      {/* ===== TIMELINE ===== */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-16">
        {journey.map((item, index) => (
          <div key={index} className="relative pl-16 group">
            
            {/* DOT */}
            <div
              className="
                absolute left-2 top-7
                w-6 h-6
                rounded-full
                bg-gradient-to-r from-pink-400 via-yellow-300 to-sky-300
                shadow-md
                group-hover:scale-110
                transition
              "
            />

            {/* LINE */}
            {index !== journey.length - 1 && (
              <div
                className="
                  absolute left-[17px] top-14
                  h-full w-[4px]
                  rounded-full
                  bg-gradient-to-b from-pink-300 via-yellow-200 to-sky-300
                  opacity-70
                "
              />
            )}

            {/* CARD */}
            <div
              className="
                relative
                p-8
                rounded-[2rem]
                bg-white/60
                backdrop-blur-lg
                border border-white/40
                shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                transition
                group-hover:-translate-y-1
                group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
              "
            >
              <span className="inline-block mb-3 px-4 py-1 text-xs font-bold rounded-full bg-pink-100 text-pink-500">
                {item.year}
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
