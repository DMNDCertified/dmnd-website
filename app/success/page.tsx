"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [licenseKey, setLicenseKey] = useState<string | null>(null);
  const [planType, setPlanType] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setError("No session ID found.");
      setLoading(false);
      return;
    }

    let attempts = 0;
    const maxAttempts = 15;

    const fetchKey = async () => {
      try {
        const res = await fetch(
          `https://suugesbhewtcoompmvvt.supabase.co/functions/v1/get-license-key?session_id=${sessionId}`
        );
        if (res.ok) {
          const data = await res.json();
          setLicenseKey(data.license_key);
          setPlanType(data.plan_type);
          setLoading(false);
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(fetchKey, 2000);
        } else {
          setError(
            "Could not retrieve your license key. Please check your email or contact support."
          );
          setLoading(false);
        }
      } catch {
        if (attempts < maxAttempts) {
          attempts++;
          setTimeout(fetchKey, 2000);
        } else {
          setError("Network error. Please contact support.");
          setLoading(false);
        }
      }
    };

    fetchKey();
  }, [sessionId]);

  const copyKey = () => {
    if (licenseKey) {
      navigator.clipboard.writeText(licenseKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const planLabel =
    planType === "monthly"
      ? "Monthly"
      : planType === "yearly"
      ? "Yearly"
      : "Lifetime";

  return (
    <div className="success-page">
      <div className="success-card">
        {/* Success Icon */}
        <div className="success-icon">
          {loading ? (
            <div className="success-spinner" />
          ) : error ? (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          ) : (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="8 12 11 15 16 9" />
            </svg>
          )}
        </div>

        {/* Title */}
        <h1 className="success-title">
          {loading
            ? "Generating your license key..."
            : error
            ? "Something went wrong"
            : "Payment Successful!"}
        </h1>

        {loading && (
          <p className="success-subtitle">
            Please wait while we prepare your license key. This usually takes a few seconds.
          </p>
        )}

        {error && <p className="success-error">{error}</p>}

        {licenseKey && (
          <>
            <p className="success-subtitle">
              Thank you for purchasing <strong>DMND Tweaks Premium ({planLabel})</strong>
            </p>

            {/* License Key Display */}
            <div className="success-key-box">
              <span className="success-key-label">Your License Key</span>
              <div className="success-key-value">{licenseKey}</div>
              <button className="success-copy-btn" onClick={copyKey}>
                {copied ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy Key
                  </>
                )}
              </button>
            </div>

            {/* Instructions */}
            <div className="success-instructions">
              <h3>How to activate:</h3>
              <ol>
                <li>Open <strong>DMND Tweaks</strong> on your PC</li>
                <li>Click your <strong>profile icon</strong> in the sidebar</li>
                <li>Select <strong>&quot;License Key&quot;</strong></li>
                <li>Paste your key and click <strong>Activate</strong></li>
              </ol>
            </div>

            {/* Download link */}
            <a
              href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="success-download-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download DMND Tweaks
            </a>
          </>
        )}

        {/* Back to home */}
        <a href="/" className="success-home-link">
          ← Back to home
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="success-page">
          <div className="success-card">
            <div className="success-icon">
              <div className="success-spinner" />
            </div>
            <h1 className="success-title">Loading...</h1>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
