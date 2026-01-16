/**
 * Design Philosophy: Clean Minimalist SaaS with Reactive Aurora
 * - White background with elegant pastel aurora borealis wave
 * - Reactive gradient effect that follows mouse movement
 * - Clean, sophisticated, high-end Silicon Valley tech vibe
 * - Minimal graphics, maximum elegance
 * - English/Spanish language support
 * - All interactive effects preserved (cursor glow, parallax tilt, scroll reveals)
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Zap, MessageSquare, Workflow, Cloud, Cpu, BarChart3, Lightbulb } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallaxTilt } from "@/hooks/useParallaxTilt";
import { useReactiveGradient } from "@/hooks/useReactiveGradient";

// Reactive Aurora Hero Component
function ReactiveAuroraHero() {
  const { t } = useLanguage();
  const { containerRef } = useReactiveGradient();

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-visible bg-white py-16"
      style={{
        '--gradient-x': '50%',
        '--gradient-y': '50%',
      } as React.CSSProperties}
    >
      {/* Reactive Aurora Wave Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-aurora-wave.png"
          alt="Aurora wave"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(1.1) saturate(1.2)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Reactive gradient overlay that follows mouse */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--gradient-x, 50%) var(--gradient-y, 50%), rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full border border-white/50">
          <span className="text-xs font-semibold gradient-text">
            {t("hero.label")}
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-foreground">{t("hero.title.part1")} </span>
          <span className="gradient-text-strong">{t("hero.title.part2")}</span>
          <br />
          <span className="text-foreground">{t("hero.title.part3")}</span>
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 hover:shadow-lg text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
        >
          {t("hero.cta")}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// Service Card Component with Parallax Tilt
function ServiceCard({ title, description, icon: Icon, gradient, delay }: any) {
  const { ref, tilt } = useParallaxTilt();
  const { ref: revealRef, isVisible } = useScrollReveal();

  return (
    <div
      ref={revealRef}
      className={`scroll-reveal delay-${delay} ${isVisible ? 'scroll-reveal' : ''}`}
    >
      <Card
        ref={ref}
        className="p-6 bg-white glow-border soft-shadow hover:soft-shadow-lg transition-all duration-300 group relative overflow-hidden rounded-2xl h-full"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative z-10">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl font-bold mb-3 text-foreground">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollReveal();
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.success"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />

      {/* Hero Section - Clean Minimalist with Reactive Aurora Wave */}
      <section ref={heroRef} className="relative w-full overflow-hidden bg-white">
        <ReactiveAuroraHero />
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 px-4 bg-transparent relative z-20">
        <div className="container">
          <div className={`text-center mb-10 ${servicesVisible ? 'scroll-reveal' : ''}`}>
            <h2 className="text-3xl font-bold mb-2">
              {t("techstack.title")} <span className="gradient-text-strong">{t("techstack.subtitle")}</span>
            </h2>
            <p className="text-base text-muted-foreground">
              {t("techstack.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "n8n", icon: Workflow, color: "from-pink-500 to-orange-400", delay: 1 },
              { name: "OpenAI", icon: Cpu, color: "from-orange-400 to-violet-500", delay: 2 },
              { name: "Cloud Services", icon: Cloud, color: "from-violet-500 to-pink-500", delay: 3 },
              { name: "Analytics", icon: BarChart3, color: "from-pink-500 to-orange-400", delay: 4 },
            ].map((tech, idx) => {
              const { ref: techRef, isVisible: techVisible } = useScrollReveal();
              return (
                <div
                  key={idx}
                  ref={techRef}
                  className={`scroll-reveal delay-${tech.delay} ${techVisible ? 'scroll-reveal' : ''}`}
                >
                  <div className="glow-border p-6 bg-white rounded-2xl soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3`}
                    >
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-sm text-foreground">{tech.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Strategic Consulting */}
      <section ref={servicesRef} className="py-12 px-4 bg-transparent relative z-20">
        <div className="container relative z-10">
          <div className={`text-center mb-10 ${servicesVisible ? 'scroll-reveal' : ''}`}>
            <h2 className="text-3xl font-bold mb-2">
              {t("services.title")} <span className="gradient-text-strong">{t("services.subtitle")}</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ServiceCard
              title={t("services.consulting.title")}
              description={t("services.consulting.description")}
              icon={Lightbulb}
              gradient="from-violet-500 to-pink-500"
              delay={1}
            />
            <ServiceCard
              title={t("services.workflows.title")}
              description={t("services.workflows.description")}
              icon={Workflow}
              gradient="from-pink-500 to-orange-400"
              delay={2}
            />
            <ServiceCard
              title={t("services.chatbots.title")}
              description={t("services.chatbots.description")}
              icon={MessageSquare}
              gradient="from-orange-400 to-violet-500"
              delay={3}
            />
            <ServiceCard
              title={t("services.logic.title")}
              description={t("services.logic.description")}
              icon={Zap}
              gradient="from-violet-500 to-pink-500"
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* About Section - Pastel Wave Banner */}
      <section ref={aboutRef} className="relative py-20 px-4 overflow-hidden">
        {/* Pastel Wave Banner Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-wave-pastel.png"
            alt="Background wave"
            className="w-full h-full object-cover breathing-animation"
          />
        </div>

        {/* Content Overlay */}
        <div className="container relative z-10 max-w-4xl mx-auto">
          <div className={`text-center space-y-6 ${aboutVisible ? 'scroll-reveal' : ''}`}>
            <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-white/40">
              <span className="text-xs font-semibold gradient-text">
                {t("about.label")}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">{t("about.title.part1")} </span>
              <span className="gradient-text-strong">{t("about.title.part2")}</span>
            </h2>

            <div className="space-y-4 text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-base px-6 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              {t("about.cta")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-12 px-4 bg-transparent relative z-20">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className={`text-center mb-10 ${contactVisible ? 'scroll-reveal' : ''}`}>
              <h2 className="text-3xl font-bold mb-2">
                {t("contact.title")} <span className="gradient-text-strong">{t("contact.subtitle")}</span>
              </h2>
              <p className="text-base text-muted-foreground">
                {t("contact.description")}
              </p>
            </div>

            <div className={`${contactVisible ? 'scroll-reveal delay-2' : ''}`}>
              <Card className="p-6 bg-white glow-border soft-shadow rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-semibold text-sm">
                      {t("contact.name.label")}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors text-sm"
                      placeholder={t("contact.name.placeholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold text-sm">
                      {t("contact.email.label")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors text-sm"
                      placeholder={t("contact.email.placeholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold text-sm">
                      {t("contact.message.label")}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={4}
                      className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors resize-none text-sm"
                      placeholder={t("contact.message.placeholder")}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-base py-4 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {t("contact.submit")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 bg-gradient-to-b from-pink-50/10 to-white relative z-20">
        <div className="container px-4">
          <div className="text-center text-muted-foreground text-sm">
            <p className="font-semibold">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
