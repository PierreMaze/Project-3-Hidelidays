import { NavHashLink } from "react-router-hash-link";
import Logo from "../../public/assets/logo.svg";

export default function NavigationBar() {
  return (
    <div className="nav-bar">
      <nav className="nav-container">
        <NavHashLink smooth to="#home">
          <img className="logo" src={Logo} alt="logo" />
        </NavHashLink>
        <ul className="nav-list">
          <NavHashLink smooth to="#about-us" activeClassName="selected">
            A propos
          </NavHashLink>
          <NavHashLink smooth to="#packages" activeClassName="selected">
            Nos solutions
          </NavHashLink>
          <NavHashLink smooth to="#review" activeClassName="selected">
            Avis clients
          </NavHashLink>
          <NavHashLink smooth to="#contact" activeClassName="selected">
            Contact
          </NavHashLink>
          <NavHashLink smooth to="https://giphy.com/gifs/disneyplus-high-school-musical-the-series-highschoolmusical-vc7fzbdrDEeTwcruYd/fullscreen">🏝️</NavHashLink>
        </ul>
      </nav>
    </div>
  );
}
