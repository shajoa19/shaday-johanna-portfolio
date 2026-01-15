/**
 * Design Philosophy: Warm Holographic SaaS Minimalist
 * - Clean white background with warm mesh gradient orbs
 * - Vibrant warm gradients (hot pink → peach → soft violet)
 * - Gradient text on headlines for strong visual impact
 * - Glowing card effects on hover
 * - Sophisticated, warm, premium aesthetic
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Zap, MessageSquare, Workflow, Cloud, Cpu, BarChart3 } from "lucide-react";
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
    <div className="min-h-screen bg-white text-foreground">
      {/* Hero Section with Mesh Gradient */}
      <section className="relative py-20 md:py-32 px-4 mesh-gradient">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-50 to-orange-50 rounded-full border border-pink-200">
                <span className="text-sm font-semibold gradient-text">
                  AI Automation Agency
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Building </span>
                <span className="gradient-text-strong">Intelligent</span>
                <br />
                <span className="text-foreground">Ecosystems</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                London-based AI Architect transforming businesses through intelligent
                automation and cutting-edge workflow solutions. We architect the future
                of work.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Automate Your Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right: Holographic Illustration */}
            <div className="flex justify-center items-center">
              <img
                src="/images/hero-holographic.png"
                alt="Holographic AI illustration"
                className="w-full max-w-md drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powered by <span className="gradient-text-strong">Leading Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We integrate with industry-leading platforms and tools
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "n8n", icon: Workflow, color: "from-pink-500 to-orange-400" },
              { name: "OpenAI", icon: Cpu, color: "from-orange-400 to-violet-500" },
              { name: "Cloud Services", icon: Cloud, color: "from-violet-500 to-pink-500" },
              { name: "Analytics", icon: BarChart3, color: "from-pink-500 to-orange-400" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="glow-border p-8 bg-white rounded-2xl soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-foreground">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 mesh-gradient">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text-strong">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI solutions designed to revolutionize your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "n8n Workflows",
                description:
                  "Custom automation workflows that connect your tools and streamline operations. From simple triggers to complex multi-step processes.",
                icon: Workflow,
                gradient: "from-pink-500 to-orange-400",
              },
              {
                title: "AI Chatbots",
                description:
                  "Intelligent conversational agents powered by advanced LLMs. Provide 24/7 support, qualify leads, and enhance customer engagement.",
                icon: MessageSquare,
                gradient: "from-orange-400 to-violet-500",
              },
              {
                title: "Business Logic",
                description:
                  "Smart decision-making systems that adapt to your unique processes. Automate complex logic and reduce manual oversight.",
                icon: Zap,
                gradient: "from-violet-500 to-pink-500",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white glow-border soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden rounded-2xl"
              >
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50/20 to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Image */}
            <div className="flex justify-center">
              <img
                src="/images/holographic-brain.png"
                alt="AI Brain illustration"
                className="w-full max-w-md drop-shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-50 to-violet-50 rounded-full border border-orange-200">
                <span className="text-sm font-semibold gradient-text">
                  LONDON-BASED AI ARCHITECT
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-foreground">Architecting the </span>
                <span className="gradient-text-strong">Future of Work</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Shaday Johanna, we don't just implement automation—we architect
                  intelligent ecosystems that transform how businesses operate. Based in
                  London's thriving tech scene, we bring Silicon Valley innovation to
                  enterprises ready to embrace the AI revolution.
                </p>

                <p>
                  Our expertise spans the full spectrum of AI automation: from n8n
                  workflow orchestration and custom chatbot development to complex
                  business logic implementation. We partner with forward-thinking
                  organizations to eliminate repetitive tasks, accelerate
                  decision-making, and unlock unprecedented efficiency.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 mesh-gradient">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Book a <span className="gradient-text-strong">Consultation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how AI automation can transform your business
              </p>
            </div>

            <Card className="p-8 bg-white glow-border soft-shadow rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">
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
                    className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-semibold">
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
                    className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-lg py-6 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-8 bg-gradient-to-b from-pink-50/10 to-white">
        <div className="container px-4">
          <div className="text-center text-muted-foreground">
            <p className="font-semibold">
              © 2026 Shaday Johanna. Building Intelligent Ecosystems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
