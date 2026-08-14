import React from 'react';
import { MetricsDashboard, KelCharts } from './components/MetricsAndCharts';
import { AgentNetwork } from './components/AgentNetwork';

const NAV_LINKS = [
  { href: '#zones', label: 'Zones' },
  { href: '#agents', label: 'Agents' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#blockchain', label: 'Blockchain' },
  { href: '#constellation', label: 'Constellation' },
];

function smoothScroll(e, href) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  return (
    <>
      <nav className="kel-nav">
        <div className="kel-nav-container">
          <a href="#" style={{ fontWeight: 700, fontSize: '1.25rem', textDecoration: 'none', color: 'var(--kel-primary)' }}>
            🌾 KEL
          </a>
          <ul className="kel-nav-menu">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a className="kel-nav-link" href={l.href} onClick={(e) => smoothScroll(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="kel-main">
        {/* Hero — original hero/nav markup was lost to a broken file merge before this
            port; this content is new but matches the established real copy (page
            meta description, footer tagline) and the site's actual design system
            (.kel-card/.kel-btn/.kel-grid), not invented styling. */}
        <section className="kel-card" style={{ textAlign: 'center', marginBottom: 'var(--kel-spacing-2xl)' }}>
          <h1 style={{ fontSize: 'var(--kel-font-size-3xl)', marginBottom: 'var(--kel-spacing-md)' }}>
            🌾 Knowledge-Driven Agricultural Intelligence
          </h1>
          <p style={{ maxWidth: 720, margin: '0 auto var(--kel-spacing-lg)' }}>
            Autonomous AI-governed agricultural production and distribution for sustainable
            farming across Africa — from genetic research through harvest, processing, and
            distribution, coordinated by 30 specialized AI agents across six operational zones.
          </p>
          <a href="#agents" onClick={(e) => smoothScroll(e, '#agents')} className="kel-btn kel-btn-primary">
            View Live Agent Network
          </a>
        </section>

        {/* Live Metrics */}
        <section id="metrics" className="kel-section">
          <MetricsDashboard />
        </section>

        {/* Charts */}
        <section className="kel-section">
          <div className="kel-grid kel-grid-3">
            <KelCharts />
          </div>
        </section>

        {/* Operational Zones */}
        <section id="zones" className="kel-section">
          <div className="kel-card">
            <h2>🏭 Six Operational Zones</h2>
            <p>KEL operates through six specialized operational zones, each managed by dedicated AI agents working in perfect coordination to ensure seamless agricultural production from seed to distribution.</p>

            <div className="kel-grid kel-grid-2" style={{ marginTop: '2rem' }}>
              <div className="kel-card">
                <div className="kel-card-header">
                  <div className="kel-card-icon kel-zone-lab"><span style={{ fontSize: '2rem' }}>🔬</span></div>
                  <div><h3>Laboratory Zone</h3><p className="kel-card-subtitle">Genetic Research &amp; Development</p></div>
                </div>
                <p>Advanced genetic engineering and nutritional analysis to develop high-yield, disease-resistant crop varieties optimized for African climate conditions.</p>
                <ul>
                  <li>Genetic crop enhancement and modification</li>
                  <li>Nutritional content analysis and optimization</li>
                  <li>Disease resistance engineering</li>
                  <li>Bioengineering for climate adaptation</li>
                </ul>
              </div>

              <div className="kel-card">
                <div className="kel-card-header">
                  <div className="kel-card-icon kel-zone-greenhouse"><span style={{ fontSize: '2rem' }}>🏠</span></div>
                  <div><h3>Greenhouse Zone</h3><p className="kel-card-subtitle">Controlled Environment Cultivation</p></div>
                </div>
                <p>Precision-controlled growing environments that optimize plant development through AI-managed climate control, irrigation, and nutrient delivery systems.</p>
                <ul>
                  <li>Climate control and environmental optimization</li>
                  <li>Automated irrigation and nutrient delivery</li>
                  <li>Pest detection and management</li>
                  <li>Growth monitoring and optimization</li>
                </ul>
              </div>

              <div className="kel-card">
                <div className="kel-card-header">
                  <div className="kel-card-icon kel-zone-harvest"><span style={{ fontSize: '2rem' }}>🌾</span></div>
                  <div><h3>Harvest Station</h3><p className="kel-card-subtitle">Automated Crop Collection</p></div>
                </div>
                <p>Intelligent harvesting systems that determine optimal harvest timing and execute collection operations with minimal waste and maximum efficiency.</p>
                <ul>
                  <li>Ripeness detection and timing optimization</li>
                  <li>Automated harvesting operations</li>
                  <li>Yield optimization and waste reduction</li>
                  <li>Quality assessment and sorting</li>
                </ul>
              </div>

              <div className="kel-card">
                <div className="kel-card-header">
                  <div className="kel-card-icon kel-zone-processing"><span style={{ fontSize: '2rem' }}>⚙️</span></div>
                  <div><h3>Processing House</h3><p className="kel-card-subtitle">Post-Harvest Processing</p></div>
                </div>
                <p>Advanced processing facilities that clean, sort, and prepare crops for distribution while maintaining nutritional integrity and extending shelf life.</p>
                <ul>
                  <li>Grain processing and refinement</li>
                  <li>Quality sorting and grading</li>
                  <li>Nutritional enhancement processing</li>
                  <li>Packaging preparation</li>
                </ul>
              </div>

              <div className="kel-card">
                <div className="kel-card-header">
                  <div className="kel-card-icon kel-zone-factory"><span style={{ fontSize: '2rem' }}>🏭</span></div>
                  <div><h3>Factory Floor</h3><p className="kel-card-subtitle">Packaging &amp; Quality Control</p></div>
                </div>
                <p>Automated packaging lines with integrated quality control systems that ensure product safety, traceability, and compliance with international standards.</p>
                <ul>
                  <li>Automated packaging operations</li>
                  <li>Quality control and safety certification</li>
                  <li>Product labeling and traceability</li>
                  <li>Compliance verification</li>
                </ul>
              </div>

              <div className="kel-card">
                <div className="kel-card-header">
                  <div className="kel-card-icon kel-zone-storage"><span style={{ fontSize: '2rem' }}>📦</span></div>
                  <div><h3>Storage &amp; Logistics</h3><p className="kel-card-subtitle">Distribution &amp; Supply Chain</p></div>
                </div>
                <p>Intelligent warehousing and distribution systems that optimize storage conditions and manage supply chain logistics for efficient product delivery.</p>
                <ul>
                  <li>Inventory management and optimization</li>
                  <li>Route optimization for distribution</li>
                  <li>Demand forecasting and planning</li>
                  <li>Supply chain security and monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Network */}
        <section id="agents" className="kel-section">
          <div className="kel-card">
            <h2>🤖 Multi-Agent AI System</h2>
            <p>KEL operates as a sophisticated multi-agent mesh network where specialized AI agents collaborate across all operational zones. Each agent is designed with specific expertise and responsibilities, working together to achieve optimal agricultural outcomes.</p>
          </div>
          <AgentNetwork />
        </section>

        {/* Sustainability & Ethics */}
        <section id="sustainability" className="kel-section">
          <div className="kel-card">
            <h2>🌱 Sustainability &amp; Ethical Governance</h2>
            <p>KEL is built on principles of ecological sustainability and ethical AI governance. Our system ensures that all agricultural operations are conducted with minimal environmental impact while maximizing social benefit.</p>

            <div className="kel-grid kel-grid-2" style={{ marginTop: '2rem' }}>
              <div className="kel-card">
                <h3>🌍 Ecological Intelligence</h3>
                <ul>
                  <li>Water conservation through precision irrigation</li>
                  <li>Renewable energy integration for operations</li>
                  <li>Soil health monitoring and preservation</li>
                  <li>Biodiversity protection and enhancement</li>
                  <li>Carbon footprint minimization</li>
                  <li>Waste reduction and recycling programs</li>
                </ul>
              </div>
              <div className="kel-card">
                <h3>⚖️ Ethical Framework</h3>
                <ul>
                  <li>Transparent AI decision-making processes</li>
                  <li>Fair labor practices and community engagement</li>
                  <li>Food safety and quality assurance</li>
                  <li>Equitable distribution of benefits</li>
                  <li>Respect for local agricultural traditions</li>
                  <li>Continuous improvement and learning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Integration */}
        <section id="blockchain" className="kel-section">
          <div className="kel-card">
            <h2>🔗 Blockchain Traceability</h2>
            <p>KEL integrates blockchain technology to provide complete transparency and traceability throughout the agricultural supply chain. Every step from seed to consumer is recorded immutably, ensuring food safety and building consumer trust.</p>

            <div className="kel-grid kel-grid-3" style={{ marginTop: '2rem' }}>
              <div className="kel-card">
                <h3>📋 Supply Chain Tracking</h3>
                <p>Complete visibility into every stage of production, from seed sourcing to final delivery, with real-time updates and verification.</p>
              </div>
              <div className="kel-card">
                <h3>🔒 Quality Assurance</h3>
                <p>Immutable records of quality tests, safety certifications, and compliance verification at every stage of processing.</p>
              </div>
              <div className="kel-card">
                <h3>👥 Consumer Confidence</h3>
                <p>Transparent information sharing that builds trust with consumers and partners through verifiable product history.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Constellation Integration */}
        <section id="constellation" className="kel-section">
          <div className="kel-card">
            <h2>⭐ Constellation Network Integration</h2>
            <p>KEL operates as an integral component of the Sans Mercantile Constellation, leveraging shared intelligence, security, and infrastructure resources to deliver superior agricultural solutions.</p>

            <div className="kel-grid kel-grid-2" style={{ marginTop: '2rem' }}>
              <div className="kel-card">
                <h3>🔗 System Interconnections</h3>
                <ul>
                  <li><strong>PRIV:</strong> Core intelligence and security infrastructure</li>
                  <li><strong>Brigit:</strong> Corporate governance and compliance</li>
                  <li><strong>ANUBIS:</strong> Advanced simulation and modeling</li>
                  <li><strong>MPETI:</strong> Trading intelligence and market analysis</li>
                  <li><strong>OMEGA:</strong> Medical and health data integration</li>
                  <li><strong>MEZZO:</strong> Environmental monitoring and analysis</li>
                </ul>
              </div>
              <div className="kel-card">
                <h3>🔄 Shared Resources</h3>
                <ul>
                  <li>Common AI governance frameworks</li>
                  <li>Unified security protocols</li>
                  <li>Shared data analytics platforms</li>
                  <li>Cross-system communication networks</li>
                  <li>Integrated compliance monitoring</li>
                  <li>Collaborative intelligence sharing</li>
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a href="https://sansmercantile.com" className="kel-btn kel-btn-primary">Explore Constellation Network</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="kel-footer">
        <div className="kel-main">
          <p>&copy; 2026 KEL Agricultural System - Part of Sans Mercantile Constellation</p>
          <p>Knowledge-Driven Cultivation | Ecological Intelligence | Logistics Optimization</p>
          <p>Pioneering sustainable AI-driven agriculture for food security across Africa</p>
        </div>
      </footer>
    </>
  );
}
