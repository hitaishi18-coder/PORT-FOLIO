export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        w-full
        flex flex-col sm:flex-row
        items-center sm:justify-between
        gap-3 sm:gap-0

        px-4 sm:px-8 md:px-12
        py-3 sm:py-4

        bg-gradient-to-r from-pink-200 via-yellow-100 to-sky-200
        shadow-md
        rounded-b-xl
      "
    >
      {/* LEFT : AVATAR + NAME */}
      <div className="flex items-center gap-3">
        <img
          src="/avatar.jpg"
          alt="Hitaishi"
          className="w-9 h-9 rounded-full border-2 border-pink-400"
        />
        <span className="text-lg font-bold text-pink-600">
          Hitaishi
        </span>
      </div>

      {/* RIGHT : LINKS */}
      <div
        className="
          flex flex-wrap
          justify-center sm:justify-end
          gap-2 sm:gap-4 md:gap-6
          text-sm font-semibold text-gray-700
        "
      >
        {[
          "Skills",
          "Projects",
          "Certifications",
          "Achievements",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="
              px-3 py-2
              rounded-md
              hover:bg-white/50
              transition
              whitespace-nowrap
            "
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
