export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#1b4853,_#246c7b)]"
    >
      {/* soft glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b7d7dd]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-24 -z-10 h-80 w-80 rounded-full bg-[#0f2f35]/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center" data-aos="zoom-y-out">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#b7d7dd]">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              AI services built for charity teams
            </h2>
            <p className="mt-4 text-lg text-white/70">
              A practical, safe approach to adopting AI: choose the right use
              cases, protect your data, and ship workflows that save time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* AI Strategy & Governance */}
            <article
              className="group rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10 transition hover:bg-white/[0.07] hover:ring-white/20"
              data-aos="fade-up"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b7d7dd]/15 text-[#b7d7dd]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                AI Strategy &amp; Governance
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  AI readiness, use-case roadmap, quick wins
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Policies, safeguarding, GDPR, human-in-the-loop
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Trustee/leadership briefings and decision support
                </li>
              </ul>
            </article>

            {/* Automation & Workflows */}
            <article
              className="group rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10 transition hover:bg-white/[0.07] hover:ring-white/20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b7d7dd]/15 text-[#b7d7dd]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3 8 4-8 4-8-4 8-4Z" />
                  <path d="m4 11 8 4 8-4" />
                  <path d="M4 15l8 4 8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Automation &amp; Workflows
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  AI-assisted admin and reporting workflows
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Notion/Airtable/CRM setup + integrations
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Internal knowledge base + staff enablement
                </li>
              </ul>
            </article>

            {/* Fundraising & Grant Intelligence */}
            <article
              className="group rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10 transition hover:bg-white/[0.07] hover:ring-white/20"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b7d7dd]/15 text-[#b7d7dd]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M20 5v6c0 1.7-3.6 3-8 3s-8-1.3-8-3V5" />
                  <path d="M20 11v6c0 1.7-3.6 3-8 3s-8-1.3-8-3v-6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Fundraising &amp; Grant Intelligence
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  AI tools + smarter pipeline planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Prospect research, bid reviews and drafting support
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Evidence packs and reusable bid components
                </li>
              </ul>
            </article>

            {/* Data, Impact & Insight */}
            <article
              className="group rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10 transition hover:bg-white/[0.07] hover:ring-white/20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b7d7dd]/15 text-[#b7d7dd]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m7 14 4-4 3 3 5-5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Data, Impact &amp; Insight
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Data models, dashboards, impact storytelling
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Reporting, compliance checks, funder requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#b7d7dd]">•</span>
                  Measurement frameworks and learning loops
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
