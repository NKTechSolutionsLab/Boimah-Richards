
import {
  BarChart3,
  ClipboardCheck,
  CalendarDays,
  FileSpreadsheet,
} from "lucide-react";

const appliedProjects = [
  {
    number: "01",
    category: "Data Science & Analytics",
    title: "BCG X Data Science Simulation",
    organization: "BCG X",
    icon: BarChart3,
    description:
      "Applied data science concepts to business challenges, focusing on predictive modelling and data-driven analysis.",
    highlights: [
      "Predictive modelling",
      "Data-driven business recommendations",
    ],
  },
  {
    number: "02",
    category: "Management Consulting & Audit",
    title: "PwC US Management Consulting & Audit Simulations",
    organization: "PwC US",
    icon: ClipboardCheck,
    description:
      "Explored consulting and audit workflows through structured business analysis and operational assessment.",
    highlights: [
      "Process walkthroughs",
      "Internal control testing",
      "Operational transformation analysis",
    ],
  },
  {
    number: "03",
    category: "Project Management",
    title: "Siemens Mobility Project Manager Simulation",
    organization: "Siemens Mobility",
    icon: CalendarDays,
    description:
      "Worked through project management scenarios involving planning, scheduling, milestone governance, and stakeholder delivery.",
    highlights: [
      "End-to-end project scheduling",
      "Milestone governance",
      "Stakeholder delivery",
    ],
  },
  {
    number: "04",
    category: "Financial & Data Modelling",
    title: "Advanced Excel & VBA Modelling",
    organization: "Applied Analytics",
    icon: FileSpreadsheet,
    description:
      "Developed automated reporting dashboard capabilities using Excel macros and dynamic data processing logic.",
    highlights: [
      "Automated reporting dashboards",
      "Excel macros and VBA",
      "Dynamic lookup and aggregation logic",
    ],
  },
];

const AppliedProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[#F5F8FA] py-24 text-[#071724] md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#168E91]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#168E91]">
                Applied Learning & Projects
              </span>
            </div>

            <h2 className="max-w-[680px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Applying knowledge through{" "}
              <span className="text-[#168E91]">
                practical experience.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-8 text-slate-600 lg:ml-auto">
            Selected data science, management consulting, project
            management, and technical modelling simulations that
            complement Boimah's professional background.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2">

          {appliedProjects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group flex h-full flex-col border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168E91]/40 hover:shadow-xl hover:shadow-[#071724]/5 md:p-9"
              >

                {/* Card Header */}
                <div className="mb-8 flex items-center justify-between">

                  <span className="text-sm font-semibold tracking-[0.15em] text-[#168E91]">
                    PROJECT {project.number}
                  </span>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-200 bg-[#F5F8FA] text-[#168E91] transition-all duration-300 group-hover:border-[#42D5D0] group-hover:bg-[#E4F8F7]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                </div>

                {/* Category */}
                <p className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-[#168E91]">
                  {project.category}
                </p>

                {/* Project Title */}
                <h3 className="mt-3 text-xl font-semibold leading-snug text-[#071724] sm:text-2xl">
                  {project.title}
                </h3>

                {/* Organization */}
                <p className="mt-3 text-base font-semibold text-slate-600">
                  {project.organization}
                </p>

                {/* Description */}
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-8 border-t border-slate-200 pt-6">

                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#168E91]">
                    Applied Focus
                  </h4>

                  <div className="space-y-4">

                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#42D5D0]" />

                        <p className="text-base leading-7 text-slate-600">
                          {highlight}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Bottom Label */}
                <div className="mt-auto border-t border-slate-200 pt-6 mt-8">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Applied Experience
                  </span>
                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom Information */}
        <div className="mt-16 flex flex-col gap-5 border-t border-slate-200 pt-9 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-base leading-8 text-slate-600">
            These applied simulations and technical projects complement
            professional experience across business operations,
            analytics, and technology.
          </p>

          <a
            href="#education"
            className="inline-flex w-fit shrink-0 items-center gap-3 text-base font-semibold text-[#168E91] transition-colors hover:text-[#071724]"
          >
            Explore Credentials
          </a>

        </div>

      </div>
    </section>
  );
};

export default AppliedProjects;
