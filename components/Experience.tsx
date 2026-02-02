const approaches = [
  {
    title: "Strategic Planning & Assessment",
    icon: "🎯",
    description: "We begin every engagement with a comprehensive assessment of your current infrastructure, identifying bottlenecks, security gaps, and opportunities for optimization. Our team develops a clear roadmap aligned with your business objectives.",
  },
  {
    title: "Modern Architecture & Migration",
    icon: "🏗️",
    description: "We architect and implement scalable cloud solutions using industry best practices. Whether migrating legacy systems or building greenfield projects, we ensure minimal disruption while maximizing performance and cost efficiency.",
  },
  {
    title: "Automation & DevOps Culture",
    icon: "⚡",
    description: "We establish robust CI/CD pipelines, infrastructure as code practices, and automated testing frameworks. Our approach reduces manual toil, accelerates delivery cycles, and improves system reliability through proven automation patterns.",
  },
  {
    title: "Ongoing Support & Optimization",
    icon: "🔄",
    description: "We provide continuous monitoring, incident response, and performance optimization. Our team implements SLOs, observability solutions, and post-incident review processes to ensure your systems remain resilient and performant.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Approach
          </h2>
          <p className="text-xl text-gray-400">
            A proven methodology for delivering reliable, scalable infrastructure solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="p-8 bg-slate-900/50 rounded-lg border border-forest-800/30 hover:border-forest-600/50 transition-all"
            >
              <div className="text-4xl mb-4">{approach.icon}</div>
              <h3 className="text-2xl font-bold text-forest-400 mb-4">
                {approach.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
