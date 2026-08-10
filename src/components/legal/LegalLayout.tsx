import React, { useEffect } from "react";
import { CinematicFooter } from "../ui/motion-footer";
import { ArrowLeft, ShieldCheck, FileText, Cookie, Mail } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  metaDescription: string;
  activeTab: "privacy" | "terms" | "cookie";
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  badge,
  metaDescription,
  activeTab,
  onNavigate,
  children
}) => {
  useEffect(() => {
    document.title = `${title} | Brovxi`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, metaDescription]);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col justify-between">
      {/* Background glow effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Top Header Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 px-4 md:px-8 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-400/50 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-all group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Brovxi</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-extrabold text-sm sm:text-base tracking-tighter text-white uppercase">
              BROV<span className="text-cyan-400">XI</span>
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="hidden sm:inline text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Trust & Legal Center
            </span>
          </div>

          <a
            href="mailto:contactphoenixfy@gmail.com"
            className="hidden md:flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>contactphoenixfy@gmail.com</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Header Badge & Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            {badge}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter text-white mb-3">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-normal">
            {subtitle}
          </p>

          {/* Quick Legal Switcher Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8 p-1.5 rounded-full bg-white/5 border border-white/10 max-w-md mx-auto">
            <button
              onClick={() => onNavigate('/privacy')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "privacy"
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy Policy
            </button>

            <button
              onClick={() => onNavigate('/terms')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "terms"
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Terms of Use
            </button>

            <button
              onClick={() => onNavigate('/cookie-notice')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "cookie"
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Cookie className="w-3.5 h-3.5" />
              Cookie Info
            </button>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-cyan-200 text-xs sm:text-sm leading-relaxed mb-8 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">Informational Statement:</strong>
            The legal disclosures on this page accurately describe the technical implementation, storage, and API data practices of the Brovxi web platform. This document is provided for general informational transparency and does not constitute formal legal advice.
          </div>
        </div>

        {/* Dynamic Legal Document Content */}
        <div className="space-y-8 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
          {children}
        </div>
      </main>

      <CinematicFooter onNavigate={onNavigate} />
    </div>
  );
};
