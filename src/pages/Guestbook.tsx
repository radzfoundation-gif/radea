import { useEffect, useState } from "react";
import { Search, Sun, Moon, MessageSquare, Send, User } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const translations = {
  id: {
    home: "Beranda",
    education: "Pendidikan",
    projects: "Proyek",
    gallery: "Galeri",
    notes: "Catatan",
    more: "Lainnya",
    guestbookTitle: "Buku Tamu",
    guestbookDesc: "Tinggalkan pesan atau kesan Anda di sini!",
    namePlaceholder: "Nama Anda",
    messagePlaceholder: "Tulis pesan...",
    submit: "Kirim Pesan",
    loading: "Memuat...",
    noMessages: "Belum ada pesan. Jadi yang pertama!",
    success: "Pesan terkirim!",
    error: "Gagal mengirim pesan.",
  },
  en: {
    home: "Home",
    education: "Education",
    projects: "Projects",
    gallery: "Gallery",
    notes: "Notes",
    more: "More",
    guestbookTitle: "Guestbook",
    guestbookDesc: "Leave a message or your thoughts here!",
    namePlaceholder: "Your Name",
    messagePlaceholder: "Write a message...",
    submit: "Send Message",
    loading: "Loading...",
    noMessages: "No messages yet. Be the first!",
    success: "Message sent!",
    error: "Failed to send message.",
  }
};

interface Message {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

const Guestbook = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"id" | "en">("id");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  
  const { toast } = useToast();

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language") as "id" | "en";
    if (savedLang) setLanguage(savedLang);
    fetchMessages();

    const handleRefresh = () => fetchMessages();
    window.addEventListener("refresh-guestbook", handleRefresh);
    return () => window.removeEventListener("refresh-guestbook", handleRefresh);
  }, []);

  const t = translations[language];

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("guestbook")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newMessage) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("guestbook")
        .insert([{ name: newName, message: newMessage }]);

      if (error) throw error;

      toast({ title: t.success });
      setNewName("");
      setNewMessage("");
      fetchMessages();
    } catch (error) {
      toast({ title: t.error, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <PageTransition>
      <div className="min-h-screen w-full relative py-12 px-4 md:px-8 bg-[#F5F5DC] dark:bg-background transition-colors duration-300">
        <div className="mx-auto max-w-[900px] bg-card shadow-paper relative overflow-hidden rounded-sm z-10">
          
          <header className="flex items-center justify-between px-8 py-5 border-b border-border">
            <div className="font-display text-xl font-bold tracking-tighter">
              <Link to="/">RR</Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <nav className="flex items-center gap-5">
                <Link to="/" className="hover:text-foreground transition-colors">{t.home}</Link>
                <Link to="/education" className="hover:text-foreground transition-colors">{t.education}</Link>
                <Link to="/projects" className="hover:text-foreground transition-colors">{t.projects}</Link>
                <Link to="/gallery" className="hover:text-foreground transition-colors">{t.gallery}</Link>
                <Link to="/notes" className="text-foreground font-medium">{t.notes}</Link>
              </nav>
              <button onClick={() => window.dispatchEvent(new CustomEvent("open-command-menu"))}>
                <Search className="w-4 h-4" />
              </button>
              <button onClick={() => setIsDark(!isDark)}>
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
          </header>

          <div className="h-8 diagonal-pattern border-b border-border"></div>

          <div className="px-8 md:px-12 py-10">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-medium text-foreground">{t.guestbookTitle}</h2>
            </div>
            <p className="text-muted-foreground mb-10">{t.guestbookDesc}</p>

            {/* Message Form */}
            <form onSubmit={handleSubmit} className="bg-secondary/20 p-6 rounded-2xl border border-border/50 mb-12">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t.messagePlaceholder}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? t.loading : t.submit}
                </button>
              </div>
            </form>

            {/* Messages List */}
            <div className="space-y-6">
              {isLoading ? (
                <p className="text-center text-muted-foreground">{t.loading}</p>
              ) : messages.length === 0 ? (
                <p className="text-center text-muted-foreground">{t.noMessages}</p>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                        <User className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="font-medium text-sm text-foreground">{msg.name}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {format(new Date(msg.created_at), "MMM d, yyyy")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/10 p-3 rounded-lg border border-border/30">
                      {msg.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Guestbook;
