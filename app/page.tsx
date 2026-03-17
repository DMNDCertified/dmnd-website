"use client";

import { useEffect, useState } from "react";

const games = [
  "Fortnite", "Valorant", "CS2", "Apex Legends", "Warzone",
  "Overwatch 2", "Rocket League", "Minecraft", "Roblox", "GTA V", "Rust"
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const heroWords = ["Increase", "performance", "without", "upgrading", "your", "PC."];

  return (
    <>
      {/* Loading screen */}
      <div className={`loading-overlay ${!loading ? "loaded" : ""}`}>
        <div className="loading-logo">
          <span className="logo-pulse">&#9670;</span>
        </div>
      </div>

      <main>
        {/* Nav */}
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-brand">
              <span className="nav-diamond">&#9670;</span>
              <span className="nav-name">DMND Tweaks</span>
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
                {heroWords.map((word, i) => (
                  <span
                    key={i}
                    data-aos="fade-in"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-delay={i * 100}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="hero-subtitle" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1000" data-aos-easing="ease-in-out">
                DMND Tweaks gives you 225+ one-click optimizations for Windows.
                Boost FPS, lower input delay, kill background bloat —
                all fully reversible.
              </p>
              <div className="hero-actions" data-aos="fade-in" data-aos-delay="800" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <a href="https://github.com/DMNDCertified/dmnd-tweaks/releases/latest" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Download for free
                </a>
                <a href="#features" className="btn-ghost">
                  View features
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </a>
              </div>
            </div>
            <div className="hero-mockup" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
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
            <div className="feat-text" data-aos="fade-right" data-aos-duration="1000">
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
            <div className="feat-visual" data-aos="fade-left" data-aos-duration="1000">
              <div className="feat-card-stack">
                {[
                  { cls: "gpu", title: "72 GPU tweaks", sub: "NVIDIA, AMD, Intel" },
                  { cls: "input", title: "Lower input delay", sub: "Timer res, DPC, polling" },
                  { cls: "net", title: "Network optimization", sub: "TCP, DNS, adapter tuning" },
                  { cls: "privacy", title: "Kill telemetry", sub: "Cortana, diagnostics, tracking" },
                ].map((item, i) => (
                  <div className="feat-mini-card" key={i} data-aos="fade-up" data-aos-duration="500" data-aos-delay={i * 100}>
                    <div className={`fmc-icon ${item.cls}`} />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature row 2 — reversed */}
        <section className="feat-section reversed">
          <div className="feat-inner">
            <div className="feat-text" data-aos="fade-left" data-aos-duration="1000">
              <h2>Smart hardware detection</h2>
              <p>
                DMND reads your CPU model, GPU vendor, RAM config, and storage type.
                Then recommends only the tweaks that make sense for your specific build.
                Intel vs AMD, NVIDIA vs Radeon — different tweaks, automatically.
              </p>
            </div>
            <div className="feat-visual" data-aos="fade-right" data-aos-duration="1000">
              <div className="detect-box">
                {[
                  { label: "GPU", value: "NVIDIA RTX 4070", badge: "72 tweaks" },
                  { label: "CPU", value: "AMD Ryzen 7 7800X3D", badge: "34 tweaks" },
                  { label: "RAM", value: "32GB DDR5-6000", badge: "12 tweaks" },
                  { label: "DISK", value: "NVMe Gen4 SSD", badge: "8 tweaks" },
                ].map((row, i) => (
                  <div className="detect-row" key={i} data-aos="fade-up" data-aos-duration="500" data-aos-delay={i * 100}>
                    <span className="detect-label">{row.label}</span>
                    <span className="detect-value">{row.value}</span>
                    <span className="detect-badge">{row.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Game support marquee */}
        <section className="marquee-section">
          <div className="section-inner">
            <h2 data-aos="fade-up" data-aos-duration="800">Optimized for your favorite games</h2>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {games.concat(games).map((game, i) => (
                <div className="marquee-item" key={`a-${i}`}>{game}</div>
              ))}
            </div>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-track reverse">
              {games.concat(games).map((game, i) => (
                <div className="marquee-item" key={`b-${i}`}>{game}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature cards grid */}
        <section className="cards-section">
          <div className="section-inner">
            <div className="cards-grid">
              {[
                { title: "Fully reversible", desc: "Every tweak can be toggled off instantly. No permanent changes, no risk to your system.", icon: "shield" },
                { title: "BIOS optimization", desc: "Premium users get BIOS-level tweaks for power delivery, memory timings, and boot optimization.", icon: "monitor" },
                { title: "Game Mode", desc: "One-click profile that kills background processes, boosts priority, and maximizes resources for your game.", icon: "bolt" },
                { title: "Apply in seconds", desc: "No complicated setup. Download, pick your goal, toggle tweaks. Your PC is faster in under a minute.", icon: "clock" },
              ].map((card, i) => (
                <div className="info-card" key={i} data-aos="fade-up" data-aos-duration="500" data-aos-delay={i * 100}>
                  <div className="ic-icon">
                    {card.icon === "shield" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                    {card.icon === "monitor" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>}
                    {card.icon === "bolt" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
                    {card.icon === "clock" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="pricing" id="pricing">
          <div className="section-inner">
            <div className="pricing-header" data-aos="fade-up" data-aos-duration="800">
              <h2>Go premium for the full toolkit</h2>
              <p>Free gets you started. Premium unlocks everything.</p>
            </div>

            <div className="price-grid">
              <div className="price-card" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
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

              <div className="price-card price-card-pop" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
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

              <div className="price-card" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
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

            <p className="pricing-also" data-aos="fade-in" data-aos-delay="300">
              Also available: <a href="https://buy.stripe.com/bJe6oHccm4wL3RY1Ww3gk03" target="_blank" rel="noopener noreferrer">Monthly at $4.99/mo</a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="section-inner">
            <div className="cta-box" data-aos="fade-up" data-aos-duration="1000">
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
                  <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">Discord</a>
                  <a href="https://github.com/DMNDCertified" target="_blank" rel="noopener noreferrer">GitHub</a>
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
    </>
  );
}
