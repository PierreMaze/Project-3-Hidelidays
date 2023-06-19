import { NavHashLink } from "react-router-hash-link";
import Logo from "../../public/assets/logo.svg";

export default function RecruitmentPage() {
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
            <NavHashLink smooth to="#/contact" activeClassName="selected">
              Contact
            </NavHashLink>
            <NavHashLink smooth to="https://giphy.com/gifs/disneyplus-high-school-musical-the-series-highschoolmusical-vc7fzbdrDEeTwcruYd/fullscreen">🏝️</NavHashLink>
          </ul>
        </nav>
      </div>
      <div className="hiring">
        <h1>Rejoignez-nous!</h1>
        <p>
          Bienvenue sur la page recrutement de Hidelidays ! Nous sommes ravis
          que vous ayez envie de rejoindre notre équipe de joyeux lurons. Mais
          attention, travailler chez Hidelidays n'est pas de tout repos, il faut
          être prêt à encaisser les blagues, les jeux de mots pourris et les
          soirées endiablées.
        </p>
        <br />
        <p>
          Si vous êtes toujours là, c'est que vous avez le sens de l'humour et
          que vous êtes prêt à tout pour travailler dans une ambiance
          décontractée. Chez Hidelidays, on ne se prend pas au sérieux, mais on
          prend notre travail très au sérieux.
        </p>
        <br />
        <p>
          Les profils atypiques sont les bienvenus, que vous soyez un expert en
          châteaux de sable, un as du lancer de boules de neige ou un champion
          de la sieste sur la plage. Nous aimons les personnalités hautes en
          couleur, qui ne se prennent pas trop au sérieux et qui ont un grain de
          folie.
        </p>
        <br />
        <h2>Nous cherchons des experts de Cache-cache</h2>
        <p>
          Chez Hidelidays, nous sommes spécialisés dans la recherche des
          meilleurs endroits cachés à travers le monde. Nous recherchons des
          personnes talentueuses qui peuvent se fondre dans leur environnement,
          disparaître de la vie quotidienne et créer des expériences de vacances
          inoubliables pour nos clients.
        </p>
        <h2>Postes à pourvoir</h2>
        <ul className="job-list">
          <li>
            Spécialiste de Cache-cache : Trouvez les cachettes les plus uniques
            et secrètes pour nos clients.
          </li>
          <li>
            Agent de voyage invisible : Aidez nos clients à planifier des
            itinéraires invisibles.
          </li>
          <li>
            Ninja de marketing furtif : Promouvez Hidelidays sans que personne
            ne le remarque.
          </li>
          <li>
            Support client sournois : Fournissez une assistance de première
            classe tout en restant invisible.
          </li>
        </ul>
        <h2>Avantages de rejoindre Hidelidays</h2>
        <ul className="advantages-list">
          <li>Manteau d'invisibilité : Fourni le premier jour.</li>
          <li>
            Des pauses illimitées de Cache-cache : Prenez une pause à tout
            moment en vous cachant de vos responsabilités.
          </li>
          <li>
            Activités de team building remplies d'aventures : Perdez-vous avec
            votre équipe et retrouvez votre chemin.
          </li>
          <li>
            Bureau caché : Travaillez dans un endroit caché connu uniquement des
            élus.
          </li>
          <li>
            Horaires de travail flexibles : Cachez-vous quand vous voulez,
            travaillez quand vous devez.
          </li>
          <li>
            Rires et amusement : Nous garantissons une dose quotidienne de
            rires, de blagues et de surprises cachées.
          </li>
        </ul>
        <br />
        <h2>Comment postuler?</h2>
        <p>
          Si vous pensez être le/la candidat(e) idéal(e) pour rejoindre notre
          équipe de choc, n'hésitez pas nous envoyer un mail à
          recrutement@hidelidays.fr ! Mais attention, la candidature est un
          parcours semé d'embûches : vous devrez répondre à des énigmes
          farfelues, participer à des concours de danse absurdes et résister à
          notre célèbre épreuve de blagues nulles.
        </p>
        <br />
        <p>
          Si vous survivez à toutes ces épreuves, vous aurez l'honneur de
          rejoindre notre équipe de rêve. Alors, prêt(e) à relever le défi ?
        </p>
        <br />
      </div>
    </div>
  );
}
