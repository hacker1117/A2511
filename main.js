import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <nav class="navbar">
      <div class="logo">Z TECHNOLOGY</div>
      <div class="nav-links">
        <a href="#consumer" style="margin-right: 2rem">Consumer Electronics</a>
        <a href="#automotive">Car Audio</a>
      </div>
    </nav>
  </div>

  <header class="hero">
    <div class="container">
      <div class="grid-2">
        <div class="hero-content">
          <h1>Innovating Audio <br/>& Power Solutions.</h1>
          <p class="hero-text">Premium engineering for the modern lifestyle and automotive excellence.</p>
          <div class="cta-group">
            <a href="#consumer" class="btn btn-primary">Explore Z-Axiom</a>
            <a href="#automotive" class="btn btn-outline" style="margin-left: 1rem">Car Audio</a>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/assets/DSC09320.jpg" alt="Z-Axiom Showcase" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); object-fit: cover; height: 500px;">
        </div>
      </div>
    </div>
  </header>

  <section id="consumer">
    <div class="container">
      <div class="grid-2">
        <div class="product-info">
          <h2>Consumer Electronics</h2>
          <h3>Z-Axiom</h3>
          <p class="highlight-text">Speakerless Sound Box & MagSafe Power Bank</p>
          <p>The world's first diverse power bank that turns any surface into a sound system. Z-Axiom uses bone conduction technology to transform tables, windows, and more into a high-fidelity speaker.</p>
          <ul style="list-style: none; padding: 0; color: var(--text-secondary); margin-bottom: 2rem;">
             <li>✓ <strong>Speakerless Technology</strong>: Turn any surface into a speaker.</li>
             <li>✓ <strong>MagSafe Compatible</strong>: 5000mAh magnetic portable charger.</li>
             <li>✓ <strong>Dual-Function</strong>: Power and Sound in one slim device.</li>
          </ul>
          <div class="cta-group">
             <button class="btn btn-primary" onclick="window.open('https://www.kickstarter.com/projects/304254149/z-axiom-speakerless-sound-box-and-magsafe-powerbank', '_blank')">View on Kickstarter</button>
             <button class="btn btn-outline" style="margin-left: 1rem">Product Details</button>
          </div>
        </div>
        <div class="product-visual">
           <img src="/assets/DSC09367.jpg" alt="Z-Axiom Features" style="width: 100%; border-radius: var(--radius-lg); opacity: 0.9;">
        </div>
      </div>
    </div>
  </section>

  <section id="automotive">
    <div class="container">
      <div class="grid-2">
        <div class="product-visual">
           <img src="/assets/clean_subwoofer_1.png" alt="Z-Series Ultra-thin Subwoofer" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: 2rem;">
           <img src="/assets/clean_subwoofer_2.png" alt="Z-Series Ports" style="width: 100%; border-radius: var(--radius-lg);">
        </div>
        <div class="product-info">
          <h2>Automotive Audio</h2>
          <h3>Z-Series 10" Active Subwoofer</h3>
          <p class="highlight-text">Concept Candidate: The Future of In-Car Bass</p>
          <p>Engineered for pure bass performance without occupying your trunk space. This 10-inch active subwoofer fits perfectly under the seat, delivering deep, punchy low-end frequencies with a futuristic aesthetic.</p>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px;">
              <h4 style="margin: 0 0 0.5rem 0; color: var(--text-primary);">Deep Bass</h4>
              <p style="margin: 0; font-size: 0.85rem;">10-inch Woofer<br>600W Peak Power</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px;">
               <h4 style="margin: 0 0 0.5rem 0; color: var(--text-primary);">Visuals</h4>
               <p style="margin: 0; font-size: 0.85rem;">Spider LED Light<br>App Controlled</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px;">
               <h4 style="margin: 0 0 0.5rem 0; color: var(--text-primary);">Design</h4>
               <p style="margin: 0; font-size: 0.85rem;">Ultra-Thin Profile<br>Aluminum Alloy Body</p>
            </div>
             <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px;">
               <h4 style="margin: 0 0 0.5rem 0; color: var(--text-primary);">Install</h4>
               <p style="margin: 0; font-size: 0.85rem;">Plug & Play<br>Underseat Fit</p>
            </div>
          </div>

          <button class="btn btn-primary" onclick="alert('Distributor Inquiry Sent!')">Distributor Inquiry</button>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" style="background: linear-gradient(to top, #111, var(--bg-primary));">
    <div class="container" style="max-width: 800px; text-align: center;">
      <h2>Get in Touch</h2>
      <p>Interested in becoming a distributor or need more information?</p>
      
      <div class="glass-card" style="text-align: left; margin-top: 2rem;">
        <form onsubmit="event.preventDefault(); alert('Thank you for your interest! This is a demo.');">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Name</label>
            <input type="text" placeholder="Your Name" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.3); color: white;">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Email</label>
            <input type="email" placeholder="your@email.com" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.3); color: white;">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Message</label>
            <textarea rows="4" placeholder="How can we help?" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.3); color: white;"></textarea>
          </div>
          <button class="btn btn-primary" style="width: 100%;">Send Message</button>
        </form>
      </div>
      
      <div style="margin-top: 3rem; color: var(--text-secondary);">
        <p><strong>Z Technology Limited</strong></p>
        <p>Email: <a href="mailto:hello@ztech-lab.com" style="color: var(--text-primary); text-decoration: underline;">hello@ztech-lab.com</a></p>
      </div>
    </div>
  </section>

  <footer style="padding: 2rem 0; border-top: 1px solid var(--border-color); text-align: center; color: var(--text-secondary); font-size: 0.9rem;">
    <div class="container">
      &copy; 2025 Z Technology Limited. All rights reserved.
    </div>
  </footer>
`
