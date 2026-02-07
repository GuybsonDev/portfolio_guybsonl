import { useState, useEffect } from "react";
import "./styles.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="containerLinksAbout">
        <a href="https://github.com/GuybsonDev" target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/images/github-logo.png')} className="logoGithub" />
        </a>
        <a href="https://www.linkedin.com/in/guybson-lopes-132b7020b/" target="_blank" rel="noopener noreferrer" >
          <img src={require('../../assets/images/linkedin-logo.png')} className="logoLinkedin" />
        </a>
        <a href="https://drive.google.com/file/d/1JJxGjnX4bWpCcOekF53cWftmX2dXH1O1/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
          <img src={require('../../assets/images/curriculo-logo.png')} className="logoCurriculo" />
        </a>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
