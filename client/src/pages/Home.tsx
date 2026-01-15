/**
 * Design Philosophy: Holographic SaaS Minimalist
 * - Clean white background with vibrant gradient accents
 * - Generous whitespace and breathing room
 * - Vibrant fluid gradients (hot pink → purple → electric blue)
 * - Soft shadows and rounded corners
 * - Modern, sophisticated, premium aesthetic
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
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-50 to-blue-50 rounded-full border border-pink-200">
                <span className="text-sm font-semibold gradient-text">
                  AI Automation Agency
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Building </span>
                <span className="gradient-text">Intelligent</span>
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
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-lg text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
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
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powered by <span className="gradient-text">Leading Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We integrate with industry-leading platforms and tools
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "n8n", icon: Workflow, color: "from-pink-500 to-purple-500" },
              { name: "OpenAI", icon: Cpu, color: "from-purple-500 to-blue-500" },
              { name: "Cloud Services", icon: Cloud, color: "from-blue-500 to-cyan-500" },
              { name: "Analytics", icon: BarChart3, color: "from-cyan-500 to-pink-500" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105"
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
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
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
                gradient: "from-pink-500 to-purple-500",
              },
              {
                title: "AI Chatbots",
                description:
                  "Intelligent conversational agents powered by advanced LLMs. Provide 24/7 support, qualify leads, and enhance customer engagement.",
                icon: MessageSquare,
                gradient: "from-purple-500 to-blue-500",
              },
              {
                title: "Business Logic",
                description:
                  "Smart decision-making systems that adapt to your unique processes. Automate complex logic and reduce manual oversight.",
                icon: Zap,
                gradient: "from-blue-500 to-cyan-500",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border-2 border-transparent hover:border-transparent soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, rgba(255, 105, 180, 0.1), rgba(138, 43, 226, 0.1), rgba(0, 123, 255, 0.1))`,
                  backgroundClip: "padding-box, border-box",
                  backgroundOrigin: "padding-box, border-box",
                  borderImage: `linear-gradient(135deg, #ff69b4, #8a2be2, #007bff) 1`,
                }}
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
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
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
                <span className="text-sm font-semibold gradient-text">
                  LONDON-BASED AI ARCHITECT
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-foreground">Architecting the </span>
                <span className="gradient-text">Future of Work</span>
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
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-lg text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Book a <span className="gradient-text">Consultation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how AI automation can transform your business
              </p>
            </div>

            <Card className="p-8 bg-white border-2 border-transparent soft-shadow rounded-2xl"
              style={{
                backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, rgba(255, 105, 180, 0.1), rgba(138, 43, 226, 0.1), rgba(0, 123, 255, 0.1))`,
                backgroundClip: "padding-box, border-box",
                backgroundOrigin: "padding-box, border-box",
                borderImage: `linear-gradient(135deg, #ff69b4, #8a2be2, #007bff) 1`,
              }}
            >
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
                    className="bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg transition-colors"
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
                    className="bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg transition-colors"
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
                    className="bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg transition-colors resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-lg text-white font-bold text-lg py-6 rounded-full transition-all duration-300 hover:scale-105"
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
      <footer className="border-t border-gray-200 py-8 mt-8 bg-gray-50">
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
