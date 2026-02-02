import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Knighton Dev LLC",
  description:
    "Get in touch with Knighton Dev LLC for platform engineering, DevOps, and Site Reliability services. Free initial consultation available.",
};

const contactMethods = [
  {
    title: "Email",
    value: "ian@knighton.dev",
    href: "mailto:ian@knighton.dev",
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Location",
    value: "Idaho Falls, ID",
    href: null,
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
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    title: "Availability",
    value: "Mon - Fri, 9AM - 5PM MT",
    href: null,
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/probablynotian",
    href: "https://linkedin.com/in/probablynotian",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "I specialize in platform engineering, DevOps, and SRE work—cloud migrations, Kubernetes deployments, CI/CD pipelines, observability, and infrastructure modernization. Whether you're a startup scaling up or an enterprise modernizing legacy systems.",
  },
  {
    question: "What is your typical engagement model?",
    answer:
      "I offer flexible engagement models including project-based work (migrations, infrastructure builds), ongoing retainer agreements for continued support, and hourly consulting for architecture reviews or coaching.",
  },
  {
    question: "What cloud platforms do you work with?",
    answer:
      "I have production experience with AWS, Google Cloud Platform, and Azure. I'm also experienced with multi-cloud architectures and migrations between cloud providers.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Absolutely. I offer maintenance agreements, on-call support arrangements, and continued development. Documentation and knowledge transfer are always part of the initial engagement.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#228B22]/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Have infrastructure challenges or want to discuss how I can help your
              team? I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#228B22]/10 text-[#228B22] flex items-center justify-center">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.title}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-white hover:text-[#228B22] transition-colors"
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-white">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-[#161616] rounded-lg p-5 sm:p-6 border border-[#262626]"
                    >
                      <h4 className="text-white font-medium mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#161616] rounded-2xl p-6 sm:p-8 border border-[#262626] h-fit">
              <h2 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8">
                Fill out the form below and I&apos;ll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#161616] rounded-3xl px-6 py-12 sm:py-16 sm:px-16 border border-[#262626]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-transparent to-transparent" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Prefer to Schedule a Call?
              </h2>
              <p className="mt-4 text-gray-300">
                If you&apos;d like to discuss your infrastructure needs in more detail, I&apos;m
                happy to schedule a free 30-minute consultation call.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:ian@knighton.dev?subject=Consultation%20Request"
                  className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#228B22] hover:bg-[#1a6b1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#228B22] transition-colors"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
