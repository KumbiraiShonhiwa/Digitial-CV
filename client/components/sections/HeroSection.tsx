import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create timeline for hero animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate title
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      );

      // Animate description
      tl.fromTo(
        descRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.2
      );

      // Animate CTA buttons
      tl.fromTo(
        ctaRef.current?.querySelectorAll("button, a"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.4
      );

      // Animate social links
      tl.fromTo(
        containerRef.current?.querySelectorAll(".social-icon"),
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out",
        },
        0.6
      );

      // Floating animation for scroll indicator
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card/30 pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main title */}
        <div ref={titleRef} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Kumbirai Shonhiwa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            Computer Systems Engineer | Cybersecurity & Software Specialist
          </p>
        </div>

        {/* Description */}
        <div ref={descRef} className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-foreground/70 leading-relaxed">
            Final-year Computer Systems Engineering student with expertise in IT audit, cyber risk
            management, and full-stack development. Passionate about building secure, scalable systems
            and mentoring future engineers.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:opacity-90 transition-opacity hover:shadow-lg hover:shadow-primary/50 active:scale-95"
          >
            View My Work
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium text-lg hover:bg-primary/10 transition-colors active:scale-95"
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="https://github.com/kumbirai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/kumbirai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:kumbishonhiwa@icloud.com"
            className="social-icon p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator flex justify-center">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/50 hover:text-foreground"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
