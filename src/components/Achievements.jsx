export default function Achievements() {
  const achievements = [
    {
      title: "Engineering Contest",
      subtitle: "Second Runner-Up",
      description:
        "Designed a water level indicator project demonstrating practical engineering application.",
      image: "/image2.jpeg",
      label: "Silver Award",
    },
    {
      title: "College Fest Competition",
      subtitle: "1st Prize",
      description:
        "Developed a web platform for event registration and scheduling, securing first position.",
      image: "/fest.png",
      label: "Winner",
    },
    {
      title: "Hospitality Head",
      subtitle: "Department Leadership Role",
      description:
        "Served as the Hospitality Head in my department, managing guest coordination, logistics, and team operations during departmental events.",
      image: "/hospitality.png",
      label: "Leadership",
    },
    {
      title: "HackerWrath Hackathon",
      subtitle: "Top 5 Teams (Out of 60)",
      description:
        "Built a file sharing and real-time chat platform during the hackathon, competing among 60+ teams.",
      image: "/hack.png",
      label: "High Rank",
    },
    {
      title: "International Conference Organization",
      subtitle: "Volunteer & Technical Support",
      description:
        "Contributed to organizing an international conference (DIECAI) held in the department by volunteering and developing the official event website.",
      image: "/event.png",
      label: "Technical Support",
    },
  ];

  return (
    <section
      id="achievements"
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
        Honors & <span style={{ color: "#6366f1" }}>Recognition</span>
      </h2>

      {/* CONTENT GRID */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "6rem",
      }}>
        {achievements.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "3rem",
            }}
            className={index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}
          >
            {/* IMAGE SIDE */}
            <div 
              style={{ 
                flex: 1,
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              className="w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              <div style={{
                position: "absolute",
                top: "1.5rem",
                left: "1.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#6366f1",
                color: "white",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}>
                {item.label}
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div style={{ flex: 1 }} className="text-center md:text-left">
              <h3 style={{ 
                fontSize: "1.75rem", 
                fontWeight: 700, 
                marginBottom: "0.5rem",
                fontFamily: "'Outfit', sans-serif",
                color: "#6366f1",
              }}>
                {item.title}
              </h3>
              <div style={{ 
                fontSize: "1.125rem", 
                fontWeight: 600, 
                opacity: 0.8,
                marginBottom: "1.5rem",
              }}>
                {item.subtitle}
              </div>
              <p style={{ 
                fontSize: "1rem", 
                lineHeight: 1.7, 
                opacity: 0.7,
                maxWidth: "500px",
                margin: index % 2 === 0 ? "0" : "0 0 0 auto",
              }} className="md:mx-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
