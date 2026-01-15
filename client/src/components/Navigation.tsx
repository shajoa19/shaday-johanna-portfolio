/**
 * Navigation Bar Component
 * Features:
 * - Modern pill-shaped language switcher with warm pink gradient border
 * - EN | ES toggle buttons
 * - Positioned at top right
 * - Responsive design
 */

import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      {/* Language Switcher - Pill Shape with Gradient Border */}
      <div className="glow-border bg-white rounded-full p-1 inline-flex gap-1 soft-shadow hover:soft-shadow-lg transition-all duration-300">
        {/* EN Button */}
        <button
          onClick={() => setLanguage("en")}
          className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
            language === "en"
              ? "bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 text-white shadow-md"
              : "text-foreground hover:text-pink-600"
          }`}
        >
          EN
        </button>

        {/* ES Button */}
        <button
          onClick={() => setLanguage("es")}
          className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
            language === "es"
              ? "bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 text-white shadow-md"
              : "text-foreground hover:text-pink-600"
          }`}
        >
          ES
        </button>
      </div>
    </nav>
  );
}
