import { useEffect, useRef } from "react";
import { animateOnScroll } from "@/utils/gsap-animations";

const skillCategories = [
  {
    category: "Cybersecurity & Assurance",
    skills: [
      { name: "Security Policies & Access Control", level: 95 },
      { name: "Threat Modelling", level: 90 },
      { name: "Vulnerability Identification", level: 90 },
      { name: "Digital Forensics & Investigations", level: 85 },
      { name: "Network Security Principles", level: 90 },
      { name: "Secure Software Engineering", level: 88 },
      { name: "IT Assurance & Compliance", level: 92 },
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      { name: "Full Stack Web Development", level: 90 },
      { name: "Software Architecture & Design", level: 85 },
      { name: "Database Design & SQL", level: 88 },
      { name: "API Development", level: 87 },
      { name: "Testing & Debugging", level: 85 },
      { name: "Version Control (Git)", level: 90 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 92 },
      { name: "Python", level: 88 },
      { name: "C++", level: 85 },
      { name: "Rust", level: 80 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Technologies & Tools",
    skills: [
      { name: "React & Modern Web Frameworks", level: 88 },
      { name: "Node.js & Express", level: 85 },
      { name: "PostgreSQL & Database Systems", level: 87 },
      { name: "Docker & Containerization", level: 78 },
      { name: "Cloud Platforms (AWS/Azure)", level: 75 },
      { name: "GSAP & Animation Libraries", level: 82 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Leadership & Team Management", level: 90 },
      { name: "Technical Communication", level: 92 },
      { name: "Problem-Solving & Analysis", level: 93 },
      { name: "Mentoring & Teaching", level: 91 },
      { name: "Project Management", level: 85 },
      { name: "Academic Research", level: 88 },
    ],
  },
];

interface SkillBar {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillBar) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-foreground/90">{name}</h4>
        <span className="text-sm text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full skill-bar-fill"
          style={{
            width: `${level}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateOnScroll("[data-animate='fade-in']", { stagger: 0.05 });
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32 bg-card" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div data-animate="fade-in" className="mb-16 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70">
            A comprehensive overview of my technical expertise and professional
            capabilities, built through hands-on experience and continuous
            learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-animate="fade-in"
              className="p-8 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-space-grotesk font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div data-animate="fade-in" className="mt-16 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-lg border border-border">
              <h4 className="font-space-grotesk font-bold text-lg mb-3">
                Languages
              </h4>
              <div className="space-y-2">
                <p className="text-foreground/80">
                  <span className="font-semibold">English</span> - Fluent
                </p>
                <p className="text-foreground/80">
                  <span className="font-semibold">Shona</span> - Fluent
                </p>
                <p className="text-foreground/80">
                  <span className="font-semibold">French</span> - Basic
                </p>
                <p className="text-foreground/80">
                  <span className="font-semibold">Zulu</span> - Basic
                </p>
              </div>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border">
              <h4 className="font-space-grotesk font-bold text-lg mb-3">
                Certifications
              </h4>
              <div className="space-y-2 text-foreground/80">
                <p>SOC Analyst Learning Path</p>
                <p>Information Responder Path</p>
              </div>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border">
              <h4 className="font-space-grotesk font-bold text-lg mb-3">
                Methodologies
              </h4>
              <div className="space-y-2 text-foreground/80">
                <p>Agile & Scrum</p>
                <p>Security Frameworks</p>
                <p>ITIL Principles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: var(--bar-width, 0%);
          }
        }
      `}</style>
    </section>
  );
}
