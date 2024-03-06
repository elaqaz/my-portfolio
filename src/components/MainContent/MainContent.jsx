import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import LogoMe from '../../assets/logoMe.jpg';
import SquareShip from '../../assets/squareShip.jpeg';
import RectangleShip from '../../assets/rectangleShip.jpeg';
import styles from './MainContent.module.css';

export default function MainContent() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {/* Hello! 👋  */}
          I'm Elzbieta, call Ella.</h1>
      </header>

      <div className={styles.logo}>
        {/* <img src={LogoMe} alt="logo" className={styles.logo}/> */}
        {/* < img src={SquareShip} alt="squareShip" className={styles.squareShip}/> */}
      </div>
      
      <div className={styles.mainContent}>
        <section className={styles.intro}>
        <h2 className={styles.subtitle}>Product Owner & Web Developer</h2>
        <p className={`${styles.description} ${styles.textOutline}`}>From Malta to Georgia and now the UK, my journey has been marked by a rich tapestry of global experiences, enhancing my work in product development with a distinctive Agile approach. Living in various places within the UK has broadened my perspective further, enriching my approach to product development. My main expertise revolves around orchestrating product cycles and embracing Agile methodologies. Additionally, my foray into web development offers technical depth that complements my primary focus. Coding, an extra skill in my repertoire, enables me to effectively translate visionary concepts into practical applications, enriching the product development process without the need for a leadership title.</p>
        </section>

        <section className={styles.skills}>
          <h2 className={styles.heading}>Skills & Toolbox</h2>
          <p>Crafting web and mobile wonders with a palette of Figma, HTML5, CSS3, JavaScript, React, and a dash of boundless curiosity. I’m always on the move, adding more tools to my kit.</p>
        </section>

        <section className={styles.portfolio}>
          <h2 className={styles.heading}>Portfolio</h2>
          <article className={styles.project}>
            <h3 className={styles.projectTitle}>Beyond Barriers</h3>
            <p>An initiative to bridge gaps and create inclusive spaces in technology. Check out the project live <a href="https://beyond-barriers.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </article>
        </section>

        <section className={styles.contact}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <div className={styles.socialLinks}>
            <a href="https://github.com/elaqaz" target='_blank'><FaGithub/></a> 
            <a href="https://www.linkedin.com/in/elzbieta-szymichowska-31309b289/" target='_blank'><FaLinkedin/></a>
            <a href='mailTo:ela.buu@gmail.com' target='_blank'><GrMail/></a>
          </div>
        </section> 
      </div>
    </div>
  );
}
