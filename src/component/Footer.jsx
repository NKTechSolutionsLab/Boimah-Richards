
import { ArrowUpRight, ArrowUp } from "lucide-react";

const LinkedInMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
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
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#071724] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-10 lg:px-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <h2 className="text-xl font-semibold tracking-[0.12em]">
                BOIMAH RICHARDS<span className="text-[#42D5D0]">.</span>
              </h2>
              <p className="mt-1 text-xs tracking-[0.25em] text-[#42D5D0]">
                MBA
              </p>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Connecting business strategy, technology, data, and operations
              to create practical solutions for complex business challenges.
            </p>

            <a
              href="https://www.linkedin.com/in/ACoAADz4a3gBoGrZeGbQb4aKHHpcHvhm4hgAs2U"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:border-[#42D5D0] hover:bg-[#42D5D0] hover:text-[#071724]"
            >
              <LinkedInMark />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#42D5D0] uppercase">
              Explore
            </h3>

            <nav className="flex flex-col items-start gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#42D5D0] uppercase">
              Let's Connect
            </h3>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Have a business challenge, an opportunity to collaborate, or an
              idea worth discussing?
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors duration-300 hover:text-[#42D5D0]"
            >
              Start a Conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {currentYear} Boimah Richards. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs text-slate-400 transition-colors duration-300 hover:text-[#42D5D0]"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#42D5D0]">
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
