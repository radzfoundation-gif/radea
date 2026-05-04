import { useEffect, useState } from "react";
import { Search, Sun, Moon, Briefcase, ExternalLink, Github } from "lucide-react";
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
    projectsTitle: "Proyek",
    present: "Sekarang",
    freelanceTitle: "Freelance Web Developer",
    freelanceDesc: "Merancang dan mengembangkan aplikasi web responsif dan landing page dengan desain mobile-first. Mengintegrasikan REST API serta mengembangkan fungsionalitas backend dasar.",
    monitoringTitle: "Monitoring Tanah Otomatis",
    monitoringDesc: "Mengembangkan perangkat monitoring kelembaban tanah otomatis. Bertanggung jawab atas desain sistem, integrasi sensor, dan pengujian. Meraih Juara 2 Tingkat Kabupaten.",
    noirAiDesc: "Asisten AI cerdas yang dirancang menyerupai pengalaman ChatGPT, Claude, dan Perplexity. Menghadirkan interaksi percakapan natural dan pencarian informasi tingkat lanjut.",
    noirDevDesc: "Layanan pengembangan aplikasi dan web profesional. Dirancang dengan estetika minimalis dan performa tinggi untuk berbagai kebutuhan bisnis.",
    ravoraDesc: "Sistem aplikasi web modern yang cepat dan interaktif. Menyediakan solusi cerdas untuk manajemen konten dan pengalaman pengguna tingkat lanjut.",
  },
  en: {
    home: "Home",
    education: "Education",
    projects: "Projects",
    gallery: "Gallery",
    notes: "Notes",
    more: "More",
    projectsTitle: "Projects",
    present: "Present",
    freelanceTitle: "Freelance Web Developer",
    freelanceDesc: "Designing and developing responsive web applications and landing pages with mobile-first design. Integrating REST APIs and developing basic backend functionality.",
    monitoringTitle: "Automated Soil Monitoring",
    monitoringDesc: "Developed an automated soil moisture monitoring device. Responsible for system design, sensor integration, and testing. Won 2nd Place at the Regency Level.",
    noirAiDesc: "Intelligent AI assistant designed to resemble experiences like ChatGPT, Claude, and Perplexity. Delivers natural conversational interactions and advanced information retrieval.",
    noirDevDesc: "Professional application and web development services. Designed with minimalist aesthetics and high performance for various business needs.",
    ravoraDesc: "Fast and interactive modern web application system. Provides smart solutions for content management and advanced user experiences.",
  }
};

const Projects = () => {
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

        {/* Projects Content */}
        <div className="px-8 md:px-6 md:px-12 py-8 md:py-10 pb-20">
          <h2 className="text-2xl font-light text-muted-foreground mb-10 flex items-center gap-3">
            <Briefcase className="w-7 h-7" />
            {t.projectsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project 1 - Freelance */}
            <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:bg-secondary/40 transition-colors group flex flex-col">
              <div className="w-full h-40 bg-muted/50 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  <Briefcase className="w-10 h-10" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium text-muted-foreground mb-1 block">Jan 2023 – {t.present}</span>
                <h3 className="text-lg font-medium text-foreground mb-2 flex items-center justify-between">
                  {t.freelanceTitle}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t.freelanceDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">React</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Next.js</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Node.js</span>
                </div>
              </div>
            </div>

            {/* Project 2 - Monitoring System */}
            <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:bg-secondary/40 transition-colors group flex flex-col">
              <div className="w-full h-40 bg-muted/50 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  <Briefcase className="w-10 h-10" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium text-muted-foreground mb-1 block">November 2025</span>
                <h3 className="text-lg font-medium text-foreground mb-2 flex items-center justify-between">
                  {t.monitoringTitle}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t.monitoringDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">IoT</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Hardware/Sensor</span>
                </div>
              </div>
            </div>

            {/* Project 3 - Noir Ai */}
            <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:bg-secondary/40 transition-colors group flex flex-col">
              <div className="w-full h-40 bg-muted/50 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  <Briefcase className="w-10 h-10" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-medium text-muted-foreground block">Web Application</span>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">Best Project</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-foreground/5 text-foreground/70 font-medium border border-border">Solo Dev</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 flex items-center justify-between">
                  Noir Ai
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <a href="https://github.com/radzfoundation-gif/NEVRA_BETA.git" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="https://www.rlabs-studio.web.id/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t.noirAiDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Web</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Full-Stack</span>
                </div>
              </div>
            </div>

            {/* Project 4 - Noir Dev */}
            <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:bg-secondary/40 transition-colors group flex flex-col">
              <div className="w-full h-40 bg-muted/50 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-500/10 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  <Briefcase className="w-10 h-10" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium text-muted-foreground mb-1 block">Web Development</span>
                <h3 className="text-lg font-medium text-foreground mb-2 flex items-center justify-between">
                  Noir Dev
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <a href="https://github.com/radzfoundation-gif/noir.dev.git" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="https://www.noir-code.biz.id/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t.noirDevDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Development</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Agency</span>
                </div>
              </div>
            </div>

            {/* Project 5 - Ravora */}
            <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:bg-secondary/40 transition-colors group flex flex-col md:col-span-2">
              <div className="flex flex-col md:flex-row w-full h-full">
                <div className="w-full md:w-1/3 h-48 md:h-auto bg-muted/50 relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/10 to-transparent"></div>
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                    <Briefcase className="w-10 h-10" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-medium text-muted-foreground mb-1 block">Web Platform</span>
                  <h3 className="text-lg font-medium text-foreground mb-2 flex items-center justify-between">
                    Ravora
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <a href="https://ravora.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {t.ravoraDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Platform</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">Vercel</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    </PageTransition>
  );
};

export default Projects;