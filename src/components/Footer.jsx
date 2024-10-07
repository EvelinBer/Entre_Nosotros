import sitaeLogo from "../assets/img/sitae.png";
import ufpsLogo from "../assets/img/ufps.png";
import siluxLogo from "../assets/img/silux.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; 2024 Entre Nosotros - Norte de Santander. Todos los derechos
          reservados.
        </p>
        <div className="partner-logos">
          <a href="https://instagram.com/sitaeufps/" target="_blank">
            <img src={sitaeLogo} alt="SITAE" className="partner-logo" />
          </a>
          <a href="https://www.facebook.com/groups/silux/" target="_blank">
            <img src={siluxLogo} alt="SILUX" className="partner-logo" />
          </a>
          <a href="https://ww2.ufps.edu.co/" target="_blank">
            <img src={ufpsLogo} alt="UFPS" className="partner-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
