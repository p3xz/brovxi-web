import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "brovxi-cookie-consent";
const COOKIE_NAME = "brovxi_cookie_consent";

function hasConsented(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function CookieConsentBanner({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasConsented());
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // storage unavailable; banner will show again next visit
    }
    // Record consent as a first-party cookie the server can read too.
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${COOKIE_NAME}=accepted; Max-Age=${oneYear}; Path=/; SameSite=Lax`;
    setVisible(false);
  };

  const dismiss = () => {
    // Essential-only choice: site cookies used are strictly necessary for
    // Spotify login, so the banner can be dismissed without blocking use.
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[100] rounded-2xl border border-white/10 bg-[#0a0f1c]/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/60"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-white mb-1">Cookies on Brovxi</p>
          <p className="text-xs text-neutral-400 leading-relaxed mb-4">
            Brovxi uses only essential cookies for Spotify login when you connect your
            account. No tracking or advertising cookies.{" "}
            <a
              href="/cookie-notice"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("/cookie-notice");
                }
              }}
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Read the cookie notice
            </a>
          </p>
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="px-4 py-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-white text-xs font-semibold transition-colors min-h-[40px]"
            >
              Accept
            </button>
            <button
              onClick={dismiss}
              className="px-4 py-2 rounded-full border border-white/15 text-neutral-300 hover:text-white text-xs font-medium transition-colors min-h-[40px]"
            >
              Essential only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
