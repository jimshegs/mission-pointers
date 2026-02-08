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
                We help charities adopt AI responsibly
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Mission Pointers is a small team focused on tech and AI for
                charities. We bring practical experience across delivery,
                fundraising, data and governance, and we translate AI into
                workflows your team can actually use.
              </p>
              {/* <p className="mt-4 text-gray-700">
                We also build sector‑tailored AI tools to help charities and
                nonprofits move faster with confidence.
              </p> */}
              <p className="mt-4 text-gray-700">
                Our focus is measurable outcomes: time saved, better decisions,
                stronger bids, and clearer reporting, while protecting the trust
                you’ve earned with service users and funders.
              </p>
            </div>

            {/* Right: Founder note */}
            <aside
              className="rounded-2xl border border-[#246c7b]/20 bg-white p-6 shadow-sm md:sticky md:top-28"
              data-aos="fade-left"
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-[#246c7b]">
                A note from our team
              </div>
              <blockquote className="mt-4 text-gray-800">
                “AI shouldn’t feel risky or out of reach. We help you choose
                the right use cases, put the right safeguards in place, and ship
                workflows that genuinely reduce admin — without compromising
                privacy or quality.”
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
