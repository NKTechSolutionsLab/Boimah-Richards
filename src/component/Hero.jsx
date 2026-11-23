
import { ArrowUpRight, MoveDown } from "lucide-react";

const Hero = () => {
  const focusAreas = [
    "Supply Chain & Operations",
    "Business Systems Analysis",
    "Data Analytics & AI",
  ];

  const expertiseTags = [
    "SQL & Python Analytics",
    "AI Workflow Evaluation",
    "Process Optimization",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#071724] text-white"
    >
      {/* Background Accents */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#42D5D0]/5 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-14 lg:py-24">

        {/* Left Content */}
        <div className="relative z-10">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#42D5D0]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42D5D0]">
              Business Systems · Supply Chain · Data Analytics
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[680px] text-4xl font-semibold leading-[1.13] tracking-tight sm:text-5xl md:text-6xl lg:text-[60px]">
            Business Systems, Supply Chain &
            <span className="text-[#42D5D0]">
              {" "}Data Analytics Leader.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[590px] text-base leading-8 text-slate-300 sm:text-lg">
            I bring together business systems, operational strategy,
            data analytics, and AI-enabled workflow evaluation to help
            organizations improve processes, strengthen decision-making,
            and drive operational efficiency.
          </p>

          {/* Professional Availability */}
          <div className="mt-7 border-l-2 border-[#42D5D0] pl-5">
            <p className="text-sm font-semibold text-white">
              Open to Full-Time & Contract Opportunities
            </p>
            <p className="mt-2 max-w-[520px] text-sm leading-6 text-slate-400">
              Remote opportunities nationwide, as well as hybrid and
              regional onsite roles across Metro Atlanta.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="#experience"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-md bg-[#42D5D0] px-7 py-4 text-sm font-semibold text-[#071724] transition-all duration-300 hover:bg-[#65e3de]"
            >
              Explore My Experience
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#expertise"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-md border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#42D5D0] hover:text-[#42D5D0]"
            >
              Explore Consulting Services
              <ArrowUpRight size={17} />
            </a>

          </div>

          {/* Expertise Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-7">
            {expertiseTags.map((item) => (
              <span
                key={item}
                className="text-xs font-medium tracking-wide text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">

          {/* Main Image */}
          <div className="relative h-[390px] overflow-hidden rounded-sm border border-white/10 sm:h-[470px]">

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
              alt="Modern supply chain warehouse and distribution operations"
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071724]/95 via-[#071724]/25 to-[#071724]/10" />

            {/* Image Caption */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42D5D0]">
                Strategy · Analytics · Operations
              </span>

              <h2 className="mt-3 max-w-sm text-2xl font-medium leading-snug text-white sm:text-3xl">
                Turning data into decisions.
                <br />
                Strategy into results.
              </h2>
            </div>

          </div>

          {/* Floating Information Card */}
          <div className="absolute -bottom-7 -left-2 w-[250px] border border-white/10 bg-[#102B3B] p-5 shadow-2xl sm:-left-8 sm:w-[285px] sm:p-6">

            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Areas of Expertise
              </span>

              <span className="h-2 w-2 rounded-full bg-[#42D5D0]" />
            </div>

            <div className="space-y-3">
              {focusAreas.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="text-xs font-semibold text-[#42D5D0]">
                    0{index + 1}
                  </span>

                  <span className="text-xs font-medium text-white/85 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Decorative Accent */}
          <div className="absolute -right-3 -top-3 -z-10 h-24 w-24 border-r border-t border-[#42D5D0]/50" />

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-3 px-6 pb-8 text-slate-500">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        <MoveDown size={14} className="text-[#42D5D0]" />
      </div>

    </section>
  );
};

export default Hero;
