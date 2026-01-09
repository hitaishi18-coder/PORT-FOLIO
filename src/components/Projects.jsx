export default function Projects() {
  const projects = [
    {
      title: "MindSync – AI Neuro-Productivity System",
      tech: "MERN • AI • Computer Vision",
      image: "/mind.png",
      live: "mind-sync-mu.vercel.app",
      github: "https://github.com/hitaishi18-coder/mind-sync",
    },
    {
      title: "DIECAI – Decision Intelligence Engine",
      tech: "System Design • AI Concepts",
      image: "/diecai.png",
      live: "https://www.diecai2025.com/",
      github: "https://github.com/Rohaz-bhalla/DIECAI-GNDU",
    },
    {
      title: "ShopEase – Smart AI Assistant ",
      tech: "MERN • AI concepy • LLM Api",
      image: "/shopease.png",
      live: "https://shopease-ai-support.vercel.app/",
      github: "https://github.com/hitaishi18-coder/shopease-ai-support",
    },
    {
      title: "AI-Powered E-Commerce Website",
      tech: "MERN Stack",
      image: "/src/assets/projects/ecommerce.png",
      live: "https://your-deployed-link.com",
      github: "https://github.com/hitaishi18-coder",
    },
    {
      title: "BuddyAI – AI Chatbot",
      tech: "Node.js • Gemini API",
      image: "/src/assets/projects/chatbot.png",
      live: "https://your-deployed-link.com",
      github: "https://github.com/hitaishi18-coder",
    },
    {
      title: "URL Shortener",
      tech: "Node.js • Express • MongoDB",
      image: "/src/assets/projects/urlshortener.png",
      live: "https://your-deployed-link.com",
      github: "https://github.com/hitaishi18-coder/url-shortener",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative
        py-32 px-6
        overflow-hidden
        bg-gradient-to-b from-sky-50 via-blue-50 to-emerald-50
      "
    >
      {/* BACKGROUND BLENDS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#bae6fd,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fbcfe8,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#bbf7d0,transparent_60%)]" />

      {/* TITLE */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-20">
        My <span className="text-pink-400">Projects</span> 🚀
      </h2>

      {/* PROJECT GRID */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              relative
              rounded-[2rem]
              overflow-hidden
              bg-white/70
              backdrop-blur-md
              border border-white/60
              shadow-lg
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-56 object-cover
                  transition duration-700
                  group-hover:scale-110
                "
              />
            </div>

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t from-sky-500/80 via-blue-500/40 to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all duration-500
                flex flex-col justify-center items-center
                gap-4
              "
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3
                  rounded-full
                  bg-white
                  text-blue-600 font-semibold
                  shadow-md
                  hover:scale-110
                  transition
                "
              >
                🚀 Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3
                  rounded-full
                  bg-white/90
                  text-gray-800 font-semibold
                  shadow-md
                  hover:scale-110
                  transition
                "
              >
                💻 GitHub Code
              </a>
            </div>

            {/* INFO */}
            <div className="p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-blue-500 font-semibold">
                {project.tech}
              </p>
            </div>

            {/* DORA STAR */}
            <div className="absolute top-4 right-4 text-2xl opacity-70">
              ⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
