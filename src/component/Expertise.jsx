
import {
  Truck,
  Network,
  BarChart3,
  Workflow,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const expertiseAreas = [
  {
    number: "01",
    title: "Supply Chain & Source-to-Pay Optimization",
    description:
      "Optimizing supply chain and source-to-pay processes through improved procurement workflows, supplier evaluation, inventory management, and operational coordination.",
    icon: Truck,
  },
  {
    number: "02",
    title: "Business Intelligence & Data Analytics",
    description:
      "Transforming complex business data into actionable insights using SQL, Python, Pandas, NumPy, Power BI, and Advanced Excel/VBA. Building automated KPI dashboards and reporting solutions to support better decision-making.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "AI Model Evaluation & Workflow Automation",
    description:
      "Evaluating AI models, applying prompt engineering, and testing operational workflows to improve output quality, consistency, and the practical application of AI in business processes.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Government & Commercial Procurement",
    description:
      "Supporting procurement operations through DLA/DIBBS sourcing, National Stock Number (NSN) logistics, supplier evaluation, quote preparation, and federal bid-readiness processes.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Agile Product Ownership & Business Systems Analysis",
    description:
      "Bridging business and technology through requirements analysis, user stories, User Acceptance Testing (UAT), systems integration, and Agile product ownership.",
    icon: Network,
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="bg-[#071724] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#42D5D0]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42D5D0]">
                Consulting & Core Services
              </span>
            </div>

            <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Connecting business operations with{" "}
              <span className="text-[#42D5D0]">
                technology and analytics.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-8 text-slate-400 lg:ml-auto">
            Combining supply chain expertise, business systems analysis,
            data intelligence, and applied AI to address operational
            challenges and support enterprise improvement.
          </p>

        </div>

        {/* Expertise Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {expertiseAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex min-h-[310px] flex-col border border-white/10 bg-[#102B3B]/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#42D5D0]/50 hover:bg-[#102B3B] md:p-8"
              >

                {/* Top Row */}
                <div className="mb-9 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#42D5D0]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 text-[#42D5D0] transition-all duration-300 group-hover:border-[#42D5D0] group-hover:bg-[#42D5D0] group-hover:text-[#071724]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="max-w-[320px] text-xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Core Capability
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-[#42D5D0] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-9 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Explore how business systems, data analytics, procurement,
            and operational expertise can support your organization's goals.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 text-sm font-semibold text-[#42D5D0] transition-colors hover:text-white"
          >
            Discuss Consulting Opportunities
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Expertise;
