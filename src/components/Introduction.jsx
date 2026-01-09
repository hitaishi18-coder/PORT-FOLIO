export default function Introduction() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex justify-center items-center
        px-6 md:px-12
        py-24
        overflow-hidden
        bg-gradient-to-b from-yellow-50 via-pink-50 to-sky-50
      "
    >
      {/* ===== BACKGROUND BLENDS ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#bae6fd,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#fbcfe8,transparent_60%)]" />

      {/* ===== MAIN WRAPPER ===== */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-14">

        {/* ===== LEFT : PHOTO ===== */}
        <div className="relative shrink-0">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-300 via-yellow-200 to-sky-300 blur-lg opacity-70"></div>
          <img
            src="/hitaishi-image.jpeg"
            alt="Hitaishi"
            className="relative w-56 h-56 md:w-82 md:h-89 rounded-full object-cover border-4 border-pink-400 shadow-lg"
          />
        </div>

        {/* ===== RIGHT : CONTENT (RELATIVE FOR TOYS) ===== */}
        <div className="relative max-w-xl text-center md:text-left">

          {/* ==== TOYS (RELATIVE TO CONTENT) ==== */}
          
          {/* Toy 1 – near heading */}
          <img
            src="/kuta.png"
            alt="kuta"
            className="
              hidden md:block
              absolute top-70 -right-65
              w-70
              opacity-85
              pointer-events-none
            "
          />

          {/* Toy 2 – middle right */}
          <img
            src="/swiper.png"
            alt=""
            className="
              hidden md:block
              absolute top-1/2 -right-75
              -translate-y-1/2
              w-70
              opacity-80
              pointer-events-none
            "
          />

          {/* Toy 3 – bottom right */}
          <img
            src="/Bag.png"
            alt=""
            className="
              hidden md:block
              absolute -bottom-10 -right-20
              w-42
              opacity-85
              pointer-events-none
            "
          />

          {/* Toy 4 – bottom center */}
          <img
            src="/bandar.png"
            alt=""
            className="
              hidden md:block
              absolute -bottom-15 -right-98
              -translate-x-1/2
              w-47
              opacity-90
              pointer-events-none
            "
          />

          {/* ===== TEXT ===== */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
            Hi, I’m <span className="text-pink-400">Hitaishi</span> 👋
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-pink-300 mb-5">
            Software Engineer & Full Stack Developer
          </h2>

          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
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
              className="
                px-6 py-3 rounded-full
                bg-gradient-to-r from-pink-400 to-pink-500
                text-white font-semibold
                shadow-lg
                hover:scale-105 transition
              "
            >
              📄 Download Resume
            </a>

            <a
              href="https://github.com/hitaishi18-coder"
              target="_blank"
              className="
                px-6 py-3 rounded-full
                bg-white text-gray-800 font-semibold
                shadow-md hover:bg-gray-100 hover:scale-105 transition
              "
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hitaishi-lohtia-99a219256/"
              target="_blank"
              className="
                px-6 py-3 rounded-full
                bg-white text-gray-800 font-semibold
                shadow-md hover:bg-gray-100 hover:scale-105 transition
              "
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
