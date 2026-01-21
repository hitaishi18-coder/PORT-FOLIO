export default function Certifications() {
  const certifications = [
    {
      title: "Web Development with Node.js",
      issuer: "Professional Certification",
      link: "https://drive.google.com/file/d/1X_9u9O5ALdgfDreMIdajpK2YWDkUio_Z/view",
      tip: "Node.js, Express, REST APIs",
    },
    {
      title: "SQL & Database Management",
      issuer: "Professional Certification",
      link: "https://drive.google.com/file/d/16_FyZJa_OGUjM4H0fdD0qsBmco1Ay4Et/view?usp=drivesdk",
      tip: "SQL Queries, Joins, Normalization",
    },
    {
      title: "MERN Stack Development",
      issuer: "Professional Certification",
      link: "https://drive.google.com/file/d/1w6HYD7j-DyxL3Dv7slFM2yZvlApyyecw/view?usp=drivesdk",
      tip: "MongoDB, Express, React, Node.js",
    },
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Professional Certification",
      link: "https://drive.google.com/file/d/1jCvYEJM1h7IpfE8_tpscmoM6cxC_uMn7/view?usp=drivesdk",
      tip: "Arrays, Trees, Graphs, Optimization",
    },
    {
      title: "MERN Stack Bootcamp",
      issuer: "Intensive Training Program",
      link: "https://drive.google.com/file/d/14lmihWDg0PZerO3JbHl1gIkfnfVI0LDX/view",
      tip: "Full-Stack Projects & Industry Practices",
    },
  ];

  return (
    <section
      id="certifications"
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
        Professional <span style={{ color: "#6366f1" }}>Certifications</span>
      </h2>

      {/* TIMELINE CONTAINER */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {/* CENTER LINE */}
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.3), transparent)",
        }} className="hidden md:block" />

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                position: "relative",
              }}
            >
              {/* DOT */}
              <div style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#6366f1",
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
                zIndex: 20,
              }} className="hidden md:block" />

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  mdWidth: "45%",
                  padding: "2rem",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s ease",
                  display: "block",
                }}
                className="w-full md:w-[45%]"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                  e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                }}
              >
                <div style={{ 
                  fontSize: "0.75rem", 
                  fontWeight: 600, 
                  color: "#6366f1", 
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}>
                  {cert.issuer}
                </div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: 700, 
                  marginBottom: "1rem",
                  fontFamily: "'Outfit', sans-serif",
                }}>
                  {cert.title}
                </h3>
                <div style={{
                  fontSize: "0.875rem",
                  opacity: 0.7,
                  marginBottom: "1.5rem",
                  lineHeight: 1.5,
                }}>
                  Expertise: {cert.tip}
                </div>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#6366f1",
                }}>
                  View Certificate ↗
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
