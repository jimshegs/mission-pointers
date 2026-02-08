import Link from "next/link";

export default function Tools() {
  return (
    <section id="tools" className="relative bg-gray-50">
      {/* subtle accents */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#246c7b]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-20 -z-10 h-80 w-80 rounded-full bg-[#246c7b]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center" data-aos="zoom-y-out">
            <span className="inline-block rounded-full bg-[#246c7b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#246c7b]">
              Tools We Build
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Purpose-built AI tools for charities
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              We don&apos;t just advise on AI adoption. We also build new tools
              designed for charity workflows so teams can do more with less.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {/* Product card */}
            <div
              className="lg:col-span-7 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
              data-aos="fade-up"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-[#246c7b]">
                    GrantRadar
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    Find better-fit funding, faster
                  </h3>
                </div>
                <div className="hidden shrink-0 sm:block">
                  <span className="inline-flex items-center rounded-full bg-[#246c7b]/10 px-3 py-1 text-xs font-semibold text-[#246c7b]">
                    Live
                  </span>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                GrantRadar monitors funders, extracts key details, and uses AI to surface opportunities that fit your organisation — so you can spend less time searching and more time applying.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
                {[
                  "Identify funders and opportunities that match your organisation",
                  "Upcoming closing dates flagged automatically with reminders.",
                  "AI-assisted opportunity fit scoring",
                  "Click through to sources with confidence",
                  "Board-friendly summaries of new matches, upcoming deadlines, and more.",
                  "Understand funder priorities and language with AI-assisted research",
                  
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <span className="mt-1 text-[#246c7b]">•</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="https://grantradar.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn group bg-linear-to-t from-[#246c7b] to-[#2f8fa2] bg-[length:100%_100%] bg-[bottom] text-white shadow-sm transition hover:bg-[length:100%_150%]"
                >
                  <span className="relative inline-flex items-center">
                    Visit GrantRadar
                    <span className="ml-1 tracking-normal text-[#b7d7dd] transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </Link>
                <a
                  href="#contact"
                  className="btn bg-white text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
                >
                  Talk to us about tools
                </a>
              </div>
            </div>

            {/* Side details */}
            <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="100">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Built for charity teams
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  Designed for small teams, busy boards, and fundraising cycles
                  where time and clarity matter.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Precision filters",
                      body: "Search by amount, geography, theme, organisation type, and deadlines — no more manual combing.",
                    },
                    {
                      title: "AI-fit scoring",
                      body: "Opportunity fit, explained in plain English. Train once on your org profile; get ranked matches weekly.",
                    },
                    // {
                    //   title: "Built with the sector in mind",
                    //   body: "Language, evidence, and reporting patterns tailored to how charities operate.",
                    // },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl bg-gray-50 p-4">
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="mt-1 text-sm text-gray-700">{item.body}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#246c7b]/20 bg-[#246c7b]/5 p-4">
                  <div className="text-sm font-semibold text-[#246c7b]">
                    More tools coming
                  </div>
                  <div className="mt-1 text-sm text-gray-700">
                    We&apos;re building additional AI tools for charity ops,
                    fundraising, and impact reporting.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

