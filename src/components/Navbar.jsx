export default function Navbar({ dark, setDark }) {
  return (
    <nav
      style={{
        sticky: "top",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 2rem",
        backgroundColor: dark ? "rgba(9, 9, 11, 0.8)" : "rgba(248, 250, 252, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: dark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      {/* LEFT : AVATAR + NAME */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <img
          src="/hitaishi-image.jpg"
          alt="Hitaishi"
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: `2px solid ${dark ? "#6366f1" : "#4f46e5"}`,
            objectFit: "cover",
          }}
        />
        <span style={{ 
          fontSize: "1.25rem", 
          fontWeight: 700, 
          fontFamily: "'Outfit', sans-serif",
          color: dark ? "#ffffff" : "#0f172a",
        }}>
          Hitaishi
        </span>
      </div>

      {/* RIGHT : LINKS & TOGGLE */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div
          className="hidden md:flex"
          style={{
            gap: "1.5rem",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          {["Skills", "Projects", "Certifications", "Achievements"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: dark ? "#94a3b8" : "#475569",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.color = dark ? "#ffffff" : "#0f172a"}
              onMouseOut={(e) => e.currentTarget.style.color = dark ? "#94a3b8" : "#475569"}
            >
              {item}
            </a>
          ))}
        </div>

        {/* DARK MODE TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          style={{
            background: dark ? "#27272a" : "#e2e8f0",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "1.2rem",
          }}
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
