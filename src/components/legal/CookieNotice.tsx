import React from "react";
import { LegalLayout } from "./LegalLayout";
import { Cookie, CheckCircle2, ShieldCheck, Database, Info, XCircle } from "lucide-react";

interface CookieNoticeProps {
  onNavigate: (path: string) => void;
}

export const CookieNotice: React.FC<CookieNoticeProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Cookie & Tracking Notice"
      subtitle="Detailed disclosure of essential session cookies and browser storage used on RiderIQ."
      badge="COOKIE DISCLOSURE"
      metaDescription="Learn about the strictly necessary session cookies and browser storage used by RiderIQ for Spotify OAuth session authentication."
      activeTab="cookie"
      onNavigate={onNavigate}
    >
      {/* 1. Summary Card */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Cookie className="w-5 h-5" />
          <h2>1. Cookie & Web Storage Policy Summary</h2>
        </div>
        <p>
          RiderIQ is committed to minimal data footprint and user transparency. We use browser cookies and Web Storage (local storage and session storage) <strong>exclusively to provide essential Spotify authentication session features</strong> when you choose to connect your Spotify account to the Intercom Cockpit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-emerald-300 block mb-1">Strictly Necessary Cookies Used</strong>
              Essential for maintaining your Spotify authorization session securely across requests.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-red-300 block mb-1">Zero Advertising or Tracking Cookies</strong>
              We do not use tracking cookies, Google Analytics, Meta Pixels, or cross-site profiling scripts.
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Technical Breakdown */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Database className="w-5 h-5" />
          <h2>2. Technical Audit of Cookies & Browser Storage</h2>
        </div>
        <p>
          Below is a complete audit of all cookies and browser storage keys created or read by the RiderIQ platform:
        </p>

        <div className="space-y-4 mt-4">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-cyan-400 font-bold text-sm">spotify_access_token</span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">HTTP-Only Cookie / LocalStorage</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300">
              <strong>Purpose:</strong> Stores the active Spotify OAuth access token required to authenticate API calls to fetch currently playing music, recent tracks, and control playback in the Spotify HUD.
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              <strong>Lifespan:</strong> 1 Hour (Set with `SameSite=Lax; Secure` flags).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-cyan-400 font-bold text-sm">spotify_refresh_token</span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">HTTP-Only Cookie / LocalStorage</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300">
              <strong>Purpose:</strong> Stores the Spotify OAuth refresh token, allowing the server or client to request a new access token when the 1-hour access token expires without forcing you to re-login.
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              <strong>Lifespan:</strong> 30 Days (Persistent session token until explicit disconnect).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-cyan-400 font-bold text-sm">spotify_token_expires</span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">HTTP-Only Cookie / LocalStorage</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300">
              <strong>Purpose:</strong> Stores the numerical epoch timestamp indicating when the active access token will expire.
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              <strong>Lifespan:</strong> 30 Days.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-cyan-400 font-bold text-sm">spotify_auth_state & spotify_code_verifier</span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono">SessionStorage</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300">
              <strong>Purpose:</strong> Temporary state tokens used during the OAuth 2.0 PKCE handshake to prevent Cross-Site Request Forgery (CSRF).
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              <strong>Lifespan:</strong> Automatically cleared immediately after token exchange completes or browser tab closes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why No Banner Popup? */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Info className="w-5 h-5" />
          <h2>3. Cookie Consent Banner Clarification</h2>
        </div>
        <p>
          Under major data protection regulations (such as the EU ePrivacy Directive and GDPR), cookies that are strictly necessary to deliver a specific service explicitly requested by the user (such as maintaining a user-initiated Spotify authentication session) are exempt from requiring an intrusive consent pop-up banner.
        </p>
        <p>
          Because RiderIQ does <strong>NOT</strong> use any non-essential cookies, tracking pixels, or third-party marketing trackers, we do not pollute your browsing experience with unnecessary pop-up banners.
        </p>
      </section>

      {/* 4. How to Manage or Remove Cookies */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <ShieldCheck className="w-5 h-5" />
          <h2>4. Managing & Deleting Storage</h2>
        </div>
        <p>
          You can clear all RiderIQ cookies and local storage items at any time:
        </p>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-neutral-300">
          <li>
            <strong className="text-white">In-App Disconnect:</strong> Click the "Disconnect" button inside the Spotify Intercom Cockpit on our website.
          </li>
          <li>
            <strong className="text-white">Browser Settings:</strong> Open your browser settings, navigate to Privacy & Security → Cookies and Site Data, and clear data stored for `rider-iq-seven.vercel.app` or `localhost`.
          </li>
        </ul>
      </section>
    </LegalLayout>
  );
};
