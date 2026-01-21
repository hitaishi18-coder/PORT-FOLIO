export default function Landing({ onEnter }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#020617",
        position: "relative",
        padding: "0 1.5rem",
        color: "#f8fafc",
      }}
    >
      {/* PROFESSIONAL GLOW BACKGROUND */}
      <div 
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "40%",
          height: "40%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="relative z-10 w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* LEFT IMAGE CONTAINER */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-start">
          <div style={{ position: "relative" }}>
             {/* Subtle frame for the image to make it look intentional */}
             <div style={{
               position: "absolute",
               inset: "-10px",
               border: "1px solid rgba(99, 102, 241, 0.2)",
               borderRadius: "24px",
               pointerEvents: "none",
             }} />
            <img
              src="/dora.jpg"
              alt="Welcome"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="w-full lg:flex-1 text-center lg:text-left">
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              background: "linear-gradient(to bottom right, #ffffff 60%, #94a3b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <div style={{ opacity: 0, transform: "translateY(20px)", animation: "fadeUp 0.8s ease forwards", animationDelay: "0.2s" }}>
              Welcome to
            </div>
            <div style={{ opacity: 0, transform: "translateY(20px)", animation: "fadeUp 0.8s ease forwards", animationDelay: "0.4s", color: "#6366f1" }}>
              Hitaishi’s World
            </div>
          </h1>
          
          <p style={{
            fontSize: "1.125rem",
            color: "#94a3b8",
            marginBottom: "2.5rem",
            maxWidth: "500px",
            marginRight: "auto",
            marginLeft: "auto",
            lgMarginLeft: "0",
            opacity: 0,
            animation: "fadeUp 0.8s ease forwards",
            animationDelay: "0.6s",
          }} className="lg:mx-0">
            A showcase of creativity, technical expertise, and professional growth in the world of development.
          </p>

          <button
            onClick={onEnter}
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#4f46e5",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.4)",
              opacity: 0,
              animation: "fadeUp 0.8s ease forwards",
              animationDelay: "0.8s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#4338ca";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(79, 70, 229, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#4f46e5";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(79, 70, 229, 0.4)";
            }}
          >
            Explore Portfolio →
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
