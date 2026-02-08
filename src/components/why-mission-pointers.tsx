export default function WhyMissionPointers() {
  const items = [
    {
      title: "Responsible by Default",
      desc: "Safeguarding, privacy, and governance built in",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21s-6-4.35-8.485-6.836A5 5 0 1 1 11 7.17" />
          <path d="M12 21s6-4.35 8.485-6.836A5 5 0 0 0 13 7.17" />
        </svg>
      ),
    },
    {
      title: "Designed for Small Teams",
      desc: "Quick wins first, with training and templates",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 14v4a2 2 0 0 1-2 2h-4" />
          <path d="M3 10V6a2 2 0 0 1 2-2h4" />
          <path d="M10 21 21 10" />
          <path d="M7.5 12.5 10 10" />
        </svg>
      ),
    },
    {
      title: "Tools + Support",
      desc: "We build sector‑tailored AI tools, plus AI-enabled workflows and systems",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
          <path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
        </svg>
      ),
    },
    {
      title: "Outcomes You Can Measure",
      desc: "Less admin, better bids, clearer reporting",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m21 21-4.35-4.35" />
          <path d="M5 9h6l1 2h7" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#1b4853,_#1f5764)]"
    >
      {/* soft glow accents */}
      <div className="pointer-events-none absolute -top-24 right-24 -z-10 h-72 w-72 rounded-full bg-[#b7d7dd]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-24 -z-10 h-80 w-80 rounded-full bg-[#0f2f35]/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center" data-aos="zoom-y-out">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#b7d7dd]">
              Why Mission Pointers
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Charity‑first AI, built to ship.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We make AI adoption simple: clear decisions, safe foundations, and
              practical delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white/5 p-5 shadow-sm ring-1 ring-white/10 transition hover:bg-white/[0.07] hover:ring-white/20"
                data-aos="fade-up"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#b7d7dd]/15 text-[#b7d7dd]">
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-white/70">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
