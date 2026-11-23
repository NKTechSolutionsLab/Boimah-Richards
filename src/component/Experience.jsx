
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Boxes,
  Network,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    company: "Richards Digital Consultancy Enterprises, LLC",
    role: "Senior Consultant, AI Evaluation & Business Operations Specialist / Owner",
    period: "2024 — Present",
    icon: BriefcaseBusiness,
    description:
      "Leading consulting initiatives focused on AI evaluation, business operations, and technology-driven process improvement through Richards Digital Consultancy Enterprises.",
    responsibilities: [
      "AI model evaluation and prompt engineering",
      "Structured workflow testing and business-rule validation",
      "Translating stakeholder requirements into acceptance criteria",
      "Developing automated reporting templates",
    ],
    category: "Consulting & AI Operations",
  },
  {
    number: "02",
    company: "Cardinal Health",
    role: "Supply Chain Analyst / Operations Specialist",
    period: "2022 — 2026",
    icon: Boxes,
    description:
      "Supporting healthcare supply chain operations through inventory analytics, distribution visibility, and cross-functional process coordination across medical supply networks.",
    responsibilities: [
      "Building multi-system SQL queries and WMS tracking reports",
      "Developing automated Excel/VBA analytics dashboards",
      "Monitoring inventory velocity and identifying fulfillment bottlenecks",
      "Auditing vendor performance and standardizing exception workflows",
    ],
    category: "Healthcare Supply Chain",
  },
  {
    number: "03",
    company: "American Income Life",
    role: "Client Account & Project Manager / Operations Specialist",
    period: "2020 — 2022",
    icon: Building2,
    description:
      "Professional experience in client account management, project management, and operational support.",
    responsibilities: [],
    category: "Client & Project Management",
  },
  {
    number: "04",
    company: "Medtronic, Inc. & State Farm",
    role: "Business Systems Analyst / Operations Lead",
    period: "Prior Experience",
    icon: Network,
    description:
      "Earlier professional experience spanning business systems analysis and operations leadership.",
    responsibilities: [],
    category: "Business Systems & Operations",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#071724] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#42D5D0]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#42D5D0]">
                Professional Experience
              </span>
            </div>

            <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Experience across{" "}
              <span className="text-[#42D5D0]">
                business and technology.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-8 text-slate-300 lg:ml-auto">
            Bringing together experience in consulting, healthcare
            supply chain operations, project management, and enterprise
            business systems to address complex organizational challenges.
          </p>

        </div>

        {/* Experience Timeline */}
        <div className="relative">

          <div className="absolute bottom-10 left-[19px] top-8 hidden w-px bg-white/10 md:block" />

          <div className="space-y-6">

            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="relative grid gap-6 border border-white/10 bg-[#102B3B]/70 p-6 transition-all duration-300 hover:border-[#42D5D0]/50 hover:bg-[#102B3B] md:grid-cols-[190px_1fr] md:gap-10 md:p-10"
                >

                  {/* Left Column */}
                  <div className="relative flex flex-row items-start gap-4 md:flex-col md:gap-5">

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-[#42D5D0]/40 bg-[#42D5D0]/10 text-[#42D5D0]">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <div>
                      <span className="block text-base font-semibold uppercase tracking-[0.1em] text-[#42D5D0]">
                        Experience {item.number}
                      </span>

                      <span className="mt-3 block text-base leading-7 text-slate-200">
                        {item.period}
                      </span>
                    </div>

                  </div>

                  {/* Right Column */}
                  <div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <span className="inline-flex items-center border border-[#42D5D0]/30 bg-[#42D5D0]/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#42D5D0]">
                          {item.category}
                        </span>

                        <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl">
                          {item.role}
                        </h3>

                        <p className="mt-3 text-lg font-semibold leading-7 text-slate-100">
                          {item.company}
                        </p>
                      </div>

                      <span className="hidden text-base font-semibold text-slate-300 sm:block">
                        {item.number} / 04
                      </span>

                    </div>

                    <p className="mt-7 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                      {item.description}
                    </p>

                    {/* Responsibilities */}
                    {item.responsibilities.length > 0 && (
                      <div className="mt-8 border-t border-white/10 pt-7">

                        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-base">
                          Key Responsibilities
                        </h4>

                        <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">

                          {item.responsibilities.map((responsibility) => (
                            <div
                              key={responsibility}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#42D5D0]" />

                              <p className="text-base leading-8 text-slate-200">
                                {responsibility}
                              </p>
                            </div>
                          ))}

                        </div>

                      </div>
                    )}

                  </div>

                </article>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-9 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Explore the academic and professional credentials.
            </h3>

            <p className="mt-3 max-w-xl text-base leading-8 text-slate-300">
              Learn more about Boimah's education, certifications,
              and continued professional development.
            </p>
          </div>

          <a
            href="#education"
            className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-[#42D5D0] transition-colors hover:text-white"
          >
            Explore Credentials
            <ArrowUpRight size={20} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Experience;
