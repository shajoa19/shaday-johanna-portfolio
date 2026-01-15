import React, { createContext, useContext, useState } from "react";

type Language = "en" | "es";

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.language": {
    en: "EN",
    es: "ES",
  },

  // Hero Section
  "hero.label": {
    en: "AI Automation Agency",
    es: "Agencia de Automatización IA",
  },
  "hero.title.part1": {
    en: "Building",
    es: "Construyendo",
  },
  "hero.title.part2": {
    en: "Intelligent",
    es: "Ecosistemas",
  },
  "hero.title.part3": {
    en: "Ecosystems",
    es: "Inteligentes",
  },
  "hero.subtitle": {
    en: "London-based AI Architect transforming businesses through intelligent automation and cutting-edge workflow solutions. We architect the future of work.",
    es: "Arquitecto de IA con sede en Londres que transforma negocios a través de automatización inteligente y soluciones de flujo de trabajo de vanguardia. Diseñamos el futuro del trabajo.",
  },
  "hero.cta": {
    en: "Automate Your Business",
    es: "Automatiza Tu Negocio",
  },

  // Tech Stack Section
  "techstack.title": {
    en: "Powered by",
    es: "Impulsado por",
  },
  "techstack.subtitle": {
    en: "Leading Technologies",
    es: "Tecnologías Líderes",
  },
  "techstack.description": {
    en: "We integrate with industry-leading platforms and tools",
    es: "Nos integramos con plataformas y herramientas líderes de la industria",
  },

  // Services Section
  "services.title": {
    en: "Our",
    es: "Nuestros",
  },
  "services.subtitle": {
    en: "Services",
    es: "Servicios",
  },
  "services.description": {
    en: "Cutting-edge AI solutions designed to revolutionize your business operations",
    es: "Soluciones de IA de vanguardia diseñadas para revolucionar tus operaciones comerciales",
  },
  "services.workflows.title": {
    en: "n8n Workflows",
    es: "Flujos de Trabajo n8n",
  },
  "services.workflows.description": {
    en: "Custom automation workflows that connect your tools and streamline operations. From simple triggers to complex multi-step processes.",
    es: "Flujos de trabajo de automatización personalizados que conectan tus herramientas y agilizan las operaciones. Desde desencadenadores simples hasta procesos complejos de varios pasos.",
  },
  "services.chatbots.title": {
    en: "AI Chatbots",
    es: "Chatbots de IA",
  },
  "services.chatbots.description": {
    en: "Intelligent conversational agents powered by advanced LLMs. Provide 24/7 support, qualify leads, and enhance customer engagement.",
    es: "Agentes conversacionales inteligentes impulsados por LLMs avanzados. Proporciona soporte 24/7, califica clientes potenciales y mejora la participación del cliente.",
  },
  "services.logic.title": {
    en: "Business Logic",
    es: "Lógica Empresarial",
  },
  "services.logic.description": {
    en: "Smart decision-making systems that adapt to your unique processes. Automate complex logic and reduce manual oversight.",
    es: "Sistemas de toma de decisiones inteligentes que se adaptan a tus procesos únicos. Automatiza lógica compleja y reduce la supervisión manual.",
  },

  // About Section
  "about.label": {
    en: "LONDON-BASED AI ARCHITECT",
    es: "ARQUITECTO DE IA CON SEDE EN LONDRES",
  },
  "about.title.part1": {
    en: "Architecting the",
    es: "Diseñando el",
  },
  "about.title.part2": {
    en: "Future of Work",
    es: "Futuro del Trabajo",
  },
  "about.paragraph1": {
    en: "At Shaday Johanna, we don't just implement automation—we architect intelligent ecosystems that transform how businesses operate. Based in London's thriving tech scene, we bring Silicon Valley innovation to enterprises ready to embrace the AI revolution.",
    es: "En Shaday Johanna, no solo implementamos automatización, sino que diseñamos ecosistemas inteligentes que transforman cómo operan los negocios. Con sede en la próspera escena tecnológica de Londres, llevamos la innovación de Silicon Valley a empresas listas para abrazar la revolución de la IA.",
  },
  "about.paragraph2": {
    en: "Our expertise spans the full spectrum of AI automation: from n8n workflow orchestration and custom chatbot development to complex business logic implementation. We partner with forward-thinking organizations to eliminate repetitive tasks, accelerate decision-making, and unlock unprecedented efficiency.",
    es: "Nuestra experiencia abarca el espectro completo de la automatización de IA: desde la orquestación de flujos de trabajo n8n y el desarrollo de chatbots personalizados hasta la implementación de lógica empresarial compleja. Nos asociamos con organizaciones innovadoras para eliminar tareas repetitivas, acelerar la toma de decisiones y desbloquear eficiencia sin precedentes.",
  },
  "about.cta": {
    en: "Learn More",
    es: "Más Información",
  },

  // Contact Section
  "contact.title": {
    en: "Book a",
    es: "Reserva una",
  },
  "contact.subtitle": {
    en: "Consultation",
    es: "Consulta",
  },
  "contact.description": {
    en: "Let's discuss how AI automation can transform your business",
    es: "Hablemos sobre cómo la automatización de IA puede transformar tu negocio",
  },
  "contact.name.label": {
    en: "Name",
    es: "Nombre",
  },
  "contact.name.placeholder": {
    en: "Your name",
    es: "Tu nombre",
  },
  "contact.email.label": {
    en: "Email",
    es: "Correo Electrónico",
  },
  "contact.email.placeholder": {
    en: "your@email.com",
    es: "tu@email.com",
  },
  "contact.message.label": {
    en: "Message",
    es: "Mensaje",
  },
  "contact.message.placeholder": {
    en: "Tell us about your automation needs...",
    es: "Cuéntanos sobre tus necesidades de automatización...",
  },
  "contact.submit": {
    en: "Send Message",
    es: "Enviar Mensaje",
  },
  "contact.success": {
    en: "Consultation request received! We'll be in touch soon.",
    es: "¡Solicitud de consulta recibida! Nos pondremos en contacto pronto.",
  },

  // Footer
  "footer.copyright": {
    en: "© 2026 Shaday Johanna. Building Intelligent Ecosystems.",
    es: "© 2026 Shaday Johanna. Construyendo Ecosistemas Inteligentes.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
