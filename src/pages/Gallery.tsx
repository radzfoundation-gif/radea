import { useEffect, useState } from "react";
import { Search, Sun, Moon, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const translations = {
  id: {
    home: "Beranda",
    education: "Pendidikan",
    projects: "Proyek",
    gallery: "Galeri",
    notes: "Catatan",
    more: "Lainnya",
    galleryTitle: "Galeri Foto",
    comingSoon: "Segera Hadir",
    comingSoonDesc: "Saya sedang mengumpulkan momen-momen terbaik untuk ditampilkan di sini. Tetap pantau!",
  },
  en: {
    home: "Home",
    education: "Education",
    projects: "Projects",
    gallery: "Gallery",
    notes: "Notes",
    more: "More",
    galleryTitle: "Photo Gallery",
    comingSoon: "Coming Soon",
    comingSoonDesc: "I'm currently gathering the best moments to display here. Stay tuned!",
  }
};

const Gallery = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"id" | "en">("id");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language") as "id" | "en";
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <PageTransition>
      <div className="min-h-screen w-full relative py-12 px-4 md:px-8 bg-[#F5F5DC] dark:bg-background transition-colors duration-300">
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      {/* Main Container */}
      <div className="mx-auto max-w-[900px] bg-card shadow-paper relative overflow-hidden rounded-sm z-10">
        
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-border">
          <div className="font-display text-xl font-bold tracking-tighter">
            <Link to="/">RR</Link>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <nav className="flex items-center gap-5">
              <Link to="/" className="hover:text-foreground transition-colors">{t.home}</Link>
              <Link to="/education" className="hover:text-foreground transition-colors">{t.education}</Link>
              <Link to="/projects" className="hover:text-foreground transition-colors">{t.projects}</Link>
              <Link to="/gallery" className="text-foreground font-medium">{t.gallery}</Link>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-note-modal"))}
                className="hover:text-foreground transition-colors"
              >
                {t.notes}
              </button>
              <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">{t.more} <span className="text-[10px]">▼</span></a>
            </nav>
            <div 
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-menu"))}
              className="flex items-center gap-2 border border-border bg-background px-2.5 py-1 rounded-md text-xs cursor-pointer hover:bg-accent transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Ctrl K</span>
            </div>
            <button onClick={() => setIsDark(!isDark)} className="hover:text-foreground transition-colors">
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Diagonal Separator */}
        <div className="h-8 diagonal-pattern border-b border-border"></div>

        {/* Gallery Content */}
        <div className="px-8 md:px-12 py-20 flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="w-20 h-20 rounded-2xl bg-secondary/30 flex items-center justify-center mb-6 animate-bounce">
            <ImageIcon className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-display font-medium text-foreground mb-4">
            {t.galleryTitle} — <span className="text-primary">{t.comingSoon}</span>
          </h2>
          <p className="text-muted-foreground max-w-md">
            {t.comingSoonDesc}
          </p>
          
          <div className="mt-12 grid grid-cols-5 gap-2 w-max mx-auto">
            {Array.from({ length: 30 }).map((_, i) => {
              const rPattern = [0, 1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 20, 23, 25, 29];
              const isR = rPattern.includes(i);
              return (
                <div 
                  key={i} 
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-sm transition-all duration-700 ${
                    isR 
                      ? "bg-primary animate-smooth-pulse shadow-[0_0_8px_rgba(var(--primary),0.2)]" 
                      : "bg-muted/10"
                  }`}
                  style={{
                    animationDelay: isR ? `${rPattern.indexOf(i) * 100}ms` : "0ms"
                  }}
                />
              );
            })}
          </div>
        </div>

      </div>
    </div>
    </PageTransition>
  );
};

export default Gallery;
