const skillCategories = [
  {
    title: "Cloud Providers",
    skills: ["AWS", "Google Cloud Platform", "Microsoft Azure", "GKE", "AKS"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "CloudFormation", "Pulumi"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["GitHub Actions", "CircleCI", "Azure DevOps", "Jenkins"],
  },
  {
    title: "Container & Orchestration",
    skills: ["Kubernetes", "Docker", "Helm", "Container Security"],
  },
  {
    title: "Programming Languages",
    skills: ["Go", "Python", "C#", "Ruby", "TypeScript/JavaScript"],
  },
  {
    title: "DevOps & SRE",
    skills: ["Observability", "DataDog", "PagerDuty", "Incident Response", "SLO/SLA Management", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "Security & Compliance",
    skills: ["IAM", "RBAC", "Secrets Management", "DevSecOps", "SOCII", "HECVAT", "FERPA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400">
            Modern tools and technologies for enterprise-grade infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 bg-slate-900/50 rounded-lg border border-forest-800/30"
            >
              <h3 className="text-xl font-semibold mb-4 text-forest-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm border border-forest-900/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
