import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { animateOnScroll } from "@/utils/gsap-animations";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateOnScroll("[data-animate='fade-in']", { stagger: 0.1 });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:kumbishonhiwa@icloud.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7552 994437",
      href: "tel:+447552994437",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kumbishonhiwa@icloud.com",
      href: "mailto:kumbishonhiwa@icloud.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sunderland, Tyne & Wear, UK",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div data-animate="fade-in" className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-foreground/70">
            I'm always interested in hearing about new opportunities, collaborations, or just having
            a chat about tech and cybersecurity. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 data-animate="fade-in" className="text-2xl font-space-grotesk font-bold mb-8">
              Get in Touch
            </h3>

            {/* Contact Cards */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  data-animate="fade-in"
                  href={info.href}
                  className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-space-grotesk font-bold mb-1">{info.label}</h4>
                    <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div data-animate="fade-in" className="pt-8">
              <h4 className="font-space-grotesk font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kumbirai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-foreground/70 hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/kumbirai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-foreground/70 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:kumbishonhiwa@icloud.com"
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-foreground/70 hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-animate="fade-in">
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-background rounded-lg border border-border space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 active:scale-95"
              >
                <Send size={20} />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-emerald-accent/10 border border-emerald-accent rounded-lg text-emerald-accent text-sm">
                  Thank you! Your message has been sent. I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
