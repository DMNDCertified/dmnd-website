export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <span className="nav-diamond">&#9670;</span>
            <span className="nav-name">SpeedWin</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Premium</a>
            <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="nav-cta">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              Increase performance<br />
              <span className="hero-accent">without upgrading</span> your PC
            </h1>
            <p className="hero-subtitle">
              DMND Tweaks gives you 225+ one-click optimizations for Windows.
              Boost FPS, lower input delay, kill background bloat —
              all fully reversible.
            </p>
            <div className="hero-actions">
              <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download for free
              </a>
              <a href="#features" className="btn-ghost">
                View features
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </a>
            </div>
          </div>
          <div className="hero-mockup">
            <div className="mockup-window">
              <div className="mockup-bar">
                <span className="mockup-dot" />
                <span className="mockup-dot" />
                <span className="mockup-dot" />
                <span className="mockup-title">DMND Tweaks</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-sidebar">
                  <div className="mockup-nav-item active">General</div>
                  <div className="mockup-nav-item">GPU</div>
                  <div className="mockup-nav-item">Network</div>
                  <div className="mockup-nav-item">Privacy</div>
                  <div className="mockup-nav-item">CPU</div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-tweak">
                    <div>
                      <div className="mockup-tweak-name">Disable Nagle&apos;s Algorithm</div>
                      <div className="mockup-tweak-desc">Reduces network latency for gaming</div>
                    </div>
                    <div className="mockup-toggle on" />
                  </div>
                  <div className="mockup-tweak">
                    <div>
                      <div className="mockup-tweak-name">GPU Shader Cache</div>
                      <div className="mockup-tweak-desc">Pre-compile shaders for smoother FPS</div>
                    </div>
                    <div className="mockup-toggle on" />
                  </div>
                  <div className="mockup-tweak">
                    <div>
                      <div className="mockup-tweak-name">Timer Resolution 0.5ms</div>
                      <div className="mockup-tweak-desc">Lower system timer for reduced input lag</div>
                    </div>
                    <div className="mockup-toggle" />
                  </div>
                  <div className="mockup-tweak">
                    <div>
                      <div className="mockup-tweak-name">Disable Telemetry</div>
                      <div className="mockup-tweak-desc">Stop background data collection</div>
                    </div>
                    <div className="mockup-toggle on" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature row 1 — text left, visual right */}
      <section className="feat-section" id="features">
        <div className="feat-inner">
          <div className="feat-text">
            <h2>225+ tweaks built for gamers</h2>
            <p>
              Every tweak targets a real bottleneck — GPU scheduling, DPC latency,
              TCP optimization, power plan tuning. No placebo toggles.
              Auto-detects your hardware and only shows what applies.
            </p>
            <div className="feat-chips">
              <span>GPU Optimization</span>
              <span>Input Delay</span>
              <span>Network</span>
              <span>Privacy</span>
              <span>CPU &amp; Power</span>
              <span>Memory</span>
            </div>
          </div>
          <div className="feat-visual">
            <div className="feat-card-stack">
              <div className="feat-mini-card">
                <div className="fmc-icon gpu" />
                <div>
                  <strong>72 GPU tweaks</strong>
                  <span>NVIDIA, AMD, Intel</span>
                </div>
              </div>
              <div className="feat-mini-card">
                <div className="fmc-icon input" />
                <div>
                  <strong>Lower input delay</strong>
                  <span>Timer res, DPC, polling</span>
                </div>
              </div>
              <div className="feat-mini-card">
                <div className="fmc-icon net" />
                <div>
                  <strong>Network optimization</strong>
                  <span>TCP, DNS, adapter tuning</span>
                </div>
              </div>
              <div className="feat-mini-card">
                <div className="fmc-icon privacy" />
                <div>
                  <strong>Kill telemetry</strong>
                  <span>Cortana, diagnostics, tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature row 2 — reversed */}
      <section className="feat-section reversed">
        <div className="feat-inner">
          <div className="feat-text">
            <h2>Smart hardware detection</h2>
            <p>
              DMND reads your CPU model, GPU vendor, RAM config, and storage type.
              Then recommends only the tweaks that make sense for your specific build.
              Intel vs AMD, NVIDIA vs Radeon — different tweaks, automatically.
            </p>
          </div>
          <div className="feat-visual">
            <div className="detect-box">
              <div className="detect-row">
                <span className="detect-label">GPU</span>
                <span className="detect-value">NVIDIA RTX 4070</span>
                <span className="detect-badge">72 tweaks</span>
              </div>
              <div className="detect-row">
                <span className="detect-label">CPU</span>
                <span className="detect-value">AMD Ryzen 7 7800X3D</span>
                <span className="detect-badge">34 tweaks</span>
              </div>
              <div className="detect-row">
                <span className="detect-label">RAM</span>
                <span className="detect-value">32GB DDR5-6000</span>
                <span className="detect-badge">12 tweaks</span>
              </div>
              <div className="detect-row">
                <span className="detect-label">DISK</span>
                <span className="detect-value">NVMe Gen4 SSD</span>
                <span className="detect-badge">8 tweaks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards grid */}
      <section className="cards-section">
        <div className="section-inner">
          <div className="cards-grid">
            <div className="info-card">
              <div className="ic-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Fully reversible</h3>
              <p>Every tweak can be toggled off instantly. No permanent changes, no risk to your system.</p>
            </div>
            <div className="info-card">
              <div className="ic-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <h3>BIOS optimization</h3>
              <p>Premium users get BIOS-level tweaks for power delivery, memory timings, and boot optimization.</p>
            </div>
            <div className="info-card">
              <div className="ic-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <h3>Game Mode</h3>
              <p>One-click profile that kills background processes, boosts priority, and maximizes resources for your game.</p>
            </div>
            <div className="info-card">
              <div className="ic-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3>Apply in seconds</h3>
              <p>No complicated setup. Download, pick your goal, toggle tweaks. Your PC is faster in under a minute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="section-inner">
          <div className="pricing-header">
            <h2>Go premium for the full toolkit</h2>
            <p>Free gets you started. Premium unlocks everything.</p>
          </div>

          <div className="price-grid">
            <div className="price-card">
              <h3>Free</h3>
              <div className="price-amount">$0</div>
              <p className="price-note">Forever free</p>
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
              <p className="price-note">$2.50/mo — save 50%</p>
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
            <h2>Eliminate lag, stutters, and<br />wasted performance</h2>
            <p>Download DMND Tweaks and get the most out of your hardware.</p>
            <div className="cta-actions">
              <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download for free
              </a>
              <a href="#features" className="btn-ghost">
                View features
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand-col">
              <span className="footer-logo"><span className="nav-diamond">&#9670;</span> DMND Tweaks</span>
              <p className="footer-desc">Windows optimization tool built for gamers. 225+ tweaks to boost your PC performance.</p>
              <div className="footer-socials">
                <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" aria-label="Discord">Discord</a>
                <a href="https://github.com/DMNDCertified" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
              </div>
            </div>
            <div className="footer-links-col">
              <h4>Links</h4>
              <a href="#features">Features</a>
              <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer">Download</a>
              <a href="#pricing">Premium</a>
            </div>
            <div className="footer-links-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Account</a>
            </div>
            <div className="footer-links-col">
              <h4>Support</h4>
              <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">Join Discord</a>
              <a href="mailto:support@dmndtweaks.com">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 DMND Tweaks. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
