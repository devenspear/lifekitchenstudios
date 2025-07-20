'use client'

export default function Home() {
  const handleEmailClick = () => {
    const user = 'deven';
    const domain = 'deven.email';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      color: '#333333',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      {/* HEADER/NAV */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2563eb', margin: 0 }}>
            Life Kitchen Studios
          </h1>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <a href="#about" style={{ textDecoration: 'none', color: '#666666', fontWeight: '500', transition: 'color 0.3s' }}>About</a>
            <a href="#services" style={{ textDecoration: 'none', color: '#666666', fontWeight: '500', transition: 'color 0.3s' }}>Services</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#666666', fontWeight: '500', transition: 'color 0.3s' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{
        backgroundColor: '#f8fafc',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.1',
            color: '#1f2937'
          }}>
            Building the Future in <span style={{ color: '#2563eb' }}>VibeCode™</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            lineHeight: '1.6',
            margin: '0 auto 32px auto'
          }}>
            A creative studio at the edge of AI, Blockchain, and Web3—engineering immersive experiences for bold brands.
          </p>
          <button 
            onClick={handleEmailClick}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2563eb'}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{
        padding: '80px 24px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '16px', color: '#1f2937' }}>
              About Life Kitchen Studios
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              We're a North Carolina-based Web3 design and development studio creating purposeful, tech-forward solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#2563eb', borderRadius: '50%', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>AI</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>AI Integration</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.5' }}>AI-augmented experience design that enhances user interactions</p>
            </div>

            <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#2563eb', borderRadius: '50%', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>₿</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>Blockchain</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.5' }}>Smart contract–powered interfaces for the decentralized web</p>
            </div>

            <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#2563eb', borderRadius: '50%', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>3</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>Web3 Native</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.5' }}>Web3-native app development for modern digital experiences</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', color: '#374151', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto' }}>
              "We build systems that scale value and vibe. Innovation with soul. Technology with resonance."
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" style={{
        padding: '80px 24px',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '16px', color: '#1f2937' }}>
              Our Services
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive solutions for the future of digital experiences
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#1f2937' }}>Smart Contract Interfaces</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Custom interfaces that seamlessly integrate with blockchain technology</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#1f2937' }}>AI-Augmented Design</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Intelligent design systems that enhance user experience through AI</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#1f2937' }}>Web3 Development</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Full-stack development for decentralized applications and platforms</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', color: '#1f2937' }}>Creator Tools</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Experimental tools and platforms for creators and communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{
        padding: '80px 24px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '16px', color: '#1f2937' }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '32px' }}>
            Ready to build the future together? Let's discuss your project.
          </p>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '48px', borderRadius: '12px', marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Location</h3>
              <p style={{ color: '#6b7280' }}>📍 Wilmington, North Carolina</p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>Contact</h3>
              <button 
                onClick={handleEmailClick}
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2563eb'}
              >
                Send Email
              </button>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '8px' }}>
                Click to send us a message
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: '#9ca3af',
        padding: '48px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
              Life Kitchen Studios
            </h3>
            <p style={{ fontSize: '0.875rem' }}>
              Building the Future in VibeCode™
            </p>
          </div>
          
          <div style={{ borderTop: '1px solid #374151', paddingTop: '24px' }}>
            <p style={{ fontSize: '0.875rem' }}>
              © 2025 Life Kitchen Studios, LLC. All rights reserved. Registered in the State of North Carolina.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
