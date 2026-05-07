import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  lang: "id" | "en" | null;
}

const cvData = {
  id: {
    title: "I WAYAN RADEA - CV (Bahasa Indonesia)",
    downloadHref: "/CV_I-Wayan-Radea.docx",
    content: (
      <div className="space-y-6 text-sm text-foreground/90">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold font-display text-foreground">I WAYAN RADEA</h2>
          <p className="text-primary font-medium">Junior Full-Stack Developer</p>
          <p className="text-xs text-muted-foreground">Bali, Indonesia | +62 851-5503-1983 | radzfoundation@gmail.com</p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
            <a href="https://linkedin.com/in/wayan-radea-82ab63386" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <span>|</span>
            <a href="https://noir-studio.my.id" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">noir-studio.my.id</a>
          </div>
        </div>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-2 uppercase text-xs tracking-wider">Ringkasan Profil</h3>
          <p className="leading-relaxed">
            Junior Full-Stack Developer dengan pengalaman lebih dari 2 tahun dalam merancang dan mengembangkan aplikasi web responsif menggunakan framework JavaScript modern seperti React dan Next.js. Pengembang yang mandiri dengan kemampuan membangun dan meluncurkan dua produk SaaS berbasis AI. Berpengalaman dalam integrasi RESTful API, layanan backend Firebase, dan pengembangan UI yang mobile-first serta kompatibel lintas browser. Memembangun solusi dunia nyata di persimpangan desain dan teknologi.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Keahlian Teknis</h3>
          <ul className="space-y-2">
            <li><span className="font-medium">Frontend:</span> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Astro.js, Tailwind CSS, Responsive Web Design, Mobile-First Development, Cross-Browser Compatibility</li>
            <li><span className="font-medium">Backend & API:</span> Node.js, RESTful API Integration, Firebase (Authentication, Firestore, Realtime Database), Basic Data Management</li>
            <li><span className="font-medium">DevOps & Tools:</span> Git, GitHub, Linux (Arch Linux), CLI, Version Control, Web Performance Optimization</li>
            <li><span className="font-medium">AI & Otomasi:</span> LLM API Integration (OpenAI, Anthropic), Local LLM (Ollama), Prompt Engineering, AI-Assisted Development</li>
            <li><span className="font-medium">Soft Skills:</span> Self-directed Learning, Problem Solving, Agile Mindset, End-to-End Project Ownership</li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Pengalaman Kerja</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-medium">
                <span>Freelance Full-Stack Web Developer</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jan 2023 – Sekarang</span>
              </div>
              <p className="text-muted-foreground mb-1">Self-Employed – Remote, Indonesia</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Merancang dan mengembangkan 5+ aplikasi web responsif dan landing page menggunakan HTML5, CSS3, JavaScript, React.js, dan Next.js</li>
                <li>Membangun komponen UI yang dapat digunakan ulang dan modular dengan menerapkan prinsip desain mobile-first dan praktik terbaik kompatibilitas lintas browser</li>
                <li>Mengintegrasikan RESTful API dan layanan backend Firebase termasuk autentikasi pengguna, database Firestore, dan manajemen data real-time</li>
                <li>Secara mandiri mengkONSEp, mengarsiteki, dan meluncurkan dua aplikasi web SaaS berbasis AI dari nol hingga production</li>
                <li>Menerapkan teknik optimasi performa web untuk meningkatkan waktu muat aplikasi dan pengalaman pengguna</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>IoT Developer (Proyek Solo)</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Nov 2024</span>
              </div>
              <p className="text-muted-foreground mb-1">Kompetisi Akademik Tingkat Kabupaten – Bali, Indonesia</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Merancang dan membangun sistem monitoring kelembaban tanah otomatis menggunakan sensor embedded untuk tracking pertanian yang efisien</li>
                <li>Menangani pengembangan end-to-end penuh: desain sistem, integrasi hardware, logika pemrograman, kalibrasi sensor, dan pengujian QA</li>
                <li>Mendapatkan Juara 2 Tingkat Kabupaten pada Kompetisi Akademik Tingkat Kabupaten</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Proyek</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-medium">
                <span>Noir AI — Platform SaaS AI Chat</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2024 – Sekarang</span>
              </div>
              <p className="text-muted-foreground mb-1">Platform chat AI yang diinisiasi sendiri, terinspirasi dari Claude dan ChatGPT</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Tech Stack: Next.js, React.js, Tailwind CSS, Node.js, LLM API Integration (OpenAI/Anthropic), Firebase Authentication</li>
                <li>Mengimplementasikan multi-turn conversation management, autentikasi pengguna, dan real-time streaming responses</li>
                <li>Saat ini dalam pengembangan aktif dengan iterasi fitur dan peningkatan UI/UX yang berkelanjutan</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>Noir Code — SaaS Web Generator Fullstack</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2024 – Sekarang</span>
              </div>
              <p className="text-muted-foreground mb-1">Platform generator aplikasi web yang diinisiasi sendiri, serupa dengan Lovable dan Replit Agent</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Tech Stack: Next.js, React.js, TypeScript, Tailwind CSS, LLM API Integration, Firebase</li>
                <li>Memungkinkan pengguna menghasilkan aplikasi web lengkap dan fungsional dari prompt bahasa alami menggunakan AI code generation</li>
                <li>Saat ini dalam pengembangan aktif; mengelola product roadmap, pengembangan fitur, dan deployment secara mandiri</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Pendidikan</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between font-medium">
                <span>Sarjana Sistem Informasi</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2025 – Sekarang</span>
              </div>
              <p className="text-muted-foreground">Universitas Terbuka – Indonesia</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>Diploma SMA — Program IPA (Ilmu Pengetahuan Alam)</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2022 – Apr 2025</span>
              </div>
              <p className="text-muted-foreground">SMA Negeri 1 Pupuan, Bali</p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  en: {
    title: "I WAYAN RADEA - CV (English)",
    downloadHref: "/CV_I-Wayan-Radea_English.docx",
    content: (
      <div className="space-y-6 text-sm text-foreground/90">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold font-display text-foreground">I WAYAN RADEA</h2>
          <p className="text-primary font-medium">Junior Full-Stack Developer</p>
          <p className="text-xs text-muted-foreground">Bali, Indonesia | +62 851-5503-1983 | radzfoundation@gmail.com</p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
            <a href="https://linkedin.com/in/wayan-radea-82ab63386" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <span>|</span>
            <a href="https://noir-studio.my.id" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">noir-studio.my.id</a>
          </div>
        </div>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-2 uppercase text-xs tracking-wider">Professional Summary</h3>
          <p className="leading-relaxed">
            Junior Full-Stack Developer with 2+ years of hands-on experience designing and developing responsive web applications using modern JavaScript frameworks including React and Next.js. Self-driven developer who independently built and launched two AI-powered SaaS products. Experienced in RESTful API integration, Firebase backend services, and cross-browser compatible, mobile-first UI development. Passionate about building real-world solutions at the intersection of design and technology.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Technical Skills</h3>
          <ul className="space-y-2">
            <li><span className="font-medium">Frontend:</span> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Astro.js, Tailwind CSS, Responsive Web Design, Mobile-First Development, Cross-Browser Compatibility</li>
            <li><span className="font-medium">Backend & API:</span> Node.js, RESTful API Integration, Firebase (Authentication, Firestore, Realtime Database), Basic Data Management</li>
            <li><span className="font-medium">DevOps & Tools:</span> Git, GitHub, Linux (Arch Linux), CLI, Version Control, Web Performance Optimization</li>
            <li><span className="font-medium">AI & Automation:</span> LLM API Integration (OpenAI, Anthropic), Local LLM (Ollama), Prompt Engineering, AI-Assisted Development</li>
            <li><span className="font-medium">Soft Skills:</span> Self-directed Learning, Problem Solving, Agile Mindset, End-to-End Project Ownership</li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Work Experience</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-medium">
                <span>Freelance Full-Stack Web Developer</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jan 2023 – Present</span>
              </div>
              <p className="text-muted-foreground mb-1">Self-Employed – Remote, Indonesia</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Designed and developed 5+ responsive web applications and landing pages using HTML5, CSS3, JavaScript, React.js, and Next.js</li>
                <li>Built reusable, modular UI components following mobile-first design principles and cross-browser compatibility best practices</li>
                <li>Integrated RESTful APIs and Firebase backend services including user authentication, Firestore database, and real-time data management</li>
                <li>Independently conceptualized, architected, and launched two AI-powered SaaS web applications from zero to production</li>
                <li>Applied web performance optimization techniques to improve application load time and user experience</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>IoT Developer (Solo Project)</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Nov 2024</span>
              </div>
              <p className="text-muted-foreground mb-1">Regency-Level Academic Competition – Bali, Indonesia</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Designed and built an automated soil moisture monitoring system using embedded sensors for efficient agricultural tracking</li>
                <li>Handled full end-to-end development: system design, hardware integration, programming logic, sensor calibration, and QA testing</li>
                <li>Awarded 2nd Place (Juara 2 Tingkat Kabupaten) at Regency-Level Academic Competition</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Projects</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-medium">
                <span>Noir AI — AI Chat SaaS Platform</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2024 – Present</span>
              </div>
              <p className="text-muted-foreground mb-1">Self-initiated AI chat platform inspired by Claude and ChatGPT</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Tech Stack: Next.js, React.js, Tailwind CSS, Node.js, LLM API Integration (OpenAI/Anthropic), Firebase Authentication</li>
                <li>Implemented multi-turn conversation management, user authentication, and real-time streaming responses</li>
                <li>Currently in active development with continuous feature iteration and UI/UX improvements</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>Noir Code — Fullstack Web Generator SaaS</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2024 – Present</span>
              </div>
              <p className="text-muted-foreground mb-1">Self-initiated web application generator platform similar to Lovable and Replit Agent</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Tech Stack: Next.js, React.js, TypeScript, Tailwind CSS, LLM API Integration, Firebase</li>
                <li>Enables users to generate complete, functional web applications from natural language prompts using AI code generation</li>
                <li>Currently in active development; managing product roadmap, feature development, and deployment independently</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Education</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between font-medium">
                <span>Bachelor of Information Systems</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2025 – Present</span>
              </div>
              <p className="text-muted-foreground">Universitas Terbuka (Open University) – Indonesia</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>Senior High School Diploma — Science Program (IPA)</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2022 – Apr 2025</span>
              </div>
              <p className="text-muted-foreground">SMA Negeri 1 Pupuan, Bali</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export function CVModal({ isOpen, onOpenChange, lang }: CVModalProps) {
  if (!lang) return null;
  
  const data = cvData[lang];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-border">
          <DialogTitle className="text-lg">{data.title}</DialogTitle>
          <a 
            href={data.downloadHref}
            download={data.downloadHref.replace('/', '')}
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs font-medium hover:bg-primary/90 transition-colors mr-6"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
        </DialogHeader>
        <div className="py-4">
          {data.content}
        </div>
      </DialogContent>
    </Dialog>
  );
}
