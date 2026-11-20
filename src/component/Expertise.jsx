
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
    title: "Supply Chain & Operations",
    description:
      "Improving inventory management, shipment coordination, supplier performance and operational workflows across complex distribution environments.",
    icon: Truck,
  },
  {
    number: "02",
    title: "Business Systems Analysis",
    description:
      "Bridging business requirements and technical execution through process documentation, system integration, validation and cross-functional collaboration.",
    icon: Network,
  },
  {
    number: "03",
    title: "Data & Business Intelligence",
    description:
      "Using SQL, Python and data analytics to examine complex datasets, identify operational patterns and support informed business decisions.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Process Optimization",
    description:
      "Identifying workflow inefficiencies and applying Lean, Kaizen and Agile methodologies to improve operational performance.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "AI Strategy & Workflow Automation",
    description:
      "Exploring practical enterprise AI applications through model evaluation, prompt engineering, fine-tuning and workflow automation.",
    icon: BrainCircuit,
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
                Core Expertise
              </span>
            </div>

            <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Connecting strategy, technology and{" "}
              <span className="text-[#42D5D0]">
                operational performance.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-8 text-slate-400 lg:ml-auto">
            A multidisciplinary approach to solving business challenges,
            connecting operational knowledge with technology, analytics
            and continuous improvement.
          </p>

        </div>

        {/* Expertise Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {expertiseAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex min-h-[290px] flex-col border border-white/10 bg-[#102B3B]/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#42D5D0]/50 hover:bg-[#102B3B] md:p-8"
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
                <h3 className="max-w-[300px] text-xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Area of Expertise
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
            Have a business challenge involving operations, technology
            or data? Let's explore where meaningful improvements can begin.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 text-sm font-semibold text-[#42D5D0] transition-colors hover:text-white"
          >
            Discuss a Business Challenge
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Expertise;
