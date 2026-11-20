
import {
  Ear,
  Target,
  Users,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Listen & Understand",
    description:
      "Start by understanding business priorities, stakeholder expectations and the challenges affecting day-to-day operations.",
    icon: Ear,
  },
  {
    number: "02",
    title: "Align Strategy",
    description:
      "Connect business objectives with technology requirements and operational realities to establish a clear direction.",
    icon: Target,
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "Work across teams and stakeholders, bringing business and technical perspectives together to develop practical solutions.",
    icon: Users,
  },
  {
    number: "04",
    title: "Adapt & Improve",
    description:
      "Remain adaptable as requirements evolve, using feedback and continuous improvement to strengthen outcomes.",
    icon: RefreshCw,
  },
];

const Approach = () => {
  return (
    <section
      id="approach"
      className="bg-[#F5F8FA] py-24 text-[#071724] md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#168E91]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#168E91]">
                Working Philosophy
              </span>
            </div>

            <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              The right solutions begin with{" "}
              <span className="text-[#168E91]">
                understanding.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-8 text-slate-600 lg:ml-auto">
            Every organization has its own priorities, people and
            operational challenges. A collaborative and adaptable
            approach helps connect those realities with practical
            business and technology solutions.
          </p>

        </div>

        {/* Principles */}
        <div className="relative mt-16">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative"
                >

                  {/* Number and Icon */}
                  <div className="relative z-10 mb-8 flex items-center justify-between">

                    <span className="flex h-14 w-14 items-center justify-center border border-slate-200 bg-[#F5F8FA] text-[#168E91] transition-all duration-300 group-hover:border-[#42D5D0] group-hover:bg-[#E5F7F6]">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>

                    <span className="text-xs font-semibold tracking-widest text-slate-400">
                      {item.number}
                    </span>

                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold tracking-tight text-[#071724]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {/* Accent */}
                  <div className="mt-7 h-[2px] w-9 bg-[#42D5D0] transition-all duration-300 group-hover:w-16" />

                </article>
              );
            })}

          </div>

        </div>

        {/* Closing Message */}
        <div className="mt-20 grid gap-8 border-t border-slate-200 pt-10 md:grid-cols-2 md:items-center">

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#168E91]">
              Business Meets Technology
            </span>

            <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-snug text-[#071724] sm:text-3xl">
              Bringing people, processes and technology into alignment.
            </h3>
          </div>

          <div className="md:ml-auto">
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Combining active listening, adaptability and
              cross-functional collaboration to address business
              and operational challenges.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#168E91] transition-colors hover:text-[#071724]"
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Approach;
