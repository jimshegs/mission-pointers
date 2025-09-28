export default function Contact() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center" data-aos="zoom-y-out">
            <span className="inline-block rounded-full bg-[#246c7b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-[#246c7b]">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Let’s start with a free discovery call
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              We’ll reply within 2 working days. Prefer email? Use the address
              below — and if you’re interested in tools like GrantRadar, mention
              that in your message.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
            {/* Form */}
            <form
              className="md:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              action="#"
              method="POST"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-800">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#246c7b] focus:ring-[#246c7b]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#246c7b] focus:ring-[#246c7b]"
                    placeholder="you@organisation.org"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="org" className="mb-1 block text-sm font-medium text-gray-800">
                    Organisation
                  </label>
                  <input
                    id="org"
                    name="organisation"
                    type="text"
                    className="block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#246c7b] focus:ring-[#246c7b]"
                    placeholder="Your charity / VCFSE organisation"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-[#246c7b] focus:ring-[#246c7b]"
                    placeholder="Tell us a little about your goals or challenges…"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-[#246c7b] text-white hover:bg-[#1e5a67]"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact details */}
            <aside className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                Prefer email?
              </div>
              <a
                href="mailto:hello@missionpointers.com"
                className="mt-2 block text-lg font-medium text-[#246c7b] hover:underline"
              >
                hello@missionpointers.com
              </a>
              <p className="mt-4 text-sm text-gray-600">
                We usually respond within 2 working days. Include any context —
                timelines, budget considerations, or the tools you use — and we’ll
                come prepared.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

