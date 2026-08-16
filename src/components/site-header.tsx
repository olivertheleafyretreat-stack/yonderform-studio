export function SiteHeader() {
  return (
    <header className="siteHeader shell">
      <a className="wordmark" href="#top" aria-label="Northward Studio home">
        <span className="brandDot" aria-hidden="true" />
        Northward<span>Studio</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
      </nav>
      <a className="headerCta" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
    </header>
  );
}
