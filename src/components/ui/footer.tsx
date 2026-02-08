import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <p className="text-sm text-gray-600">
              Mission Pointers helps charities adopt AI responsibly — choosing
              the right use cases, protecting data and trust, and building
              workflows and tools that save time.
            </p>
            <p className="pt-2 text-sm text-gray-600">
              &copy; Mission Pointers — All rights reserved.
            </p>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#services">
                  AI Strategy &amp; Governance
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#services">
                  Automation &amp; Workflows
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#services">
                  Fundraising &amp; Grant Intelligence
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#services">
                  Data, Impact &amp; Insight
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#about">
                  About us
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#why">
                  Why Mission Pointers
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#0">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#terms"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-2">
              {/* Facebook */}
              <li>
                <Link
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-[#246c7b]"
                  href="#0"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </Link>
              </li>
              {/* X (Twitter) */}
              <li>
                <Link
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-[#246c7b]"
                  href="#0"
                  aria-label="X"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.53 2H20l-6.54 7.48L21 22h-6.28l-4.9-6.4L4.2 22H2l7.03-8.04L3 2h6.34l4.44 5.84L17.53 2Zm-2.2 18h1.22L7.75 4h-1.3l8.88 16Z" />
                  </svg>
                </Link>
              </li>
              {/* Instagram */}
              <li>
                <Link
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-[#246c7b]"
                  href="#0"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5c2.7 0 3 .01 4.1.06 1.1.05 1.9.22 2.6.47.7.27 1.3.62 1.9 1.17.55.55.9 1.2 1.17 1.9.25.7.42 1.5.47 2.6.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.9-.47 2.6-.27.7-.62 1.3-1.17 1.9-.55.55-1.2.9-1.9 1.17-.7.25-1.5.42-2.6.47-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.9-.22-2.6-.47-.7-.27-1.3-.62-1.9-1.17-.55-.55-.9-1.2-1.17-1.9-.25-.7-.42-1.5-.47-2.6C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.9.47-2.6.27-.7.62-1.3 1.17-1.9.55-.55 1.2-.9 1.9-1.17.7-.25 1.5-.42 2.6-.47C9 2.01 9.3 2 12 2Zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
                  </svg>
                </Link>
              </li>
              {/* LinkedIn */}
              <li>
                <Link
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-[#246c7b]"
                  href="#0"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 5.9V24h-4v-7.3c0-1.7 0-3.9-2.4-3.9-2.5 0-2.9 1.9-2.9 3.8V24h-4V8Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Mission'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Mission'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
