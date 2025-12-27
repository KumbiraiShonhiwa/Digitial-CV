import { useEffect, useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { animateOnScroll } from "@/utils/gsap-animations";

const education = [
  {
    degree: "BSc (Hons) Computer Systems Engineering",
    school: "University of Sunderland",
    period: "09/2025 - Present",
    description: "Final-year Computer Systems Engineering degree with focus on cybersecurity and IT assurance.",
  },
  {
    degree: "BSc (Hons) Computer Science",
    school: "University of Pretoria",
    period: "01/2025 - 07/2025",
    description: "Advanced Computer Science studies with specialization in security and systems.",
  },
  {
    degree: "BSc Computer Science",
    school: "University of Pretoria",
    period: "01/2022 - 07/2025",
    description: "Comprehensive computer science education covering all major computing disciplines.",
  },
  {
    degree: "IEB National Certificate",
    school: "Cornwall High College",
    period: "01/2018 - 11/2021",
    description: "Independent Examinations Board certification in advanced academic subjects.",
  },
  {
    degree: "High School Diploma",
    school: "Clifton College",
    period: "01/2017 - 11/2018",
    description: "International school diploma with advanced mathematics and science studies.",
  },
];

const certifications = [
  {
    name: "SOC Analyst Learning Path",
    issuer: "Professional Certification",
    status: "In Progress",
    description: "Security Operations Center analyst certification covering threat detection and response.",
  },
  {
    name: "Information Responder Path",
    issuer: "Professional Certification",
    status: "In Progress",
    description: "Incident response and cybersecurity certification for handling security incidents.",
  },
];

function EducationCard({
  degree,
  school,
  period,
  description,
}: (typeof education)[0]) {
  return (
    <div data-animate="fade-in" className="group">
      <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-space-grotesk font-bold mb-1">{degree}</h3>
            <p className="text-foreground/70 font-medium mb-2">{school}</p>
            <p className="text-sm text-primary font-semibold">{period}</p>
          </div>
        </div>
        <p className="text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
}

function CertificationCard({
  name,
  issuer,
  status,
  description,
}: (typeof certifications)[0]) {
  return (
    <div data-animate="fade-in" className="group">
      <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-space-grotesk font-bold mb-1">{name}</h3>
              <p className="text-foreground/70 text-sm">{issuer}</p>
            </div>
          </div>
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full whitespace-nowrap">
            {status}
          </span>
        </div>
        <p className="text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateOnScroll("[data-animate='fade-in']", { stagger: 0.05 });
  }, []);

  return (
    <section id="education" className="py-20 md:py-32 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div data-animate="fade-in" className="mb-16 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70">
            Academic achievements and professional certifications that demonstrate expertise and
            commitment to continuous learning.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-space-grotesk font-bold mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <EducationCard key={idx} {...edu} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-space-grotesk font-bold mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <CertificationCard key={idx} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
