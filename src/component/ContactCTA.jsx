
const LinkedInMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.564v11.452H3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);
import { ArrowUpRight, MessageCircle } from "lucide-react";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-[#F5F8FA] px-6 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#071724] px-7 py-16 sm:px-12 md:py-24 lg:px-20">

        {/* Background Accents */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#42D5D0]/10 blur-[100px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 border-b border-r border-[#42D5D0]/20" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

          {/* Content */}
          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#42D5D0]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42D5D0]">
                Let's Connect
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Have a business challenge worth{" "}
              <span className="text-[#42D5D0]">
                exploring?
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
              Whether you're exploring operational improvements,
              business systems, data analytics or AI-driven solutions,
              I'd welcome the opportunity to connect and understand
              what you're working towards.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Open to consulting conversations, professional
              collaborations and relevant career opportunities.
            </p>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 lg:min-w-[245px]">

            <a
              href="https://www.linkedin.com/in/ACoAADz4a3gBoGrZeGbQb4aKHHpcHvhm4hgAs2U"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#42D5D0] px-6 py-4 text-sm font-semibold text-[#071724] transition-all duration-300 hover:bg-[#65e3de]"
            >
              <MessageCircle size={18} />

              Start a Conversation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ACoAADz4a3gBoGrZeGbQb4aKHHpcHvhm4hgAs2U"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#42D5D0] hover:text-[#42D5D0]"
            >
              <LinkedInMark />

              Connect on LinkedIn

              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

        {/* Bottom Detail */}
        <div className="relative z-10 mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">

          <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Business Strategy · Technology · Operations
          </span>

          <span className="text-xs text-slate-500">
            Lawrenceville, Georgia, United States
          </span>

        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
