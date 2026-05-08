import { useEffect, useState, useRef } from "react";
import { Search, Sun, Moon, BadgeCheck, Eye, Download, Briefcase, ExternalLink, Github, Play, Pause, Instagram, Code2, Award, Info } from "lucide-react";
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
import { Header } from "@/components/Header";
import { StatusModal } from "@/components/StatusModal";
import { TourGuide } from "@/components/TourGuide";
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
    certificates: "Sertifikat",
    featuredProject: "Proyek Unggulan",
    connect: "Ayo Terhubung",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    sendMessage: "Kirim Pesan",
    socialMedia: "Atau hubungi saya via sosial media:",
    nowPlaying: "Sedang Diputar",
    paused: "Jeda",
    status: "Sedang Apply Apple Developer Academy",
    openToWork: "Open to Work",
    aboutList: [
      "Junior Full-Stack Developer dengan pengalaman langsung dalam membangun aplikasi web responsif menggunakan framework JavaScript modern.",
      "Memiliki fondasi kuat dalam pengembangan frontend dengan React serta pengalaman mengintegrasikan REST API dan layanan backend dasar. Terbiasa bekerja dengan Git, lingkungan Linux, dan alur kerja tim secara kolaboratif.",
      "Sangat termotivasi, cepat belajar, dan antusias untuk berkembang sambil berkontribusi pada aplikasi yang bersih, mudah dipelihara, dan berfokus pada pengguna."
    ],
    projectDescription: "Asisten AI cerdas yang dirancang menyerupai pengalaman ChatGPT, Claude, dan Perplexity. Menghadirkan interaksi percakapan natural dan pencarian informasi tingkat lanjut.",
    noirStudioDesc: "Platform AI Photo Studio berbasis web yang mengubah foto biasa menjadi hasil studio profesional dalam hitungan menit.",
    videoDemo: "Demo Video",
    introducingVideo: "Introducing NOIR AI",
    noirAiDemo: "Demo Noir AI",
    watchVideo: "Tonton Video",
    noirAiTech: "Next.js, React.js, Tailwind CSS, TypeScript, Node.js, Firebase, LLM API (OpenAI/Anthropic)",
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
    certificates: "Certificates",
    featuredProject: "Featured Project",
    connect: "Let's Connect",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    socialMedia: "Or contact me via social media:",
    nowPlaying: "Now Playing",
    paused: "Paused",
    status: "Applying Apple Developer Academy",
    openToWork: "Open to Work",
    aboutList: [
      "Junior Full-Stack Developer with hands-on experience in building responsive web applications using modern JavaScript frameworks.",
      "Solid foundation in frontend development with React and experience integrating REST APIs and basic backend services. Familiar with Git, Linux environments, and collaborative team workflows.",
      "Highly motivated, fast learner, and enthusiastic about growing while contributing to clean, maintainable, and user-focused applications."
    ],
    projectDescription: "Intelligent AI assistant designed to resemble experiences like ChatGPT, Claude, and Perplexity. Delivers natural conversational interactions and advanced information retrieval.",
    noirStudioDesc: "Web-based AI Photo Studio platform that transforms ordinary photos into professional studio results in minutes.",
    videoDemo: "Video Demo",
    introducingVideo: "Introducing NOIR AI",
    noirAiDemo: "Noir AI Demo",
    watchVideo: "Watch Video",
    noirAiTech: "Next.js, React.js, Tailwind CSS, TypeScript, Node.js, Firebase, LLM API (OpenAI/Anthropic)",
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
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<"introducing" | null>(null);

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
      const isTourCompleted = localStorage.getItem("tour-completed");
      if (!isTourCompleted) {
        localStorage.setItem("tour-completed", "true");
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("start-tour"));
        }, 1000);
      }
    }
  }, []);

  const selectLanguage = (lang: "id" | "en") => {
    localStorage.setItem("preferred-language", lang);
    setLanguage(lang);
    setWelcomeModalOpen(false);
    
    const isTourCompleted = localStorage.getItem("tour-completed");
    if (!isTourCompleted) {
      localStorage.setItem("tour-completed", "true");
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("start-tour"));
      }, 500);
    }
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
        
        <TourGuide language={language} />

        {/* Header */}
        <Header t={t} isDark={isDark} setIsDark={setIsDark} />

        {/* Dotted Grid Area */}
        <div className="h-32 dotted-pattern w-full border-b border-border"></div>

        {/* Profile Section */}
        <div id="tour-profile" className="relative px-6 md:px-12 py-8 md:py-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          <div className="absolute top-6 right-8 md:right-10 flex items-center gap-3 text-xs text-muted-foreground">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("start-tour"))}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors bg-secondary/50 px-2 py-1 rounded-md"
            >
              <Play className="w-3 h-3" /> Tour
            </button>
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> 244
            </div>
          </div>
          
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-[1.25rem] bg-secondary overflow-hidden shrink-0 border border-border shadow-sm p-1">
            <div className="w-full h-full rounded-[1rem] overflow-hidden relative">
              <video 
                src="/avatar.webm" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full bg-green-500 border-[3px] border-background flex items-center justify-center shadow-lg z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
              <span className="w-3 h-3 rounded-full border border-current bg-background flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-current block opacity-50"></span>
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-medium flex items-center gap-2 mb-2 text-foreground">
              I Wayan Radea
              <BadgeCheck className="w-5 h-5 text-verified fill-verified text-verified-foreground" />
            </h1>
            <p className="text-muted-foreground text-[15px] mb-1.5">Junior Full-Stack Developer</p>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  {t.openToWork}
                </span>
                <span 
                  onClick={() => setStatusModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium cursor-pointer hover:bg-blue-500/20 transition-colors"
                >
                  {t.status}
                  <span className="text-[9px] bg-blue-500 text-white px-1 rounded-full">i</span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                id="tour-cv"
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
            </div>
          </div>
        </div>

        {/* Diagonal Separator */}
        <div className="h-8 diagonal-pattern border-y border-border"></div>

        {/* About Section */}
        <div className="px-6 md:px-12 py-8 md:py-10">
          <h2 className="text-2xl font-light text-muted-foreground mb-8">{t.about}</h2>
          <ul className="space-y-4 text-[15px] leading-relaxed text-foreground/80 list-disc pl-5 marker:text-muted-foreground/50">
            {t.aboutList.map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ul>

          {/* Tech Stack Section */}
          <div id="tour-tech-stack" className="mt-12 pt-8 border-t border-border">
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

          {/* Certificates Section */}
          <div id="tour-certificates" className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-medium text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5" />
              {t.certificates}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group relative">
                <div className="aspect-[4/3] w-full bg-muted/50 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/certificates/sertifikat1.jpg" 
                    alt="Certificate 1" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href="/certificates/sertifikat1.jpg" target="_blank" rel="noreferrer" className="bg-background/90 text-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-background transition-colors flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-foreground text-sm line-clamp-2">Acer Smart School Academy: Diskusi Tips Sukses Mendapatkan Beasiswa</h4>
                </div>
              </div>
              <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group relative">
                <div className="aspect-[4/3] w-full bg-muted/50 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/certificates/sertifikat2.png" 
                    alt="Certificate 2" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href="/certificates/sertifikat2.png" target="_blank" rel="noreferrer" className="bg-background/90 text-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-background transition-colors flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-foreground text-sm line-clamp-2">IOE-Microsoft AI Fluency Training</h4>
                </div>
              </div>
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
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {t.projectDescription}
                </p>
                
                {/* Video Section - Clickable Thumbnails */}
                <div className="mb-5">
                  <p className="text-xs font-medium text-muted-foreground mb-2">{t.videoDemo}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <button
                      onClick={() => { setSelectedVideo("introducing"); setVideoModalOpen(true); }}
                      className="relative group rounded-lg overflow-hidden bg-black aspect-video hover:ring-2 hover:ring-primary transition-all"
                    >
                      <img src="/thum.png" alt="Thumbnail" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-xs text-white font-medium">{t.introducingVideo}</p>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">Web</span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">Full-Stack</span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">React</span>
                </div>
              </div>
            </div>

            {/* Project 2 - Noir Studio */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold border border-violet-500/20">Ongoing</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-foreground/5 text-muted-foreground font-medium border border-border">SaaS</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Noir Studio AI
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {t.noirStudioDesc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">Next.js</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">AI/SaaS</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">Supabase</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground">Midtrans</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="tour-contact" className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-medium text-foreground mb-6">{t.connect}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <form className="md:col-span-2 space-y-4">
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

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {t.introducingVideo}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <iframe 
              src="https://drive.google.com/file/d/1LlJhMcahAol4KfS8xvIRVdW-G2tPxH8a/preview" 
              className="w-full aspect-video rounded-lg bg-black"
              allow="autoplay"
            />
            <div className="bg-secondary/30 rounded-lg p-4 border border-border">
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                {t.techStack}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t.noirAiTech}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
