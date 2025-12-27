import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { animateOnScroll } from "@/utils/gsap-animations";

const projectsData = [
  {
    id: 1,
    title: "Resonance Music Society Platform",
    category: "Full Stack",
    description:
      "A responsive full-stack web application for managing music society events, members, and resources.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/kumbirai",
    live: "https://resonance-music.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Security Audit System",
    category: "Cybersecurity",
    description:
      "An IT audit and compliance management system for tracking security assessments and control evaluations.",
    tags: ["Python", "Django", "PostgreSQL", "RBAC"],
    github: "https://github.com/kumbirai",
    featured: true,
  },
  {
    id: 3,
    title: "Data Structures & Algorithms Tutor",
    category: "Academic",
    description:
      "Interactive learning platform for teaching data structures, algorithms, and Java programming concepts.",
    tags: ["Java", "React", "Educational Tech"],
    github: "https://github.com/kumbirai",
    featured: false,
  },
  {
    id: 4,
    title: "Network Security Analysis Tool",
    category: "Cybersecurity",
    description:
      "Advanced tool for network packet analysis, threat detection, and vulnerability scanning.",
    tags: ["Python", "C++", "Network Security", "Machine Learning"],
    github: "https://github.com/kumbirai",
    featured: true,
  },
  {
    id: 5,
    title: "Cloud Infrastructure Monitor",
    category: "Full Stack",
    description:
      "Real-time monitoring dashboard for cloud infrastructure health, performance, and security metrics.",
    tags: ["React", "Node.js", "AWS", "WebSockets"],
    github: "https://github.com/kumbirai",
    live: "https://cloud-monitor.example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Secure File Encryption Suite",
    category: "Cybersecurity",
    description:
      "End-to-end encryption application with cryptographic security standards for sensitive data.",
    tags: ["Rust", "Cryptography", "Security"],
    github: "https://github.com/kumbirai",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Cybersecurity", label: "Cybersecurity" },
  { id: "Academic", label: "Academic" },
];

interface ProjectCard {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

function ProjectCard({
  title,
  category,
  description,
  tags,
  github,
  live,
  featured,
}: ProjectCard) {
  return (
    <div
      data-animate="fade-in"
      className={`group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-space-grotesk font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-primary font-semibold bg-primary/10 w-fit px-3 py-1 rounded">
              {category}
            </p>
          </div>
          <Code2 className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
        </div>

        <p className="text-foreground/70 mb-6 flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium bg-card border border-border rounded text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-border">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  useEffect(() => {
    animateOnScroll("[data-animate='fade-in']", { stagger: 0.05 });
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-card"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div data-animate="fade-in" className="mb-16 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70">
            A selection of projects showcasing my expertise in full-stack
            development, cybersecurity, and software engineering.
          </p>
        </div>

        {/* Filter Tabs */}
        <div data-animate="fade-in" className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-background border border-border text-foreground/70 hover:border-primary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/70 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div data-animate="fade-in" className="text-center">
          <p className="text-foreground/70 mb-4">
            Want to see more? Check out my GitHub for additional projects and
            contributions.
          </p>
          <a
            href="https://github.com/kumbirai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Github size={20} />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
