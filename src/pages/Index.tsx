import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowDownToLine,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Command,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Laptop2,
  Mail,
  MapPin,
  Moon,
  Music2,
  Radio,
  Search,
  Send,
  Sparkles,
  Sun,
  Terminal,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Home", "Projects", "Experience", "Skills", "Contact"];

const aboutPoints = [
  "Freelance web developer since 2023",
  "Building landing pages and web apps",
  "Strong in React, Next.js, Tailwind CSS",
  "Experience with REST API integration",
  "Firebase authentication and backend logic",
  "Linux and Git workflow experience",
  "Exploring AI and Local LLM integrations",
];

const projects = [
  {
    title: "Automatic Soil Moisture Monitoring System",
    description: "Smart agriculture monitoring project with sensor integration, programming logic, calibration, and testing.",
    meta: "Awarded 2nd Place Regency Level",
    tags: ["IoT", "Sensors", "Testing"],
  },
  {
    title: "Personal Portfolio Website",
    description: "A clean developer profile system designed around concise storytelling, project proof, and fast contact paths.",
    meta: "React + Tailwind CSS",
    tags: ["Portfolio", "UI", "Responsive"],
  },
  {
    title: "SaaS Landing Page Projects",
    description: "Conversion-focused landing pages with reusable UI sections, clear hierarchy, and optimized mobile layouts.",
    meta: "Freelance builds",
    tags: ["Landing", "Components", "SEO"],
  },
  {
    title: "AI Integration Projects",
    description: "Experiments connecting modern apps to AI APIs, local LLM workflows, and practical automation interfaces.",
    meta: "Ollama + API integrations",
    tags: ["AI", "API", "Automation"],
  },
];

const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Astro", "Tailwind CSS"],
  Backend: ["Node.js", "Firebase", "REST API", "Authentication"],
  Tools: ["Git", "GitHub", "Linux (Arch Linux)", "CLI"],
  AI: ["Ollama", "Local LLM", "API Integration"],
};

