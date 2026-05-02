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
          <p className="text-xs text-muted-foreground">Pujungan, Tabanan, Bali | +62 851-5503-1983 | radzfoundation@gmail.com</p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
            <a href="https://rlabs-studio.cloud" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">rlabs-studio.cloud</a>
            <span>|</span>
            <a href="https://radz-foundation-showcase.vercel.app" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Portfolio</a>
          </div>
        </div>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-2 uppercase text-xs tracking-wider">Ringkasan Profil</h3>
          <p className="leading-relaxed">
            Junior Full-Stack Developer dengan pengalaman langsung dalam membangun aplikasi web responsif menggunakan framework JavaScript modern. Memiliki fondasi kuat dalam pengembangan frontend dengan React serta pengalaman mengintegrasikan REST API dan layanan backend dasar. Terbiasa bekerja dengan Git, lingkungan Linux, dan alur kerja tim secara kolaboratif. Sangat termotivasi, cepat belajar, dan antusias untuk berkembang sambil berkontribusi pada aplikasi yang bersih, mudah dipelihara, dan berfokus pada pengguna.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Pendidikan</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between font-medium">
                <span>Mahasiswa Aktif – Sistem Informasi</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2025 – Sekarang</span>
              </div>
              <p className="text-muted-foreground">Universitas Terbuka – Indonesia</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>SMA Negeri 1 Pupuan – Program IPA</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2022 – Apr 2025</span>
              </div>
              <p className="text-muted-foreground">SMA Negeri 1 Pupuan, Bali</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>SMP Negeri 6 Pupuan Satu Atap</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2019 – Apr 2022</span>
              </div>
              <p className="text-muted-foreground">Pupuan, Tabanan, Bali</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>SD Negeri 6 Pujungan</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2013 – Apr 2019</span>
              </div>
              <p className="text-muted-foreground">Pujungan, Tabanan, Bali</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Pengalaman Kerja</h3>
          <div>
            <div className="flex justify-between font-medium">
              <span>Freelance / Independent Web Developer</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jan 2023 – Sekarang</span>
            </div>
            <p className="text-muted-foreground mb-2">Bekerja Mandiri – Indonesia</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Merancang dan mengembangkan aplikasi web responsif dan landing page menggunakan HTML, CSS, JavaScript, serta framework modern seperti React dan Next.js.</li>
              <li>Membangun komponen UI yang dapat digunakan ulang dan menerapkan desain mobile-first.</li>
              <li>Mengintegrasikan REST API dan layanan backend untuk konten dinamis dan interaksi pengguna.</li>
              <li>Mengembangkan fungsionalitas backend dasar menggunakan Firebase dan Node.js.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Proyek</h3>
          <div>
            <div className="flex justify-between font-medium">
              <span>Sistem Monitoring Kelembaban Tanah Otomatis</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">November 2025</span>
            </div>
            <p className="text-muted-foreground mb-2">Proyek Mandiri – Indonesia</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Mengembangkan perangkat monitoring kelembaban tanah otomatis untuk mendukung proyek sekolah.</li>
              <li>Bertanggung jawab penuh atas desain sistem, integrasi sensor, logika pemrograman dasar, kalibrasi, dan pengujian.</li>
              <li>Meraih Juara 2 Tingkat Kabupaten dalam kompetisi akademik tingkat daerah.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Keahlian Teknis</h3>
          <ul className="space-y-1">
            <li><span className="font-medium">Frontend Development:</span> HTML5, CSS3, JavaScript, TypeScript (dasar), React, Next.js, Astro JS, Tailwind CSS</li>
            <li><span className="font-medium">Backend & API:</span> Node.js (dasar), Firebase, REST API, Autentikasi, Pengelolaan Data Dasar</li>
            <li><span className="font-medium">Database:</span> Pemahaman dasar SQL & NoSQL</li>
            <li><span className="font-medium">Tools & Version Control:</span> Git, GitHub, Linux (Arch Linux), CLI</li>
            <li><span className="font-medium">UI/UX & Web Performance:</span> Responsive Design, Mobile-First Approach, Optimasi Performa</li>
            <li><span className="font-medium">AI & Otomasi (Dasar):</span> Local LLM (Ollama), Integrasi API / LLM Dasar</li>
            <li><span className="font-medium">Soft Skills:</span> Problem Solving, Cepat Belajar, Kerja Tim, Komunikasi yang Baik, Perhatian terhadap Detail</li>
          </ul>
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
          <p className="text-xs text-muted-foreground">Pujungan, Tabanan, Bali | +62 851-5503-1983 | radzfoundation@gmail.com</p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
            <a href="https://rlabs-studio.cloud" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">rlabs-studio.cloud</a>
            <span>|</span>
            <a href="https://radz-foundation-showcase.vercel.app" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Portfolio</a>
          </div>
        </div>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-2 uppercase text-xs tracking-wider">Profile Summary</h3>
          <p className="leading-relaxed">
            Junior Full-Stack Developer with hands-on experience building responsive web applications using modern JavaScript frameworks. Strong foundation in frontend development with React and experience integrating REST APIs and basic backend services. Comfortable working with Git, Linux environments, and collaborative team workflows. Highly motivated, fast learner, and eager to grow while contributing to clean, maintainable, and user-focused applications.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Education</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between font-medium">
                <span>Active Student – Information Systems</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">2025 – Present</span>
              </div>
              <p className="text-muted-foreground">Universitas Terbuka (Open University) – Indonesia</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>Senior High School – Science Program</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2022 – Apr 2025</span>
              </div>
              <p className="text-muted-foreground">SMA Negeri 1 Pupuan, Bali</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>Junior High School</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2019 – Apr 2022</span>
              </div>
              <p className="text-muted-foreground">SMP Negeri 6 Pupuan Satu Atap, Bali</p>
            </div>
            <div>
              <div className="flex justify-between font-medium">
                <span>Elementary School</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jul 2013 – Apr 2019</span>
              </div>
              <p className="text-muted-foreground">SD Negeri 6 Pujungan, Bali</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Work Experience</h3>
          <div>
            <div className="flex justify-between font-medium">
              <span>Freelance / Independent Web Developer</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">Jan 2023 – Present</span>
            </div>
            <p className="text-muted-foreground mb-2">Self-employed – Indonesia</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Designed and developed responsive web applications and landing pages using HTML, CSS, JavaScript, and modern frameworks such as React and Next.js.</li>
              <li>Built reusable UI components and implemented mobile-first designs to ensure compatibility across devices and browsers.</li>
              <li>Integrated REST APIs and backend services for dynamic content and user interactions.</li>
              <li>Developed basic backend functionality using Firebase and Node.js-based services, including authentication and data handling.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Projects</h3>
          <div>
            <div className="flex justify-between font-medium">
              <span>Automatic Soil Moisture Monitoring System</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">November 2025</span>
            </div>
            <p className="text-muted-foreground mb-2">Independent Project – Indonesia</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Developed an automatic soil moisture monitoring device to support a school project focused on efficient soil condition monitoring.</li>
              <li>Fully responsible for the end-to-end development process: system design, sensor integration, basic programming logic, calibration, and testing.</li>
              <li>Submitted to a regional academic competition and achieved 2nd Place at the Regency Level.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-foreground border-b border-border pb-1 mb-3 uppercase text-xs tracking-wider">Technical Skills</h3>
          <ul className="space-y-1">
            <li><span className="font-medium">Frontend Development:</span> HTML5, CSS3, JavaScript, TypeScript (basic), React, Next.js, Astro JS, Tailwind CSS</li>
            <li><span className="font-medium">Backend & API:</span> Node.js (basic), Firebase, REST API, Authentication, Basic Data Handling</li>
            <li><span className="font-medium">Database:</span> Basic understanding of SQL & NoSQL databases</li>
            <li><span className="font-medium">Tools & Version Control:</span> Git, GitHub, Linux (Arch Linux), CLI</li>
            <li><span className="font-medium">UI/UX & Web Performance:</span> Responsive Design, Mobile-First Approach, Performance Optimization</li>
            <li><span className="font-medium">AI & Automation (Basic):</span> Local LLM (Ollama), Basic LLM / API Integration</li>
            <li><span className="font-medium">Soft Skills:</span> Problem Solving, Fast Learner, Team Collaboration, Good Communication, Attention to Detail</li>
          </ul>
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
