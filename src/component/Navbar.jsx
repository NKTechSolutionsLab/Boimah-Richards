
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#071724]/95 backdrop-blur-md">
      <nav className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-14">

        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-4"
          aria-label="Boimah Richards home"
        >
          <span className="h-7 w-[3px] bg-[#42D5D0] transition-all duration-300 group-hover:h-9" />

          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-white sm:text-xl">
            BOIMAH RICHARDS,
            <span className="ml-1 text-sm font-semibold text-white/80">
              MBA
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors duration-300 hover:text-[#42D5D0]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-md border border-[#42D5D0] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#42D5D0] hover:text-[#071724] lg:inline-flex"
        >
          Discuss a Project
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-md border border-white/10 p-2 text-white transition-colors hover:border-[#42D5D0] hover:text-[#42D5D0] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#071724] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="border-b border-white/5 py-3 text-sm font-medium text-white/80 transition-colors hover:text-[#42D5D0]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#42D5D0] px-5 py-3 text-sm font-semibold text-[#071724] transition-colors hover:bg-[#65e3de]"
          >
            Discuss a Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;