import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Reviews() {
  return (
    <Carousel autoPlay infiniteLoop showArrows>
      <div id="review" className="reviewDiv">
        <img className="reviewImage" src="..\public\assets\review4.png" />
        <h1 className="review">Alice</h1>
        <p className="package-name"><strong>Package 	&quot;conjoint &quot;</strong></p>
        <p>
          Bravo pour votre professionnalisme, vous avez été très forts sur les
          preuves, j`ai pu montrer à ma femme le facebook de mon ami pour la
          rassurer ainsi que nos &quot;conversations&quot;. J`ai pu passer un très bon
          moment avec Macha à Venise.
        </p>
      </div>
      <div className="reviewDiv">
        <img className="reviewImage" src="..\public\assets\review2.png" />
        <h1 className="review">Jérémy</h1>
        <p className="package-name"><strong>Package 	&quot;employeur	&quot;</strong></p>
        <p>
          Rien à dire c`était parfait, l`équipe a parfaitement adapté ses
          scénarios à ma vie et a su fournir des documents essentiels pour mon
          employeur. Merci !
        </p>
      </div>
      <div className="reviewDiv">
        <img className="reviewImage" src="..\public\assets\review3.png" />
        <h1 className="review">Guillaume</h1>
        <p className="package-name"><strong>Package 	&quot;événèment	&quot;</strong></p>
        <p>
          J`ai utilisé votre site pour éviter un enterrement de vie de garçon
          que je ne pouvais pas supporter. Mon chat était ``malade`` et j`ai dû
          rester à la maison pour m`en occuper. Merci de m`avoir sauvé la vie !
        </p>
      </div>
      <div className="reviewDiv">
        <img className="reviewImage" src="..\public\assets\review4.png" />
        <h1 className="review">Mélissa</h1>
        <p className="package-name"><strong>Package 	&quot;sans enfants &quot;</strong></p>
        <p>
          Si vous avez un alibi à trouver, n`hésitez pas à passer par eux.
          Organisés, professionnels, ils nous ont trouvés une perle rare de
          nounou pour nos vacances à Bali.
        </p>
      </div>
      <div className="reviewDiv">
        <img className="reviewImage" src="..\public\assets\review5.png" />
        <h1 className="review">Géorges</h1>
        <p className="package-name"><strong>Package 	&quot;conjoint &quot;</strong></p>
        <p>
          Bravo pour votre professionnalisme, vous avez été très forts sur les
          preuves, j`ai pu montrer à ma femme le facebook de mon ami pour la
          rassurer ainsi que nos &quot;conversations&quot;. J`ai pu passer un très bon
          moment avec Macha à Venise.
        </p>
      </div>
    </Carousel>
  );
}
