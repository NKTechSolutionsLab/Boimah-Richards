
import {
  Truck,
  Workflow,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const caseStudies = [
  {
    number: "01",
    category: "Healthcare Supply Chain",
    title: "Clinical Inventory Optimization",
    organization: "Cardinal Health",
    period: "2022–2026",
    icon: Truck,
    challenge:
      "High-volume medical supply distribution across hospital networks in Georgia and the Southeast required better visibility into stock levels, vendor lead times, and priority clinical shipments to prevent stockouts and delivery delays.",
    action:
      "Developed multi-system SQL queries, Warehouse Management System (WMS) tracking reports, and automated Excel/VBA analytics dashboards. Collaborated with IT, clinical, and logistics teams to standardize exception-handling workflows.",
    impact:
      "Improved on-time clinical delivery reliability, accelerated bottleneck identification through automated exception reporting, and strengthened cross-functional inventory control.",
  },
  {
    number: "02",
    category: "Federal Procurement Analytics",
    title: "Procurement & Bid Readiness Workflow",
    organization: "DLA / Vivian Contracting",
    period: "2026",
    icon: Workflow,
    challenge:
      "Responding to Defense Logistics Agency (DLA) and DIBBS solicitations required rapid supplier vetting, National Stock Number (NSN) cross-referencing, margin and cost modelling, and regulatory compliance under tight submission deadlines.",
    action:
      "Designed a structured procurement evaluation and quote-preparation framework, standardizing supplier comparison matrices, compliance checklists, and pre-submission peer-review workflows across federal solicitations, including SPE7L1-26-U-0535.",
    impact:
      "Streamlined end-to-end bid turnaround, established 100% compliance verification prior to federal submission, and developed a repeatable sourcing playbook for government contract opportunities.",
  },
  {
    number: "03",
    category: "Enterprise AI & Automation",
    title: "AI Workflow Evaluation & Process Automation",
    organization: "Richards Digital Consultancy Enterprises, LLC",
    period: "2024–Present",
    icon: BrainCircuit,
    challenge:
      "Organizations adopting AI-assisted data and operational workflows needed rigorous quality controls, structured prompt engineering, and business-rule validation to ensure outputs were accurate and auditable.",

    action:
      "Led model evaluation, prompt engineering, and structured workflow testing across complex business and operational datasets, translating stakeholder requirements into clear acceptance criteria and automated reporting templates.",

    impact:
      "Reduced manual review cycles, improved output consistency across analytical tasks, and established repeatable governance standards for AI-assisted business operations.",
  },
];

const OperationalInsight = () => {
  return (
    <section
      id="case-studies"
      className="overflow-hidden bg-[#F5F8FA] py-24 text-[#071724] md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#168E91]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#168E91]">
                Selected Case Studies
              </span>
            </div>

            <h2 className="max-w-[680px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Applying expertise to{" "}
              <span className="text-[#168E91]">
                real business challenges.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-8 text-slate-600 lg:ml-auto">
            Selected work across healthcare supply chains, federal
            procurement, and enterprise AI workflows, demonstrating
            how analytical thinking and practical execution address
            complex operational requirements.
          </p>

        </div>

        {/* Case Studies */}
        <div className="grid gap-6 lg:grid-cols-3">

          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <article
                key={study.number}
                className="group flex h-full flex-col border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#168E91]/40 hover:shadow-xl hover:shadow-[#071724]/5 md:p-8"
              >

                {/* Card Header */}
                <div className="mb-7 flex items-start justify-between">

                  <div>
                    <span className="text-sm font-semibold tracking-[0.15em] text-[#168E91]">
                      CASE STUDY {study.number}
                    </span>

                    <p className="mt-3 text-[13px] font-semibold uppercase leading-5 tracking-[0.1em] text-slate-500">
                      {study.category}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-200 bg-[#F5F8FA] text-[#168E91] transition-all duration-300 group-hover:border-[#42D5D0] group-hover:bg-[#E4F8F7]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-[21px] font-semibold leading-snug text-[#071724] sm:text-[22px]">
                  {study.title}
                </h3>

                {/* Organization */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-5">
                  <span className="text-[15px] font-semibold leading-6 text-[#168E91]">
                    {study.organization}
                  </span>

                  <span className="text-sm font-medium text-slate-600">
                    {study.period}
                  </span>
                </div>

                {/* Challenge */}
                <div className="mt-7">
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#168E91]">
                    The Challenge
                  </h4>

                  <p className="mt-3 text-[15px] leading-[1.8] text-slate-700">
                    {study.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="mt-7">
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#168E91]">
                    The Approach
                  </h4>

                  <p className="mt-3 text-[15px] leading-[1.8] text-slate-700">
                    {study.action}
                  </p>
                </div>

                {/* Impact */}
                <div className="mt-auto pt-8">
                  <div className="border-l-[3px] border-[#42D5D0] bg-[#F5F8FA] p-5">
                    <h4 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#168E91]">
                      The Impact
                    </h4>

                    <p className="mt-3 text-[15px] leading-[1.8] text-[#102B3B]">
                      {study.impact}
                    </p>
                  </div>
                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-5 border-t border-slate-200 pt-9 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#168E91]">
              Professional Background
            </span>

            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-600">
              Explore the professional experience and technical background
              behind these projects.
            </p>
          </div>

          <a
            href="#experience"
            className="inline-flex w-fit shrink-0 items-center gap-3 text-[15px] font-semibold text-[#168E91] transition-colors hover:text-[#071724]"
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
