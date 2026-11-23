
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const CONTACT_EMAIL = "boimahrichards@fuller.edu";
const CONTACT_PHONE = "+14708868955";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/boimah-richards-mba-9346a3246/";

const LinkedInMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.564v11.452H3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Experience", href: "#experience" },
    { label: "Applied Projects", href: "#projects" },
    { label: "Education & Credentials", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const linkFocusStyles =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42D5D0] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071724]";

  return (
    <footer className="bg-[#071724] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-16 pb-8 md:px-10 lg:px-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="Boimah Richards, MBA - Back to home"
              className={`inline-block ${linkFocusStyles}`}
            >
              <h2 className="text-xl font-semibold tracking-[0.12em] sm:text-2xl">
                BOIMAH RICHARDS
                <span className="text-[#42D5D0]">, MBA.</span>
              </h2>
            </a>

            <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
              Business systems, supply chain, and data analytics
              professional focused on operational improvement,
              technology, and informed business decisions.
            </p>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Boimah Richards' LinkedIn profile (opens in a new tab)"
              className={`mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-all duration-300 hover:border-[#42D5D0] hover:bg-[#42D5D0] hover:text-[#071724] ${linkFocusStyles}`}
            >
              <LinkedInMark />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#42D5D0]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-4"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-2 text-base text-slate-300 transition-colors duration-300 hover:text-[#42D5D0] ${linkFocusStyles}`}
                >
                  {link.label}

                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#42D5D0]">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`group flex items-start gap-3 ${linkFocusStyles}`}
              >
                <Mail
                  size={20}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#42D5D0]"
                />

                <span className="break-all text-base leading-7 text-slate-300 transition-colors group-hover:text-[#42D5D0]">
                  {CONTACT_EMAIL}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT_PHONE}`}
                className={`group flex items-start gap-3 ${linkFocusStyles}`}
              >
                <Phone
                  size={20}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#42D5D0]"
                />

                <span className="text-base leading-7 text-slate-300 transition-colors group-hover:text-[#42D5D0]">
                  (470) 886-8955
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#42D5D0]"
                />

                <span className="text-base leading-7 text-slate-300">
                  Lawrenceville, GA
                  <span className="block text-sm text-slate-400">
                    Metro Atlanta, United States
                  </span>
                </span>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                Professional Availability
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Open to full-time and contract opportunities,
                remote nationwide, and hybrid or regional onsite
                roles across Metro Atlanta.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-400">
            © {currentYear} Boimah Richards. All rights reserved.
          </p>

          <a
            href="#home"
            className={`group inline-flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-[#42D5D0] ${linkFocusStyles}`}
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#42D5D0]">
              <ArrowUp size={15} aria-hidden="true" />
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
