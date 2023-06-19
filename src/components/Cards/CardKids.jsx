const CardKids = () => {
    return (
    <div className="container">
      <div className="container_card_front">
        <img
          src="..\public\assets\petiteFille.png"
          alt="Petite fille"
          className="front_picture girl_picture"
        />
        <div className="front_text">
          <h2 className="text_title">PACKAGE SANS ENFANT</h2>
          <div className="text_container">
            <h3 className="text_subtitle">SOS NOUNOU</h3>
            <p className="text_description">
              Nous avons recruté une équipe de nounous ninja pour prendre soin
              de vos enfants, prêtes à répondre à tous vos caprices et à
              sauver le monde en même temps 
              (qui a dit que les super-héros n&apos;existent pas ?). 
              Profitez de vos vacances sans culpabilité !
            </p>
          </div>
          <p className="text_or">OU</p>
          <div className="text_container">
            <h3 className="text_subtitle">APPEL UN AMI</h3>
            <p className="text_description">
              Vous cherchez une excuse pour vous débarrassez de vos enfants
              quelques jours et pouvoir les confier à des personnes de
              confiance ? 
              Vous avez gagné un concours au loto de votre ville
              pour un voyage exotique sur une île paradisiaque, vous ne pouvez
              pas louper cette expérience unique. 
              (Mail confirmation du gain, billets transports)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKids;
