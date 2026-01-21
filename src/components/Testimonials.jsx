export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr Rajandeep Singh",
      role: "Assistant Professor at Guru Nanak Dev University Amritsar",
      company: "University Department",
      message:
        "I'm incredibly proud of the resilience and dedication shown. Despite the pressure, the team demonstrated remarkable composure. Your ability to balance demanding academic schedules with ongoing responsibilities is truly commendable.",
      linkedin: "https://www.linkedin.com/in/dr-rajandeep-singh-64726955/",
      image: "/rajan.jpg",
    },
    {
      name: "Dr Kuldeep Singh",
      role: "Associate Professor, at Guru Nanak Dev University, Amritsar",
      company: "University Department",
      message:
        "Thank you Rohaz Bhalla Hitaishi Lohtia for developing website of DIECAI 2025 and assisting in this conference as volunteers. Best wishes for your bright future ahead 🙏",
      linkedin: "https://www.linkedin.com/in/dr-kuldeep-singh-27691b82/",
      image: "/kuldeep.jpg",
    },
    {
      name: "Rohaz Bhalla",
      role: "Teammate in Every Project",
      company: "University Department",
      message:
        "Working with Hitaishi Lohtia across HackerWrath, Diecai, and Tachyon has been truly special. Every time we came together, it felt less like collaboration and more like creating something meaningful. Hitaishi brings passion, clarity, and ownership to everything she does, and her presence elevates both the work and the people around her.",
      linkedin: "https://www.linkedin.com/in/rohaz-bhalla/",
      image: "/rohaz.webp",
    },
  ];

  return (
    <section
      id="testimonials"
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
        Professional <span style={{ color: "#6366f1" }}>Endorsements</span>
      </h2>

      {/* TESTIMONIALS GRID */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
      }}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "2.5rem",
              borderRadius: "24px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* MESSAGE */}
            <div style={{ flex: 1, marginBottom: "2rem" }}>
              <div style={{ fontSize: "3rem", lineHeight: 1, opacity: 0.1, marginBottom: "-1.5rem" }}>“</div>
              <p style={{ 
                fontSize: "1rem", 
                lineHeight: 1.7, 
                opacity: 0.7, 
                fontStyle: "italic",
                position: "relative",
                zIndex: 1,
              }}>
                {item.message}
              </p>
            </div>

            {/* PROFILE */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(99, 102, 241, 0.3)",
                }}
              />

              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>{item.name}</h3>
                <p style={{ fontSize: "0.75rem", color: "#6366f1", fontWeight: 600 }}>
                  {item.role}
                </p>
                <p style={{ fontSize: "0.7rem", opacity: 0.5 }}>{item.company}</p>
              </div>
            </div>

            {/* LINK */}
            <a
              href={item.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "1.5rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#6366f1",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View Profile ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
