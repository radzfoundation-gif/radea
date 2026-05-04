import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Home,
  GraduationCap,
  Briefcase,
  Image as ImageIcon,
  MessageSquare,
  Sun,
  Moon,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const handleOpen = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-command-menu", handleOpen);
    
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-command-menu", handleOpen);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => navigate("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate("/education"))}>
            <GraduationCap className="mr-2 h-4 w-4" />
            <span>Education</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate("/projects"))}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate("/gallery"))}>
            <ImageIcon className="mr-2 h-4 w-4" />
            <span>Gallery</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.dispatchEvent(new CustomEvent("open-note-modal")))}>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Notes</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Appearance">
          <CommandItem onSelect={() => runCommand(toggleTheme)}>
            <Sun className="mr-2 h-4 w-4 dark:hidden" />
            <Moon className="mr-2 h-4 w-4 hidden dark:block" />
            <span>Toggle Theme</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
