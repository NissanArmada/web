import React from "react";

type Project = {
  title: string;
  tags: string[];
  description: string;
  github: string;
  icon: React.ReactNode;
  image?: string;
  featured?: boolean;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "EarlyAxxess",
      tags: ["Neo4j", "Python", "FastAPI", "Celery", "Redis", "NetworkX"],
      description: "GraphRAG Medical Reasoning System. Delivers sub-second diagnostic inferences across a 6M-node knowledge graph using distributed Celery worker pools, Redis brokering, and Bayesian-weighted Dijkstra pathfinding. Includes a What-If counterfactual simulator and fuzzy entity-matching LLM validation layer.",
      github: "https://github.com/NissanArmada/EarlyAxxess",
      icon: (
        <svg className="project-visual-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 18.364l3.536-3.536m0-5.656L5.636 5.636M12 9a3 3 0 100 6 3 3 0 000-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M2 12h2m16 0h2" />
        </svg>
      ),
      image: "/assets/EarlyAxxess_image.png",
      featured: true,
    },
    {
      title: "Miyabi-OS",
      tags: ["Python", "OpenCV", "NumPy", "FFT", "Multi-Threading"],
      description: "Real-Time Vision HUD & edge-detection engine. Implements Laplacian differential operators and 2D Fast Fourier Transform (FFT) spectral analysis to perform high-precision boundary tracking on live camera feeds. Features a modular pipeline and multi-threaded event triggers.",
      github: "https://github.com/NissanArmada/Miyabi-OS",
      icon: (
        <svg className="project-visual-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      image: "/assets/MiyabiOS_image.png",
    },
    {
      title: "LowBall",
      tags: ["FastAPI", "React Native", "Gemini API", "aiosqlite"],
      description: "AI-Powered Online Marketplace Negotiation Companion. Employs a parallel 'Council-of-Thought' multi-agent inference chain (simulating Aggressive, Sympathetic, and Analytical profiles) to cut latency from 6.5s to 1.2s. Enforces end-to-end schema type-safety via Pydantic-to-TypeScript synchronization.",
      github: "https://github.com/NissanArmada/LowBall",
      icon: (
        <svg className="project-visual-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      image: "/assets/LowBall_image.png",
    },
    {
      title: "Circuit OS",
      tags: ["Python", "Pandas", "Scikit-Learn", "Flask", "TDD"],
      description: "Real-time sports performance and telemetry analytics engine. Employs RandomForest regression to predict lap times based on environmental variables. Implements a pandas-driven time-series pipeline profiling driver corner-exit metrics, validated via Python's unittest TDD loops.",
      github: "https://github.com/NissanArmada/GazooRazoo",
      icon: (
        <svg className="project-visual-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/assets/CircuitOS_image.png",
    },
    {
      title: "CometNavigator",
      tags: ["Next.js", "TypeScript", "FastAPI", "MongoDB Atlas"],
      description: "AI-Powered student dashboard matching resources for 25,000+ users. Generates 384-dimensional cosine similarity profiles with sentence-transformers (all-MiniLM-L6-v2) cached in MongoDB Atlas, achieving sub-200ms query times.",
      github: "https://github.com/NissanArmada/CometNavigator",
      icon: (
        <svg className="project-visual-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 5.447-2.724A1 1 0 0121 3.168v10.764a1 1 0 01-.553.894L15 18l-6 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 2v18M15 4v18" />
        </svg>
      ),
      image: "/assets/CometNavigator_image.png",
    },
    {
      title: "RateMyCareer",
      tags: ["Python", "Flask", "React.js", "Supabase", "RoBERTa"],
      description: "Career Sentiment Analysis Platform tracking 10,000+ posts via automated ETL. Upgraded inference models from VADER to a fine-tuned RoBERTa pipeline, reducing classification error by 45%. Exposes predictions in real-time through a modular Flask REST API.",
      github: "https://github.com/AI-Mentorship/RateMyCareer",
      icon: (
        <svg className="project-visual-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      image: "/assets/RateMyCareer_image.png",
      featured: true,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CREATIONS</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid" id="projects-grid">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`project-card fade-in visible ${project.featured ? "featured-card" : ""}`}
              onMouseMove={handleMouseMove}
            >
              <div className="project-visual">
                <div className="project-visual-glow"></div>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                ) : (
                  project.icon
                )}
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Codebase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
