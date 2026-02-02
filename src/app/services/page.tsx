import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Knighton Dev LLC",
  description:
    "Platform engineering, DevOps, and Site Reliability Engineering services including cloud migrations, CI/CD pipelines, Kubernetes, and technical consulting.",
};

const services = [
  {
    title: "Platform Engineering",
    description:
      "Build robust, scalable platforms that enable your engineering teams to move fast. From cloud migrations to Kubernetes deployments, I help organizations modernize their infrastructure.",
    features: [
      "Cloud migrations (AWS, GCP, Azure)",
      "Kubernetes cluster design and deployment",
      "Infrastructure as Code with Terraform",
      "Platform standardization and templates",
      "Developer experience improvements",
      "Cost optimization strategies",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    title: "CI/CD & DevOps",
    description:
      "Implement modern software delivery practices that improve velocity and reliability. Automated pipelines with testing, quality gates, and security checks built in.",
    features: [
      "GitHub Actions pipeline design",
      "CircleCI and Azure DevOps migrations",
      "Quality gates and security scanning",
      "Automated testing integration",
      "GitOps workflows",
      "Release management strategies",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
  },
  {
    title: "Site Reliability Engineering",
    description:
      "Keep your systems running reliably at scale. Implement observability, incident response processes, and SLO-driven development to improve service quality.",
    features: [
      "SLO/SLA definition and monitoring",
      "Observability stack implementation (DataDog, etc.)",
      "Incident response process design",
      "Post-incident reviews and root cause analysis",
      "On-call rotation setup",
      "Capacity planning",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    description:
      "Build secure systems and achieve compliance certifications. Experience with SOC2, HECVAT, and FERPA compliance work, plus DevSecOps best practices.",
    features: [
      "SOC2 compliance preparation",
      "HECVAT and FERPA compliance",
      "Security scanning integration",
      "Identity and Access Management (IAM)",
      "Role-Based Access Control (RBAC)",
      "Secrets and configuration management",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Legacy System Modernization",
    description:
      "Transform outdated systems into modern, maintainable applications. Stabilize scaling issues, resolve data problems, and migrate to modern cloud services.",
    features: [
      "Legacy infrastructure assessment",
      "Incremental migration strategies",
      "VPS to cloud migration",
      "Microservices decomposition",
      "Event-driven architecture implementation",
      "Data migration planning",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic technology guidance to help your organization make informed decisions. Cross-team leadership, coaching, and engineering modernization.",
    features: [
      "Architecture reviews and recommendations",
      "Technology stack selection",
      "Engineering team coaching",
      "Organization-wide modernization",
      "AI adoption strategies and guardrails",
      "Team mentoring and training",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your infrastructure, goals, and technical requirements through detailed discussions.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Creating a comprehensive plan with clear milestones, timelines, and deliverables.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Building your solution with regular updates, documentation, and knowledge transfer.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Deploying with thorough testing, runbooks, and ongoing support options.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#228B22]/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Platform engineering, DevOps, and Site Reliability services
              tailored to help your engineering teams succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#161616] rounded-2xl p-6 sm:p-8 border border-[#262626] hover:border-[#228B22]/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#228B22]/10 text-[#228B22]">
                    {service.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
                    >
                      <svg
                        className="w-5 h-5 text-[#228B22] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A proven process for delivering successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center lg:text-left">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#228B22]/50 to-transparent -translate-x-1/2" />
                )}
                <div className="text-5xl font-bold text-[#228B22]/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let&apos;s discuss your infrastructure challenges and find the perfect
              solution for your needs.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#228B22] hover:bg-[#1a6b1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#228B22] transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
