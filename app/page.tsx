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
            <a href="#pricing">Premium</a>
            <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="nav-cta">Download</a>
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
            <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-primary">
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

      {/* Premium / Pricing */}
      <section className="pricing" id="pricing">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Premium</span>
            <h2 className="section-title">Unlock your PC's full potential</h2>
            <p className="section-subtitle">
              Start free or go premium for advanced tweaks, Game Mode, and more.
            </p>
          </div>
          <div className="pricing-grid">
            {/* Free Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">Free</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">$0</span>
                  <span className="pricing-period">forever</span>
                </div>
                <p className="pricing-plan-desc">Get started with essential tweaks</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  225+ system tweaks
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  GPU, CPU, Network optimization
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Smart hardware detection
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Privacy &amp; telemetry controls
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Fully reversible changes
                </li>
              </ul>
              <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="pricing-btn pricing-btn-secondary">
                Download Free
              </a>
            </div>

            {/* Monthly Plan */}
            <div className="pricing-card pricing-card-premium">
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">Monthly</h3>
                <div className="pricing-price">
                  <span className="pricing-amount pricing-gradient">$4.99</span>
                  <span className="pricing-period">/month</span>
                </div>
                <p className="pricing-plan-desc">Flexible month-to-month access</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Everything in Free
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  1,000+ advanced tweaks
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  DMND Game Mode
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  BIOS optimization
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Cancel anytime
                </li>
              </ul>
              <a href="https://buy.stripe.com/bJe6oHccm4wL3RY1Ww3gk03" target="_blank" rel="noopener noreferrer" className="pricing-btn pricing-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" /></svg>
                Get Monthly
              </a>
            </div>

            {/* Yearly Plan */}
            <div className="pricing-card pricing-card-premium pricing-card-highlight">
              <div className="pricing-popular-badge">Best Value</div>
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">Yearly</h3>
                <div className="pricing-price">
                  <span className="pricing-amount pricing-gradient">$29.99</span>
                  <span className="pricing-period">/year</span>
                </div>
                <p className="pricing-plan-desc">Save 50% vs monthly</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Everything in Free
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  1,000+ advanced tweaks
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  DMND Game Mode
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  BIOS optimization
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Advanced network optimization
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Priority support
                </li>
              </ul>
              <a href="https://buy.stripe.com/6oU5kDa4efbp2NUbx63gk04" target="_blank" rel="noopener noreferrer" className="pricing-btn pricing-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" /></svg>
                Get Yearly
              </a>
            </div>

            {/* Lifetime Plan */}
            <div className="pricing-card pricing-card-premium">
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">Lifetime</h3>
                <div className="pricing-price">
                  <span className="pricing-amount pricing-gradient">$49.99</span>
                  <span className="pricing-period">one-time</span>
                </div>
                <p className="pricing-plan-desc">Pay once, own it forever</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Everything in Free
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  1,000+ advanced tweaks
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  DMND Game Mode
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  All future updates included
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Priority support forever
                </li>
              </ul>
              <a href="https://buy.stripe.com/6oUfZhdgqaV9bkqfNm3gk05" target="_blank" rel="noopener noreferrer" className="pricing-btn pricing-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" /></svg>
                Get Lifetime
              </a>
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
            <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
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
