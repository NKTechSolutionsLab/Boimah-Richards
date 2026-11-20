
import {
  GraduationCap,
  Award,
  ArrowUpRight,
  BookOpen,
  BadgeCheck,
} from "lucide-react";

const education = [
  {
    degree: "MBA in Information Technology Management",
    institution: "Southern New Hampshire University",
    period: "June 2025 — September 2026",
    result: "Grade A",
    icon: GraduationCap,
  },
  {
    degree: "MBA in Operations & Supply Chain Management",
    institution: "Southern New Hampshire University",
    period: "May 2025 — September 2026",
    result: "GPA 4.0",
    icon: BookOpen,
  },
];

const certifications = [
  {
    name: "Certified ScrumMaster",
    abbreviation: "CSM",
    description: "Agile Project Delivery",
  },
  {
    name: "Certified Scrum Product Owner",
    abbreviation: "CSPO",
    description: "Product Ownership & Management",
  },
];

const EducationCredentials = () => {
  return (
    <section
      id="education"
      className="bg-[#071724] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#42D5D0]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42D5D0]">
                Education & Credentials
              </span>
            </div>

            <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Built on knowledge.
              <br />
              <span className="text-[#42D5D0]">
                Strengthened through practice.
              </span>
            </h2>
          </div>

          <p className="max-w-[500px] text-base leading-8 text-slate-400 lg:ml-auto">
            Academic preparation in information technology and
            supply chain management, complemented by professional
            credentials in Agile project delivery.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* Education */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <GraduationCap size={21} className="text-[#42D5D0]" />

              <h3 className="text-lg font-semibold text-white">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">

              {education.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.degree}
                    className="border border-white/10 bg-[#102B3B]/70 p-6 transition-colors duration-300 hover:border-[#42D5D0]/40 sm:p-8"
                  >

                    <div className="flex items-start gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#42D5D0]/30 bg-[#42D5D0]/10 text-[#42D5D0]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#42D5D0]">
                          Postgraduate Qualification 0{index + 1}
                        </span>

                        <h4 className="mt-3 text-lg font-semibold leading-snug text-white sm:text-xl">
                          {item.degree}
                        </h4>

                        <p className="mt-3 text-sm text-slate-300">
                          {item.institution}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4">

                          <span className="text-xs text-slate-400">
                            {item.period}
                          </span>

                          <span className="flex items-center gap-2 text-xs font-medium text-[#42D5D0]">
                            <BadgeCheck size={14} />
                            {item.result}
                          </span>

                        </div>

                      </div>
                    </div>

                  </article>
                );
              })}

            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <Award size={21} className="text-[#42D5D0]" />

              <h3 className="text-lg font-semibold text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-4">

              {certifications.map((cert) => (
                <article
                  key={cert.abbreviation}
                  className="border border-white/10 bg-[#102B3B]/70 p-6 transition-colors duration-300 hover:border-[#42D5D0]/40 sm:p-7"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#42D5D0]">
                        {cert.abbreviation}
                      </span>

                      <h4 className="mt-3 text-lg font-semibold leading-snug text-white">
                        {cert.name}
                      </h4>

                      <p className="mt-2 text-sm text-slate-400">
                        {cert.description}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#42D5D0]/30 text-[#42D5D0]">
                      <Award size={22} />
                    </div>

                  </div>

                </article>
              ))}

            </div>

            {/* Supporting Note */}
            <div className="mt-6 border-l-2 border-[#42D5D0] bg-[#102B3B]/40 p-5">
              <p className="text-sm leading-7 text-slate-400">
                Combining technology management, supply chain
                knowledge and Agile practices to support business
                and operational objectives.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-9 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Explore how academic knowledge and professional
            experience come together in practical business environments.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#42D5D0] transition-colors hover:text-white"
          >
            Connect with Boimah
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default EducationCredentials;
