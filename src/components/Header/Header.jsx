import logoMe from  '../../assets/logoMe.jpg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className="nav">
    
        <img src={logoMe} alt="logo" className={styles.logo} />
    
        <h1>Elzbieta Szymichowska</h1>
        <ul className="nav-item">
          <li><a href="#intro">Intro</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

//   export default Header;