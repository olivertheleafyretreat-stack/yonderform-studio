import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const projects = [
  { name: "Hawthorn & Stone", trade: "Landscape design · Surrey", image: "/images/hawthorn-stone.png", tone: "dark" },
  { name: "Northline Electrical", trade: "Electrical services · Manchester", image: "/images/northline-electrical.png", tone: "blue" },
  { name: "Oakmere Kitchens", trade: "Bespoke kitchens · Cheshire", image: "/images/oakmere-kitchens.png", tone: "clay" },
];

const packages = [
  { name: "Launch", price: "£1,750", description: "A sharp, credible five-page website for an established local business ready to look the part online.", features: ["Up to five pages", "Mobile-first design", "Two revision rounds", "Launch and 14-day support"] },
  { name: "Growth", price: "£3,250", description: "A broader website for businesses with several services, locations or case studies to communicate.", features: ["Up to ten pages", "Content shaping", "Local search foundations", "Analytics and 30-day support"] },
  { name: "Bespoke", price: "From £5,000", description: "For ambitious requirements that sit beyond the standard brochure-site system.", features: ["Tailored discovery", "Custom scope", "Advanced integrations", "Phased delivery plan"] },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <SiteHeader />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="kicker"><span /> Independent web studio · UK</p>
            <h1>Good businesses<br />deserve <em>better</em><br />websites.</h1>
            <div className="heroBottom">
              <p>We design and build distinctive websites for local businesses that care about their reputation.</p>
              <a className="button dark" href="#contact">Discuss your website <Arrow /></a>
            </div>
          </div>
          <div className="heroVisual">
            <Image src="/images/studio-process.png" alt="A Northward Studio website design taking shape on a laptop" fill priority sizes="(max-width: 800px) 100vw, 45vw" />
            <span className="imageLabel">Thoughtful design<br />Built to perform</span>
          </div>
        </div>
        <div className="shell proofStrip"><span>Strategy</span><i /> <span>Design</span><i /> <span>Development</span><i /> <span>Launch</span></div>
      </section>

      <section className="belief shell">
        <p className="kicker"><span /> Why Northward</p>
        <h2>Your website should feel like your <em>best work</em>—clear, confident and made with care.</h2>
        <div className="beliefNote"><span>01</span><p>We combine the polish of a design studio with a focused production system. That means fewer delays, clearer decisions and a website that does not look like everyone else’s.</p></div>
      </section>

      <section className="work" id="work">
        <div className="shell sectionTitle"><div><p className="kicker light"><span /> Selected work</p><h2>Different businesses.<br /><em>Distinctive</em> results.</h2></div><p>Three directions built from one reliable system—each shaped around its market, customers and character.</p></div>
        <div className="shell projectGrid">
          {projects.map((project, index) => (
            <article className={`projectCard ${project.tone}`} key={project.name}>
              <div className="projectImage"><Image src={project.image} alt={`${project.name} website homepage`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
              <div className="projectMeta"><span>0{index + 1}</span><div><h3>{project.name}</h3><p>{project.trade}</p></div><Arrow /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="servicesIntro"><p className="kicker"><span /> Simple packages</p><h2>A clear route from<br />“we need a website”<br />to <em>ready to launch.</em></h2><p>Fixed starting prices, defined revision rounds and no mystery process. We agree the scope before work begins.</p></div>
        <div className="packageList">
          {packages.map((item, index) => <article key={item.name}>
            <div className="packageHead"><span>0{index + 1}</span><h3>{item.name}</h3><strong>{item.price}</strong></div>
            <p>{item.description}</p>
            <ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
            <a href="#contact">Enquire about {item.name} <Arrow /></a>
          </article>)}
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell sectionTitle"><div><p className="kicker light"><span /> The process</p><h2>Clear from the<br /><em>very beginning.</em></h2></div><p>Most Launch websites take around three to four weeks once all content is ready.</p></div>
        <ol className="shell processGrid">
          <li><span>01</span><h3>Understand</h3><p>We clarify the audience, services, goals and content before committing to the scope.</p></li>
          <li><span>02</span><h3>Shape</h3><p>We establish the visual direction and turn the business story into a clear page structure.</p></li>
          <li><span>03</span><h3>Build</h3><p>We create the responsive website, test it carefully and work through focused feedback rounds.</p></li>
          <li><span>04</span><h3>Launch</h3><p>After approval and final payment, we connect the domain, verify the live site and provide support.</p></li>
        </ol>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactGrid">
          <div><p className="kicker"><span /> Start a project</p><h2>Ready for a website that matches the quality of your business?</h2></div>
          <div className="contactPanel"><p>Tell us about the business, the current website and what you would like to improve. We will reply with the right next step—not a hard sell.</p><a className="button coral" href="mailto:hello@northwardstudio.co.uk?subject=Website%20project%20enquiry">hello@northwardstudio.co.uk <Arrow /></a><small>Typical reply within two business days</small></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
