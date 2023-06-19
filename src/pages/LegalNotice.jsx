import { NavHashLink } from "react-router-hash-link";
import Logo from "../../public/assets/logo.svg";

export default function LegalNotice() {
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
      <div className="legal-notice">
        <p>Cher visiteur,</p>
        <br />
        <p>
          Nous sommes ravis que vous soyez sur notre site ! Avant de poursuivre
          votre navigation, nous vous demandons de prendre quelques instants
          pour lire nos mentions légales.
        </p>
        <br />
        <p>
          Premièrement, sachez que notre nom "Hidelidays" est une contraction de
          "hide" (cacher) et "holidays" (vacances). En d'autres termes, nous
          sommes spécialisés dans les destinations où vous pourrez vous cacher
          des tracas du quotidien. Nous n'avons rien à voir avec les
          cachotteries ou les disparitions, alors pas de panique !
        </p>
        <br />
        <p>En utilisant notre site, vous acceptez les conditions suivantes :</p>
        <ul className="legal-notice-list">
          <li>
            Vous ne copierez pas notre contenu. Vous pouvez l'admirer, le lire,
            le partager, mais pas le voler. C'est comme si vous regardiez notre
            sandwich, vous pouvez baver dessus, mais vous ne pouvez pas le
            prendre.
          </li>
          <li>
            Vous ne vous ferez pas passer pour nous. Nous sommes très fiers de
            notre nom et de notre image, alors ne prétendez pas que vous êtes
            Hidelidays. Vous ne voudriez pas vous faire passer pour quelqu'un
            d'autre, n'est-ce pas ?
          </li>
          <li>
            Vous ne nous tiendrez pas responsables si vous ne vous amusez pas
            pendant vos vacances. Nous pouvons vous recommander les meilleures
            destinations, mais nous ne pouvons pas garantir que vous aurez un
            temps fabuleux. Mais nous sommes sûrs que vous avez un bon sens de
            l'humour et que vous pourrez rire de tout, même de la pluie qui
            gâche votre journée à la plage.
          </li>
        </ul>
        <br />
        <p>
          Si vous avez des questions ou des commentaires, n'hésitez pas à nous
          contacter. Nous sommes là pour vous aider à trouver votre prochaine
          destination de rêve, ou simplement pour échanger des blagues.
        </p>
        <br />
        <p>Sur ce, bonnes vacances !</p>
        <br />
        <p className="team-name">L'équipe Hidelidays</p>
        <br />
      </div>
    </div>
  );
}
