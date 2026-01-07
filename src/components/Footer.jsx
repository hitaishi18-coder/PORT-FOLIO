export default function Footer({ dark }) {
  return (
    <footer
      className={`
        mt-24 py-10
        border-t
        transition-colors duration-300
        ${
          dark
            ? "bg-black/40 border-white/10 text-white"
            : "bg-white/70 border-black/10 text-gray-900"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LEFT - COPYRIGHT */}
        <p className="text-sm opacity-80 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-pink-500">
            Hitaishi Lohtia
          </span>
          . All rights reserved.
        </p>

        {/* CENTER - TAGLINE */}
        <p className="text-sm opacity-70 text-center">
          Built with ❤️ using React & Tailwind
        </p>

        {/* RIGHT - SOCIAL LINKS */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/hitaishi-lohtia-99a219256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            title="LinkedIn"
          >
            🔗
          </a>

          <a
            href="https://github.com/hitaishi18-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            title="GitHub"
          >
            💻
          </a>

          <a
            href="mailto:hitaishi.8.8.8@gmail.com"
            className="hover:text-pink-500 transition"
            title="Email"
          >
            ✉️
          </a>

          <a
            href="tel:+919988467270"
            className="hover:text-pink-500 transition"
            title="Phone"
          >
            📞
          </a>
        </div>
      </div>
    </footer>
  );
}
