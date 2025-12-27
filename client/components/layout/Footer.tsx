import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-4">Kumbirai Shonhiwa</h3>
            <p className="text-foreground/70 text-sm mb-4">
              Computer Systems Engineering Student | Cyber & Software Engineer
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/kumbirai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kumbirai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kumbishonhiwa@icloud.com"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors">
                <Phone size={16} />
                <a href="tel:+447552994437">+44 7552 994437</a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors">
                <Mail size={16} />
                <a href="mailto:kumbishonhiwa@icloud.com">kumbishonhiwa@icloud.com</a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors">
                <MapPin size={16} />
                <span>Sunderland, Tyne & Wear</span>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-space-grotesk font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  View Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground transition-colors">
                  Skills & Expertise
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/cv.pdf" download className="hover:text-foreground transition-colors">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <p className="text-center text-sm text-foreground/70">
            © {currentYear} Kumbirai Shonhiwa. All rights reserved. Built with React, GSAP, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
