export default function Projects() {
  const projects = [
    {
      title: "AI-Powered E-Commerce Website",
      tech: "MERN Stack",
      image: "/src/assets/projects/ecommerce.png",
      live: "https://your-deployed-link.com",
      github: "https://github.com/hitaishi18-coder",
    },
    {
      title: "BuddyAI – AI Chatbot",
      tech: "Node.js, Gemini API",
      image: "/src/assets/projects/chatbot.png",
      live: "https://your-deployed-link.com",
      github: "https://github.com/hitaishi18-coder",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-pink-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden bg-black/40 border border-pink-400/20 transition-all duration-300 hover:scale-105"
          >
            {/* PROJECT IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-pink-400 hover:bg-pink-500/20 transition"
              >
                GitHub Code
              </a>
            </div>

            {/* PROJECT INFO */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="opacity-80 mt-2">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
