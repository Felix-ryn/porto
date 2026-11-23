export default function Statistics() {
  const stats = [
    {
      number: "6+",
      label: "Projects Built",
      description: "Completed projects across backend, data engineering, and ML",
    },
    {
      number: "15+",
      label: "Core Technologies",
      description: "Python, Node.js, PostgreSQL, Docker, and more",
    },
    {
      number: "Continuous",
      label: "Learning",
      description: "Always exploring new technologies and best practices",
    },
  ];

  return (
    <section
      id="stats"
      className="py-20 md:py-28 border-t border-b border-border-custom bg-bg-primary scroll-mt-24"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left space-y-3">
              <p className="text-5xl md:text-6xl font-bold text-blue-primary h-16 flex items-center justify-center md:justify-start">
                {stat.number}
              </p>
              <p className="text-lg md:text-xl font-semibold text-text-primary">{stat.label}</p>
              <p className="text-base text-text-secondary leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
