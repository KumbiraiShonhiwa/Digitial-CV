import { useEffect, useRef } from "react";
import { Users, BookOpen, Trophy, Zap } from "lucide-react";
import { animateOnScroll, countUp } from "@/utils/gsap-animations";

const stats = [
  {
    icon: BookOpen,
    label: "Years Coding",
    value: 5,
    suffix: "+",
  },
  {
    icon: Trophy,
    label: "Projects Built",
    value: 15,
    suffix: "+",
  },
  {
    icon: Users,
    label: "Students Mentored",
    value: 50,
    suffix: "+",
  },
  {
    icon: Zap,
    label: "Languages",
    value: 5,
    suffix: "",
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateOnScroll("[data-animate='fade-in']", { stagger: 0.1 });

    // Animate stats
    setTimeout(() => {
      stats.forEach((stat, index) => {
        countUp(`.stat-value-${index}`, stat.value, 2);
      });
    }, 300);
  }, []);

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl">
          {/* Section Header */}
          <div data-animate="fade-in" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p
                data-animate="fade-in"
                className="text-lg text-foreground/80 leading-relaxed"
              >
                I'm a final-year Computer Systems Engineering student at the
                University of Sunderland with a passion for cybersecurity and
                software engineering. My journey has been shaped by hands-on
                experience in IT audit, risk assessment, and building scalable
                applications.
              </p>

              <p
                data-animate="fade-in"
                className="text-lg text-foreground/80 leading-relaxed"
              >
                As an educator and mentor, I've had the privilege of guiding
                over 50 students through their academic journey. I believe in
                the power of clear communication and mentorship to help others
                grow as engineers and professionals.
              </p>

              <p
                data-animate="fade-in"
                className="text-lg text-foreground/80 leading-relaxed"
              >
                My technical expertise spans cybersecurity governance, secure
                software development, full-stack web applications, and IT
                assurance. I'm driven by the challenge of designing systems that
                are not just functional, but secure, scalable, and
                user-centered.
              </p>

              <p
                data-animate="fade-in"
                className="text-lg text-foreground/80 leading-relaxed"
              >
                Looking ahead, I'm seeking a Graduate IT Audit and Cyber
                Assurance Analyst role starting in 2026, where I can apply my
                technical knowledge to protect organizations from evolving
                security threats.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    data-animate="fade-in"
                    className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="mb-3 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mb-2">
                      <div className="text-3xl font-space-grotesk font-bold">
                        <span className={`stat-value-${index}`}>0</span>
                        {stat.suffix}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/70">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlights */}
          <div
            data-animate="fade-in"
            className="bg-card rounded-lg border border-border p-8"
          >
            <h3 className="text-2xl font-space-grotesk font-bold mb-6">
              Key Strengths
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">→</span>
                <div>
                  <h4 className="font-bold mb-1">IT Audit & Compliance</h4>
                  <p className="text-foreground/70 text-sm">
                    Control assessment, risk evaluation, and compliance
                    documentation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">→</span>
                <div>
                  <h4 className="font-bold mb-1">Cybersecurity Governance</h4>
                  <p className="text-foreground/70 text-sm">
                    Security frameworks, threat modeling, and vulnerability
                    management
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">→</span>
                <div>
                  <h4 className="font-bold mb-1">Full-Stack Development</h4>
                  <p className="text-foreground/70 text-sm">
                    Modern web applications, APIs, databases, and responsive
                    design
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">→</span>
                <div>
                  <h4 className="font-bold mb-1">Leadership & Mentoring</h4>
                  <p className="text-foreground/70 text-sm">
                    Academic guidance, teaching assistance, and peer mentorship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
