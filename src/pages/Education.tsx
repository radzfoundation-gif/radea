import { useEffect, useState } from "react";
import { Search, Sun, Moon, GraduationCap, School, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Header } from "@/components/Header";

const translations = {
  id: {
    home: "Beranda",
    education: "Pendidikan",
    projects: "Proyek",
    gallery: "Galeri",
    notes: "Catatan",
    more: "Lainnya",
    educationTitle: "Riwayat Pendidikan",
    present: "Sekarang",
    activeStudent: "Mahasiswa Aktif",
    scienceProgram: "Program IPA (Ilmu Pengetahuan Alam)",
  },
  en: {
    home: "Home",
    education: "Education",
    projects: "Projects",
    gallery: "Gallery",
    notes: "Notes",
    more: "More",
    educationTitle: "Education History",
    present: "Present",
    activeStudent: "Active Student",
    scienceProgram: "Science Program",
  }
};

const Education = () => {
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
        <Header t={t} isDark={isDark} setIsDark={setIsDark} />

        {/* Diagonal Separator */}
        <div className="h-8 diagonal-pattern border-b border-border"></div>

        {/* Education Content */}
        <div className="px-8 md:px-6 md:px-12 py-8 md:py-10 pb-20">
          <h2 className="text-2xl font-light text-muted-foreground mb-10 flex items-center gap-3">
            <GraduationCap className="w-7 h-7" />
            {t.educationTitle}
          </h2>
          
          <div className="space-y-8 pl-6 border-l-2 border-border ml-4">
            {/* Kuliah */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-foreground" />
              </div>
              <div className="bg-secondary/30 p-5 rounded-2xl border border-border/50 hover:bg-secondary/50 transition-colors">
                <span className="text-xs font-medium text-muted-foreground mb-1 block">2025 - {t.present}</span>
                <h3 className="text-lg font-medium text-foreground mb-1">Universitas Terbuka - Indonesia</h3>
                <p className="text-sm text-muted-foreground">{t.activeStudent} – Sistem Informasi</p>
              </div>
            </div>

            {/* SMA */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center">
                <School className="w-4 h-4 text-foreground" />
              </div>
              <div className="bg-secondary/30 p-5 rounded-2xl border border-border/50 hover:bg-secondary/50 transition-colors">
                <span className="text-xs font-medium text-muted-foreground mb-1 block">Juli 2022 - April 2025</span>
                <h3 className="text-lg font-medium text-foreground mb-1">SMA Negeri 1 Pupuan, Bali</h3>
                <p className="text-sm text-muted-foreground">{t.scienceProgram}</p>
              </div>
            </div>

            {/* SMP */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center">
                <School className="w-4 h-4 text-foreground" />
              </div>
              <div className="bg-secondary/30 p-5 rounded-2xl border border-border/50 hover:bg-secondary/50 transition-colors">
                <span className="text-xs font-medium text-muted-foreground mb-1 block">Juli 2019 - April 2022</span>
                <h3 className="text-lg font-medium text-foreground mb-1">SMP Negeri 6 Pupuan Satu Atap</h3>
                <p className="text-sm text-muted-foreground">Pupuan, Tabanan, Bali</p>
              </div>
            </div>

            {/* SD */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center">
                <School className="w-4 h-4 text-foreground" />
              </div>
              <div className="bg-secondary/30 p-5 rounded-2xl border border-border/50 hover:bg-secondary/50 transition-colors">
                <span className="text-xs font-medium text-muted-foreground mb-1 block">Juli 2013 - April 2019</span>
                <h3 className="text-lg font-medium text-foreground mb-1">SD Negeri 6 Pujungan</h3>
                <p className="text-sm text-muted-foreground">Pujungan, Tabanan, Bali</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </PageTransition>
  );
};

export default Education;
