export default function Home() {
  return (
    <div id="home">
      {/* HERO */}
      <section className="section heroSection">
        <div className="container">
          <p className="pill">Protected Innovation • Energy Technology</p>

          <h1 className="h1">
            A proprietary energy invention designed for{" "}
            <span className="accent">scalable, continuous power</span>.
          </h1>

          <p className="lead">
            We share benefits, applications, and progress publicly — and keep
            technical implementation details private to protect IP.
          </p>

          <div className="ctaRow">
            <a className="btnPrimary" href="#contact">
              Request information
            </a>
            <a className="btnSecondary" href="#problem">
              View the problem
            </a>
          </div>

          <div className="statsRow">
            <div className="statCard">
              <div className="statTitle">Built for scale</div>
              <div className="muted">
                A modular approach intended to support multiple deployment sizes.
              </div>
            </div>
            <div className="statCard">
              <div className="statTitle">Designed for reliability</div>
              <div className="muted">
                Focused on long-duration operation and predictable output.
              </div>
            </div>
            <div className="statCard">
              <div className="statTitle">IP-protected</div>
              <div className="muted">
                Public overview only; deeper details available upon request.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="section">
        <div className="container split">
          <div>
            <h2 className="h2">The problem</h2>
            <p className="muted">
              Modern energy systems face real constraints that slow adoption and
              increase cost.
            </p>

            <ul className="list">
              <li>Intermittent renewable generation requires grid balancing</li>
              <li>Infrastructure constraints create bottlenecks and downtime</li>
              <li>Long-duration storage remains expensive and difficult</li>
              <li>Energy resilience is critical for remote and industrial use</li>
            </ul>
          </div>

          <div className="panel">
            <h3 className="h3">What we can share publicly</h3>
            <ul className="list tight">
              <li>Use cases and target markets</li>
              <li>High-level capabilities and outcomes</li>
              <li>Development status and milestones</li>
              <li>How to engage for a deeper technical review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="section sectionAlt">
        <div className="container split">
          <div className="panel">
            <h3 className="h3">Our approach</h3>
            <p className="muted">
              We communicate the category of solution and the design philosophy
              — not the underlying implementation details.
            </p>
          </div>

          <div>
            <h2 className="h2">A high-level overview</h2>
            <p className="muted">
              The invention introduces a proprietary architecture intended to
              deliver continuous, scalable power with integration paths for
              modern electrical systems.
            </p>

            <div className="grid2">
              <div className="infoCard">
                <div className="infoTitle">Modular by design</div>
                <div className="muted">
                  Designed to adapt across different sizes and operating
                  environments.
                </div>
              </div>

              <div className="infoCard">
                <div className="infoTitle">Integration-minded</div>
                <div className="muted">
                  Built to complement existing power systems rather than replace
                  everything.
                </div>
              </div>

              <div className="infoCard">
                <div className="infoTitle">Reliability-focused</div>
                <div className="muted">
                  Aiming for predictable operation and reduced dependency on
                  external constraints.
                </div>
              </div>

              <div className="infoCard">
                <div className="infoTitle">IP-first disclosure</div>
                <div className="muted">
                  Public information is outcome-based; technical details are
                  gated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="section">
        <div className="container">
          <h2 className="h2">Key outcomes</h2>
          <p className="muted">
            These are the results we’re building toward — without revealing how
            the invention achieves them.
          </p>

          <div className="cards3">
            <div className="bigCard">
              <div className="bigCardTitle">Continuous availability</div>
              <div className="muted">
                Designed for sustained operation to support dependable energy
                needs.
              </div>
            </div>

            <div className="bigCard">
              <div className="bigCardTitle">Lower operational friction</div>
              <div className="muted">
                Intended to reduce downtime, bottlenecks, and infrastructure
                dependency.
              </div>
            </div>

            <div className="bigCard">
              <div className="bigCardTitle">Scalable deployment</div>
              <div className="muted">
                Built to support a range of deployments from localized to
                larger-scale use.
              </div>
            </div>

            <div className="bigCard">
              <div className="bigCardTitle">Resilience</div>
              <div className="muted">
                Designed to support stability in variable environments and load
                conditions.
              </div>
            </div>

            <div className="bigCard">
              <div className="bigCardTitle">Compatibility paths</div>
              <div className="muted">
                Aiming for practical integration with existing infrastructure.
              </div>
            </div>

            <div className="bigCard">
              <div className="bigCardTitle">Commercial readiness</div>
              <div className="muted">
                Milestone-driven progress toward demonstrations and partnerships.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases" className="section sectionAlt">
        <div className="container">
          <h2 className="h2">Use cases</h2>
          <p className="muted">
            We focus on applications where reliability, resilience, and scale
            matter most.
          </p>

          <div className="grid2">
            <div className="infoCard">
              <div className="infoTitle">Grid support</div>
              <div className="muted">
                Stabilization, peak support, and resilience-focused deployments.
              </div>
            </div>

            <div className="infoCard">
              <div className="infoTitle">Distributed energy</div>
              <div className="muted">
                Localized power systems for campuses, facilities, and microgrids.
              </div>
            </div>

            <div className="infoCard">
              <div className="infoTitle">Industrial & commercial</div>
              <div className="muted">
                Backup power, continuity planning, and critical operations.
              </div>
            </div>

            <div className="infoCard">
              <div className="infoTitle">Remote / off-grid</div>
              <div className="muted">
                Power availability where infrastructure is limited.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATUS & PROTECTION */}
      <section id="status" className="section">
        <div className="container split">
          <div>
            <h2 className="h2">Development status & protection</h2>
            <p className="muted">
              We share progress signals publicly and reserve technical details
              for qualified conversations.
            </p>

            <ul className="list">
              <li>Milestone-based engineering and validation</li>
              <li>Documentation and testing artifacts maintained internally</li>
              <li>IP protection strategy in place (details shared upon request)</li>
              <li>Partnership and pilot discussions available</li>
            </ul>
          </div>

          <div className="panel">
            <h3 className="h3">Access to deeper details</h3>
            <p className="muted">
              If you’re an investor, partner, or evaluator, request an
              information packet. We can share additional detail after proper
              screening (and NDA when appropriate).
            </p>
            <a className="btnPrimary" href="#contact">
              Request access
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section sectionAlt">
        <div className="container">
          <h2 className="h2">Contact</h2>
          <p className="muted">
            Use this to request a meeting or an information packet. Technical
            details are shared selectively to protect the invention.
          </p>

          <div className="contactGrid">
            <div className="panel">
              <h3 className="h3">Email</h3>
              <p className="muted">
                Best for partnership and investor inquiries.
              </p>
              <a className="contactLink" href="mailto:info@yourdomain.com">
                info@yourdomain.com
              </a>
            </div>

            <div className="panel">
              <h3 className="h3">What to include</h3>
              <ul className="list tight">
                <li>Your name + organization</li>
                <li>Reason for interest (partner/investor/pilot)</li>
                <li>Timeline and intended use case</li>
                <li>Whether you can sign an NDA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
