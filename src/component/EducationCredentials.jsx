
import {
  GraduationCap,
  Award,
  ArrowUpRight,
  BookOpen,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const education = [
  {
    degree: "Doctor of Business Administration (DBA)",
    specialization: "Business Analytics & Operations Research",
    institution: "Liberty University",
    status: "Doctoral Candidate · In Progress · 2026",
    icon: GraduationCap,
    highlight: true,
  },
  {
    degree: "Master of Business Administration (MBA)",
    specialization: "Information Technology Management",
    institution: "Southern New Hampshire University",
    detail: "Concentration: Supply Chain & IT Management",
    status: "Completed · GPA 3.9",
    icon: BookOpen,
  },
  {
    degree: "Master of Science (M.S.)",
    specialization: "Management Information Systems",
    institution: null,
    status: "Completed",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Science (B.S.)",
    specialization: "Management Information Systems",
    institution: "National American University · Sioux Falls, SD",
    status: "Completed",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    name: "Certified ScrumMaster",
    abbreviation: "CSM",
    issuer: "Scrum Alliance",
  },
  {
    name: "Certified Scrum Product Owner",
    abbreviation: "CSPO",
    issuer: "Scrum Alliance",
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

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#42D5D0]">
                Education & Credentials
              </span>
            </div>

            <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Academic knowledge.
              <br />
              <span className="text-[#42D5D0]">
                Professional development.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-8 text-slate-300 lg:ml-auto">
            A multidisciplinary academic background spanning information
            systems, technology management, business analytics, and
            operations, complemented by professional Agile certifications.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <GraduationCap size={25} className="text-[#42D5D0]" />

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Academic Background
              </h3>
            </div>

            <div className="space-y-5">

              {education.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.degree}
                    className={`border p-6 transition-all duration-300 sm:p-8 ${
                      item.highlight
                        ? "border-[#42D5D0]/40 bg-[#102B3B]"
                        : "border-white/10 bg-[#102B3B]/60 hover:border-[#42D5D0]/40"
                    }`}
                  >

                    <div className="flex items-start gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#42D5D0]/30 bg-[#42D5D0]/10 text-[#42D5D0]">
                        <Icon size={24} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#42D5D0]">
                            Qualification 0{index + 1}
                          </span>

                          {item.highlight && (
                            <span className="border border-[#42D5D0]/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#42D5D0]">
                              In Progress
                            </span>
                          )}
                        </div>

                        <h4 className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">
                          {item.degree}
                        </h4>

                        <p className="mt-3 text-base leading-7 text-slate-200 sm:text-lg">
                          {item.specialization}
                        </p>

                        {item.institution && (
                          <p className="mt-3 text-base leading-7 text-slate-300">
                            {item.institution}
                          </p>
                        )}

                        {item.detail && (
                          <p className="mt-2 text-base leading-7 text-slate-300">
                            {item.detail}
                          </p>
                        )}

                        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                          <BadgeCheck
                            size={19}
                            className="shrink-0 text-[#42D5D0]"
                          />

                          <span className="text-base font-medium text-slate-200">
                            {item.status}
                          </span>
                        </div>

                      </div>
                    </div>

                  </article>
                );
              })}

            </div>
          </div>

          {/* Certifications & Military Service */}
          <div>

            {/* Certifications */}
            <div className="mb-8 flex items-center gap-3">
              <Award size={25} className="text-[#42D5D0]" />

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-5">

              {certifications.map((cert) => (
                <article
                  key={cert.abbreviation}
                  className="border border-white/10 bg-[#102B3B]/70 p-6 transition-colors duration-300 hover:border-[#42D5D0]/40 sm:p-7"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <span className="text-base font-bold uppercase tracking-[0.16em] text-[#42D5D0]">
                        {cert.abbreviation}
                      </span>

                      <h4 className="mt-3 text-lg font-semibold leading-snug text-white sm:text-xl">
                        {cert.name}
                      </h4>

                      <p className="mt-3 text-base leading-7 text-slate-300">
                        Issued by {cert.issuer}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#42D5D0]/30 text-[#42D5D0]">
                      <Award size={24} />
                    </div>

                  </div>

                </article>
              ))}

            </div>

            {/* Military Service */}
            <div className="mt-10">

              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck size={25} className="text-[#42D5D0]" />

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  Military Service
                </h3>
              </div>

              <article className="border border-white/10 bg-[#102B3B]/70 p-6 sm:p-7">

                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#42D5D0]">
                  United States Navy Reserve
                </span>

                <h4 className="mt-4 text-xl font-semibold leading-snug text-white">
                  U.S. Navy Reserve Veteran
                </h4>

                <p className="mt-3 text-base leading-7 text-slate-300">
                  Honorable Discharge
                </p>

              </article>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-base leading-8 text-slate-300">
            Combining academic preparation, professional certifications,
            and practical experience across business and technology.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 text-base font-semibold text-[#42D5D0] transition-colors hover:text-white"
          >
            Connect with Boimah
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default EducationCredentials;
