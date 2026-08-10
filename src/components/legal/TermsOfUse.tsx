import React from "react";
import { LegalLayout } from "./LegalLayout";
import { FileText, AlertOctagon, ShieldAlert, Cpu, Zap, Scale, CheckCircle2 } from "lucide-react";

interface TermsOfUseProps {
  onNavigate: (path: string) => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Terms of Use"
      subtitle="Terms and conditions governing your access to and use of the Brovxi web platform, telemetry simulator, and features."
      badge="TERMS & CONDITIONS"
      metaDescription="Read the official Brovxi Terms of Use covering permitted simulator use, rider safety warnings, intellectual property, speed camera disclaimers, and Spotify API terms."
      activeTab="terms"
      onNavigate={onNavigate}
    >
      {/* 1. Acceptance of Terms */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <FileText className="w-5 h-5" />
          <h2>1. Acceptance of Terms</h2>
        </div>
        <p>
          By accessing or using the Brovxi website, telemetry simulator, Spotify Intercom HUD, or associated web services (collectively, "the Platform"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to all terms and conditions outlined herein, you must immediately discontinue use of the Platform.
        </p>
      </section>

      {/* 2. Motorcycle Rider Safety Warning */}
      <section className="rounded-3xl bg-amber-950/30 border border-amber-500/40 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-amber-400 font-bold text-lg">
          <AlertOctagon className="w-6 h-6 shrink-0" />
          <h2>2. CRITICAL MOTORCYCLE RIDER SAFETY WARNING</h2>
        </div>
        <p className="text-amber-200 text-sm sm:text-base leading-relaxed">
          <strong>RIDER SAFETY IS YOUR SOLE RESPONSIBILITY.</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-neutral-300">
          <li>
            <strong className="text-white">NO IN-RIDE SCREEN INTERACTION:</strong> You must <strong>NEVER</strong> attempt to touch, tap, adjust, configure, or read detailed web displays or simulator controls while actively operating a motorcycle or any moving vehicle on public or private roads.
          </li>
          <li>
            <strong className="text-white">EYES ON THE ROAD:</strong> Operating a motorcycle requires 100% of your focus, visual attention, and physical control. Looking at mobile devices or web screens while riding creates an extreme risk of severe bodily injury, collision, or fatality.
          </li>
          <li>
            <strong className="text-white">SAFE STOP REQUIREMENT:</strong> Always bring your motorcycle to a complete, lawful stop in a designated safe parking area off the active roadway before interacting with any screen controls or telemetry interfaces.
          </li>
        </ul>
      </section>

      {/* 3. Permitted & Prohibited Use */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Zap className="w-5 h-5" />
          <h2>3. Permitted & Prohibited Use</h2>
        </div>
        <p>
          <strong>Permitted Use:</strong> The Platform is provided as a pre-launch web preview and interactive simulator for personal, non-commercial educational, evaluation, and entertainment purposes.
        </p>
        <p>
          <strong>Prohibited Activities:</strong> When using the Platform, you agree not to:
        </p>
        <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-300 space-y-1">
          <li>Attempt to reverse-engineer, decompile, or extract source code from the Platform or serverless endpoints.</li>
          <li>Use automated bots, scrapers, or scripts to overload or flood Platform infrastructure.</li>
          <li>Interfere with or bypass Spotify OAuth authentication mechanisms or rate limits.</li>
          <li>Re-host, redistribute, or white-label the Brovxi telemetry simulator or UI components without prior written consent.</li>
          <li>Violate any local traffic laws, speed limits, or motor vehicle regulations.</li>
        </ul>
      </section>

      {/* 4. Telemetry & Speed Camera Radar Disclaimer */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <ShieldAlert className="w-5 h-5" />
          <h2>4. Simulated Telemetry & Speed Radar Disclaimer</h2>
        </div>
        <p>
          All lean angle values, speed camera radar alerts, ETA pace comparisons, G-force estimations, mounting calibration math, and fuel intelligence metrics displayed on the pre-launch web platform are <strong>simulated mathematical representations</strong> intended for demonstration purposes.
        </p>
        <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-300 space-y-1.5">
          <li>Speed camera radar alerts do not guarantee real-time speed trap coverage or law enforcement placement.</li>
          <li>Simulated lean angles and traction thresholds must not be relied upon to determine physical cornering limits or road grip safety.</li>
          <li>Riders are legally required to obey posted speed limits and traffic rules at all times regardless of any radar HUD warning or audio alert.</li>
        </ul>
      </section>

      {/* 5. Intellectual Property & Spotify Integration */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Cpu className="w-5 h-5" />
          <h2>5. Intellectual Property & Third-Party Services</h2>
        </div>
        <p>
          <strong>Brovxi IP:</strong> The Brovxi brand, logo, UI/UX designs, motion graphics, WebGL interactive code, and telemetry calculation algorithms are the intellectual property of the project creator.
        </p>
        <p>
          <strong>Third-Party Trademarks:</strong> "Spotify" and the Spotify logo are registered trademarks of Spotify AB. Brovxi is an independent software project utilizing public Spotify Web API developer endpoints and is not affiliated with, endorsed by, or sponsored by Spotify AB.
        </p>
      </section>

      {/* 6. Disclaimer of Warranties & Limitation of Liability */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Scale className="w-5 h-5" />
          <h2>6. Disclaimer of Warranties & Limitation of Liability</h2>
        </div>
        <p className="uppercase text-xs font-mono tracking-widest text-cyan-400">
          PROVIDED "AS IS" AND "AS AVAILABLE"
        </p>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          IN NO EVENT SHALL BROVXI, ITS CREATORS, OR CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, OR FOR ANY MOTOR VEHICLE ACCIDENTS, TRAFFIC FINES, INJURIES, OR LOSS OF DATA ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF THE PLATFORM.
        </p>
      </section>

      {/* 7. Modifications & Termination */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <CheckCircle2 className="w-5 h-5" />
          <h2>7. Service Modifications & Termination</h2>
        </div>
        <p>
          We reserve the right to modify, suspend, or discontinue any portion of the pre-launch web platform, API proxy endpoints, or features at any time without notice.
        </p>
      </section>

      {/* 8. Contact Information */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <FileText className="w-5 h-5" />
          <h2>8. Questions & Contact Information</h2>
        </div>
        <p>
          For legal inquiries, terms clarifications, or project inquiries, please contact:
        </p>
        <div className="pt-2">
          <a
            href="mailto:contactphoenixfy@gmail.com?subject=Brovxi%20Terms%20Inquiry"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-mono text-sm font-semibold transition-all"
          >
            <span>contactphoenixfy@gmail.com</span>
          </a>
        </div>
      </section>
    </LegalLayout>
  );
};
