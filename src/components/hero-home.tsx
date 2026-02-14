import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section id="home" className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6" data-aos="zoom-y-out">
              <p className="inline-block rounded-full bg-[#246c7b]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#246c7b]">
                Tech & AI for charities
              </p>
            </div>
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Building the digital backbone   
              <br className="max-lg:hidden" /> for modern charities
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                We help charities adopt AI safely and effectively, from automating workflows and fundraising intelligence to building custom AI tools that help teams do more with less.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center" data-aos="zoom-y-out" data-aos-delay={450}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-[#246c7b] to-[#2f8fa2] bg-[length:100%_100%] bg-[bottom] text-white shadow-sm transition hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#contact"
                >
                  <span className="relative inline-flex items-center">
                    Book an AI Discovery Call
                    <span className="ml-1 tracking-normal text-[#b7d7dd] transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
                <a
                  className="btn w-full border border-[#246c7b]/30 bg-white text-[#246c7b] shadow-sm transition hover:bg-[#e8f3f5] sm:ml-4 sm:w-auto"
                  href="#services"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  missionpointers.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  AI discovery call scheduled
                </span>
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  AI readiness & use-cases mapped
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Grant opportunities prioritised
                </span>
                <br />
                <span className="animate-[code-4_10s_infinite]">
                  Admin workflows automated in weeks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
