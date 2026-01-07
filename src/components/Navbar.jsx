export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 backdrop-blur-md bg-black/30">
      <h1 className="text-xl font-semibold text-pink-400">
        Hitaishi
      </h1>

      <div className="flex items-center gap-6">
        <a href="#skills" className="hover:text-pink-400">Skills</a>
        <a href="#projects" className="hover:text-pink-400">Projects</a>
        <a href="#services" className="hover:text-pink-400">Services</a>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-2xl bg-pink-500 text-white hover:scale-105 transition"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
