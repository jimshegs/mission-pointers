export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl"
          data-aos="zoom-y-out"
        >
          {/* Dark teal gradient background with soft glows */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-[linear-gradient(180deg,_#1b4853,_#246c7b)]" />
          <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b7d7dd]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-20 -z-10 h-80 w-80 rounded-full bg-[#0f2f35]/40 blur-3xl" />

          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 text-3xl font-bold text-white md:mb-8 md:text-4xl">
              Ready to build smarter, fund better, and grow stronger?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/75">
              Book a free discovery call and we’ll map a practical path forward
              for your team.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-[#246c7b] to-[#2f8fa2] bg-[length:100%_100%] bg-[bottom] text-white shadow-sm transition hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="#contact"
              >
                <span className="relative inline-flex items-center">
                  Let’s Talk
                  <span className="ml-1 tracking-normal text-[#b7d7dd] transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
