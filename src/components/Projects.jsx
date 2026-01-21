export default function Projects() {
  const projects = [
    {
      title: "MindSync – AI Neuro-Productivity System",
      tech: "MERN • AI • Computer Vision",
      image: "/mind.png",
      live: "https://mind-sync-mu.vercel.app",
      github: "https://github.com/hitaishi18-coder/mind-sync",
      isGraphic: false,
    },
    {
      title: "DIECAI – Decision Intelligence Engine",
      tech: "System Design • AI Concepts",
      image: "/diecai.png",
      live: "https://www.diecai2025.com/",
      github: "https://github.com/Rohaz-bhalla/DIECAI-GNDU",
      isGraphic: false,
    },
    {
      title: "ShopEase – Smart AI Assistant",
      tech: "MERN • AI Concept • LLM API",
      image: "/shopease.png",
      live: "https://shopease-ai-support.vercel.app/",
      github: "https://github.com/hitaishi18-coder/shopease-ai-support",
      isGraphic: false,
    },
    {
      title: "AI-Powered E-Commerce Website",
      tech: "Node js • Javascript • AI integration",
      image: "/ecommerce.png",
      live: "https://project-ecommerce-shopping-website-1.onrender.com/",
      github:
        "https://github.com/hitaishi18-coder/project-Ecommerce-shopping-website",
      isGraphic: false,
    },

    /* 🎨 GRAPHIC DESIGN PROJECTS */
    {
      title: "Graphic Design – Poster & Creative Design",
      tech: "Graphic Design • Photoshop • Canva",
      image: "/billboard.png",
      isGraphic: true,
    },
    {
      title: "Graphic Design – Social Media Creatives",
      tech: "Graphic Design • Branding • Visual Design",
      image: "/advertisement.png",
      isGraphic: true,
    },
    {
      title: "n8n Daily Joke Notifier – Workflow Automation",
      tech: "n8n • APIs • Twilio • Automation",
      image: "/n8n-workflow.png",
      live: "https://n8n-latest-qhs9.onrender.com",
      github: "https://github.com/hitaishi18-coder/n8n-daily-tech-notifier",
      isGraphic: false,
    },
  ];

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "8rem 1.5rem",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      {/* TITLE */}
      <h2 style={{
        position: "relative",
        zIndex: 10,
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 800,
        textAlign: "center",
        marginBottom: "6rem",
        fontFamily: "'Outfit', sans-serif",
      }}>
        Featured <span style={{ color: "#6366f1" }}>Projects</span>
      </h2>

      {/* PROJECT GRID */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="group"
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
              e.currentTarget.style.boxShadow = "0 30px 60px -12px rgba(0, 0, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* IMAGE CONTAINER */}
            <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                className="group-hover:scale-110"
              />
              
              {/* OVERLAY */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(9, 9, 11, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  backdropFilter: "blur(4px)",
                }}
                className="group-hover:opacity-100"
              >
                {!project.isGraphic && (
                  <>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.6rem 1.25rem",
                        borderRadius: "9999px",
                        backgroundColor: "#6366f1",
                        color: "#ffffff",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "transform 0.2s",
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                      Live Preview 🚀
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.6rem 1.25rem",
                        borderRadius: "9999px",
                        backgroundColor: "white",
                        color: "#18181b",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "transform 0.2s",
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                      Source Code 💻
                    </a>
                  </>
                )}
                {project.isGraphic && (
                  <span style={{ color: "white", fontWeight: 600 }}>Creative Portfolio Piece</span>
                )}
              </div>
            </div>

            {/* INFO */}
            <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ 
                fontSize: "1.25rem", 
                fontWeight: 700, 
                marginBottom: "0.5rem",
                color: "inherit",
              }}>
                {project.title}
              </h3>

              <p style={{ 
                fontSize: "0.8125rem", 
                fontWeight: 600, 
                color: "#6366f1",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: "auto",
              }}>
                {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
