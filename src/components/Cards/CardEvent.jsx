const CardEvent = () => {
  return (
    <div className="container">
      <div className="container_card_front" data-aos="flip-left">
        <img
          src="..\public\assets\familly.png"
          alt="Famille heureuse"
          className="front_picture"
        />
        <div className="front_text">
          <h2 className="text_title">PACKAGE EVENEMENTS</h2>
          <div className="text_container">
            <h3 className="text_subtitle">SEMINAIRE</h3>
            <p className="text_description">
              Vous êtes contacté par mail par votre employeur pour une urgence
              au travail, vous devez absolument remplacer votre collègue pour
              la présentation du séminaire. (Mail de confirmation, billets de
              transports...)
            </p>
          </div>
          <p className="text_or">OU</p>
          <div className="text_container">
            <h3 className="text_subtitle">MAURICE LE CHAT</h3>
            <p className="text_description">
              Votre chat Maurice va très mal, il ne veut plus
              s&apos;alimenter. Votre voisine vous en informe par sms et vous
              devez de toute urgence l&apos;emmener chez le vétérinaire,
              celui-ci vous demandera de rester quelques jours à ses côté pour
              le surveiller. (Ordonnance vétérinaire, sms de la voisine)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
