
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  BriefcaseBusiness,
} from "lucide-react";

const CONTACT_EMAIL = "boimahrichards@fuller.edu";
const CONTACT_PHONE = "+14708868955";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/boimah-richards-mba-9346a3246/";

const LinkedInMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.564v11.452H3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const ContactCTA = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone =
      formData.get("phone")?.toString().trim() || "Not provided";
    const enquiryType = formData.get("enquiryType")?.toString();
    const message = formData.get("message")?.toString().trim();

    const subject = encodeURIComponent(
      `${enquiryType} | Enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Hello Boimah,\n\n` +
        `${message}\n\n` +
        `------------------------------\n` +
        `Contact Details\n` +
        `------------------------------\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Enquiry Type: ${enquiryType}\n`
    );

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="bg-[#F5F8FA] px-6 py-24 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#168E91]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#168E91]">
              Get in Touch
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#071724] sm:text-4xl md:text-5xl">
            Let's start a{" "}
            <span className="text-[#168E91]">
              conversation.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Whether you're exploring career opportunities, consulting
            engagements, or potential collaborations, Boimah welcomes
            meaningful professional conversations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid items-stretch gap-7 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left: Contact Information */}
          <div className="relative overflow-hidden bg-[#071724] p-7 text-white sm:p-10">

            {/* Background Accent */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#42D5D0]/10 blur-[80px]" />

            <div className="relative z-10">

              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#42D5D0]">
                Contact Information
              </span>

              <h3 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl">
                Let's connect and explore what's possible.
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-300">
                Reach out directly or share your enquiry using the
                contact form. Boimah welcomes meaningful professional
                conversations.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-7">

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#42D5D0] transition-colors group-hover:border-[#42D5D0]">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <span className="text-sm font-medium text-slate-400">
                      Professional Email
                    </span>

                    <p className="mt-1 break-all text-base font-medium text-white transition-colors group-hover:text-[#42D5D0]">
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#42D5D0] transition-colors group-hover:border-[#42D5D0]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-400">
                      Phone
                    </span>

                    <p className="mt-1 text-base font-medium text-white transition-colors group-hover:text-[#42D5D0]">
                      (470) 886-8955
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#42D5D0]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-400">
                      Location
                    </span>

                    <p className="mt-1 text-base font-medium text-white">
                      Lawrenceville, GA
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Metro Atlanta, United States
                    </p>
                  </div>
                </div>

              </div>

              {/* Availability */}
              <div className="mt-10 border-t border-white/10 pt-7">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness
                    size={20}
                    className="text-[#42D5D0]"
                  />

                  <h4 className="text-base font-semibold text-white">
                    Professional Availability
                  </h4>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Open to full-time and contract opportunities,
                  remote nationwide, and hybrid or regional onsite
                  roles across Metro Atlanta.
                </p>
              </div>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Boimah Richards on LinkedIn (opens in a new tab)"
                className="mt-9 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#42D5D0] hover:bg-[#42D5D0] hover:text-[#071724]"
              >
                <LinkedInMark />
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>

            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="border border-slate-200 bg-white p-7 sm:p-10">

            <div className="mb-9">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168E91]">
                Send an Enquiry
              </span>

              <h3 className="mt-3 text-2xl font-semibold text-[#071724] sm:text-3xl">
                How can I help you?
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Fill in the details below and share a little about
                what you'd like to discuss.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-[#102B3B]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Your full name"
                    className="w-full border border-slate-300 bg-[#F9FBFC] px-4 py-3.5 text-sm text-[#071724] outline-none transition-all placeholder:text-slate-400 focus:border-[#168E91] focus:ring-2 focus:ring-[#168E91]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-[#102B3B]"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    className="w-full border border-slate-300 bg-[#F9FBFC] px-4 py-3.5 text-sm text-[#071724] outline-none transition-all placeholder:text-slate-400 focus:border-[#168E91] focus:ring-2 focus:ring-[#168E91]/10"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-[#102B3B]"
                >
                  Phone Number
                  <span className="ml-2 font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  placeholder="Your contact number"
                  className="w-full border border-slate-300 bg-[#F9FBFC] px-4 py-3.5 text-sm text-[#071724] outline-none transition-all placeholder:text-slate-400 focus:border-[#168E91] focus:ring-2 focus:ring-[#168E91]/10"
                />
              </div>

              {/* Enquiry Type */}
              <div>
                <label
                  htmlFor="contact-type"
                  className="mb-2 block text-sm font-semibold text-[#102B3B]"
                >
                  What would you like to discuss? *
                </label>

                <select
                  id="contact-type"
                  name="enquiryType"
                  required
                  defaultValue=""
                  className="w-full border border-slate-300 bg-[#F9FBFC] px-4 py-3.5 text-sm text-[#071724] outline-none transition-all focus:border-[#168E91] focus:ring-2 focus:ring-[#168E91]/10"
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>

                  <option value="Career Opportunity">
                    Career Opportunity
                  </option>

                  <option value="Consulting Enquiry">
                    Consulting Enquiry
                  </option>

                  <option value="Business Collaboration">
                    Business Collaboration
                  </option>

                  <option value="Professional Networking">
                    Professional Networking
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#102B3B]"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={3000}
                  placeholder="Tell me a little about your enquiry..."
                  className="w-full resize-y border border-slate-300 bg-[#F9FBFC] px-4 py-3.5 text-sm leading-7 text-[#071724] outline-none transition-all placeholder:text-slate-400 focus:border-[#168E91] focus:ring-2 focus:ring-[#168E91]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 bg-[#168E91] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#071724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168E91] focus-visible:ring-offset-2"
              >
                <Send size={17} />

                Continue to Email

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                Your email application will open with the enquiry
                details pre-filled. Review the message and press
                Send to contact Boimah.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
