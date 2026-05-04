import { useEffect, useState, useRef } from "react";
import { Search, Sun, Moon, BadgeCheck, Eye, Download, Briefcase, ExternalLink, Github, Play, Pause, Instagram, Code2 } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiSupabase, SiVite, SiLinux, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CVModal } from "@/components/CVModal";
import PageTransition from "@/components/PageTransition";
import { StatusModal } from "@/components/StatusModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const translations = {
  id: {
    home: "Beranda",
    education: "Pendidikan",
    projects: "Proyek",
    gallery: "Galeri",
    notes: "Catatan",
    more: "Lainnya",
    downloadCV: "Unduh CV",
    viewCV: "Lihat CV",
    about: "Tentang",
    techStack: "Tech Stack",
    featuredProject: "Proyek Unggulan",
    connect: "Ayo Terhubung",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    sendMessage: "Kirim Pesan",
    socialMedia: "Atau hubungi saya via sosial media:",
    nowPlaying: "Sedang Diputar",
    paused: "Jeda",
    status: "Applying · Apple Developer Academy",
    aboutList: [
      "Junior Full-Stack Developer dengan pengalaman langsung dalam membangun aplikasi web responsif menggunakan framework JavaScript modern.",
      "Memiliki fondasi kuat dalam pengembangan frontend dengan React serta pengalaman mengintegrasikan REST API dan layanan backend dasar. Terbiasa bekerja dengan Git, lingkungan Linux, dan alur kerja tim secara kolaboratif.",
      "Sangat termotivasi, cepat belajar, dan antusias untuk berkembang sambil berkontribusi pada aplikasi yang bersih, mudah dipelihara, dan berfokus pada pengguna."
    ],
    projectDescription: "Asisten AI cerdas yang dirancang menyerupai pengalaman ChatGPT, Claude, dan Perplexity. Menghadirkan interaksi percakapan natural dan pencarian informasi tingkat lanjut.",
    placeholderName: "Nama Anda",
    placeholderEmail: "email@anda.com",
    placeholderMessage: "Bagaimana saya bisa membantu Anda?",
  },
  en: {
    home: "Home",
    education: "Education",
    projects: "Projects",
    gallery: "Gallery",
    notes: "Notes",
    more: "More",
    downloadCV: "Download CV",
    viewCV: "View CV",
    about: "About",
    techStack: "Tech Stack",
    featuredProject: "Featured Project",
    connect: "Let's Connect",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    socialMedia: "Or contact me via social media:",
    nowPlaying: "Now Playing",
    paused: "Paused",
    status: "Applying · Apple Developer Academy",
    aboutList: [
      "Junior Full-Stack Developer with hands-on experience in building responsive web applications using modern JavaScript frameworks.",
      "Solid foundation in frontend development with React and experience integrating REST APIs and basic backend services. Familiar with Git, Linux environments, and collaborative team workflows.",
      "Highly motivated, fast learner, and enthusiastic about growing while contributing to clean, maintainable, and user-focused applications."
    ],
    projectDescription: "Intelligent AI assistant designed to resemble experiences like ChatGPT, Claude, and Perplexity. Delivers natural conversational interactions and advanced information retrieval.",
    placeholderName: "Your Name",
    placeholderEmail: "your@email.com",
    placeholderMessage: "How can I help you?",
  }
};

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [cvLang, setCvLang] = useState<"id" | "en" | null>(null);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [language, setLanguage] = useState<"id" | "en">("id");

  const t = translations[language];

  // Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language") as "id" | "en";
    if (!savedLang) {
      setWelcomeModalOpen(true);
    } else {
      setLanguage(savedLang);
    }
  }, []);

  const selectLanguage = (lang: "id" | "en") => {
    localStorage.setItem("preferred-language", lang);
    setLanguage(lang);
    setWelcomeModalOpen(false);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openCV = (lang: "id" | "en") => {
    setCvLang(lang);
    setCvModalOpen(true);
  };

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
              <Link to="/" className="text-foreground font-medium">{t.home}</Link>
              <Link to="/education" className="hover:text-foreground transition-colors">{t.education}</Link>
              <Link to="/projects" className="hover:text-foreground transition-colors">{t.projects}</Link>
              <Link to="/gallery" className="hover:text-foreground transition-colors">{t.gallery}</Link>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-note-modal"))}
                className="hover:text-foreground transition-colors"
              >
                {t.notes}
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-foreground transition-colors flex items-center gap-1 outline-none">
                  {t.more} <span className="text-[10px]">▼</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem asChild>
                    <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/CV_I-Wayan-Radea.docx" download="CV_I-Wayan-Radea.docx">{t.downloadCV}</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

        {/* Dotted Grid Area */}
        <div className="h-32 dotted-pattern w-full border-b border-border"></div>

        {/* Profile Section */}
        <div className="relative px-12 py-10 flex items-start gap-6">
          <div className="absolute top-6 right-10 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Eye className="w-3.5 h-3.5" /> 244
          </div>
          
          <div className="w-32 h-32 rounded-[1.25rem] bg-secondary overflow-hidden shrink-0 border border-border shadow-sm p-1">
            <div className="w-full h-full rounded-[1rem] overflow-hidden">
              <video 
                src="/avatar.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="pt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
              <span className="w-3 h-3 rounded-full border border-current bg-background flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-current block opacity-50"></span>
              </span>
            </div>
            <h1 className="text-3xl font-display font-medium flex items-center gap-2 mb-2 text-foreground">
              I Wayan Radea
              <BadgeCheck className="w-5 h-5 text-verified fill-verified text-verified-foreground" />
            </h1>
            <p className="text-muted-foreground text-[15px] mb-1.5">Junior Full-Stack Developer</p>
            <div className="flex flex-col gap-1 mb-4">
              <div 
                onClick={() => setStatusModalOpen(true)}
                className="text-[13px] text-muted-foreground flex items-center gap-1.5 cursor-pointer hover:text-blue-500 transition-colors group w-max"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse block"></span>
                {t.status}
                <span className="ml-2 text-[9px] bg-blue-500 text-white px-1.5 py-0.5 rounded-full font-bold animate-bounce uppercase tracking-tighter">Click me!</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="/CV_I-Wayan-Radea.docx" 
                download="CV_I-Wayan-Radea.docx"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                {t.downloadCV}
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors shadow-sm outline-none">
                  <Eye className="w-4 h-4" />
                  {t.viewCV}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-40">
                  <DropdownMenuItem className="cursor-pointer" onClick={() => openCV("id")}>
                    Bahasa Indonesia
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={() => openCV("en")}>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center gap-2 sm:ml-2">
                <a href="https://wa.me/6285155031983" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-secondary/60 flex items-center justify-center text-secondary-foreground hover:bg-[#25D366] hover:text-white transition-colors" title="WhatsApp">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/radz.1st" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-secondary/60 flex items-center justify-center text-secondary-foreground hover:bg-[#E1306C] hover:text-white transition-colors" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-secondary/60 flex items-center justify-center text-secondary-foreground hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors" title="TikTok">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.65-6.22 1.62-1.28 3.8-1.74 5.8-.97.12.05.23.11.34.17v4.1c-.24-.13-.48-.24-.74-.33-1.07-.35-2.28-.21-3.21.43-.88.6-1.38 1.61-1.45 2.65-.08 1.16.42 2.32 1.25 3.08.82.74 1.98 1.05 3.06.91 1.4-.2 2.53-1.23 2.9-2.58.12-.46.16-.94.16-1.42V.02h4.08z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Separator */}
        <div className="h-8 diagonal-pattern border-y border-border"></div>

        {/* About Section */}
        <div className="px-12 py-10">
          <h2 className="text-2xl font-light text-muted-foreground mb-8">{t.about}</h2>
          <ul className="space-y-4 text-[15px] leading-relaxed text-foreground/80 list-disc pl-5 marker:text-muted-foreground/50">
            {t.aboutList.map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ul>

          {/* Tech Stack Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-medium text-foreground mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              {t.techStack}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { icon: FaReact, name: "React", color: "text-[#61DAFB]" },
                { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
                { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
                { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
                { icon: FaNodeJs, name: "Node.js", color: "text-[#339933]" },
                { icon: SiSupabase, name: "Supabase", color: "text-[#3ECF8E]" },
                { icon: FaGitAlt, name: "Git", color: "text-[#F05032]" },
                { icon: SiLinux, name: "Linux", color: "text-foreground" },
                { icon: FaFigma, name: "Figma", color: "text-[#F24E1E]" },
                { icon: SiVite, name: "Vite", color: "text-[#646CFF]" },
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 border border-border/50 rounded-xl bg-secondary/20 hover:bg-secondary/60 hover:-translate-y-1 hover:shadow-sm transition-all gap-3 group cursor-default">
                  <tech.icon className={`w-8 h-8 opacity-80 group-hover:opacity-100 ${tech.color} group-hover:scale-110 transition-all`} />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Project Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-medium text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {t.featuredProject}
            </h3>
            <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:bg-secondary/40 transition-colors group flex flex-col">
              <div className="w-full h-48 bg-muted/50 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  <Briefcase className="w-12 h-12" />
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
                <h3 className="text-xl font-medium text-foreground mb-3 flex items-center justify-between">
                  Noir Ai
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <a href="https://github.com/radzfoundation-gif/NEVRA_BETA.git" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="https://www.rlabs-studio.web.id/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                  {t.projectDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">Web</span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">Full-Stack</span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">React</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-medium text-foreground mb-6">{t.connect}</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              <form className="space-y-4 md:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">{t.name}</label>
                    <input type="text" id="name" className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder={t.placeholderName} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">{t.email}</label>
                    <input type="email" id="email" className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder={t.placeholderEmail} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">{t.message}</label>
                  <textarea id="message" rows={4} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder={t.placeholderMessage}></textarea>
                </div>
                <button type="button" className="bg-primary text-primary-foreground font-medium px-6 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  {t.sendMessage}
                </button>
              </form>

              <div className="md:col-span-2 space-y-4">
                <p className="text-sm font-medium text-foreground">{t.socialMedia}</p>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/6285155031983" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 bg-secondary/30 hover:bg-secondary/60 border border-border/50 rounded-xl transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-foreground">WhatsApp</span>
                  </a>
                  
                  <a href="https://www.instagram.com/radz.1st" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 bg-secondary/30 hover:bg-secondary/60 border border-border/50 rounded-xl transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Instagram</span>
                  </a>

                  <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 bg-secondary/30 hover:bg-secondary/60 border border-border/50 rounded-xl transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-foreground/10 text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.65-6.22 1.62-1.28 3.8-1.74 5.8-.97.12.05.23.11.34.17v4.1c-.24-.13-.48-.24-.74-.33-1.07-.35-2.28-.21-3.21.43-.88.6-1.38 1.61-1.45 2.65-.08 1.16.42 2.32 1.25 3.08.82.74 1.98 1.05 3.06.91 1.4-.2 2.53-1.23 2.9-2.58.12-.46.16-.94.16-1.42V.02h4.08z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-foreground">TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Music Player Widget */}
          <div className="mt-14 flex justify-center pb-8">
            <div className="border border-border bg-card rounded-2xl p-3 flex items-center gap-4 w-full max-w-[22rem] shadow-sm transition-transform hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden shrink-0 shadow-inner relative group cursor-pointer" onClick={togglePlay}>
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=150" 
                  alt="Album Art" 
                  className={`w-full h-full object-cover transition-all duration-500 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground'}`}></span>
                  {isPlaying ? t.nowPlaying : t.paused}
                </p>
                <p className="text-[15px] font-medium truncate text-foreground">We Are One (Ole Ola)</p>
                <p className="text-xs text-muted-foreground truncate">Pitbull ft. Jennifer Lopez</p>
              </div>
              <button 
                onClick={togglePlay}
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-1 transition-colors ${isPlaying ? 'bg-[#1DB954] text-white' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              
              <audio 
                ref={audioRef} 
                src="/we-are-one.mp3" 
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </div>
          </div>
        </div>

      </div>

      {/* CV Viewer Modal */}
      <CVModal 
        isOpen={cvModalOpen} 
        onOpenChange={setCvModalOpen} 
        lang={cvLang} 
      />

      <StatusModal 
        isOpen={statusModalOpen}
        onOpenChange={setStatusModalOpen}
        language={language}
      />

      {/* Language Selection Modal */}
      <Dialog open={welcomeModalOpen} onOpenChange={setWelcomeModalOpen}>
        <DialogContent className="sm:max-w-md" hideClose>
          <DialogHeader className="mb-4">
            <DialogTitle className="text-center text-xl font-display">Welcome to My Portfolio</DialogTitle>
            <DialogDescription className="text-center text-muted-foreground pt-2">
              Please select your preferred language to continue.
              <br />
              Silakan pilih bahasa yang Anda inginkan.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => selectLanguage("id")}
              className="flex flex-col items-center justify-center p-6 border border-border rounded-xl bg-secondary/20 hover:bg-secondary/60 hover:border-primary/30 transition-all gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🇮🇩</div>
              <span className="font-medium text-sm text-foreground">Bahasa Indonesia</span>
            </button>
            <button 
              onClick={() => selectLanguage("en")}
              className="flex flex-col items-center justify-center p-6 border border-border rounded-xl bg-secondary/20 hover:bg-secondary/60 hover:border-primary/30 transition-all gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🇺🇸</div>
              <span className="font-medium text-sm text-foreground">English</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
</PageTransition>
  );
};

export default Index;
