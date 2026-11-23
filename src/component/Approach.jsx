
import {
  BriefcaseBusiness,
  Building2,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const professionalFocus = [
  {
    number: "01",
    title: "Enterprise Career Opportunities",
    description:
      "Available for full-time and contract opportunities in business systems, supply chain operations, and data analytics.",
    details: [
      "Remote opportunities nationwide",
      "Hybrid and regional onsite roles across Metro Atlanta",
    ],
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Consulting Engagements",
    description:
      "Through Richards Digital Consultancy Enterprises, LLC, providing advisory support across business operations and technology-driven initiatives.",
    details: [
      "AI workflow evaluation and operational improvement",
      "Federal and commercial procurement analytics",
    ],
    icon: Building2,
  },
];

const Approach = () => {
  return (
    <section
      id="about"
      className="bg-[#F5F8FA] py-24 text-[#071724] md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#168E91]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#168E91]">
                Professional Profile
              </span>
            </div>

            <h2 className="max-w-[680px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Bridging business systems,
              supply chain and{" "}
              <span className="text-[#168E91]">
                data analytics.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto">
            <p className="max-w-[560px] text-base leading-8 text-slate-700 sm:text-lg">
              Boimah Richards is a business systems, supply chain,
              and data analytics professional focused on improving
              business processes through technology, operational
              insight, and data-driven decision-making.
            </p>

            <p className="mt-5 max-w-[560px] text-base leading-8 text-slate-700 sm:text-lg">
              His professional work spans healthcare supply chain
              operations, federal and commercial procurement analytics,
              and AI-assisted workflow evaluation through Richards
              Digital Consultancy Enterprises, LLC.
            </p>
          </div>

        </div>

        {/* Professional Focus */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {professionalFocus.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#42D5D0] hover:shadow-xl hover:shadow-[#071724]/5 sm:p-9"
              >

                {/* Card Header */}
                <div className="mb-8 flex items-center justify-between">

                  <span className="text-base font-semibold tracking-[0.15em] text-[#168E91]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-[#F5F8FA] text-[#168E91] transition-all duration-300 group-hover:border-[#42D5D0] group-hover:bg-[#E5F7F6]">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                </div>

                {/* Card Content */}
                <h3 className="text-xl font-semibold leading-snug text-[#071724] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                  {item.description}
                </p>

                {/* Details */}
                <div className="mt-8 space-y-5 border-t border-slate-200 pt-7">

                  {item.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#168E91]" />

                      <p className="text-base leading-7 text-slate-700 sm:text-lg">
                        {detail}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Bottom Accent */}
                <div className="mt-8 h-[2px] w-9 bg-[#42D5D0] transition-all duration-300 group-hover:w-16" />

              </article>
            );
          })}

        </div>

        {/* Closing Section */}
        <div className="mt-16 flex flex-col gap-6 border-t border-slate-200 pt-9 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="flex items-center gap-3 text-base font-semibold text-[#168E91]">
              <MapPin size={20} />
              Lawrenceville, Georgia
            </div>

            <p className="mt-3 text-base leading-8 text-slate-700 sm:text-lg">
              Serving opportunities across Metro Atlanta and nationwide
              through remote engagements.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 text-base font-semibold text-[#168E91] transition-colors hover:text-[#071724]"
          >
            Get in Touch
            <ArrowUpRight size={20} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Approach;
