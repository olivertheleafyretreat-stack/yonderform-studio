export function SiteFooter() {
  return (
    <footer>
      <div className="shell footerMain">
        <a className="wordmark light" href="#top"><span className="brandDot" aria-hidden="true" />Northward<span>Studio</span></a>
        <p>Websites for local businesses<br />across the United Kingdom.</p>
        <div className="footerLinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
      </div>
      <div className="shell footerLegal"><span>© {new Date().getFullYear()} Northward Studio</span><span>Clear thinking. Careful craft.</span></div>
    </footer>
  );
}
