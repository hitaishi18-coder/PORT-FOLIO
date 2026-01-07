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
    <section id="learning" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-20">
        My <span className="text-pink-400">Learning Journey</span>
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {journey.map((item, index) => (
          <div
            key={index}
            className="relative pl-10 transition-all duration-300 hover:translate-x-1"
          >
            {/* DOT */}
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-pink-500"></div>

            {/* LINE */}
            {index !== journey.length - 1 && (
              <div className="absolute left-[7px] top-6 h-full w-px bg-pink-400/40"></div>
            )}

            {/* CONTENT */}
            <div className="p-6 rounded-xl bg-pink-500/10 border border-pink-400/30 hover:bg-pink-500/20 transition">
              <span className="text-sm font-semibold text-pink-300">
                {item.year}
              </span>

              <h3 className="text-xl font-semibold mt-2 mb-2">
                {item.title}
              </h3>

              <p className="text-sm opacity-80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
