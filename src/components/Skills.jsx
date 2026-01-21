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
      style={{
        position: "relative",
        padding: "8rem 1.5rem",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      {/* ===== TITLE ===== */}
      <h2 style={{
        position: "relative",
        zIndex: 10,
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 800,
        textAlign: "center",
        marginBottom: "6rem",
        fontFamily: "'Outfit', sans-serif",
      }}>
        Technical <span style={{ color: "#6366f1" }}>Expertise</span>
      </h2>

      {/* ===== CONTENT ===== */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
      }}>
        {skills.map((group, index) => (
          <div key={index}>
            <h3 style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "2rem",
              paddingBottom: "0.5rem",
              borderBottom: "2px solid rgba(99, 102, 241, 0.2)",
              display: "inline-block",
              color: "#6366f1",
            }}>
              {group.category}
            </h3>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}>
              {group.items.map((skill, i) => (
                <div 
                  key={i} 
                  className="group"
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(8px)",
                      fontWeight: 600,
                      cursor: "help",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.5)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {skill.name}
                    
                    {/* Minimal Level Indicator */}
                    <div style={{
                      marginTop: "0.5rem",
                      height: "3px",
                      width: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}>
                      <div style={{
                        height: "100%",
                        width: `${(skill.level / 3) * 100}%`,
                        backgroundColor: "#6366f1",
                        borderRadius: "2px",
                      }} />
                    </div>
                  </div>

                  {/* TOOLTIP */}
                  <div
                    className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
                    style={{
                      position: "absolute",
                      bottom: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      marginBottom: "1rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      backgroundColor: "#1e1e2e",
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      pointerEvents: "none",
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                      zIndex: 20,
                    }}
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
