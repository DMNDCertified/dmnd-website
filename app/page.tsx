export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <div className="nav-logo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span className="nav-name">DMND Tweaks</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#download" className="nav-cta">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Windows Optimization Tool
          </div>
          <h1 className="hero-title">
            Unlock Your PC's
            <br />
            <span className="hero-gradient">Full Potential</span>
          </h1>
          <p className="hero-subtitle">
            225+ tweaks to boost FPS, reduce input delay, and optimize your
            Windows system. One click at a time.
          </p>
          <div className="hero-actions">
            <a href="#download" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download Free
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">225+</span>
              <span className="hero-stat-label">Tweaks</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-label">Reversible</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">Free</span>
              <span className="hero-stat-label">To Use</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything you need to optimize</h2>
            <p className="section-subtitle">
              From GPU settings to network tweaks, DMND covers every aspect of
              Windows performance.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <h3 className="feature-name">GPU Optimization</h3>
              <p className="feature-desc">
                72 GPU tweaks for NVIDIA, AMD, and Intel. Profile tuning, shader cache, power states, and more.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <h3 className="feature-name">Lower Input Delay</h3>
              <p className="feature-desc">
                Timer resolution, DPC latency, mouse polling, and kernel-level optimizations for competitive gaming.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="feature-name">Privacy & Telemetry</h3>
              <p className="feature-desc">
                Disable Windows telemetry, Cortana, activity history, and data collection services in one click.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3 className="feature-name">Network Tweaks</h3>
              <p className="feature-desc">
                Nagle's algorithm, TCP optimizations, DNS settings, and adapter tuning for lower ping.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /></svg>
              </div>
              <h3 className="feature-name">CPU & Power</h3>
              <p className="feature-desc">
                Core parking, power plans, thread scheduling, and CPU-specific tweaks for Intel and AMD.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <h3 className="feature-name">Smart Detection</h3>
              <p className="feature-desc">
                Automatically detects your hardware and recommends the best tweaks for your specific system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Three steps to a faster PC</h2>
          </div>
          <div className="steps-row">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-name">Download & Install</h3>
              <p className="step-desc">
                Grab the installer, run it, and launch DMND Tweaks. No account required.
              </p>
            </div>
            <div className="step-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-name">Choose Your Goal</h3>
              <p className="step-desc">
                FPS boost, lower latency, or balanced — we'll recommend the right tweaks for you.
              </p>
            </div>
            <div className="step-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-name">Apply & Enjoy</h3>
              <p className="step-desc">
                Toggle tweaks on or off with a single click. Every change is fully reversible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="download" id="download">
        <div className="section-inner">
          <div className="download-box">
            <div className="download-glow" />
            <h2 className="download-title">Ready to optimize?</h2>
            <p className="download-subtitle">
              Download DMND Tweaks for free and start boosting your PC's performance today.
            </p>
            <div className="download-requirements">
              <span>Windows 10/11</span>
              <span className="dot">·</span>
              <span>64-bit</span>
              <span className="dot">·</span>
              <span>~80MB</span>
            </div>
            <a href="#" className="btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download for Windows
            </a>
            <p className="download-note">Free to use. No credit card needed.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="nav-logo" style={{ width: 28, height: 28 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span>DMND Tweaks</span>
          </div>
          <p className="footer-copy">&copy; 2026 DMND Tweaks. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
