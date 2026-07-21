"use client";

import { useEffect, useState } from "react";

const principles = [
  {
    number: "01",
    title: "People",
    text: "Design for access, dignified representation, fair work and lasting capacity—inside and beyond the business.",
  },
  {
    number: "02",
    title: "Planet",
    text: "Choose channels and materials deliberately, reduce unnecessary production and account for both print and digital footprints.",
  },
  {
    number: "03",
    title: "Profit",
    text: "Price responsible process properly, build recurring services and protect the financial resilience needed to keep serving.",
  },
];

const services = [
  ["Accessible reports + websites", "Structure information for screen readers, plain language and flexible formats."],
  ["Campaign identities", "Build adaptable systems for public-interest, climate and community initiatives."],
  ["Information + data design", "Turn complex evidence into maps, infographics and decisions people can use."],
  ["Responsible print", "Specify format, quantity, stock and finishing around real need—not automatic volume."],
  ["Toolkits + multilingual assets", "Create templates that help local teams communicate consistently and independently."],
];

const firms = [
  {
    mark: "pê",
    name: "pipikwan pêhtâkwan",
    place: "Edmonton · Indigenous-led",
    text: "An Indigenous-owned, led and majority-staffed agency combining public relations, engagement, design and capacity-building. Its model shows that cultural accountability and strategic communications belong in the same practice.",
    lesson: "Own the relationship, not only the deliverable.",
    href: "https://www.pipikwanpehtakwan.com/",
  },
  {
    mark: "LO",
    name: "Loop: Design for Social Good",
    place: "Toronto · Social-impact design",
    text: "Loop works with nonprofits and purpose-led organizations across brand, web and publications. Its Oxfam Canada redesign reduced page volume by half, pairing a clearer experience with a lighter content footprint.",
    lesson: "Make usefulness a measurable design outcome.",
    href: "https://weareloop.com/work/oxfam-canada/",
  },
  {
    mark: "GW",
    name: "Grounded World",
    place: "Global · Certified B Corp",
    text: "A boutique social-impact agency using strategy, storytelling and campaigns to move audiences toward action. Its work with Plan International and Unsplash demonstrates how partnerships can expand a campaign’s reach and representation.",
    lesson: "Build distribution into the creative idea.",
    href: "https://grounded.world/project/plan-international",
  },
];

const practices = [
  ["Choose a credible niche", "Start with a problem you understand—accessible reporting, Indigenous engagement, climate information or nonprofit digital systems."],
  ["Listen before designing", "Budget for research, participation and review. Make consent and decision rights visible in the scope."],
  ["Design access in", "Use semantic structure, readable type, contrast, captions, alt text and formats that work across abilities and devices."],
  ["Source with intention", "Compare print and digital impacts project by project; specify less, reuse more and avoid claims you cannot verify."],
  ["Measure what changed", "Track comprehension, reach, accessibility, local capacity, waste avoided and relationship quality—not impressions alone."],
  ["Protect business health", "Price discovery and accessibility, seek recurring work, document processes and keep enough margin to deliver responsibly."],
];

