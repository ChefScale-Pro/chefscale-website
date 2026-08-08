const Arrow = () => <span aria-hidden="true">→</span>;

const Check = () => <span className="check" aria-hidden="true">✓</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ChefScale Pro home">
          <img src="/chefscale-logo.png" alt="ChefScale Pro Enterprise" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#why">Why ChefScale</a>
          <a href="#workflow">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a className="nav-cta" href="#pilot">Founding pilot</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">Restaurant decision intelligence, built for chefs</div>
          <h1>Know what every plate costs. <span>Decide what happens next.</span></h1>
          <p className="hero-lead">
            ChefScale Pro connects purchasing, recipe costing, inventory, menu pricing,
            and daily sales—so chefs can make better decisions with the numbers behind every plate.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#pilot">Request a founding-pilot demo <Arrow /></a>
            <a className="button secondary" href="#workflow">See how it works</a>
          </div>
          <p className="release-note"><span></span> v1.0 cleared its automated release gate. Final customer acceptance testing is underway.</p>
        </div>

        <div className="product-stage" aria-label="ChefScale Pro dashboard preview">
          <div className="stage-glow"></div>
          <div className="app-window">
            <div className="window-bar">
              <div className="window-brand">ChefScale <b>Pro</b></div>
              <div className="window-status">LIVE DECISION VIEW</div>
            </div>
            <div className="metric-grid">
              <div className="metric"><span>90-DAY REVENUE</span><strong>$153,064</strong><small>Demo restaurant</small></div>
              <div className="metric"><span>FOOD COST</span><strong>14.6%</strong><small className="positive">On target</small></div>
              <div className="metric"><span>CONTRIBUTION</span><strong>$130,755</strong><small>After food cost</small></div>
            </div>
            <div className="dashboard-body">
              <div className="chart-card">
                <div className="card-label">MENU CONTRIBUTION</div>
                <div className="bars">
                  <i style={{height:"48%"}}></i><i style={{height:"68%"}}></i><i style={{height:"56%"}}></i>
                  <i className="accent" style={{height:"86%"}}></i><i style={{height:"72%"}}></i><i style={{height:"92%"}}></i>
                </div>
                <div className="axis"><span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span></div>
              </div>
              <div className="decision-card">
                <div className="card-label">TODAY'S SIGNALS</div>
                <div className="signal"><span className="signal-dot blue"></span><div><b>Menu mix</b><small>4 items driving contribution</small></div></div>
                <div className="signal"><span className="signal-dot teal"></span><div><b>Recipe costs</b><small>30 core items costed</small></div></div>
                <div className="signal"><span className="signal-dot gold"></span><div><b>Pricing alert</b><small>1 item needs review</small></div></div>
              </div>
            </div>
            <div className="decision-strip"><span>Purchase price changed</span><Arrow /><span>Recipe cost updated</span><Arrow /><strong>Decision ready</strong></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="ChefScale capabilities">
        <span>Purchasing</span><i></i><span>Ingredients</span><i></i><span>Recipes</span><i></i><span>Inventory</span><i></i><span>Menus</span><i></i><span>Sales</span><i></i><span>Intelligence</span>
      </section>

      <section className="section problem" id="why">
        <div className="section-heading">
          <div className="eyebrow">The cost of guessing</div>
          <h2>Your menu changes every time a vendor price changes—even when the printed price doesn’t.</h2>
        </div>
        <div className="problem-grid">
          <article><span>01</span><h3>Costs move quietly</h3><p>Vendor prices, pack sizes, yields, and portions shift while recipe cards stay the same.</p></article>
          <article><span>02</span><h3>Data lives in pieces</h3><p>Purchasing, recipes, inventory, menus, and sales rarely tell one connected story.</p></article>
          <article><span>03</span><h3>Decisions come late</h3><p>By the time food cost appears in a report, the restaurant has already served the problem.</p></article>
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <div className="section-heading light">
          <div className="eyebrow">One operating story</div>
          <h2>From the invoice to the menu decision.</h2>
          <p>ChefScale follows the way restaurant economics actually move.</p>
        </div>
        <div className="workflow-grid">
          <article><b>1</b><h3>Purchase</h3><p>Capture what you paid, from whom, and in what pack.</p></article>
          <article><b>2</b><h3>Cost</h3><p>Translate purchasing units, yields, and portions into recipe cost.</p></article>
          <article><b>3</b><h3>Sell</h3><p>Connect recipes to menu price, availability, and daily units sold.</p></article>
          <article><b>4</b><h3>Decide</h3><p>See food cost, contribution, waste, and menu signals in context.</p></article>
        </div>
      </section>

      <section className="section features" id="features">
        <div className="section-heading">
          <div className="eyebrow">Built around the chef's workflow</div>
          <h2>Operational depth without enterprise-software friction.</h2>
        </div>
        <div className="feature-grid">
          {[
            ["Ingredient intelligence","Costs, units, conversions, yields, locations, vendors, and status in one governed ingredient record."],
            ["Recipe costing","Build by ingredient name and see calculated cost per portion as purchasing data changes."],
            ["Master Menu","Control sellable items, recipe relationships, prices, sections, channels, dates, and availability."],
            ["Daily Sales","Load the active menu, enter units, validate readiness, prevent duplicates, and preserve history."],
            ["Inventory & waste","Connect physical counts, receiving, usage, waste, par levels, and inventory value."],
            ["Decision intelligence","Turn revenue, food cost, contribution, menu mix, and alerts into a practical management view."],
          ].map(([title,copy]) => <article key={title}><Check /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="section-heading">
          <div className="eyebrow">Launch pricing</div>
          <h2>Choose self-service simplicity or a guided restaurant launch.</h2>
          <p>Clear one-location offers, built for the way you want to implement ChefScale.</p>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <div className="price-kicker">DIY Chef Edition</div>
            <h3>Self-service launch license</h3>
            <div className="price"><sup>$</sup>495 <span>one-time launch price</span></div>
            <p>For chefs and operators ready to configure ChefScale independently.</p>
            <ul>
              <li><Check /> One restaurant location</li>
              <li><Check /> Clean distribution workbook and sample data</li>
              <li><Check /> Quick-start guide and prerecorded training</li>
              <li><Check /> Defect, licensing, and download assistance</li>
            </ul>
            <a className="button secondary price-action" href="#pilot">Join the DIY launch list</a>
            <small>Initial release limited to 10 numbered beta licenses. Migration, customization, live onboarding, and individual implementation support are not included.</small>
          </article>

          <article className="price-card featured-price">
            <div className="price-badge">FOUNDING OPERATOR OFFER</div>
            <div className="price-kicker">ChefScale Pro Enterprise</div>
            <h3>Complete first-year launch</h3>
            <div className="price"><sup>$</sup>2,495 <span>one location</span></div>
            <p>For operators who want guided setup, onboarding, and launch support.</p>
            <ul>
              <li><Check /> One-location production license</li>
              <li><Check /> Remote installation and system verification</li>
              <li><Check /> Initial configuration and defined import assistance</li>
              <li><Check /> Two guided onboarding sessions</li>
              <li><Check /> 90 days of priority support and one year of updates</li>
            </ul>
            <a className="button primary price-action" href="#pilot">Request a founding-operator demo <Arrow /></a>
            <small>Founding availability is intentionally limited. Scope, taxes, payment terms, and scheduling are confirmed in the written offer.</small>
          </article>
        </div>

        <div className="pricing-guidance">
          <div><span>Guided evaluation</span><strong>$295–$500</strong><small>Credited toward purchase</small></div>
          <div><span>Annual license</span><strong>$1,800–$2,400</strong><small>Per year, one location</small></div>
          <div><span>Perpetual license</span><strong>$2,995–$3,995</strong><small>One location</small></div>
          <div><span>Setup &amp; onboarding</span><strong>$750–$1,500</strong><small>Defined implementation scope</small></div>
          <div><span>Annual support</span><strong>$595–$995</strong><small>For perpetual licenses</small></div>
          <div><span>Additional location</span><strong>$750–$1,250</strong><small>Per year</small></div>
          <div><span>Consulting</span><strong>$75–$125</strong><small>Per hour</small></div>
        </div>
        <p className="pricing-note">DIY paid assistance is generally $95–$125 per hour. The DIY purchase price may be credited toward an Enterprise upgrade completed within 90 days.</p>
      </section>

      <section className="section founder">
        <div className="founder-card">
          <div>
            <div className="eyebrow">Why ChefScale exists</div>
            <blockquote>“Chefs deserve software that understands the kitchen and respects the business.”</blockquote>
          </div>
          <p>ChefScale Pro was built from the operating reality of restaurants: changing prices, imperfect information, fast decisions, and the daily responsibility to protect both the plate and the profit.</p>
        </div>
      </section>

      <section className="section pilot" id="pilot">
        <div className="pilot-copy">
          <div className="eyebrow">Founding restaurant pilot</div>
          <h2>Bring one real menu. Leave with clearer questions—and better answers.</h2>
          <p>We are preparing a limited v1.0 pilot group for independent restaurants that want hands-on help connecting their costs, recipes, menus, and operating decisions.</p>
          <ul>
            <li><Check /> Guided ChefScale installation and configuration</li>
            <li><Check /> Ingredient, recipe, and Master Menu setup</li>
            <li><Check /> Team training and implementation support</li>
            <li><Check /> Baseline and 30-day profitability review</li>
          </ul>
        </div>
        <div className="pilot-card">
          <div className="pilot-badge">LIMITED FOUNDING GROUP</div>
          <h3>Request a private demonstration</h3>
          <p>See ChefScale using the decisions restaurant teams make every day.</p>
          <form action="#contact-confirmation">
            <label>Restaurant or company<input name="restaurant" placeholder="Restaurant name" required /></label>
            <label>Your name<input name="name" placeholder="Full name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@restaurant.com" required /></label>
            <label>Your role<select name="role" defaultValue=""><option value="" disabled>Select role</option><option>Owner / operator</option><option>Executive chef</option><option>General manager</option><option>Consultant</option><option>Other</option></select></label>
            <button type="submit">Request founding-pilot details <Arrow /></button>
          </form>
          <small id="contact-confirmation">Pilot requests will be personally reviewed by the ChefScale founding team.</small>
        </div>
      </section>

      <section className="section faq">
        <div className="section-heading"><div className="eyebrow">Straight answers</div><h2>Before the first conversation.</h2></div>
        <div className="faq-grid">
          <details><summary>Is ChefScale a POS system?</summary><p>No. ChefScale is a chef-centered operating and decision system. v1.0 uses controlled daily sales entry rather than claiming unsupported POS integration.</p></details>
          <details><summary>Is it only for large restaurant groups?</summary><p>No. The founding pilot is designed around independent restaurants and chef-led operators that need stronger cost visibility without a large analyst team.</p></details>
          <details><summary>Does it replace a chef's judgment?</summary><p>No. It organizes the operating facts so chefs can apply judgment earlier and with better context.</p></details>
          <details><summary>Is v1.0 commercially available today?</summary><p>ChefScale has cleared its automated release gate and is completing final customer acceptance testing. Founding-pilot conversations are open now.</p></details>
          <details><summary>Is DIY Chef a subscription?</summary><p>No. The $495 founding launch offer is a one-location, self-service license. Cloud subscription service is not part of the current v1.0 offer.</p></details>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/chefscale-logo.png" alt="ChefScale Pro Enterprise" /><p>Recipe. Cost. Profit. Simplified.</p></div>
        <div><strong>Built By Chefs,<br/>Engineered For Profits.</strong></div>
        <div className="footer-links"><a href="#why">Why ChefScale</a><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#pilot">Founding pilot</a></div>
        <p className="legal">© 2026 ChefScale Pro LLC. ChefScale Pro™. All rights reserved.</p>
      </footer>
    </main>
  );
}
