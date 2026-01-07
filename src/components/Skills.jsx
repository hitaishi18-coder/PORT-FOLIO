export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Java", tip: "Data Structures, OOPs, problem solving" },
        { name: "JavaScript", tip: "ES6+, frontend & backend development" },
        { name: "Python", tip: "Scripting and automation basics" },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React.js", tip: "Component-based UI development" },
        { name: "Node.js", tip: "Backend services and APIs" },
        { name: "Express.js", tip: "RESTful API development" },
        { name: "MongoDB", tip: "NoSQL database design" },
        { name: "Tailwind CSS", tip: "Utility-first modern UI styling" },
        { name: "Bootstrap", tip: "Responsive UI framework" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", tip: "Relational database management" },
        { name: "MongoDB", tip: "Document-based database" },
      ],
    },
    {
      category: "AI & Automation",
      items: [
        { name: "LangChain", tip: "LLM orchestration and pipelines" },
        { name: "LangFlow", tip: "Visual AI workflow builder" },
        { name: "n8n", tip: "Workflow automation tool" },
      ],
    },
    {
      category: "Core CS",
      items: [
        { name: "DSA", tip: "Problem solving and algorithms" },
        { name: "OOPs", tip: "Object-oriented programming principles" },
        { name: "DBMS", tip: "Database concepts and normalization" },
        { name: "Operating Systems", tip: "Processes, memory, scheduling" },
        { name: "Computer Networks", tip: "Networking fundamentals" },
        { name: "SDLC", tip: "Software development lifecycle" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", tip: "Version control system" },
        { name: "GitHub", tip: "Code hosting and collaboration" },
        { name: "Postman", tip: "API testing tool" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      {/* SECTION TITLE */}
      <h2 className="text-4xl font-bold text-center mb-20">
        My <span className="text-pink-400">Skills</span>
      </h2>

      {/* CENTERED CONTAINER */}
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-20">
        {skills.map((group, index) => (
          <div
            key={index}
            className="w-full text-center transition-all duration-700 ease-out hover:-translate-y-1"
          >
            {/* CATEGORY TITLE */}
            <h3 className="text-2xl font-semibold mb-8 text-pink-300">
              {group.category}
            </h3>

            {/* SKILLS ROW */}
            <div className="flex flex-wrap justify-center gap-4">
              {group.items.map((skill, i) => (
                <div key={i} className="relative group">
                  <div className="px-6 py-3 rounded-xl bg-pink-500/10 border border-pink-400/30 cursor-pointer transition-all duration-300 hover:bg-pink-500/20 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30">
                    {skill.name}
                  </div>

                  {/* TOOLTIP */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-2 rounded-lg bg-black text-white text-sm opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-10 whitespace-nowrap">
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
