export default function Achievements() {
  const achievements = [
    {
      title: "HackerWrath Hackathon",
      subtitle: "Top 5 Teams (Out of 60)",
      description:
        "Built a file sharing and real-time chat platform during the hackathon, competing among 60+ teams.",
      image: "/src/assets/achievements/hackathon.png",
    },
    {
      title: "College Fest Competition",
      subtitle: "1st Prize",
      description:
        "Developed a web platform for event registration and scheduling, securing first position.",
      image: "/src/assets/achievements/collegefest.png",
    },
    {
      title: "Engineering Contest",
      subtitle: "Second Runner-Up",
      description:
        "Designed a water level indicator project demonstrating practical engineering application.",
      image: "/src/assets/achievements/engineering.png",
    },
  ];

  return (
    <section className="py-24 px-6">
      {/* SECTION TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Achievements & <span className="text-pink-400">Prizes</span>
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-black/40 border border-pink-400/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-pink-300 font-medium mb-3">
                {item.subtitle}
              </p>
              <p className="text-sm opacity-80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
