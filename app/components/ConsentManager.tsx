"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "allyonoguru_cookie_consent";

type Consent = "accepted" | "declined";

export default function ConsentManager() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") setConsent(stored);
    setHydrated(true);
  }, []);

  function choose(value: Consent) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {hydrated && consent === null && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
          <p className="cookie-banner-text">
            We use technically necessary cookies to run this site, and — only if you accept —
            Google Analytics cookies to understand site usage. See our{" "}
            <Link href="/privacy-policy" title="Privacy Policy">Privacy Policy</Link> for details.
          </p>
          <div className="cookie-banner-actions">
            <button type="button" className="cookie-btn-decline" onClick={() => choose("declined")}>
              Decline
            </button>
            <button type="button" className="cookie-btn-accept" onClick={() => choose("accepted")}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