const commands = ["View Projects", "Contact Me", "Download CV", "Frontend", "AI Integration", "Firebase", "GitHub"];

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") setSearchOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filteredCommands = useMemo(
    () => commands.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-foreground texture-drift">
      <header className="sticky top-0 z-50 border-b border-border bg-background/86 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
          <a href="#home" className="font-display flex h-10 w-10 items-center justify-center rounded-md border border-primary bg-primary text-primary-foreground shadow-paper">
            RR
          </a>
          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
          <button onClick={() => setSearchOpen(true)} className="ml-auto flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-card px-3 text-left text-sm text-muted-foreground shadow-paper md:max-w-64">
            <Search className="size-4" />
            <span className="truncate">Search</span>
            <kbd className="ml-auto hidden rounded border border-border bg-secondary px-1.5 py-0.5 font-display text-[10px] text-muted-foreground sm:inline-flex">Ctrl K</kbd>
          </button>
          <Button variant="paper" size="icon" aria-label="Toggle theme" onClick={() => setIsDark((value) => !value)}>
            {isDark ? <Sun /> : <Moon />}
          </Button>
        </nav>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-primary/25 p-4 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <div className="paper-card mx-auto mt-24 max-w-xl rounded-lg p-3" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center gap-2 border-b border-border px-2 pb-3">
              <Command className="size-4 text-muted-foreground" />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search portfolio..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </div>
            <div className="space-y-1 pt-3">
              {filteredCommands.map((item) => (
                <button key={item} className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-secondary">
                  {item}<ExternalLink className="size-3 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <section id="home" className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pb-24 md:pt-16">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-paper">
            <Radio className="size-3 text-verified" /> Bali, Indonesia · Building ideas into reality
          </div>
          <h1 className="font-display max-w-4xl text-balance text-5xl leading-tight md:text-7xl">I Wayan Radea</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p className="font-display text-xl text-muted-foreground md:text-2xl">Junior Full-Stack Developer</p>
            <span className="inline-flex items-center gap-1 rounded-md bg-verified px-2.5 py-1 text-xs font-semibold text-verified-foreground"><CheckCircle2 className="size-3" /> Verified developer</span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Junior Full-Stack Developer focused on building responsive web applications using React, Next.js, and modern frontend technologies. Passionate about clean UI, API integrations, and AI-powered systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="ink" asChild><a href="#projects"><Code2 /> View Projects</a></Button>
            <Button variant="paper" asChild><a href="#contact"><Mail /> Contact Me</a></Button>
            <Button variant="ruled"><ArrowDownToLine /> Download CV</Button>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {["2.4k visitors", "Available", "2023 started", "Arch Linux"].map((item) => (
              <div key={item} className="paper-card rounded-lg px-3 py-3 font-display text-sm">{item}</div>
            ))}
          </div>
        </div>

        <aside className="grid gap-4 animate-fade-up md:pt-4" style={{ animationDelay: "120ms" }}>
          <div className="paper-card relative overflow-hidden rounded-xl p-5">
            <div className="notebook-strip absolute inset-x-0 top-0 h-4 opacity-60" />
            <div className="mx-auto mt-6 flex aspect-square max-w-72 items-end justify-center rounded-full border border-border bg-secondary shadow-inner">
              <div className="relative mb-6 h-48 w-40">
                <div className="absolute left-7 top-2 h-24 w-24 rounded-full border border-primary bg-highlight" />
                <div className="absolute left-4 top-24 h-28 w-32 rounded-t-[3rem] border border-primary bg-primary" />
                <div className="absolute left-12 top-11 h-2 w-2 rounded-full bg-primary" />
                <div className="absolute right-12 top-11 h-2 w-2 rounded-full bg-primary" />
                <div className="absolute left-16 top-16 h-1 w-8 rounded bg-primary" />
                <div className="absolute left-2 top-28 rounded-md border border-border bg-card px-2 py-1 font-display text-xs">dev</div>
                <div className="absolute right-0 top-36 rounded-md border border-border bg-card px-2 py-1 font-display text-xs">AI</div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Widget icon={<Music2 />} title="Now playing" value="lo-fi focus radio" />
            <Widget icon={<Laptop2 />} title="Current stack" value="React · Next · Firebase" />
          </div>
        </aside>
      </section>

      <Section id="about" title="About" icon={<UserRound />}>
        <div className="grid gap-3 md:grid-cols-2">
          {aboutPoints.map((point) => <Bullet key={point}>{point}</Bullet>)}
        </div>
      </Section>

      <Section id="experience" title="Experience" icon={<BriefcaseBusiness />}>
        <Timeline title="Freelance / Independent Web Developer" period="2023 - Present" items={["Responsive web development", "Landing page development", "API integrations", "UI component systems", "Backend services with Firebase"]} />
      </Section>

      <Section id="projects" title="Projects" icon={<Code2 />}>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="paper-card group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl leading-snug">{project.title}</h3>
                <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
              <p className="mt-4 font-display text-sm">{project.meta}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-md border border-border bg-secondary px-2 py-1 text-xs">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" icon={<Terminal />}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="paper-card rounded-xl p-5">
              <h3 className="font-display text-lg">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {list.map((skill) => <span key={skill} className="rounded-md border border-border bg-background px-2.5 py-1.5 text-sm">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" icon={<GraduationCap />}>
        <Timeline title="Universitas Terbuka" period="2025 - Present" items={["Information Systems", "Remote-first learning", "Systems analysis foundation"]} />
      </Section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="paper-card overflow-hidden rounded-xl p-5">
          <div className="flex items-center gap-2 font-display text-sm text-muted-foreground"><Github className="size-4" /> GitHub contribution widget</div>
          <div className="mt-5 grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1">
            {Array.from({ length: 98 }).map((_, index) => (
              <div key={index} className="aspect-square rounded-sm border border-border bg-secondary" style={{ opacity: 0.35 + ((index * 7) % 9) / 12 }} />
            ))}
          </div>
        </div>
      </section>

      <Section id="contact" title="Contact" icon={<Send />}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ContactLink icon={<Mail />} label="Email" value="hello@iwayanradea.dev" />
          <ContactLink icon={<Github />} label="GitHub" value="github.com/iwayanradea" />
          <ContactLink icon={<Globe2 />} label="Portfolio Website" value="iwayanradea.dev" />
          <ContactLink icon={<ExternalLink />} label="LinkedIn" value="linkedin.com/in/iwayanradea" />
        </div>
      </Section>
    </main>
  );
};

const Section = ({ id, title, icon, children }: { id: string; title: string; icon: ReactNode; children: ReactNode }) => (
  <section id={id} className="section-rule mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
    <div className="mb-8 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card shadow-paper">{icon}</span>
      <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
    </div>
    {children}
  </section>
);

const Widget = ({ icon, title, value }: { icon: ReactNode; title: string; value: string }) => (
  <div className="paper-card rounded-xl p-4 transition-transform hover:-translate-y-1">
    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary">{icon}</div>
    <p className="text-xs uppercase text-muted-foreground">{title}</p>
    <p className="mt-1 font-display text-sm">{value}</p>
  </div>
);

const Bullet = ({ children }: { children: ReactNode }) => (
  <div className="paper-card flex items-start gap-3 rounded-lg p-4"><Sparkles className="mt-0.5 size-4 shrink-0 text-accent" /><span>{children}</span></div>
);

const Timeline = ({ title, period, items }: { title: string; period: string; items: string[] }) => (
  <div className="paper-card relative rounded-xl p-6">
    <div className="absolute bottom-6 left-9 top-20 w-px bg-border" />
    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-5">
      <div><h3 className="font-display text-xl">{title}</h3><p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-3" /> Bali / Remote</p></div>
      <span className="rounded-md border border-border bg-secondary px-3 py-1 font-display text-sm">{period}</span>
    </div>
    <div className="mt-5 space-y-3">
      {items.map((item) => <div key={item} className="relative flex items-center gap-4 pl-7"><span className="absolute left-0 h-3 w-3 rounded-full border border-primary bg-card" />{item}</div>)}
    </div>
  </div>
);

const ContactLink = ({ icon, label, value }: { icon: ReactNode; label: string; value: string }) => (
  <a href="#contact" className="paper-card rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-lift">
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">{icon}</div>
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="mt-1 break-words font-display text-sm">{value}</p>
  </a>
);

export default Index;