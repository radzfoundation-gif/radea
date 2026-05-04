import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageSquare, Send, X, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface NoteModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  language: "id" | "en";
}

const content = {
  id: {
    title: "Catatan Cepat",
    desc: "Tulis pesan singkat untuk saya!",
    name: "Nama Anda",
    message: "Pesan Anda...",
    submit: "Kirim",
    viewAll: "Lihat semua catatan",
    success: "Pesan terkirim ke buku tamu!",
    error: "Gagal mengirim pesan.",
  },
  en: {
    title: "Quick Note",
    desc: "Leave a quick message for me!",
    name: "Your Name",
    message: "Your message...",
    submit: "Send",
    viewAll: "View all notes",
    success: "Message sent to guestbook!",
    error: "Failed to send message.",
  }
};

export function NoteModal({ isOpen, onOpenChange, language }: NoteModalProps) {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("guestbook")
        .insert([{ name, message }]);

      if (error) throw error;

      toast({ title: t.success });
      setName("");
      setMessage("");
      onOpenChange(false);
      window.dispatchEvent(new CustomEvent("refresh-guestbook"));
    } catch (error) {
      toast({ title: t.error, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] p-6 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-3xl">
        <DialogHeader className="mb-4">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <DialogTitle className="text-xl font-display font-bold">{t.title}</DialogTitle>
          <DialogDescription>{t.desc}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={t.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            required
          />
          <textarea
            placeholder={t.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 h-24 resize-none transition-all"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "..." : t.submit}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <button 
            onClick={() => {
              onOpenChange(false);
              navigate("/notes");
            }}
            className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto"
          >
            {t.viewAll} <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
