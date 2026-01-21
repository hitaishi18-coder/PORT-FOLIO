export default function Introduction() {
  return (
    <section
      id="introduction"
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "6rem 1.5rem",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      {/* ===== MAIN WRAPPER ===== */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">

        {/* ===== LEFT : PHOTO ===== */}
        <div className="relative shrink-0">
          <div style={{
            position: "absolute",
            inset: "-1rem",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #4f46e5, #8b5cf6)",
            opacity: 0.15,
            filter: "blur(20px)",
          }} />
          <img
            src="/hitaishi-image.jpeg"
            alt="Hitaishi"
            style={{
              position: "relative",
              width: "18rem",
              height: "18rem",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid rgba(99, 102, 241, 0.5)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>

        {/* ===== RIGHT : CONTENT ===== */}
        <div className="relative max-w-xl text-center md:text-left">
          {/* TOYS ARE HIDDEN TO MAINTAIN PROFESSIONAL LOOK */}
          
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            marginBottom: "0.75rem",
            fontFamily: "'Outfit', sans-serif",
          }}>
            Hi, I’m <span style={{ color: "#6366f1" }}>Hitaishi</span> 👋
          </h1>

          <h2 style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#8b5cf6",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}>
            Software Engineer & Full Stack Developer
          </h2>

          <p style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            opacity: 0.9,
          }}>
            I am a Software Engineer and Full Stack Developer with hands-on
            experience in building scalable web applications using the MERN stack.
            I have a strong foundation in Data Structures & Algorithms, Object-
            Oriented Programming, DBMS, and RESTful API development.
            <br /><br />
            I enjoy building real-world products such as e-commerce platforms,
            AI-powered applications, and backend services while focusing on clean
            code and performance.
          </p>

          {/* ===== BUTTONS ===== */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/resume.pdf"
              download
              style={{
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.4)",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "#4338ca";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "#4f46e5";
              }}
            >
              📄 Download Resume
            </a>

            <a
              href="https://github.com/hitaishi18-coder"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hitaishi-lohtia-99a219256/"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
