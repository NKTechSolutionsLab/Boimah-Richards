
const metrics = [
  {
    value: "15+",
    label: "Years of Experience",
    description: "Across IT operations and business transformation",
  },
  {
    value: "100+",
    label: "Hospitals Supported",
    description: "Through healthcare supply chain operations",
  },
  {
    value: "7",
    label: "Strategic Solutions",
    description: "Developed from identified operational inefficiencies",
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
              Experience in Perspective
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#071724] sm:text-3xl">
              Experience backed by practical execution.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            Combining technical understanding with hands-on
            operational experience to address complex business challenges.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 border-y border-slate-200 sm:grid-cols-3">

          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`relative px-6 py-9 sm:px-8 lg:px-12 ${
                index !== 2
                  ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >

              {/* Accent */}
              <div className="mb-6 h-[3px] w-9 bg-[#42D5D0]" />

              {/* Number */}
              <div className="text-5xl font-semibold tracking-tight text-[#071724] sm:text-6xl">
                {metric.value}
              </div>

              {/* Label */}
              <h3 className="mt-4 text-base font-semibold text-[#102B3B]">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[270px] text-sm leading-6 text-slate-500">
                {metric.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CredibilityBar;
