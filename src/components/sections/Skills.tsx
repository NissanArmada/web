export function Skills() {
  const categories = [
    {
      title: "Languages & Core Engineering",
      description: "Writing robust, highly maintainable backend APIs and designing relational/non-relational schemas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        "Python",
        "Java",
        "C++",
        "PostgreSQL",
        "FastAPI",
        "Flask",
        "Node.js",
        "React.js",
        "Next.js / TS",
      ],
    },
    {
      title: "Artificial Intelligence & ML",
      description: "Engineering knowledge-graph structures, computer vision pipelines, and transformer classifications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      skills: [
        "TensorFlow",
        "Scikit-Learn",
        "RoBERTa / BERT",
        "OpenCV",
        "NumPy",
        "Pandas",
        "NetworkX (Graphs)",
        "Sentence-Transformers",
      ],
    },
    {
      title: "Tools, DevOps & Data Services",
      description: "Managing containerized execution pools, vector caches, and cloud operations pipelines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        "AWS (EC2)",
        "Supabase",
        "Neo4j Graph DB",
        "MongoDB Atlas",
        "Redis Vector Cache",
        "Celery Task Pools",
        "Docker / Git",
        "Vite / Figma",
        "Linux (Ubuntu)",
      ],
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
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">EXPERTISE</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="skill-card"
              onMouseMove={handleMouseMove}
            >
              <div className="skill-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <ul className="skill-list">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