const sources = [
  ["Sustainable entrepreneurship", "Shepherd & Patzelt, 2011", "https://doi.org/10.1177/0149206310394325"],
  ["Triple Bottom Line", "Harvard Business Review · John Elkington", "https://hbr.org/1994/01/towards-the-sustainable-corporation-win-win-win-business-strategies-for-sustainable-development"],
  ["UN Declaration on the Rights of Indigenous Peoples", "United Nations", "https://www.un.org/development/desa/indigenouspeoples/wp-content/uploads/sites/19/2018/11/UNDRIP_E_web.pdf"],
  ["UNDRIP Action Plan", "Justice Canada", "https://www.justice.gc.ca/eng/declaration/ap-pa/index.html"],
  ["Annual Statistical Report", "UN Global Marketplace", "https://www.ungm.org/Shared/KnowledgeCenter/Pages/asr_report"],
  ["Find opportunities", "CanadaBuys", "https://canadabuys.canada.ca/en/tender-opportunities"],
  ["Indigenous procurement target", "Indigenous Services Canada", "https://www.sac-isc.gc.ca/eng/1691786841904/1691786911287"],
  ["Global E-waste Monitor 2024", "ITU + UNITAR", "https://www.itu.int/hub/publication/d-gen-e_waste-01-2024/"],
  ["Web Content Accessibility Guidelines", "W3C", "https://www.w3.org/WAI/standards-guidelines/wcag/"],
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("sustainable-pathways-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved === "dark" || (!saved && prefersDark) ? "dark" : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("sustainable-pathways-theme", next);
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sustainable Pathways home">
          <span aria-hidden="true">SP</span>
          <span className="wordmark-text">Sustainable Pathways</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#meaning">Meaning</a>
          <a href="#opportunity">Opportunity</a>
          <a href="#firms">Firms</a>
          <a href="#practice">Practice</a>
          <a href="#sources">Sources</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </header>

      <div id="content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Entrepreneurship in graphic communications</p>
            <h1 id="hero-title">Sustainable pathways<span>to success.</span></h1>
            <p className="hero-deck">
              How early-career creatives can build viable practices around accessible design,
              responsible communication and social impact—from Canada to global development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#meaning">Explore the pathway <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#firms">Meet the firms <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="A pathway connecting people, planet and profit">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-centre"><span>Long-term</span><strong>value</strong></div>
            <span className="visual-label label-people">People</span>
            <span className="visual-label label-planet">Planet</span>
            <span className="visual-label label-profit">Profit</span>
          </div>

          <div className="hero-footnote">
            <span>Canada-centred</span><span>Globally connected</span><span>Designed to endure</span>
          </div>
        </section>

        <section className="section meaning-section" id="meaning" aria-labelledby="meaning-title">
          <div className="section-heading">
            <p className="section-number">01 / Meaning</p>
            <div>
              <h2 id="meaning-title">Sustainability is an operating model.</h2>
       
               <p>
  This website applies three central graphic communications concepts—triple bottom
  line sustainability, multi-channel marketing and accessible design—to the development
  of a responsible entrepreneurial practice. Sustainable entrepreneurship asks a venture
  to create economic and non-economic value while preserving the systems and communities
  that make its work possible. In graphic communications, that responsibility extends
  to land and materials, Indigenous rights and knowledge, clients and audiences, and the
  long-term health of the enterprise itself.
</p>
            </div>
          </div>

          <div className="principle-grid focus-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.title} tabIndex={0}>
                <span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p>
                <div className="card-rule" aria-hidden="true" />
              </article>
            ))}
          </div>

          <blockquote>
            <p>Can the venture remain profitable while leaving people, communities and ecological systems with more capacity—not less?</p>
            <cite>A practical test for long-term value</cite>
          </blockquote>
        </section>

        <section className="section opportunity-section" id="opportunity" aria-labelledby="opportunity-title">
          <div className="section-heading">
            <p className="section-number">02 / Opportunity</p>
            <div>
              <h2 id="opportunity-title">Communication is infrastructure.</h2>
              <p>
                Every social-impact organization needs to explain evidence, earn trust and make action
                possible. That creates a broad market for designers, writers, strategists, developers
                and production specialists who can make communication clearer, more accessible and
                less wasteful.
              </p>
            </div>
          </div>

          <div className="channel-split">
            <article className="channel-panel print-panel">
              <p className="mini-label">Print</p>
              <h3>Tangible. Local. Deliberate.</h3>
              <p>Print can reach people beyond a screen and give important information permanence. The sustainable choice is not automatically “no print,” but the right quantity, format, material and distribution plan.</p>
            </article>
            <div className="plus" aria-hidden="true">+</div>
            <article className="channel-panel digital-panel">
              <p className="mini-label">Digital</p>
              <h3>Adaptable. Searchable. Scalable.</h3>
              <p>Digital work can update quickly, support assistive technology and travel globally. It still has a material footprint: devices, servers and 62 million tonnes of e-waste generated worldwide in 2022.</p>
            </article>
          </div>
          <p className="channel-note">
            The entrepreneurial advantage is multi-channel judgment: knowing when print, web, audio,
            social or a combined system will create the most access with the least unnecessary production.
            Accessible design strengthens that offer because better structure, contrast, language and format
            improve communication for everyone—not only users with disabilities.
          </p>

          <div className="service-layout">
            <div className="service-intro">
              <p className="section-number">A low-waste entry point</p>
              <h3>Sell expertise before inventory.</h3>
              <p>A service practice can start with a laptop, focused skills and a network of responsible production partners. It can test a niche without manufacturing speculative stock, then build repeatable tools and retainers as demand becomes clearer.</p>
            </div>
            <div className="service-list focus-list">
              {services.map(([title, text], index) => (
                <article className="service-item" tabIndex={0} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h4>{title}</h4><p>{text}</p></div>
                  <span aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pathway-section" aria-labelledby="pathway-title">
          <div className="section-heading">
            <p className="section-number">03 / Pathway</p>
            <div>
              <h2 id="pathway-title">Start specific. Connect outward.</h2>
              <p>A Canadian studio does not need to become global on day one. A credible niche, documented results and trusted partnerships create a route from local work to larger public and international assignments.</p>
            </div>
          </div>

          <ol className="pathway-track">
            <li><span>01</span><strong>Define a niche</strong><p>Choose the audience and problem your practice can serve unusually well.</p></li>
            <li><span>02</span><strong>Prove the system</strong><p>Use small projects to document process, access and outcomes.</p></li>
            <li><span>03</span><strong>Build recurring work</strong><p>Offer toolkits, campaign systems, reports and ongoing content support.</p></li>
            <li><span>04</span><strong>Enter procurement</strong><p>Monitor public portals, partner with qualified firms and respond selectively.</p></li>
          </ol>

          <div className="market-cards focus-grid">
            <a className="market-card" href="https://canadabuys.canada.ca/en/tender-opportunities" target="_blank" rel="noreferrer">
              <p className="mini-label">Canada</p><h3>CanadaBuys</h3>
              <p>Search federal tender opportunities for design, communications, digital services and public engagement. Federal policy also targets at least 5% of contract value for Indigenous businesses—a meaningful pathway for Indigenous-led firms and responsible partnerships.</p>
              <span>Explore tenders ↗</span>
            </a>
            <a className="market-card" href="https://www.ungm.org/Public/Notice" target="_blank" rel="noreferrer">
              <p className="mini-label">Global</p><h3>UN Global Marketplace</h3>
              <p>UNGM provides one digital portal for consulting and supplier opportunities across the UN system. The 2025 statistical report covers US$22.7 billion in procurement by 32 organizations and suppliers from 227 countries and territories.</p>
              <span>Browse notices ↗</span>
            </a>
          </div>
        </section>

        <section className="section rights-section" aria-labelledby="rights-title">
          <div className="rights-layout">
            <div>
              <p className="section-number">04 / Rights + responsibility</p>
              <h2 id="rights-title">Reconciliation changes the process.</h2>
            </div>
            <div className="rights-copy">
              <p className="lead">
                UNDRIP protects Indigenous peoples’ rights to their media, cultural heritage, traditional
                knowledge and cultural expressions. For communication entrepreneurs in Canada, that makes
                authority, consent, attribution and benefit-sharing central design questions—not optional
                finishing touches.
              </p>
              <p>
                A responsible studio asks who owns the story, who approves its use, who is paid, who can
                withdraw consent and what capacity remains after the campaign. Indigenous motifs are not a
                visual resource to extract. Relationships, protocols and distinctions among First Nations,
                Inuit and Métis communities must shape the work from the beginning.
              </p>
              <div className="rights-actions">
                <a className="button button-outline" href="https://www.justice.gc.ca/eng/declaration/ap-pa/index.html" target="_blank" rel="noreferrer">Read Canada’s UNDRIP Action Plan ↗</a>
                <a className="text-link" href="https://vincentdesign.ca/projects/undrip/" target="_blank" rel="noreferrer">See Vincent Design’s UNDRIP campaign ↗</a>
              </div>
            </div>
          </div>
          <div className="rights-principles" aria-label="Principles for rights-based communication">
            <span>Story authority</span><span>Free, prior + informed consent</span><span>Fair benefit</span><span>Community capacity</span>
          </div>
        </section>

        <section className="section firms-section" id="firms" aria-labelledby="firms-title">
          <div className="section-heading">
            <p className="section-number">05 / Firm spotlights</p>
            <div>
              <h2 id="firms-title">Three models for impact.</h2>
              <p>There is no single blueprint. These firms show how ownership, specialization, certification, collaboration and measurable design decisions can become part of a durable market position.</p>
            </div>
          </div>

          <div className="firm-grid focus-grid">
            {firms.map((firm, index) => (
              <a className="firm-card" href={firm.href} target="_blank" rel="noreferrer" key={firm.name}>
                <div className="firm-top"><span className="firm-mark">{firm.mark}</span><span>0{index + 1}</span></div>
                <p className="firm-place">{firm.place}</p>
                <h3>{firm.name}</h3><p>{firm.text}</p>
                <blockquote><p>“{firm.lesson}”</p></blockquote>
                <span className="firm-link">Visit project or firm <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </section>

        <section className="section practice-section" id="practice" aria-labelledby="practice-title">
          <div className="section-heading">
            <p className="section-number">06 / Best practice</p>
            <div>
              <h2 id="practice-title">Turn values into decisions.</h2>
              <p>Sustainability becomes credible when it changes the brief, budget, workflow and definition of success. Use these six moves as a starting operating system.</p>
            </div>
          </div>
          <div className="practice-grid focus-grid">
            {practices.map(([title, text], index) => (
              <article className="practice-card" tabIndex={0} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="closing-statement">
            <p className="section-number">The opportunity</p>
            <p>Graphic communications blends strategy, design, production and technology into a flexible pathway for entrepreneurs. A focused practice can begin with little material waste, reach clients through open digital procurement, and grow by helping mission-led organizations communicate with greater clarity, access and accountability.</p>
          </div>
        </section>

        <section className="section sources-section" id="sources" aria-labelledby="sources-title">
          <div className="section-heading compact-heading">
            <p className="section-number">07 / Research desk</p>
            <div><h2 id="sources-title">Follow the evidence.</h2><p>Selected primary and professional sources behind the pathway. Course concepts are integrated throughout the site.</p></div>
          </div>
          <div className="source-list">
            {sources.map(([title, publisher, href], index) => (
              <a href={href} target="_blank" rel="noreferrer" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><span>{publisher}</span><span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer>
        <div><span className="footer-mark">SP</span><p><strong>Sustainable Pathways to Success</strong><br />Opportunities for entrepreneurship in graphic communications.<br />
  Created by Nooh Muhammad for GCM 110 · Summer 2026
</p></div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
