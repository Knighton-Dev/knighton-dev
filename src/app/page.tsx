import Link from "next/link";

const services = [
  {
    title: "Platform & DevOps Engineering",
    description:
      "Cloud migrations, CI/CD pipelines, and infrastructure as code. Modernize your systems with Terraform, Kubernetes, and GitOps practices.",
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
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    title: "Site Reliability Engineering",
    description:
      "Setting and maintaining SLOs/SLAs, incident response, observability, and keeping your systems running smoothly at scale.",
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
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic technology guidance, architecture reviews, and engineering modernization. Strong cross-team leadership, coaching, and teaching.",
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
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
];

const technologies = [
  "Terraform",
  "Kubernetes",
  "Docker",
  "AWS",
  "GCP",
  "Azure",
  "GitHub Actions",
  "Go",
  "C#",
  "Python",
  "DataDog",
  "CircleCI",
];

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ width: '100%' }}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#228B22]/20 via-transparent to-transparent" />

        <div className="relative py-24 sm:py-32 lg:py-40" style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '96px 24px' }}>
          <div style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Platform Engineering &{" "}
              <span className="text-gradient">DevOps Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              10+ years of experience modernizing legacy systems, leading cloud migrations, 
              implementing CI/CD pipelines, and migrating large-scale deployments to Kubernetes. 
              Expert consulting to help your engineering teams succeed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6" style={{ justifyContent: 'center' }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#228B22] hover:bg-[#1a6b1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#228B22] transition-colors"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto text-sm font-semibold leading-6 text-gray-300 hover:text-[#228B22] transition-colors flex items-center justify-center gap-2"
              >
                View Services{" "}
                <span aria-hidden="true" className="text-[#228B22]">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 bg-[#111111]" style={{ width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '672px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Services
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Comprehensive engineering solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-12 sm:mt-16" style={{ maxWidth: '1024px', margin: '48px auto 0' }}>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="relative group bg-[#161616] rounded-2xl p-6 sm:p-8 border border-[#262626] hover:border-[#228B22]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#228B22]/5"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#228B22]/10 text-[#228B22] mb-5 sm:mb-6 group-hover:bg-[#228B22] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-12" style={{ textAlign: 'center' }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#228B22] hover:text-[#2ea82e] transition-colors font-medium"
            >
              Explore all services
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 sm:py-24 bg-[#0a0a0a]" style={{ width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '672px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technology Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Working with modern tools and frameworks to deliver exceptional results
            </p>
          </div>

          <div className="mt-12 sm:mt-16 flex flex-wrap gap-3 sm:gap-4" style={{ maxWidth: '768px', margin: '48px auto 0', justifyContent: 'center' }}>
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-[#161616] border border-[#262626] text-gray-300 text-sm font-medium hover:border-[#228B22]/50 hover:text-[#228B22] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-[#111111]" style={{ width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
          <div className="relative isolate overflow-hidden bg-[#161616] rounded-3xl px-6 py-12 sm:px-16 sm:py-20 border border-[#262626]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-transparent to-transparent" />
            <div className="relative" style={{ maxWidth: '672px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl">
                Ready to Modernize Your Infrastructure?
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300">
                Let&apos;s discuss your project and find the best solution for your
                engineering challenges. Free initial consultation.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6" style={{ justifyContent: 'center' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#228B22] hover:bg-[#1a6b1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#228B22] transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-[#228B22] transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
