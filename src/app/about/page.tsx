import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Knighton Dev LLC",
  description:
    "Learn about Knighton Dev LLC - Platform, DevOps, and Site Reliability Engineering consultancy with 10+ years of experience in cloud migrations, CI/CD, and Kubernetes.",
};

const experience = [
  {
    title: "Years of Experience",
    years: "10+",
    description:
      "Modernizing legacy systems, leading cloud migrations, and implementing CI/CD pipelines.",
  },
  {
    title: "Cloud Platforms",
    years: "3",
    description:
      "Deep expertise in AWS, Google Cloud Platform, and Microsoft Azure.",
  },
  {
    title: "Award Winner",
    years: "2025",
    description:
      "Technology Game Changer Award for contributions across technology and product teams.",
  },
];

const careerHistory = [
  {
    role: "Senior Platform Engineer",
    company: "Deseret Digital Media",
    period: "2022 - 2025",
    highlights: [
      "Led migration from on-premise systems to AWS and GCP using Terraform and Kubernetes",
      "Built CI/CD pipelines using GitHub Actions with testing, quality gates, and security checks",
      "Developed Terraform modules, templates, and standards for engineering teams",
      "Drove organization-wide engineering modernization",
      "Co-led agentic AI adoption with provider standards and guardrails",
    ],
  },
  {
    role: "Senior Site Reliability Engineer",
    company: "Stukent",
    period: "2019 - 2022",
    highlights: [
      "Built automated CI/CD pipelines with CircleCI, later migrated to Azure DevOps",
      "Stabilized scaling and resolved data issues on legacy VPS infrastructure",
      "Introduced DataDog and PagerDuty; created post-incident reviews and root-cause analysis processes",
      "Led DevSecOps and SOC2, HECVAT, and FERPA compliance work",
      "Guided migration to .NET and Microsoft Azure with event-driven architecture",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "LabStats",
    period: "2015 - 2019",
    highlights: [
      "Built and maintained large-scale REST API handling 250,000+ concurrent clients",
      "Aided migration from legacy WebForms to ASP.NET MVC with Razor",
      "Worked with senior engineers to design early Microsoft Azure architectures",
      "Created data warehousing strategies to improve production data integrity",
      "Owned the MacOS client written in Objective-C; led early migration to .NET Core",
    ],
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "Every system is built with reliability, performance, and scalability in mind. No shortcuts, no technical debt.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    description:
      "Regular updates, transparent timelines, and honest assessments. You&apos;ll always know where your project stands.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    title: "Cross-Team Leadership",
    description:
      "Strong experience coaching, teaching, and leading across engineering teams to drive organization-wide improvements.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. I stay current with the latest tools, frameworks, and best practices to deliver modern solutions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
];

const techStack = {
  "Cloud Providers": ["AWS", "Google Cloud Platform", "Microsoft Azure", "Azure Kubernetes Service", "Google Kubernetes Engine"],
  "Infrastructure as Code": ["Terraform", "CloudFormation"],
  "CI/CD": ["GitHub Actions", "CircleCI", "Azure DevOps"],
  "Languages": ["Go", "C#", "Python", "Ruby on Rails"],
  "DevOps & SRE": ["Kubernetes", "Docker", "Microservices", "Observability", "DataDog", "PagerDuty"],
  "Practices": ["Site Reliability", "Incident Response", "SLOs/SLAs", "IAM", "RBAC", "Secrets Management"],
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#228B22]/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Knighton Dev
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Platform, DevOps, and Site Reliability Engineering consultancy 
              focused on delivering high-quality solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Engineering Excellence Through Experience
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Knighton Dev LLC was founded to provide businesses with expert 
                  platform engineering and DevOps services that combine technical 
                  excellence with practical business sense.
                </p>
                <p>
                  With over a decade of experience modernizing and maintaining legacy 
                  systems, leading cloud migrations, implementing CI/CD and modern SDLC 
                  practices, and migrating large-scale deployments to Kubernetes using 
                  IaC tools like Terraform.
                </p>
                <p>
                  Whether you need help migrating to the cloud, implementing robust 
                  CI/CD pipelines, setting up observability and incident response, or 
                  driving organization-wide engineering modernization—I&apos;m here to help.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {experience.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#161616] rounded-xl p-5 sm:p-6 border border-[#262626]"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-[#228B22] mb-2">
                    {item.years}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career History Section */}
      <section className="py-20 sm:py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Career Highlights
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A track record of delivering results across diverse organizations
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {careerHistory.map((job) => (
              <div
                key={job.role}
                className="bg-[#161616] rounded-2xl p-6 sm:p-8 border border-[#262626]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <p className="text-[#228B22] font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm sm:text-base">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
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
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              The principles that guide every project and interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 bg-[#161616] rounded-xl p-5 sm:p-6 border border-[#262626] hover:border-[#228B22]/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#228B22]/10 text-[#228B22] flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 sm:py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A comprehensive technology stack to tackle any challenge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {Object.entries(techStack).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#161616] rounded-xl p-5 sm:p-6 border border-[#262626]"
              >
                <h3 className="text-lg font-semibold text-[#228B22] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
              Let&apos;s Work Together
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Have a project in mind? I&apos;d love to hear about it and discuss how
              I can help bring your vision to life.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#228B22] hover:bg-[#1a6b1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#228B22] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
