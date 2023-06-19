import QuotesStart from "/assets/quotesStart.svg";
import QuotesEnd from "/assets/quotesEnd.svg";
import Aos from "aos";

export default function AboutUs() {
  return (
    <div id="about-us" data-aos="fade-up">
      <img className="quotes-start" src={QuotesStart} alt="guillemets" />
      <p>
        Marre de trouver des excuses bidon pour échapper à vos obligations et
        partir en vacances ? Ne cherchez plus, notre site a LA solution ! Avec
        nos alibis de pro, vous pourrez enfin prendre du temps pour vous sans
        éveiller les soupçons. Que ce soit pour éviter un séminaire ennuyeux,
        tromper votre patron ou tout simplement pour faire une pause bien
        méritée, on a l&apos;alibi qu&apos;il vous faut. Alors n&apos;attendez
        plus, et partez l&apos;esprit tranquille grâce à notre expertise en
        matière de fausses excuses. Avec nous, vos vacances ne seront plus un
        rêve inaccessible, mais une réalité à portée de clic !
      </p>
      <img className="quotes-end" src={QuotesEnd} alt="guillemets" />
    </div>
  );
}
