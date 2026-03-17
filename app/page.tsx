export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <span className="nav-diamond">&#9670;</span>
            <span className="nav-name">DMND</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="nav-cta">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero — left aligned, no glow orb */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-tag">Windows optimization, done right.</p>
            <h1 className="hero-title">
              Stop tweaking blindly.<br />
              Let DMND do the work.
            </h1>
            <p className="hero-subtitle">
              225+ registry and system tweaks that actually matter.
              Built for gamers who want less input delay, more FPS,
              and a cleaner Windows install. Free to start.
            </p>
            <div className="hero-actions">
              <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download for Windows
                <span className="btn-meta">v1.0 &middot; 80MB &middot; Win 10/11</span>
              </a>
            </div>
          </div>
          <div className="hero-terminal">
            <div className="terminal-bar">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">dmnd-tweaks</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-dim">$</span> dmnd scan --hardware</p>
              <p className="t-dim">Detected: RTX 4070 &middot; R7 7800X3D &middot; 32GB DDR5</p>
              <p>&nbsp;</p>
              <p><span className="t-dim">$</span> dmnd apply --profile gaming</p>
              <p className="t-accent">&#10003; GPU shader cache optimized</p>
              <p className="t-accent">&#10003; Timer resolution set to 0.5ms</p>
              <p className="t-accent">&#10003; Nagle&apos;s algorithm disabled</p>
              <p className="t-accent">&#10003; 47 tweaks applied successfully</p>
              <p>&nbsp;</p>
              <p className="t-dim">Ready. Your PC is faster now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <div className="proof-strip">
        <div className="proof-inner">
          <div className="proof-item">
            <span className="proof-num">225+</span>
            <span className="proof-label">tweaks available</span>
          </div>
          <div className="proof-item">
            <span className="proof-num">100%</span>
            <span className="proof-label">reversible</span>
          </div>
          <div className="proof-item">
            <span className="proof-num">0</span>
            <span className="proof-label">bloatware included</span>
          </div>
        </div>
      </div>

      {/* Features — bento grid, not uniform cards */}
      <section className="features" id="features">
        <div className="section-inner">
          <h2 className="feat-heading">What it actually does</h2>
          <div className="bento">
            <div className="bento-card bento-wide">
              <div className="bento-label">GPU</div>
              <h3>72 GPU tweaks for NVIDIA, AMD &amp; Intel</h3>
              <p>Profile tuning, shader cache, power states, CUDA scheduling. Auto-detects your card and only shows what applies.</p>
            </div>
            <div className="bento-card">
              <div className="bento-label">INPUT</div>
              <h3>Lower input delay</h3>
              <p>Timer resolution, DPC latency fixes, mouse polling optimization. Built for competitive FPS players.</p>
            </div>
            <div className="bento-card">
              <div className="bento-label">NETWORK</div>
              <h3>Less ping, more stable</h3>
              <p>Disable Nagle&apos;s, optimize TCP, tune DNS settings and adapter config for lower latency.</p>
            </div>
            <div className="bento-card">
              <div className="bento-label">PRIVACY</div>
              <h3>Kill telemetry</h3>
              <p>Disable Cortana, activity history, diagnostic data, and every data collection service Windows runs in the background.</p>
            </div>
            <div className="bento-card bento-wide">
              <div className="bento-label">SMART</div>
              <h3>Hardware-aware recommendations</h3>
              <p>DMND reads your CPU, GPU, RAM, and storage. Then recommends only the tweaks that make sense for your specific build. No guessing.</p>
            </div>
            <div className="bento-card">
              <div className="bento-label">CPU</div>
              <h3>Core parking &amp; power</h3>
              <p>Thread scheduling, power plans, CPU-specific tweaks for Intel and AMD. Unlock what Windows locks down.</p>
            </div>
            <div className="bento-card">
              <div className="bento-label">SAFE</div>
              <h3>Every tweak is reversible</h3>
              <p>Toggle anything off with one click. No permanent changes, no bricked systems. Just better performance when you want it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="section-inner">
          <h2 className="feat-heading">Simple pricing</h2>
          <p className="pricing-desc">Start free. Upgrade when you want the full toolkit.</p>

          <div className="price-grid">
            <div className="price-card">
              <h3>Free</h3>
              <div className="price-amount">$0</div>
              <p className="price-note">No card required</p>
              <ul>
                <li>225+ system tweaks</li>
                <li>GPU, CPU, Network optimization</li>
                <li>Smart hardware detection</li>
                <li>Privacy controls</li>
                <li>Fully reversible</li>
              </ul>
              <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="price-btn price-btn-outline">
                Download free
              </a>
            </div>

            <div className="price-card price-card-pop">
              <span className="price-badge">popular</span>
              <h3>Yearly</h3>
              <div className="price-amount">$29.99<span>/yr</span></div>
              <p className="price-note">$2.50/mo &middot; save 50%</p>
              <ul>
                <li>Everything in Free</li>
                <li>1,000+ advanced tweaks</li>
                <li>DMND Game Mode</li>
                <li>BIOS optimization</li>
                <li>Advanced network tuning</li>
                <li>Priority support</li>
              </ul>
              <a href="https://buy.stripe.com/6oU5kDa4efbp2NUbx63gk04" target="_blank" rel="noopener noreferrer" className="price-btn price-btn-fill">
                Get yearly
              </a>
            </div>

            <div className="price-card">
              <h3>Lifetime</h3>
              <div className="price-amount">$49.99</div>
              <p className="price-note">One-time payment</p>
              <ul>
                <li>Everything in Free</li>
                <li>1,000+ advanced tweaks</li>
                <li>DMND Game Mode</li>
                <li>All future updates</li>
                <li>Priority support forever</li>
              </ul>
              <a href="https://buy.stripe.com/6oUfZhdgqaV9bkqfNm3gk05" target="_blank" rel="noopener noreferrer" className="price-btn price-btn-outline">
                Get lifetime
              </a>
            </div>
          </div>

          <p className="pricing-also">
            Also available: <a href="https://buy.stripe.com/bJe6oHccm4wL3RY1Ww3gk03" target="_blank" rel="noopener noreferrer">Monthly at $4.99/mo</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="section-inner">
          <div className="cta-box">
            <h2>Your PC is leaving performance on the table.</h2>
            <p>Download DMND Tweaks and fix that.</p>
            <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download for Windows
              <span className="btn-meta">Free &middot; No account needed</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand"><span className="nav-diamond small">&#9670;</span> DMND Tweaks</span>
          <span className="footer-copy">&copy; 2026</span>
        </div>
      </footer>
    </main>
  );
}
