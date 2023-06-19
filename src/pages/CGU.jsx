import { NavHashLink } from "react-router-hash-link";
import Logo from "../../public/assets/logo.svg";

export default function Conditions() {
  return (
    <div>
      <div className="nav-bar">
        <nav className="nav-container">
          <NavHashLink smooth to="/">
            <img className="logo" src={Logo} alt="logo" />
          </NavHashLink>
          <ul className="nav-list">
            <NavHashLink smooth to="/#about-us" activeClassName="selected">
              A propos
            </NavHashLink>
            <NavHashLink smooth to="/#packages" activeClassName="selected">
              Nos offres
            </NavHashLink>
            <NavHashLink smooth to="/#review" activeClassName="selected">
              Avis clients
            </NavHashLink>
            <NavHashLink smooth to="/#contact" activeClassName="selected">
              Contact
            </NavHashLink>
            <NavHashLink smooth to="https://giphy.com/gifs/disneyplus-high-school-musical-the-series-highschoolmusical-vc7fzbdrDEeTwcruYd/fullscreen">🏝️</NavHashLink>
          </ul>
        </nav>
      </div>
      <div className="cgu">
        <p>Vous trouverez ci-dessous nos conditions :</p>
        <br />
        <ul className="cgu-list">
          <li>
            Tout d'abord, nous tenons à préciser que notre nom "Hidelidays" est
            une contraction de "hide" (cacher) et "holidays" (vacances). Donc si
            vous cherchez un site pour planifier une fête surprise, vous êtes au
            mauvais endroit. Par contre, si vous cherchez une destination pour
            vous cacher des ennuis du quotidien, alors vous êtes au bon endroit
            !
          </li>
          <li>
            En utilisant notre site, vous acceptez de ne pas copier notre
            contenu. Nous avons travaillé dur pour écrire des descriptions de
            vacances créatives et originales, alors nous ne voulons pas que vous
            les voliez. C'est comme si vous étiez invité chez nous pour un
            barbecue, vous pouvez goûter à notre viande, mais vous ne pouvez pas
            repartir avec notre grill.
          </li>
          <li>
            Si vous avez des questions ou des problèmes avec notre site,
            n'hésitez pas à nous contacter. Nous sommes là pour vous aider, même
            si vous voulez juste parler de vos vacances de rêve ou de la
            dernière blague que vous avez entendue.
          </li>
          <li>
            Enfin, nous ne pouvons malheureusement pas garantir que vous
            passerez des vacances parfaites. Parfois, il pleut même sur les plus
            belles plages du monde. Mais chez Hidelidays, nous pensons que même
            les moments les plus imprévus peuvent devenir des souvenirs
            inoubliables. Alors, n'hésitez pas à prendre des risques et à sortir
            de votre zone de confort.
          </li>
        </ul>
        <br />
        <p>
          En acceptant nos conditions générales d'utilisation, vous acceptez
          également de sourire au moins une fois par jour pendant vos vacances.
        </p>
        <br />
        <p>
          Voilà, vous savez maintenant tout ce qu'il y a à savoir sur les CGU de
          Hidelidays. Nous espérons que vous passerez un merveilleux séjour avec
          nous !
        </p>
        <br />
        <p>Bonnes vacances !</p>
        <br />
        <p className="team-name">L'équipe Hidelidays</p>
        <br />
      </div>
    </div>
  );
}
