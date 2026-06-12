import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    // Apply initial theme class (.dark for dark mode)
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section highlighting logic
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionEl = current as HTMLElement;
        const sectionHeight = sectionEl.offsetHeight;
        const sectionTop = sectionEl.offsetTop - 100;
        const sectionId = sectionEl.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (sectionId) setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
    document.body.style.overflow = !isMobileOpen ? "hidden" : "";
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setIsMobileOpen(false);
    document.body.style.overflow = "";
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={() => handleLinkClick("home")}>
          <span className="logo-accent">E</span>than
          <span className="logo-dot">.</span>
        </a>

        <nav className={`nav-menu ${isMobileOpen ? "open" : ""}`} id="nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeLink === link.id ? "active" : ""}`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
          >
            {theme === "dark" ? (
              /* Moon Icon */
              <svg
                className="icon-moon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              /* Sun Icon */
              <svg
                className="icon-sun"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
          
          <button
            className={`mobile-toggle ${isMobileOpen ? "active" : ""}`}
            id="mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
