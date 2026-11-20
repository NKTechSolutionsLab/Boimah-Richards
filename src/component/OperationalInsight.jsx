
import {
  Search,
  ChartNoAxesCombined,
  Workflow,
  Target,
  ArrowUpRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Observe",
    description:
      "Understand existing operations, workflows, systems and stakeholder requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Examine operational data, identify bottlenecks and uncover process inefficiencies.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Translate findings into structured solutions using process improvement and technology.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Measure",
    description:
      "Evaluate improvements against operational objectives and business requirements.",
    icon: Target,
  },
];

const OperationalInsight = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#F5F8FA] py-24 text-[#071724] md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#168E91]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#168E91]">
              A Practical Approach
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Turning complex challenges into{" "}
            <span className="text-[#168E91]">
              structured solutions.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Effective improvement starts with understanding how a business
            operates. By connecting process knowledge, systems and data,
            opportunities for meaningful change become clearer.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: Visual */}
          <div className="relative min-h-[430px] overflow-hidden bg-[#102B3B]">

            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=85"
              alt="Organized supply chain warehouse operations"
              className="absolute inset-0 h-full w-full object-cover opacity-65"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071724] via-[#071724]/35 to-transparent" />

            <div className="absolute left-7 top-7 sm:left-9 sm:top-9">
              <span className="border border-white/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Operational Perspective
              </span>
            </div>

            <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-9 sm:right-9">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42D5D0]">
                From Identification to Improvement
              </span>

              <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Better visibility leads to better decisions.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Bringing together operational understanding, analytical
                thinking and technology-driven execution.
              </p>

            </div>
          </div>

          {/* Right: Process */}
          <div className="flex flex-col justify-center">

            <div className="mb-9">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#168E91]">
                The Improvement Cycle
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#071724] sm:text-3xl">
                A clear path from insight to action.
              </h3>
            </div>

            <div className="relative space-y-8">

              {/* Vertical Timeline */}
              <div className="absolute bottom-8 left-[21px] top-5 w-px bg-slate-200" />

              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative flex gap-5"
                  >

                    {/* Icon */}
                    <div className="relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center border border-slate-200 bg-white text-[#168E91] transition-all duration-300 group-hover:border-[#42D5D0] group-hover:bg-[#E4F8F7]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 border-b border-slate-200 pb-7">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-[10px] font-semibold tracking-widest text-[#168E91]">
                          {step.number}
                        </span>

                        <h4 className="text-lg font-semibold text-[#071724]">
                          {step.title}
                        </h4>
                      </div>

                      <p className="max-w-md text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </div>

        {/* Achievement Strip */}
        <div className="mt-20 grid gap-8 border-t border-slate-200 pt-10 md:grid-cols-[1fr_auto] md:items-center">

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#168E91]">
              Practical Application
            </span>

            <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-[#071724] sm:text-3xl">
              Identifying inefficiencies.
              <br />
              Developing actionable solutions.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              In his supply chain work, Boimah identified 18–20 process
              inefficiencies and translated the findings into 7 strategic
              solutions focused on workflow performance and cost efficiency.
            </p>
          </div>

          <div className="flex items-center gap-5 border-l-2 border-[#42D5D0] pl-6 md:min-w-[190px]">

            <div>
              <span className="block text-4xl font-semibold tracking-tight text-[#071724]">
                18–20
              </span>

              <span className="mt-2 block text-xs leading-5 text-slate-500">
                Process inefficiencies identified
              </span>

              <span className="mt-5 block text-4xl font-semibold tracking-tight text-[#168E91]">
                7
              </span>

              <span className="mt-2 block text-xs leading-5 text-slate-500">
                Strategic solutions developed
              </span>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5">

          <p className="text-sm text-slate-500">
            Explore the professional experience behind this approach.
          </p>

          <a
            href="#experience"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#168E91] transition-colors hover:text-[#071724]"
          >
            Explore Experience
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default OperationalInsight;
    