"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://suugesbhewtcoompmvvt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dWdlc2JoZXd0Y29vbXBtdnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzNzc5MzgsImV4cCI6MjA4Nzk1MzkzOH0.oGQOtOHWOpyysEBSd66peoa7nyOfjwN2PZ-J1aVOV6M"
);

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "success" | "error">("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    // Supabase sends tokens in the hash fragment after verifying the email link
    // e.g., #access_token=xxx&refresh_token=xxx&type=recovery
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");
    const type = params.get("type");

    if (accessToken && refreshToken) {
      // Set the session from the recovery tokens
      supabase.auth
        .setSession({ access_token: accessToken, refresh_token: refreshToken })
        .then(({ error }) => {
          if (error) {
            setError("Invalid or expired reset link. Please request a new one.");
            setStatus("error");
          } else {
            setStatus("ready");
          }
        });
    } else if (type === "recovery" || hash.includes("recovery")) {
      setError("Invalid reset link. Please request a new one from the app.");
      setStatus("error");
    } else {
      setError("No reset token found. Please use the link from your email.");
      setStatus("error");
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
    } else {
      setStatus("success");
    }
  }

  return (
    <div className="reset-page">
      <div className="reset-card">
        <div className="reset-icon">
          {status === "success" ? (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ) : (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          )}
        </div>

        {status === "loading" && (
          <>
            <h1 className="reset-title">Verifying reset link...</h1>
            <p className="reset-subtitle">Please wait while we verify your password reset link.</p>
            <div className="reset-spinner" />
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="reset-title">Reset Failed</h1>
            <p className="reset-error">{error}</p>
            <p className="reset-subtitle">
              Open DMND Tweaks and request a new password reset from the login screen.
            </p>
          </>
        )}

        {status === "ready" && (
          <>
            <h1 className="reset-title">Set New Password</h1>
            <p className="reset-subtitle">Enter your new password for DMND Tweaks.</p>
            <form onSubmit={handleSubmit} className="reset-form">
              <div className="reset-field">
                <label htmlFor="password">New Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  autoFocus
                  required
                />
              </div>
              <div className="reset-field">
                <label htmlFor="confirm">Confirm Password</label>
                <input
                  id="confirm"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Re-enter your password"
                  required
                />
              </div>
              {error && <p className="reset-error">{error}</p>}
              <button type="submit" className="reset-btn">Update Password</button>
            </form>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="reset-title">Password Updated</h1>
            <p className="reset-subtitle">
              Your password has been changed successfully. You can now sign in with your new password in the DMND Tweaks app.
            </p>
            <a href="/" className="reset-home-link">Back to homepage</a>
          </>
        )}
      </div>
    </div>
  );
}
