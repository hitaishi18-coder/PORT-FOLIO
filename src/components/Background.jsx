export default function Background() {
  return (
    <section
      className="
        w-[100vw]
        h-[90vh]
        flex items-center justify-center
        overflow-hidden
        relative

        bg-[linear-gradient(to_bottom,#e0f2fe,#fef9c3,#ffe4e6)]
      "
    >
      {/* LEFT BLEND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#fbcfe8,transparent_65%)]"></div>

      {/* RIGHT BLEND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#bbf7d0,transparent_65%)]"></div>

      {/* TOP BLEND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#bae6fd,transparent_60%)]"></div>

      {/* BOTTOM BLEND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#fde68a,transparent_65%)]"></div>

      {/* IMAGE */}
      <img
        src="/background.jpg"
        alt="Background"
        className="
          relative z-10
          object-contain

          max-w-[92%]
          max-h-[92%]

          sm:max-w-[90%] sm:max-h-[90%]
          md:max-w-[85%] md:max-h-[85%]
          lg:max-w-[80%] lg:max-h-[80%]
        "
      />
    </section>
  );
}
