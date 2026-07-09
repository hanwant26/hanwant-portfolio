"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Education", to: "education" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}

          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <h1 className="text-2xl font-extrabold text-slate-900 transition-colors dark:text-white">
              Hanwant
              <span className="text-blue-600">.</span>
            </h1>
          </ScrollLink>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={500}
                offset={-90}
                activeClass="text-blue-600"
                className="
                  cursor-pointer
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-blue-600
                  dark:text-slate-300
                  dark:hover:text-blue-400
                "
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />

            <Button href="/resume.pdf">
              Resume
            </Button>
          </div>

          {/* Mobile Controls */}

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                rounded-lg
                p-2
                text-slate-700
                transition
                hover:bg-slate-100
                dark:text-white
                dark:hover:bg-slate-800
              "
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMobileOpen(false)}
              className="
                block
                cursor-pointer
                px-6
                py-4
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                dark:text-slate-300
                dark:hover:bg-slate-900
              "
            >
              {item.name}
            </ScrollLink>
          ))}

          <div className="p-6">
            <Button
              href="/resume.pdf"
              className="w-full"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}