export function About() {
  const honors = [
    {
      title: "STREAM DFW Stock Competition Winner",
      desc: "Achieved a 106% ROI with a $2.1M simulated portfolio using trade mirroring and end-of-day pattern buying.",
    },
    {
      title: "Lockheed Martin CodeQuest Winner",
      desc: "Placed 2nd in the Advanced League division, solving complex algorithmic challenges under strict time constraints.",
    },
    {
      title: "HackAI Figma Design Track Winner",
      desc: "Designed high-fidelity mockups and interaction profiles for complex AI integrations.",
    },
    {
      title: "National African American Recognition Award",
      desc: "Recognized by the College Board for outstanding academic achievements.",
    },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">BIOGRAPHY</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-lead">
              Software Engineering undergraduate at UT Dallas, specializing in intelligent reasoning systems and performance analytics.
            </h3>
            <p>
              I design systems that marry high-performance codebases with machine learning pipelines. My focus ranges from graph-based reasoning models (GraphRAG) and low-latency API architectures to real-time computer vision networks and sports telemetry engines.
            </p>
            <p>
              With specialized coursework in Software Engineering at UTD and practical experience leading AI mentorship cohorts, I design robust architectures that ensure type-safety, low retrieval latency, and end-to-end data integrity.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-val">Dallas, TX</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-val">Incoming Full Stack & UX Intern at Stealth AI Startup</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">University</span>
                <span className="detail-val">UT Dallas (Expected May 2028)</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Languages</span>
                <span className="detail-val">English (Native), Japanese (JLPT N4 In-Progress)</span>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a href="/assets/Ethan-Collins-SWE-ML-Resume.pdf" download className="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "18px", height: "18px", marginRight: "8px", display: "inline-block", verticalAlign: "middle" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>
            
            {/* Honors & Awards Sub-section */}
            <div className="honors-showcase" style={{ marginTop: "3rem" }}>
              <h3 className="timeline-title" style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>Honors & Accolades</h3>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {honors.map((honor, idx) => (
                  <div key={idx} className="honor-item" style={{ 
                    borderLeft: "2px solid var(--accent)", 
                    paddingLeft: "1.25rem",
                    transition: "transform var(--transition-fast) ease"
                  }}>
                    <h4 style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>{honor.title}</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>{honor.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <h3 className="timeline-title">Journey & Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">June 2026 - Present</span>
                <h4 className="timeline-role">Full Stack & UX Intern</h4>
                <p className="timeline-desc" style={{ fontWeight: 500, color: "var(--accent)", marginBottom: "0.25rem" }}>
                  Stealth AI Startup
                </p>
                <p className="timeline-desc">
                  Developing responsive frontend interfaces across a React-based Progressive Web App (PWA) for an adaptive platform. Integrating WebSockets for real-time session updates, engineering interactive UI/UX components, and conducting usability research.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Fall 2025</span>
                <h4 className="timeline-role">Project AI Implementation Lead</h4>
                <p className="timeline-desc" style={{ fontWeight: 500, color: "var(--accent)", marginBottom: "0.25rem" }}>
                  Artificial Intelligence Mentorship (UTD Club)
                </p>
                <p className="timeline-desc">
                  Directed the technical architecture for a 6-person engineering team building the RateMyCareer sentiment analysis platform. Coordinated model selection (upgrading classification to fine-tuned RoBERTa), database schema design, and presented the end-to-end AI framework to industry experts from Apple and Google.
                </p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Spring 2025</span>
                <h4 className="timeline-role">Team Captain & Public Relations</h4>
                <p className="timeline-desc" style={{ fontWeight: 500, color: "var(--accent)", marginBottom: "0.25rem" }}>
                  FTC Robotics Team 8626 (Innovate & Design Award Winner)
                </p>
                <p className="timeline-desc">
                  Directed Agile, state-qualifying development of a competition robot in Java. Managed builders and programmers, established Git version workflows, and built a mechanical design mentorship pipeline guiding 20+ younger students.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">2024 - March 2026</span>
                <h4 className="timeline-role">Chick-fil-A Team Member</h4>
                <p className="timeline-desc">
                  Coordinated high-volume workflows under intense operational pressures, demonstrating reliability, collaboration, and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
