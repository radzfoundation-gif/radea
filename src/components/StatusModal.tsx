import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BadgeCheck, Rocket, Zap, Code2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface StatusModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  language: "id" | "en";
}

const content = {
  id: {
    title: "Status Lamaran",
    subtitle: "Apple Developer Academy @ BINUS",
    description: "Sedang berjuang untuk bergabung dengan ekosistem pengembang Apple!",
    progress: "Progres Saat Ini",
    stages: [
      { name: "Registrasi", status: "current" },
      { name: "Tes Online", status: "upcoming" },
      { name: "Wawancara", status: "upcoming" },
      { name: "Pengumuman", status: "upcoming" },
    ],
    learning: "Sedang Mempelajari",
    motivation: "Tujuan saya adalah membangun aplikasi yang berdampak besar dengan user experience yang luar biasa."
  },
  en: {
    title: "Application Status",
    subtitle: "Apple Developer Academy @ BINUS",
    description: "Striving to join the Apple developer ecosystem!",
    progress: "Current Progress",
    stages: [
      { name: "Registration", status: "current" },
      { name: "Online Test", status: "upcoming" },
      { name: "Interview", status: "upcoming" },
      { name: "Result", status: "upcoming" },
    ],
    learning: "Currently Learning",
    motivation: "My goal is to build high-impact applications with exceptional user experience."
  }
};

export const StatusModal = ({ isOpen, onOpenChange, language }: StatusModalProps) => {
  const t = content[language];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none bg-background/80 backdrop-blur-xl shadow-2xl">
        {/* Header Image/Pattern */}
        <div className="h-32 bg-gradient-to-br from-blue-600 to-indigo-700 relative flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 dotted-pattern"></div>
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">{t.title}</span>
            </div>
            <DialogTitle className="text-2xl font-display font-bold">{t.subtitle}</DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed pt-1">
              {t.description}
            </DialogDescription>
          </DialogHeader>

          {/* Progress Timeline */}
          <div className="space-y-4 mb-8">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-3 h-3" /> {t.progress}
            </h4>
            <div className="flex justify-between relative px-2">
              <div className="absolute top-4 left-0 right-0 h-[2px] bg-secondary z-0"></div>
              {t.stages.map((stage, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 border-background transition-colors ${
                    stage.status === 'completed' ? 'bg-blue-500 text-white' : 
                    stage.status === 'current' ? 'bg-background border-blue-500 text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 
                    'bg-secondary text-muted-foreground'
                  }`}>
                    {stage.status === 'completed' ? <BadgeCheck className="w-4 h-4" /> : <span className="text-[10px] font-bold">{i + 1}</span>}
                  </div>
                  <span className={`text-[10px] font-medium ${stage.status === 'current' ? 'text-blue-500 font-bold' : 'text-muted-foreground'}`}>
                    {stage.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/30 p-4 rounded-2xl border border-border/50">
              <Code2 className="w-5 h-5 mb-2 text-primary" />
              <h5 className="text-[11px] font-bold uppercase text-muted-foreground mb-1">{t.learning}</h5>
              <p className="text-sm font-medium">Swift, SwiftUI</p>
            </div>
            <div className="bg-secondary/30 p-4 rounded-2xl border border-border/50">
              <GraduationCap className="w-5 h-5 mb-2 text-primary" />
              <h5 className="text-[11px] font-bold uppercase text-muted-foreground mb-1">Target</h5>
              <p className="text-sm font-medium">Cohort 2027</p>
            </div>
          </div>

          <p className="mt-6 text-[13px] text-muted-foreground italic text-center px-4">
            "{t.motivation}"
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
