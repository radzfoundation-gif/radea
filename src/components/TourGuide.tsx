import { useEffect, useState } from "react";
import { Joyride, CallBackProps, STATUS, Step } from "react-joyride";

interface TourGuideProps {
  language: "id" | "en";
}

export function TourGuide({ language }: TourGuideProps) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const isTourCompleted = localStorage.getItem("tour-completed");
    if (!isTourCompleted) {
      // Small delay to let animations finish
      setTimeout(() => {
        setRun(true);
      }, 1000);
    }
    
    // Listen for custom event to trigger tour manually
    const startTour = () => setRun(true);
    window.addEventListener("start-tour", startTour);
    return () => window.removeEventListener("start-tour", startTour);
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
      localStorage.setItem("tour-completed", "true");
    }
  };

  const stepsEn: Step[] = [
    {
      target: "body",
      content: "Welcome to my Digital Portfolio! Let me give you a quick tour to help you navigate.",
      placement: "center",
      disableBeacon: true,
    },
    {
      target: "#tour-profile",
      content: "Here is a quick overview of my profile. You can see my current status and role here.",
      placement: "bottom",
    },
    {
      target: "#tour-cv",
      content: "You can download my CV directly or view it in your preferred language.",
      placement: "bottom",
    },
    {
      target: "#tour-nav",
      content: "Use this navigation menu to explore my Education, Projects, Photo Gallery, and read the Guestbook.",
      placement: "bottom",
    },
    {
      target: "#tour-command-menu",
      content: "Pro tip: Press Ctrl+K (or Cmd+K on Mac) to open the Command Menu for quick navigation and theme switching!",
      placement: "bottom",
    },
    {
      target: "#tour-tech-stack",
      content: "These are the technologies and tools I am proficient in. Hover over them to see the colors!",
      placement: "top",
    },
    {
      target: "#tour-certificates",
      content: "Here are some of my certifications. Click to view them!",
      placement: "top",
    },
    {
      target: "#tour-contact",
      content: "Want to get in touch? Send me a message here or connect via my social media links.",
      placement: "top",
    }
  ];

  const stepsId: Step[] = [
    {
      target: "body",
      content: "Selamat datang di Portofolio Digital saya! Mari saya pandu sebentar untuk menjelajah halaman ini.",
      placement: "center",
      disableBeacon: true,
    },
    {
      target: "#tour-profile",
      content: "Ini adalah ringkasan singkat profil saya. Anda bisa melihat status dan peran saya saat ini di sini.",
      placement: "bottom",
    },
    {
      target: "#tour-cv",
      content: "Anda dapat mengunduh CV saya langsung atau melihatnya dalam bahasa yang Anda inginkan.",
      placement: "bottom",
    },
    {
      target: "#tour-nav",
      content: "Gunakan menu navigasi ini untuk menelusuri halaman Pendidikan, Proyek, Galeri Foto, dan membaca Buku Tamu.",
      placement: "bottom",
    },
    {
      target: "#tour-command-menu",
      content: "Tips: Tekan Ctrl+K (atau Cmd+K di Mac) untuk membuka Command Menu demi navigasi cepat dan mengganti tema!",
      placement: "bottom",
    },
    {
      target: "#tour-tech-stack",
      content: "Ini adalah daftar teknologi dan alat yang saya kuasai. Coba arahkan kursor ke logonya!",
      placement: "top",
    },
    {
      target: "#tour-certificates",
      content: "Berikut adalah beberapa sertifikasi saya. Klik untuk melihatnya!",
      placement: "top",
    },
    {
      target: "#tour-contact",
      content: "Ingin menghubungi saya? Kirimkan pesan di sini atau hubungi lewat media sosial saya.",
      placement: "top",
    }
  ];

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={language === "id" ? stepsId : stepsEn}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#3b82f6",
          textColor: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
        },
        tooltipContainer: {
          textAlign: "left",
        },
        buttonNext: {
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          borderRadius: "0.375rem",
        },
        buttonBack: {
          color: "hsl(var(--muted-foreground))",
        },
        buttonSkip: {
          color: "hsl(var(--muted-foreground))",
        },
        tooltip: {
          borderRadius: "0.75rem",
          padding: "20px",
          border: "1px solid hsl(var(--border))",
        }
      }}
      locale={{
        back: language === "id" ? "Kembali" : "Back",
        close: language === "id" ? "Tutup" : "Close",
        last: language === "id" ? "Selesai" : "Finish",
        next: language === "id" ? "Lanjut" : "Next",
        skip: language === "id" ? "Lewati" : "Skip",
      }}
    />
  );
}