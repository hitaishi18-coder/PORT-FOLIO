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
      style={{
        position: "relative",
        padding: "8rem 1.5rem",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      {/* HEADING */}
      <h2 style={{
        position: "relative",
        zIndex: 10,
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 800,
        textAlign: "center",
        marginBottom: "6rem",
        fontFamily: "'Outfit', sans-serif",
      }}>
        Learning <span style={{ color: "#6366f1" }}>Evolution</span>
      </h2>

      {/* TIMELINE */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "800px",
        margin: "0 auto",
      }}>
        {/* Continuous Line */}
        <div style={{
          position: "absolute",
          left: "20px",
          top: "30px",
          bottom: "30px",
          width: "2px",
          backgroundColor: "#6366f1",
          opacity: 0.2,
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {journey.map((item, index) => (
            <div key={index} style={{ position: "relative", paddingLeft: "5rem" }} className="group">
              
              {/* HUB DOT */}
              <div
                style={{
                  position: "absolute",
                  left: "9px",
                  top: "32px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#09090b",
                  border: "2px solid #6366f1",
                  boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)",
                  transition: "all 0.3s ease",
                  zIndex: 10,
                }}
                className="group-hover:scale-125"
              />

              {/* CARD */}
              <div
                style={{
                  padding: "1.5rem 2rem",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.2)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{ 
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "99px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#6366f1",
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  marginBottom: "0.75rem",
                }}>
                  {item.year}
                </div>

                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: 700, 
                  marginBottom: "0.5rem",
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {item.title}
                </h3>

                <p style={{ 
                  fontSize: "0.875rem", 
                  lineHeight: 1.6, 
                  opacity: 0.7,
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
