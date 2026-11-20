
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Boxes,
  Workflow,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    company: "Richards Digital Consultancy & Enterprises",
    role: "Business Consultant",
    period: "2024 — Present",
    icon: BriefcaseBusiness,
    description:
      "Leading business development, technical consultancy and AI workflow initiatives for commercial and enterprise clients.",
    responsibilities: [
      "Business development strategy and client account acquisition",
      "AI model evaluation, prompt engineering and fine-tuning",
      "Government contract sourcing and bid preparation",
      "Supplier quote alignment and NSN inventory management",
    ],
    category: "Business Consulting & AI",
  },
  {
    number: "02",
    company: "Cardinal Health",
    role: "Supply Chain Operations Specialist",
    period: "March 2022 — Present",
    icon: Boxes,
    description:
      "Supporting healthcare distribution operations and process improvement initiatives across critical medical supply networks.",
    responsibilities: [
      "Supporting supply chain operations serving 100+ hospitals",
      "Identifying operational inefficiencies and improvement opportunities",
      "Applying Lean and Kaizen methodologies to inventory workflows",
      "Collaborating with cross-functional teams on operational improvements",
    ],
    category: "Supply Chain & Operations",
  },
  {
    number: "03",
    company: "State Farm & Medtronic, Inc.",
    role: "Business Systems Analyst",
    period: "Dates not specified",
    icon: Building2,
    description:
      "Bridging business requirements and technical execution across healthcare and financial services environments.",
    responsibilities: [
      "Gathering business requirements and translating user stories",
      "Supporting system integrations and technical coordination",
      "Documenting operational processes and requirements",
      "Conducting system validation and quality assurance testing",
    ],
    category: "Business Systems & Analysis",
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

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42D5D0]">
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

          <p className="max-w-[500px] text-base leading-8 text-slate-400 lg:ml-auto">
            Bringing together experience in consulting, healthcare
            supply chain operations and enterprise business systems
            to address complex organizational challenges.
          </p>

        </div>

        {/* Experience Timeline */}
        <div className="relative">

          <div className="absolute bottom-10 left-[19px] top-8 hidden w-px bg-white/10 md:block" />

          <div className="space-y-5">

            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="relative grid gap-6 border border-white/10 bg-[#102B3B]/70 p-6 transition-all duration-300 hover:border-[#42D5D0]/50 hover:bg-[#102B3B] md:grid-cols-[180px_1fr] md:gap-10 md:p-9"
                >

                  {/* Left Column */}
                  <div className="relative flex flex-row items-start gap-4 md:flex-col md:gap-5">

                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-[#42D5D0]/40 bg-[#42D5D0]/10 text-[#42D5D0]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#42D5D0]">
                        Experience {item.number}
                      </span>

                      <span className="mt-2 block text-xs leading-5 text-slate-400">
                        {item.period}
                      </span>
                    </div>

                  </div>

                  {/* Right Column */}
                  <div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <span className="inline-flex items-center border border-[#42D5D0]/30 bg-[#42D5D0]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#42D5D0]">
                          {item.category}
                        </span>

                        <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {item.role}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-slate-300">
                          {item.company}
                        </p>
                      </div>

                      <span className="hidden text-xs font-semibold text-slate-500 sm:block">
                        {item.number} / 03
                      </span>

                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-7 border-t border-white/10 pt-6">

                      <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Key Responsibilities
                      </h4>

                      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">

                        {item.responsibilities.map((responsibility) => (
                          <div
                            key={responsibility}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#42D5D0]" />

                            <p className="text-xs leading-6 text-slate-300">
                              {responsibility}
                            </p>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

        {/* Additional Experience */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-start gap-4">
            <Workflow
              className="mt-1 shrink-0 text-[#42D5D0]"
              size={21}
            />

            <div>
              <h3 className="text-sm font-semibold text-white">
                Additional experience in Agile delivery
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Scrum Master experience, including sprint planning,
                backlog refinement, retrospectives and continuous
                delivery improvement.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#42D5D0] transition-colors hover:text-white"
          >
            Connect with Boimah
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Experience;
