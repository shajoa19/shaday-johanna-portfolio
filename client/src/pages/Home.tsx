/**
 * Design Philosophy: Cyberpunk Brutalism
 * - Harsh geometric divisions with diagonal cuts
 * - Aggressive contrast between pure black and neon accents
 * - Diagonal section breaks with clip-path
 * - Glitch effects and neon borders
 * - Sharp transitions and mechanical interactions
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Zap, MessageSquare, Workflow } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Consultation request received! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section with diagonal cut */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
          marginBottom: "-8vh",
          paddingBottom: "12vh",
        }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt=""
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background"></div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.65 0.25 290) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.25 290) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block mb-6 px-4 py-2 border border-primary/50 bg-primary/10 rounded-sm">
            <span className="text-primary font-mono text-sm tracking-wider">
              SHADAY JOHANNA
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl font-black mb-6 glitch leading-tight"
            data-text="Building Intelligent Ecosystems"
          >
            Building Intelligent
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Ecosystems
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            London-based AI Architect transforming businesses through intelligent
            automation and cutting-edge workflow solutions
          </p>

          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 neon-glow transition-all duration-150 hover:scale-105"
          >
            Automate Your Business
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-foreground">Our </span>
              <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI solutions designed to revolutionize your business
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* n8n Workflows Card */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-150 hover:border-primary group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 rounded-sm bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full bg-card rounded-sm flex items-center justify-center">
                    <img
                      src="/images/workflow-icon.png"
                      alt="n8n Workflows"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Workflow className="w-6 h-6 text-primary" />
                  n8n Workflows
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Custom automation workflows that connect your tools and
                  streamline operations. From simple triggers to complex
                  multi-step processes.
                </p>
              </div>
            </Card>

            {/* AI Chatbots Card */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-150 hover:border-secondary group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl group-hover:bg-secondary/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 rounded-sm bg-gradient-to-br from-secondary to-primary p-1">
                  <div className="w-full h-full bg-card rounded-sm flex items-center justify-center">
                    <img
                      src="/images/chatbot-icon.png"
                      alt="AI Chatbots"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                  AI Chatbots
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Intelligent conversational agents powered by advanced LLMs.
                  Provide 24/7 support, qualify leads, and enhance customer
                  engagement.
                </p>
              </div>
            </Card>

            {/* Business Logic Card */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-150 hover:border-primary group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 rounded-sm bg-gradient-to-br from-primary via-secondary to-primary p-1">
                  <div className="w-full h-full bg-card rounded-sm flex items-center justify-center">
                    <img
                      src="/images/logic-icon.png"
                      alt="Business Logic"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Business Logic
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Smart decision-making systems that adapt to your unique
                  processes. Automate complex logic and reduce manual oversight.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with diagonal entry */}
      <section
        className="relative py-32 mt-16"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-5rem",
          paddingTop: "8rem",
        }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-visual.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60"></div>
        </div>

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 border border-secondary/50 bg-secondary/10 rounded-sm">
              <span className="text-secondary font-mono text-sm tracking-wider">
                LONDON-BASED AI ARCHITECT
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-foreground">Architecting the </span>
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                Future of Work
              </span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Shaday Johanna, we don't just implement automation—we architect
                intelligent ecosystems that transform how businesses operate. Based
                in London's thriving tech scene, we bring Silicon Valley innovation
                to enterprises ready to embrace the AI revolution.
              </p>

              <p>
                Our expertise spans the full spectrum of AI automation: from n8n
                workflow orchestration and custom chatbot development to complex
                business logic implementation. We partner with forward-thinking
                organizations to eliminate repetitive tasks, accelerate
                decision-making, and unlock unprecedented efficiency.
              </p>

              <p className="text-foreground font-semibold">
                Whether you're scaling a startup or optimizing enterprise
                operations, we deliver automation solutions that don't just work—they
                evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="text-foreground">Book a </span>
                <span className="text-primary">Consultation</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss how AI automation can transform your business
              </p>
            </div>

            <Card className="glass-card p-8 neon-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-mono">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-mono">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-mono">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 transition-all duration-150 hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container px-4">
          <div className="text-center text-muted-foreground">
            <p className="font-mono text-sm">
              © 2026 Shaday Johanna. Building Intelligent Ecosystems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
