import { Button } from "@/components/ui/button";

const ButtonSocialIconDemo = () => {
  const socialLinks = {
    google: "https://g.dev/ethancollins",
    github: "https://github.com/NissanArmada",
    linkedin: "https://linkedin.com/in/ethan-n-collins",
    email: "mailto:eencollins@gmail.com"
  };

  return (
    <div className="flex items-center justify-center gap-6 flex-wrap" style={{ padding: "1rem 0" }}>
      {/* google developer profile */}
      <a href={socialLinks.google} target="_blank" rel="noopener noreferrer" aria-label="Google Developer Profile">
        <Button
          variant="outline"
          type="button"
          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          style={{ width: "60px", height: "60px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img
            src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
            alt="google icon"
            className="h-6 w-6"
          />
        </Button>
      </a>

      {/* github */}
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
        <Button
          variant="outline"
          type="button"
          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          style={{ width: "60px", height: "60px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img
            src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
            alt="github icon"
            className="dark:hidden h-6 w-6"
          />
          <img
            src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
            alt="github icon"
            className="hidden dark:block h-6 w-6"
          />
        </Button>
      </a>

      {/* linkedin */}
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <Button
          variant="outline"
          type="button"
          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          style={{ width: "60px", height: "60px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img
            src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
            alt="linkedin icon"
            className="h-6 w-6"
          />
        </Button>
      </a>

      {/* direct email */}
      <a href={socialLinks.email} aria-label="Send Direct Email">
        <Button
          variant="outline"
          type="button"
          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          style={{ width: "60px", height: "60px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Custom Envelope SVG representing email connection */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
            style={{ color: "var(--accent)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Button>
      </a>
    </div>
  );
};

export default ButtonSocialIconDemo;
