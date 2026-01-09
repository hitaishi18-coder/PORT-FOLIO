export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Java", tip: "Data Structures, OOPs, problem solving", level: 3 },
        { name: "JavaScript", tip: "ES6+, frontend & backend development", level: 3 },
        { name: "Python", tip: "Scripting and automation basics", level: 2 },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React.js", tip: "Component-based UI development", level: 3 },
        { name: "Node.js", tip: "Backend services and APIs", level: 3 },
        { name: "Express.js", tip: "RESTful API development", level: 2 },
        { name: "MongoDB", tip: "NoSQL database design", level: 2 },
        { name: "Tailwind CSS", tip: "Utility-first modern UI styling", level: 3 },
        { name: "Bootstrap", tip: "Responsive UI framework", level: 2 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", tip: "Relational database management", level: 2 },
        { name: "MongoDB", tip: "Document-based database", level: 2 },
      ],
    },
    {
      category: "AI & Automation",
      items: [
        { name: "LangChain", tip: "LLM orchestration and pipelines", level: 2 },
        { name: "LangFlow", tip: "Visual AI workflow builder", level: 2 },
        { name: "n8n", tip: "Workflow automation tool", level: 2 },
      ],
    },
    {
      category: "Core CS",
      items: [
        { name: "DSA", tip: "Problem solving and algorithms", level: 3 },
        { name: "OOPs", tip: "Object-oriented programming principles", level: 3 },
        { name: "DBMS", tip: "Database concepts and normalization", level: 2 },
        { name: "Operating Systems", tip: "Processes, memory, scheduling", level: 2 },
        { name: "Computer Networks", tip: "Networking fundamentals", level: 2 },
        { name: "SDLC", tip: "Software development lifecycle", level: 2 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", tip: "Version control system", level: 3 },
        { name: "GitHub", tip: "Code hosting and collaboration", level: 3 },
        { name: "Postman", tip: "API testing tool", level: 2 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative
        py-32 px-6
        overflow-hidden

        /* BLUE–PINK–GREEN BASE */
        bg-gradient-to-b from-sky-50 via-blue-50 to-emerald-50
      "
    >
      {/* ===== SOFT COLOR BLENDS ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#bae6fd,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fbcfe8,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#bbf7d0,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#c7d2fe,transparent_60%)]" />

      {/* ===== TITLE ===== */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-24">
        My <span className="text-pink-400">Skills</span> ⭐
      </h2>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-28">
        {skills.map((group, index) => (
          <div key={index} className="text-center">
            
            {/* CATEGORY */}
            <h3 className="inline-flex items-center gap-2 mb-10 px-6 py-2 text-xl md:text-2xl font-bold rounded-full bg-white/70 text-blue-500 shadow-md backdrop-blur">
              🧭 {group.category}
            </h3>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center gap-5">
              {group.items.map((skill, i) => (
                <div key={i} className="relative group">
                  
                  {/* SKILL CARD */}
                  <div
                    className="
                      px-6 py-4
                      rounded-2xl
                      bg-white/70
                      backdrop-blur-md
                      border border-white/60
                      font-semibold text-gray-800
                      shadow-md
                      cursor-pointer
                      transition
                      hover:scale-110
                      hover:-translate-y-1
                      hover:bg-gradient-to-r hover:from-sky-100 hover:to-emerald-100
                    "
                  >
                    {skill.name}

                    {/* MANUAL STARS */}
                    <div className="mt-2 flex justify-center gap-1 text-sm">
                      {[1, 2, 3].map((n) => (
                        <span key={n}>
                          {n <= skill.level ? "⭐" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TOOLTIP */}
                  <div
                    className="
                      absolute left-1/2 -translate-x-1/2
                      top-full mt-3
                      px-4 py-2
                      rounded-xl
                      bg-gradient-to-r from-sky-400 to-emerald-400
                      text-white text-sm
                      opacity-0 scale-90
                      pointer-events-none
                      transition
                      group-hover:opacity-100
                      group-hover:scale-100
                      whitespace-nowrap
                      shadow-lg
                    "
                  >
                    {skill.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
