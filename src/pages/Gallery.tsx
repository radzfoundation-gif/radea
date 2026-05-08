import { useEffect, useState } from "react";
import { Search, Sun, Moon, Image as ImageIcon, Play, Video } from "lucide-react";
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
    galleryTitle: "Galeri Video",
    videoGallery: "Galeri Video",
    introducing: "Introducing NOIR AI",
  },
  en: {
    home: "Home",
    education: "Education",
    projects: "Projects",
    gallery: "Gallery",
    notes: "Notes",
    more: "More",
    galleryTitle: "Video Gallery",
    videoGallery: "Video Gallery",
    introducing: "Introducing NOIR AI",
  }
};

const videos = [
  {
    id: "introducing",
    src: "https://drive.google.com/file/d/1LlJhMcahAol4KfS8xvIRVdW-G2tPxH8a/preview",
    titleKey: "introducing" as const,
    aspect: "aspect-video",
    isEmbed: true,
  },
];

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
        <Header t={t} isDark={isDark} setIsDark={setIsDark} />

        {/* Diagonal Separator */}
        <div className="h-8 diagonal-pattern border-b border-border"></div>

        {/* Gallery Content */}
        <div className="px-8 md:px-12 py-12">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-8 text-center">
            {t.videoGallery}
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="space-y-3">
                {video.isEmbed ? (
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <img src="/thum.png" alt="Thumbnail" className="w-full aspect-video object-cover" />
                    <a 
                      href="https://drive.google.com/file/d/1LlJhMcahAol4KfS8xvIRVdW-G2tPxH8a/preview" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <video
                      src={video.src}
                      controls
                      className={`w-full ${video.aspect} rounded-lg`}
                      preload="metadata"
                    />
                  </div>
                )}
                <p className="text-center text-sm font-medium text-foreground">
                  {t[video.titleKey]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </PageTransition>
  );
};

export default Gallery;
