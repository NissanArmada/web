import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

export function Hero() {
  const [particleColor, setParticleColor] = useState("#ffe0c2");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.className.includes("dark");
      setParticleColor(isDark ? "#ffe0c2" : "#644a40");
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const titleWords = "Hi, I'm Ethan.".split(" ");
  const highlightWords = "intelligent systems.".split(" ");

  return (
    <section id="home" className="hero-section">
      {/* Background Layer with Spheres and tsParticles Sparkles */}
      <div className="hero-bg absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        
        {/* tsParticles Canvas */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticleshero"
            background="transparent"
            minSize={0.5}
            maxSize={1.5}
            particleDensity={100}
            className="w-full h-full"
            particleColor={particleColor}
            speed={0.8}
          />
        </div>
      </div>

      <div className="container hero-container relative z-10">
        <div className="hero-content fade-in-up visible">
          <span className="hero-subtitle">WELCOME TO MY DIGITAL REALM</span>
          
          {/* Spring-Animated Heading */}
          <h1 className="hero-title">
            {/* Animate first line */}
            {titleWords.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.05 + letterIndex * 0.015,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
            <br />
            
            {/* Animate second line */}
            <span className="inline-block mr-3">I</span>
            <span className="inline-block mr-3">craft</span>
            
            {/* Highlighted phrase */}
            <span className="text-glow">
              {highlightWords.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`highlight-${wordIndex}-${letterIndex}`}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.6 + wordIndex * 0.05 + letterIndex * 0.015,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-description">
            A Software Engineer and Machine Learning Specialist dedicated to designing robust architectures, training state-of-the-art models, and blending the lines between systems and intelligence.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>
            <a href={`${import.meta.env.BASE_URL}assets/Ethan-Collins-SWE-ML-Resume.pdf`} download className="btn btn-outline">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline" style={{ border: "none" }}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}
