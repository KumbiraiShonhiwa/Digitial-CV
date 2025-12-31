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
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "GSAP"],
    github: "https://github.com/kumbirai",
    live: "https://resonance-music-society.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Sunderland Sustainable Travel Hub",
    category: "Full Stack",
    description:
      "A Python-based music playlist manager that allows users to create, organize, and manage playlists efficiently. The application supports song and user management, playlist editing, and basic persistence using file storage, with an optional web interface for interactive use.",
    tags: ["Sharepoint Online", "React Framework", "Node.js", "Tailwind CSS"],
    github:
      "https://github.com/KumbiraiShonhiwa/Sunderland-Sustainable-Travel-Hub",
    featured: true,
  },
  {
    id: 3,
    title: "Music Playlist Manager",
    category: "Academic",
    description:
      "Music Playlist Manager is a Python-based application that allows users to create, manage, and organize music playlists, with support for song, user, and playlist management using file-based persistence and an optional web interface.",
    tags: ["Python", "Flask", "MySQL", "Educational Tech"],
    github: "https://github.com/KumbiraiShonhiwa/Music_Playlist_Manager",
    featured: false,
  },
  {
    id: 4,
    title: "Tactical Insights & Scouting for Value (6-Team Focus)",
    category: "AI & Data Science",
    description:
      "The purpose of this project is to develop a scouting and tactical fit analysis platform that leverages publicly available football data (e.g., FBref, WhoScored, Transfermarkt). The system focuses on identifying players who are not only statistically strong but also tactically aligned with the playing styles of six selected Premier League teams",
    tags: ["Python", "C++", "Network Security", "Machine Learning"],
    github: "https://github.com/KumbiraiShonhiwa/Tactical-Scouting",
    featured: true,
  },
  {
    id: 5,
    title: "AI-Phishing-Email-Detection-System",
    category: "Cybersecurity",
    description:
      "Phishing detection utilising Artificial Intelligence (AI) involves the use of Machine Learning (ML) and Deep Learning (DL) algorithms to automatically identify and categorise fraudulent emails.",
    tags: ["React", "Node.js", "AWS", "WebSockets"],
    github: "https://github.com/kumbirai",
    featured: false,
  },
  {
    id: 6,
    title:
      "Neural Language Models with Subword Embedding Techniques for Stylistic and Authorship Classification",
    category: "Natural Processing Language",
    description:
      "This project explores the use of neural language models combined with subword embedding techniques to improve stylistic classification and authorship attribution. By leveraging state-of-the-art transformer models and advanced tokenization strategies.",
    tags: ["Rust", "Cryptography", "Security"],
    github: "https://github.com/kumbirai",
    featured: false,
  },
  {
    id: 7,
    title: "WorkWise-Central",
    category: "Service Management",
    description:
      "WorkWise Central is a service-management tool designed for service-based industries. It is engineered to streamline operations, maximize resource efficiency, and elevate customer experiences.",
    github: "https://github.com/COS301-SE-2024/WorkWise-Central",
    tags: ["Vue", "TypeScript", "JavaScript", "Node.js", "MongoDB", "OAuth"],
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Cybersecurity", label: "Cybersecurity" },
  { id: "AI & Data Science", label: "AI & Data Science" },
  { id: "Natural Processing Language", label: "Natural Processing Language" },
  { id: "Academic", label: "Academic" },
  {id: "Service Management", label:"Service Management"}
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
            href="https://github.com/KumbiraiShonhiwa/"
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
