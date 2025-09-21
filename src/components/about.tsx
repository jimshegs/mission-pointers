export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 md:py-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* Left: Story */}
            <div data-aos="fade-right">
              <span className="inline-block rounded-full bg-[#246c7b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#246c7b]">
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                We’re charity operators building for charities
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Mission Pointers is a small team with hands-on experience in
                frontline delivery, fundraising, digital tools and governance.
                We pair pragmatic strategy with modern tooling to help VCFSE
                organisations plan better, fund better and deliver more impact.
              </p>
              
              {/* <p className="mt-4 text-gray-700">
                We also build useful tools for the sector — including
                <span className="font-semibold"> GrantRadar</span> — so teams can
                make smarter decisions without extra overhead.
              </p> */}

              {/* Trust highlights */}
              {/* <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Empathetic & Experienced", icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-4.35-8.485-6.836A5 5 0 1 1 11 7.17"/><path d="M12 21s6-4.35 8.485-6.836A5 5 0 0 0 13 7.17"/></svg>
                  )},
                  { label: "Tailored, not templated", icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 14v4a2 2 0 0 1-2 2h-4"/><path d="M3 10V6a2 2 0 0 1 2-2h4"/><path d="M10 21 21 10"/><path d="M7.5 12.5 10 10"/></svg>
                  )},
                  { label: "Sector‑specific tech & data", icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6"/></svg>
                  )},
                  { label: "UK‑based, remote‑friendly", icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m21 21-4.35-4.35"/><path d="M5 9h6l1 2h7"/></svg>
                  )},
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#246c7b]/10 text-[#246c7b]">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right: Founder note */}
            <aside
              className="rounded-2xl border border-[#246c7b]/20 bg-white p-6 shadow-sm md:sticky md:top-28"
              data-aos="fade-left"
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-[#246c7b]">
                A note from our founders
              </div>
              <blockquote className="mt-4 text-gray-800">
                “We started Mission Pointers to bridge the gap between
                strategy and day‑to‑day delivery. Charities deserve modern,
                flexible support that respects constraints and amplifies
                what already works.”
              </blockquote>
              <div className="mt-5 text-sm text-gray-600">
                <span className="font-medium text-gray-800">— Mission Pointers</span>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="btn bg-[#246c7b] text-white hover:bg-[#1e5a67]"
                >
                  Let’s Talk
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

