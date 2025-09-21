"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const ids = ["home", "services", "about", "contact"]; // anchors we track
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Consider a section active when ~35% is visible
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden flex-1 items-center justify-center md:flex" aria-label="Main">
            <ul className="relative flex items-center gap-8 text-sm font-medium md:gap-10">
              {[
                { id: "home", label: "Home", href: "#home" },
                { id: "services", label: "Services", href: "#services" },
                { id: "about", label: "About", href: "#about" },
                { id: "contact", label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center py-1 transition ${
                      active === item.id
                        ? "text-[#246c7b]"
                        : "text-gray-700 hover:text-[#246c7b]"
                    }`}
                    aria-current={active === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Tools dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setToolsOpen(true)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 py-1 text-gray-700 transition hover:text-[#246c7b]`}
                  aria-haspopup="menu"
                  aria-expanded={toolsOpen}
                  onClick={() => setToolsOpen((v) => !v)}
                >
                  Tools
                  <svg className={`h-4 w-4 transition ${toolsOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.114l3.71-2.883a.75.75 0 1 1 .92 1.178l-4.2 3.264a.75.75 0 0 1-.92 0l-4.2-3.264a.75.75 0 0 1-.02-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
                {toolsOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full z-20 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
                    onMouseEnter={() => setToolsOpen(true)}
                    onMouseLeave={() => setToolsOpen(false)}
                  >
                    <Link
                      href="https://grantradar.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-[#246c7b]"
                      role="menuitem"
                    >
                      GrantRadar
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* Right CTA (desktop) */}
          <div className="hidden flex-1 items-center justify-end md:flex">
            <Link
              href="#contact"
              className="btn-sm bg-[#246c7b] text-white shadow-sm hover:bg-[#1e5a67]"
            >
              Let’s Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 ring-1 ring-gray-200 transition hover:bg-gray-50 md:hidden"
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
        {/* Mobile menu panel */}
          <div id="mobile-nav" className={`md:hidden ${open ? "block" : "hidden"}`}>
            <div className="mt-2 rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
              <ul className="space-y-1 text-sm font-medium">
                {[
                  { id: "home", label: "Home", href: "#home" },
                  { id: "services", label: "Services", href: "#services" },
                  { id: "about", label: "About", href: "#about" },
                  { id: "contact", label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-2 transition ${
                        active === item.id
                          ? "bg-gray-50 text-[#246c7b]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      aria-current={active === item.id ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {/* Tools group */}
                <li>
                  <div className="mt-2 rounded-md border border-gray-200">
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Tools
                    </div>
                    <Link
                      href="https://grantradar.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      GrantRadar
                    </Link>
                  </div>
                </li>
              </ul>
            <div className="mt-3">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-sm w-full bg-[#246c7b] text-white shadow-sm hover:bg-[#1e5a67]"
              >
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
