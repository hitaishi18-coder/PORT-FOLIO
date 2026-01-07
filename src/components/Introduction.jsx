export default function Introduction() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-8 text-center md:text-left">
      
      {/* LEFT – PHOTO */}
      <div className="relative">
        <img
          src="/src/assets/hitaishi.jpg"
          alt="Hitaishi Lohtia"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-pink-400 shadow-lg shadow-pink-500/30 hover:scale-105 transition duration-300"
        />
      </div>

      {/* RIGHT – CONTENT */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Hi, I’m <span className="text-pink-400">Hitaishi</span> 👋
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-pink-300 mb-4">
          Software Engineer & Full Stack Developer
        </h2>

        <p className="text-base md:text-lg opacity-80 mb-6 leading-relaxed">
          I am a Software Engineer and Full Stack Developer with hands-on
          experience in building scalable web applications using the MERN stack.
          I have a strong foundation in Data Structures & Algorithms, Object-
          Oriented Programming, DBMS, and RESTful API development.
          <br /><br />
          I enjoy building real-world products such as e-commerce platforms,
          AI-powered applications, and backend services while focusing on clean
          code and performance.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center md:justify-start gap-6 text-2xl">
          
          <a
            href="https://www.linkedin.com/in/hitaishi-lohtia-99a219256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition"
            title="LinkedIn"
          >
            🔗
          </a>

          <a
            href="https://github.com/hitaishi18-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition"
            title="GitHub"
          >
            💻
          </a>

          <a
            href="https://instagram.com/hitaishi18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition"
            title="Instagram"
          >
            📸
          </a>

          <a
            href="mailto:hitaishi.8.8.8@gmail.com"
            className="hover:scale-125 transition"
            title="Email"
          >
            ✉️
          </a>

          <a
            href="tel:+919988467270"
            className="hover:scale-125 transition"
            title="Phone"
          >
            📞
          </a>
        </div>
      </div>
    </section>
  );
}
