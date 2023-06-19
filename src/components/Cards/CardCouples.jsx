const CardCouples = () => {
  return (
    <div className="container">
      <div className="container_card_front">
        <img
          src="..\public\assets\coupleDispute.png"
          alt="Couple Dispute"
          className="front_picture"
        />
        <div className="front_text">
          <h2 className="text_title">PACKAGE ADULTE-AIR</h2>
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
            <h3 className="text_subtitle">MEILLEUR AMI D&apos;ENFANCE</h3>
            <p className="text_description">
              Votre meilleur ami d&apos;enfance que votre conjoint/conjointe
              ne connait pas vous contacte parce qu&apos;il veut absolument
              vous inviter pour quelques jours de retrouvailles entre amis
              d&apos;enfances. (Faux profil facebook de votre ami , photoshop
              d&apos;une photo d&apos;enfance, échanges facebook pour
              l&apos;évènement avec votre ami.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCouples;
