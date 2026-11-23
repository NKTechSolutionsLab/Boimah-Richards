
const experienceHighlights = [
  {
    value: "2022–2026",
    label: "Healthcare Supply Chain",
    organization: "Cardinal Health",
    description:
      "Built SQL queries, WMS tracking reports, and automated Excel/VBA dashboards to support inventory visibility, fulfillment tracking, and vendor performance monitoring.",
  },
  {
    value: "2024–Present",
    label: "AI & Business Operations",
    organization: "Richards Digital Consultancy Enterprises, LLC",
    description:
      "Leading AI model evaluation, prompt engineering, structured workflow testing, and business process improvement across operational workflows.",
  },
  {
    value: "2026",
    label: "Federal Procurement Analytics",
    organization: "DLA / Vivian Contracting",
    description:
      "Developed procurement evaluation and quote-preparation workflows involving supplier comparisons, NSN cross-referencing, compliance checks, and bid readiness.",
  },
];

const CredibilityBar = () => {
  return (
    <section className="relative border-b border-slate-200 bg-[#F5F8FA]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14 lg:py-20">

        {/* Section Intro */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#168E91]">
              Career Highlights
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#071724] sm:text-3xl">
              Experience grounded in practical execution.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            Applying business systems, supply chain knowledge, data
            analytics, and AI evaluation across complex operational
            environments.
          </p>
        </div>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 border-y border-slate-200 md:grid-cols-3">

          {experienceHighlights.map((item, index) => (
            <div
              key={item.label}
              className={`relative px-6 py-9 sm:px-8 lg:px-10 ${
                index !== 2
                  ? "border-b border-slate-200 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* Accent */}
              <div className="mb-6 h-[3px] w-9 bg-[#42D5D0]" />

              {/* Period */}
              <div className="min-h-[48px] text-3xl font-semibold tracking-tight text-[#071724] sm:text-4xl">
                {item.value}
              </div>

              {/* Label */}
              <h3 className="mt-4 text-base font-semibold text-[#102B3B]">
                {item.label}
              </h3>

              {/* Organization */}
              <p className="mt-2 text-sm font-semibold leading-5 text-[#168E91]">
                {item.organization}
              </p>

              {/* Description */}
              <p className="mt-4 max-w-[340px] text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
