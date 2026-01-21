export default function Background() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      {/* SOFT PROFESSIONAL GLOWS */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)",
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
      }} />

      {/* IMAGE CONTAINER */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "90%",
        maxWidth: "1000px",
        height: "auto",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}>
        <img
          src="/"
          alt="Showcase"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
