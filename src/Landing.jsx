export default function Landing({ onEnter, dark, }) {
  return (
    <div
      className={`
        h-screen flex flex-col justify-center items-center text-center
        transition-colors duration-300
        ${dark ? "bg-[#0b0b14] text-white" : "bg-pink-50 text-gray-900"}
      `}
    >
      {/* THEME TOGGLE (OPTIONAL BUT RECOMMENDED) */}
      {/* <button
        onClick={() => setDark(!dark)}
        className="absolute top-6 right-6 px-4 py-2 rounded-full bg-pink-500 text-white hover:scale-105 transition"
      >
        {dark ? "Light" : "Dark"}
      </button> */}

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I’m <span className="text-pink-400">Hitaishi</span>
      </h1>

      <p className="opacity-80 mb-10">
        Software Engineer & Full Stack Developer
      </p>

      <button
        onClick={onEnter}
        className="px-10 py-4 rounded-2xl bg-pink-500 hover:bg-pink-600 transition-all hover:scale-110 shadow-lg shadow-pink-500/30"
      >
        Get Started →
      </button>
    </div>
  );
}
