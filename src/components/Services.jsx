export default function Services() {
  const services = [
    {
      title: "Full Stack Web Development",
      icon: "💻",
      description:
        "Design and develop scalable full stack web applications using the MERN stack with clean architecture.",
    },
    {
      title: "Backend & API Development",
      icon: "⚙️",
      description:
        "Build secure and efficient RESTful APIs, authentication systems, and database-driven backend services.",
    },
    {
      title: "Frontend UI Development",
      icon: "🎨",
      description:
        "Create modern, responsive, and user-friendly interfaces using React, Tailwind CSS, and best UI practices.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      {/* SECTION TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-pink-400">Services</span>
      </h2>

      {/* SERVICE CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              p-8 rounded-xl
              bg-pink-500/10
              border border-pink-400/30
              text-center
              transition-all duration-300
              hover:scale-105
              hover:bg-pink-500/20
              hover:shadow-lg
              hover:shadow-pink-500/30
            "
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-sm opacity-80 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
