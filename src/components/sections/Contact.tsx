import ButtonSocialIconDemo from "@/components/ui/social-icon";

export function Contact() {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CONNECT</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's build something grand together.</h3>
            <p>
              I am always open to discussing new software architectures, machine learning research, or potential internship and co-op collaborations. Reach out directly or check my profiles.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Direct Email</span>
                  <a href="mailto:eencollins@gmail.com" className="info-val">
                    eencollins@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem", fontFamily: "var(--font-heading)" }}>
              Network Connections
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "2rem", maxWidth: "320px" }}>
              Click any element below to connect or view my active codebases and developer logs.
            </p>
            <ButtonSocialIconDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
