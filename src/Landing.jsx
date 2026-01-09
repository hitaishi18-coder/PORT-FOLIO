export default function Landing({ onEnter }) {
  return (
    <div
      className="
        h-screen w-full flex items-center justify-center overflow-hidden
        font-[Poppins]
        bg-gradient-to-r from-pink-200 via-yellow-100 to-sky-100
        relative
      "
    >
      {/* EXTRA BLEND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#fbcfe8,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#bae6fd,transparent_50%)]"></div>

      <div className="relative z-10 w-[90%] max-w-[1400px] flex items-center justify-between gap-20">
        {/* LEFT IMAGE */}
        <div className="flex-[1.2] flex justify-center">
          <img
            src="/dora.jpg"
            alt="Welcome Character"
            className="
              w-full max-w-[560px] h-auto
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]
            "
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="flex-1 text-left">
          {/* ANIMATED HEADING */}
          <h1 className="text-[4rem] font-extrabold leading-tight mb-8">
            {/* LINE 1 */}
            <div className="flex gap-3">
              <span
                className="opacity-0 translate-y-6 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0s", color: "#FB7185" }}
              >
                Welcome
              </span>

              <span
                className="opacity-0 translate-y-6 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0.3s", color: "#FBBF24" }}
              >
                to
              </span>
            </div>

            {/* LINE 2 */}
            <div className="flex gap-3 mt-2">
              <span
                className="opacity-0 translate-y-6 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0.6s", color: "#EC4899" }}
              >
                Hitaishi’s
              </span>

              <span
                className="opacity-0 translate-y-6 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0.9s", color: "#38BDF8" }}
              >
                World 
              </span>
            </div>
          </h1>

          {/* BUTTON (LESS ROUNDED) */}
          <button
            onClick={onEnter}
            className="
              px-12 py-4
              rounded-[6px]
              font-bold text-gray-800
              bg-gradient-to-r from-pink-300 to-orange-200
              shadow-[0_20px_40px_rgba(0,0,0,0.25)]
              transition-transform duration-300
              hover:scale-105
              rounded-xl
            "
          >
            Get Started →
          </button>
        </div>
      </div>

      {/* KEYFRAMES INLINE */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
