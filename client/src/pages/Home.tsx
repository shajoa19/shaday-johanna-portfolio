/**
 * Design Philosophy: Premium Warm Holographic SaaS with Magazine-Cover Layout
 * - Clean white background with warm mesh gradient orbs
 * - Vibrant warm gradients (hot pink → peach → soft violet)
 * - Cursor glow effect following mouse
 * - Parallax tilt on service cards
 * - Breathing animations on illustrations
 * - Scroll-triggered reveals on all sections
 * - Strategic consulting positioning
 * - English/Spanish language support
 * - Hero: Wide holographic wave banner
 * - About: Magazine-cover style with overlapping floating elements
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
        className="p-8 bg-white glow-border soft-shadow hover:soft-shadow-lg transition-all duration-300 group relative overflow-hidden rounded-2xl h-full"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative z-10">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-foreground">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed">
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

      {/* Hero Section with Wave Banner */}
      <section ref={heroRef} className="relative pt-32 pb-0 px-4 mesh-gradient">
        <div className="container relative z-10 mb-12">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-50 to-orange-50 rounded-full border border-pink-200">
              <span className="text-sm font-semibold gradient-text">
                {t("hero.label")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">{t("hero.title.part1")} </span>
              <span className="gradient-text-strong">{t("hero.title.part2")}</span>
              <br />
              <span className="text-foreground">{t("hero.title.part3")}</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Wide Holographic Wave Banner */}
        <div className="w-full relative overflow-hidden">
          <img
            src="/images/hero-wave-banner.png"
            alt="Holographic wave banner"
            className="w-full h-auto object-cover breathing-animation"
            style={{ minHeight: "200px" }}
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/20 relative z-20">
        <div className="container">
          <div className={`text-center mb-16 ${servicesVisible ? 'scroll-reveal' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">
              {t("techstack.title")} <span className="gradient-text-strong">{t("techstack.subtitle")}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("techstack.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
                  <div className="glow-border p-8 bg-white rounded-2xl soft-shadow hover:soft-shadow-lg transition-all duration-300 hover:scale-105">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}
                    >
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-foreground">{tech.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Strategic Consulting */}
      <section ref={servicesRef} className="py-20 px-4 mesh-gradient relative z-20">
        <div className="container relative z-10">
          <div className={`text-center mb-16 ${servicesVisible ? 'scroll-reveal' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">
              {t("services.title")} <span className="gradient-text-strong">{t("services.subtitle")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
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

      {/* About Section - Magazine Cover Style with Overlapping Elements */}
      <section ref={aboutRef} className="relative py-32 px-4 bg-white overflow-hidden">
        {/* Background Wave - Positioned absolutely to flow behind content */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/hero-wave-banner.png"
            alt="Background wave"
            className="absolute top-0 left-0 w-full h-96 object-cover opacity-80 breathing-animation"
            style={{
              transform: 'scaleY(1.2) translateY(-10%)',
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Content - Positioned on top of waves */}
            <div className={`space-y-8 ${aboutVisible ? 'scroll-reveal' : ''}`}>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-50 to-violet-50 rounded-full border border-orange-200">
                <span className="text-sm font-semibold gradient-text">
                  {t("about.label")}
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">{t("about.title.part1")} </span>
                <span className="gradient-text-strong">{t("about.title.part2")}</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t("about.paragraph1")}</p>
                <p>{t("about.paragraph2")}</p>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                {t("about.cta")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right: Brain Illustration - Floating with breathing animation */}
            <div className={`flex justify-center relative z-20 ${aboutVisible ? 'scroll-reveal delay-2' : ''}`}>
              <div className="relative">
                {/* Glow effect behind brain */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-orange-300 to-violet-300 rounded-full blur-3xl opacity-30 animate-pulse" />
                
                {/* Brain image with breathing animation */}
                <img
                  src="/images/brain-warm-glowing.png"
                  alt="AI Brain illustration"
                  className="w-full max-w-md drop-shadow-2xl breathing-animation relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 mesh-gradient relative z-20">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className={`text-center mb-12 ${contactVisible ? 'scroll-reveal' : ''}`}>
              <h2 className="text-4xl font-bold mb-4">
                {t("contact.title")} <span className="gradient-text-strong">{t("contact.subtitle")}</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("contact.description")}
              </p>
            </div>

            <div className={`${contactVisible ? 'scroll-reveal delay-2' : ''}`}>
              <Card className="p-8 bg-white glow-border soft-shadow rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-semibold">
                      {t("contact.name.label")}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors"
                      placeholder={t("contact.name.placeholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold">
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
                      className="bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg transition-colors"
                      placeholder={t("contact.email.placeholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold">
                      {t("contact.message.label")}
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
                      placeholder={t("contact.message.placeholder")}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 hover:shadow-lg text-white font-bold text-lg py-6 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {t("contact.submit")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-8 bg-gradient-to-b from-pink-50/10 to-white relative z-20">
        <div className="container px-4">
          <div className="text-center text-muted-foreground">
            <p className="font-semibold">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
