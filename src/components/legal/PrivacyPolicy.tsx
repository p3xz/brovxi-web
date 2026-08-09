import React from "react";
import { LegalLayout } from "./LegalLayout";
import { Shield, Database, Lock, Key, Eye, UserCheck, AlertTriangle } from "lucide-react";

interface PrivacyPolicyProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Transparency regarding data collection, Spotify OAuth authorization, storage, and server interactions for the RiderIQ Web Platform."
      badge="PRIVACY & DATA TRANSPARENCY"
      metaDescription="Read the official RiderIQ Privacy Policy to understand how Spotify API OAuth data, browser storage, cookies, and telemetry simulator inputs are handled."
      activeTab="privacy"
      onNavigate={onNavigate}
    >
      {/* 1. Overview & Core Philosophy */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Shield className="w-5 h-5" />
          <h2>1. Overview & Data Philosophy</h2>
        </div>
        <p>
          RiderIQ ("we", "our", or "the platform") is a motorcycle telemetry, navigation intelligence, and intercom audio cockpit simulator. We respect user privacy and adhere to a strict principle of minimal data operation: we only process data that is technically required to operate the interactive web platform and deliver integrated features such as the Spotify Web API Intercom Cockpit.
        </p>
        <p>
          We do not operate user account databases, do not sell user data, do not run third-party advertising networks, and do not embed behavioral tracking pixels or analytics scripts on this website.
        </p>
      </section>

      {/* 2. Information We Collect or Process */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Database className="w-5 h-5" />
          <h2>2. Information Collected & Processed</h2>
        </div>
        <p>
          The types of information processed depend on how you interact with the website:
        </p>

        <div className="space-y-4 mt-4">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <h3 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
              <Key className="w-4 h-4 text-cyan-400" />
              A. Spotify OAuth & Music Telemetry Data (Optional)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              If you choose to connect your Spotify account to the <em>Spotify Intercom Cockpit</em> feature, you are redirected to Spotify's official login page via OAuth 2.0. Upon authorization, our platform receives:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-400 mt-2 space-y-1">
              <li>OAuth Access Tokens and Refresh Tokens issued by Spotify.</li>
              <li>Currently playing track metadata (song title, artist, album name, cover artwork URL, playback progress).</li>
              <li>Recently played track history (up to 5 recent tracks).</li>
              <li>Basic Spotify profile details (display name and profile image URL).</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <h3 className="text-white font-semibold text-sm mb-1">
              B. Waitlist Email Input
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              When you enter an email address into the pre-launch waitlist input form, the email address is processed locally within browser memory (`React component state`) to trigger the on-screen confirmation message. The email address is discarded automatically after 3 seconds and is not transmitted to external servers, saved in database records, or shared with third parties.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <h3 className="text-white font-semibold text-sm mb-1">
              C. Interactive Telemetry Simulator Inputs
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              All interactive simulator sliders and options (lean angle HUD adjustments, speed camera radar alerts, fuel tour calculations, and mounting calibration toggles) operate entirely inside your local browser runtime. Telemetry mathematical formulas are calculated locally on your device.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <h3 className="text-white font-semibold text-sm mb-1">
              D. Automated Server Logs & Technical Identifiers
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              When accessing serverless backend functions (such as `/api/spotify/*`), standard server request logs (including request timestamps, HTTP user-agent string, requested API endpoint, and IP address) are generated automatically by our cloud hosting infrastructure provider (Vercel) for operational monitoring, security, and rate-limiting purposes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Storage, Cookies & Local Storage */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Lock className="w-5 h-5" />
          <h2>3. Cookies, Browser LocalStorage & SessionStorage</h2>
        </div>
        <p>
          We use browser storage and cookies exclusively for essential Spotify authentication session maintenance. We do not use cookies for tracking, advertising, behavioral profiling, or cross-site analytics.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/15 text-cyan-400 font-mono uppercase">
                <th className="py-2.5 px-3">Storage Key / Cookie</th>
                <th className="py-2.5 px-3">Type</th>
                <th className="py-2.5 px-3">Purpose</th>
                <th className="py-2.5 px-3">Lifespan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-neutral-300">
              <tr>
                <td className="py-2.5 px-3 font-mono text-white">spotify_access_token</td>
                <td className="py-2.5 px-3">HTTP-Only Cookie / LocalStorage</td>
                <td className="py-2.5 px-3">Authenticates Spotify Web API requests</td>
                <td className="py-2.5 px-3">1 Hour</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono text-white">spotify_refresh_token</td>
                <td className="py-2.5 px-3">HTTP-Only Cookie / LocalStorage</td>
                <td className="py-2.5 px-3">Renews expired Spotify access tokens</td>
                <td className="py-2.5 px-3">30 Days / Persistent</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono text-white">spotify_token_expires</td>
                <td className="py-2.5 px-3">HTTP-Only Cookie / LocalStorage</td>
                <td className="py-2.5 px-3">Tracks token expiration timestamp</td>
                <td className="py-2.5 px-3">30 Days</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono text-white">spotify_auth_state</td>
                <td className="py-2.5 px-3">SessionStorage</td>
                <td className="py-2.5 px-3">Prevents OAuth Cross-Site Request Forgery (CSRF)</td>
                <td className="py-2.5 px-3">Browser Session</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-mono text-white">spotify_code_verifier</td>
                <td className="py-2.5 px-3">SessionStorage</td>
                <td className="py-2.5 px-3">Spotify OAuth 2.0 PKCE secret verifier</td>
                <td className="py-2.5 px-3">Browser Session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Third-Party Services */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <UserCheck className="w-5 h-5" />
          <h2>4. Third-Party Services Utilized</h2>
        </div>
        <p>
          The website integrates with the following external services to deliver features and host assets:
        </p>

        <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
          <li className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
            <strong className="text-white block">Spotify Web API (Spotify AB):</strong> Used to provide music controls, currently playing track metadata, and playlist launching in the Spotify Intercom Cockpit. Interacting with Spotify features is governed by <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Spotify's Privacy Policy</a>.
          </li>
          <li className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
            <strong className="text-white block">Vercel Inc. (Hosting & Edge Serverless API):</strong> Hosts the static web application files and handles proxy routing for Spotify serverless API endpoints. Vercel processes request IP addresses and server log data as detailed in <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Vercel's Privacy Policy</a>.
          </li>
          <li className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
            <strong className="text-white block">Google Fonts (Google LLC):</strong> Serves web typography assets (Plus Jakarta Sans, Outfit, Space Grotesk). Downloading font files from Google CDN servers involves standard HTTP requests as described in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Google's Privacy Policy</a>.
          </li>
        </ul>
      </section>

      {/* 5. Data Retention, Disconnection & User Rights */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Eye className="w-5 h-5" />
          <h2>5. Data Retention, Revocation & Disconnection</h2>
        </div>
        <p>
          You remain in full control of your Spotify account connection:
        </p>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-neutral-300">
          <li>
            <strong className="text-white">Disconnect Button:</strong> Clicking the "Disconnect" button in the Spotify Intercom HUD immediately removes all stored Spotify tokens from browser `localStorage`, clears session HTTP-Only cookies via `/api/spotify/disconnect`, and resets all active player states.
          </li>
          <li>
            <strong className="text-white">Revoking Spotify Authorization:</strong> You can revoke RiderIQ's access to your Spotify account at any time by visiting your official <a href="https://www.spotify.com/account/apps/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Spotify Managed Apps Dashboard</a> and clicking "Remove Access".
          </li>
          <li>
            <strong className="text-white">Browser Data Clearing:</strong> Clearing your browser cookies and site storage removes all local session state immediately.
          </li>
        </ul>
      </section>

      {/* 6. Children's Privacy & Security */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <AlertTriangle className="w-5 h-5" />
          <h2>6. Data Security & Children's Privacy</h2>
        </div>
        <p>
          We employ standard security controls including HTTPS transport encryption for all communications between your web browser, our serverless proxy endpoints, and third-party APIs.
        </p>
        <p>
          Our platform is intended for general audiences interested in motorcycle technology, telemetry, and navigation intelligence. We do not knowingly collect personal information from children under the age of 16.
        </p>
      </section>

      {/* 7. Changes & Contact Info */}
      <section className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Shield className="w-5 h-5" />
          <h2>7. Policy Updates & Contact Information</h2>
        </div>
        <p>
          We may update this Privacy Policy periodically to reflect technological updates or legal clarifications. Any modifications will be posted directly to this page with an updated revision date.
        </p>
        <p>
          For privacy inquiries, data questions, or technical feedback regarding this policy, please reach out directly:
        </p>
        <div className="pt-2">
          <a
            href="mailto:contactphoenixfy@gmail.com?subject=RiderIQ%20Privacy%20Inquiry"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-mono text-sm font-semibold transition-all"
          >
            <span>contactphoenixfy@gmail.com</span>
          </a>
        </div>
      </section>
    </LegalLayout>
  );
};
