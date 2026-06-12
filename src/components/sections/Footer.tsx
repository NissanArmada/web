export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container" style={{ justifyContent: "center" }}>
        <p className="copyright">
          &copy; <span id="current-year">{currentYear}</span> Ethan Collins. Crafted with absolute elegance by Gentildonna.
        </p>
      </div>
    </footer>
  );
}
