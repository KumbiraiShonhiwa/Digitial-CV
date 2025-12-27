import { useEffect, useRef } from "react";
import { Code2, Shield, BookOpen, Users } from "lucide-react";
import { animateOnScroll } from "@/utils/gsap-animations";

const experiences = [
  {
    icon: Code2,
    role: "Full Stack Developer",
    company: "Resonance Music Society - University of Sunderland",
    period: "Present",
    description:
      "Develop and maintain responsive full-stack web applications. Build intuitive user interfaces using modern frameworks, implement backend logic and APIs, ensure security and scalability.",
    highlights: [
      "Full-stack web development",
      "Frontend & backend architecture",
      "Database design & optimization",
      "Team collaboration",
    ],
  },
  {
    icon: BookOpen,
    role: "Assistant Lecturer & Teaching Assistant",
    company: "University of Pretoria",
    period: "02/2025 - 07/2025",
    description:
      "Designed lesson plans and conducted weekly workshops. Created assignments, tests, and exam papers. Provided detailed feedback and academic guidance to students.",
    highlights: [
      "Curriculum design",
      "Student assessment",
      "One-on-one tutoring",
      "Academic mentoring",
    ],
  },
  {
    icon: Shield,
    role: "Cybersecurity Management Intern",
    company: "University of Pretoria",
    period: "01/2024 - 07/2025",
    description:
      "Supported cybersecurity governance and risk management. Conducted IT risk assessments, reviewed system access controls, documented compliance gaps.",
    highlights: [
      "Security assessment",
      "Risk analysis",
      "Compliance documentation",
      "Control evaluation",
    ],
  },
  {
    icon: Users,
    role: "Mentor & Computing Literacy Tutor",
    company: "STARS Mentorship Programme & JCP",
    period: "02/2023 - 10/2024",
    description:
      "Mentored first-year students through their university transition. Taught fundamental computing skills across multiple schools and provided academic support.",
    highlights: [
      "Student mentoring",
      "Academic guidance",
      "Computing literacy",
      "Leadership",
    ],
  },
];

function ExperienceCard({
  icon: Icon,
  role,
  company,
  period,
  description,
  highlights,
}: (typeof experiences)[0]) {
  return (
    <div
      data-animate="fade-in"
      className="relative pl-8 pb-8 md:pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50"></div>

      {/* Card */}
      <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-space-grotesk font-bold">{role}</h3>
            <p className="text-foreground/70 text-sm">{company}</p>
            <p className="text-primary text-xs font-semibold mt-1">{period}</p>
          </div>
        </div>

        <p className="text-foreground/80 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateOnScroll("[data-animate='fade-in']", { stagger: 0.1 });
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Section Header */}
          <div data-animate="fade-in" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
            <p className="text-lg text-foreground/70">
              A journey through education, mentorship, and professional growth in software engineering
              and cybersecurity.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-2.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>

            {/* Experience Cards */}
            <div className="space-y-2">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
