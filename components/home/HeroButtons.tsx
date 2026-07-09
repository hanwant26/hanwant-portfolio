import Button from "@/components/ui/Button";
import { Download, Mail } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {/* Resume Button */}

      <Button
        href="/resume.pdf"
        className="group flex items-center gap-2"
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
        Download Resume
      </Button>

      {/* Contact Button */}

      <Button
        href="#contact"
        variant="secondary"
        className="group flex items-center gap-2"
      >
        <Mail
          size={18}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
        Contact Me
      </Button>
    </div>
  );
}