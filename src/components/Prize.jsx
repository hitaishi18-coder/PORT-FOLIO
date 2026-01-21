export default function Prize() {
  const achievements = [
    {
      title: "3rd Position – “I Am Engineer” Event",
      organization: "Department Level Competition",
      description:
        "Secured 3rd position in the “I Am Engineer” technical event conducted by my department, demonstrating problem-solving and engineering skills.",
      year: "2022",
      link: "https://drive.google.com/file/d/10nTree9RV5btKTc7DkJE3dEBZuyOaceY/view", 
    },
    {
      title: "Certificate of Appreciation – Tachyon 5.0",
      organization: "Department Technical Fest",
      description:
        "Received a certificate of appreciation for designing and developing the registration website for the department fest “Tachyon 5.0”.",
      year: "2024",
      link: "https://drive.google.com/file/d/1wNuoN0vKJVSeLgWwVYOMR73_4eDH3kgX/view?usp=drivesdk",
    },
    {
      title: "Participant – HackerWrath 2.0",
      organization: "National Level Hackathon",
      description:
        "Participated in the national-level hackathon “HackerWrath 2.0”, collaborating in a competitive environment to build innovative solutions.",
      year: "2025",
      link: "https://drive.google.com/file/d/1S4NUBGrOJIYs-Wy3ORecHZCfUtCB80hb/view",
    },
    {
      title: "Event Host & Volunteer – DIECAI 2025",
      organization: "International Conference Event",
      description:
        "Hosted and volunteered at the DIECAI event. Also contributed by developing the official event website and supporting event coordination.",
      year: "2025",
      link: "https://drive.google.com/file/d/1HH5hH-SqDqmSWSNjyNOmUjzTIKo46jBf/view",
    },
  ];

  return (
    <section
      id="prizes"
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
        Awards & <span style={{ color: "#6366f1" }}>Certificates</span>
      </h2>

      {/* ACHIEVEMENTS GRID */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
      }}>
        {achievements.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "2.5rem",
              borderRadius: "24px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
            }}
          >
            {/* YEAR BADGE */}
            <div style={{
              display: "inline-block",
              padding: "0.25rem 0.75rem",
              borderRadius: "99px",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#6366f1",
              backgroundColor: "rgba(99, 102, 241, 0.1)",
              marginBottom: "1rem",
            }}>
              {item.year}
            </div>

            {/* CONTENT */}
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
              fontWeight: 600, 
              color: "#6366f1", 
              opacity: 0.8,
              marginBottom: "1rem",
            }}>
              {item.organization}
            </p>

            <p style={{ 
              fontSize: "0.9rem", 
              lineHeight: 1.6, 
              opacity: 0.7, 
              marginBottom: "2rem",
            }}>
              {item.description}
            </p>

            {/* LINK */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#6366f1",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                View Details ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
