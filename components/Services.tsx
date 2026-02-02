const services = [
  {
    title: "Cloud Migration & Architecture",
    description: "Seamless migration from on-premise systems to AWS, GCP, and Azure. Design scalable, secure cloud architectures optimized for your workloads.",
    icon: "☁️",
  },
  {
    title: "Kubernetes & Container Orchestration",
    description: "Deploy and manage production-grade Kubernetes clusters. Migrate applications to containerized environments with proper scaling and observability.",
    icon: "⚙️",
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform modules, templates, and standards for reproducible infrastructure. Automated provisioning with proper state management and security.",
    icon: "📋",
  },
  {
    title: "CI/CD Pipeline Development",
    description: "Build robust pipelines with GitHub Actions, CircleCI, or Azure DevOps. Implement testing, quality gates, security scanning, and automated deployments.",
    icon: "🔄",
  },
  {
    title: "Site Reliability Engineering",
    description: "Establish SLOs and SLAs, implement observability with DataDog, PagerDuty integration, post-incident reviews, and root-cause analysis processes.",
    icon: "📊",
  },
  {
    title: "DevSecOps & Compliance",
    description: "Security-first approach to DevOps. Experience with SOCII, HECVAT, and FERPA compliance. Implement RBAC, secrets management, and secure architectures.",
    icon: "🔒",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive platform engineering and DevOps solutions to modernize your infrastructure and accelerate your development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-slate-900/50 rounded-lg border border-forest-800/30 hover:border-forest-600/50 transition-all hover:shadow-lg hover:shadow-forest-900/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-forest-400">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
