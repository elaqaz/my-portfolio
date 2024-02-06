export default function MainContent() {
    return (
      <div className="App">
        <div className="parent">
          <div className="header-title">
            <h1>Hello! 👋 I'm Elzbieta, call Ella.</h1>
            <p>Web Developer & Product Owner</p>
          </div>
        <main>
          <section className="intro">
          <p>With a passion for web development and a global perspective, I'm ready to embark on my journey in the world of coding. Having lived and studied in diverse countries like Malta and Georgia, I bring a unique blend of creativity and technical expertise to every project.</p>
          <p>As a dedicated developer and product owner, I have the privilege of not only creating but also shaping and guiding the development of user-friendly web and mobile applications. When I'm not coding, you can find me cheering on my three talented swimmers or exploring new destinations with a warm cup of coffee in hand. I'm committed to delivering innovative solutions using tools like Figma, HTML5, CSS3, JavaScript, and React, and I'm always eager to learn and grow in this ever-evolving field.</p>
          </section>
  
          <section className="skills">
            <h2>Skills & Toolbox</h2>
            <p>
              Crafting web and mobile wonders with a palette of Figma, HTML5, CSS3, JavaScript, React, and a dash of boundless curiosity. I’m always on the move, adding more tools to my kit.
            </p>
          </section>
  
          <section className="portfolio">
          <h2>Portfolio</h2>
           <div className="portfolio-item">
            <h3>Beyond Barriers</h3>
             <p>An initiative to bridge gaps and create inclusive spaces in technology. Check out the project live <a href="https://beyond-barriers.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>
             <p>For a deeper dive, watch the <a href="https://www.youtube.com/watch?v=mn0_Mxml_Qs" target="_blank" rel="noopener noreferrer">10-minute project presentation on YouTube</a>. Look for me—I’m the one tackling the Agile part, sporting black glasses!</p>
           </div>
          </section>
  
          <section className="contact">
            <h2>Get in Touch</h2>
            <p>
              Let's connect and create something remarkable. Reach out on 
              <a href="https://www.linkedin.com/in/elzbieta-szymichowska-31309b289/">LinkedIn</a> or 
              <a href="https://github.com/elaqaz">GitHub</a>.
            </p>
            {/* Consider adding a contact form here */}
          </section>
        </main>
      </div>
    </div>
  
    );
  }
  //   export default Header;