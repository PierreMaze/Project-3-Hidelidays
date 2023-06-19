const CardEmployer = () => {
  return (
    <div className="container">
      <div className="container_card_front">
        <img
          src="..\public\assets\filleTransat.png"
          alt="Fille transat"
          className="front_picture"
        />
        <div className="front_text">
          <h2 className="text_title">PACKAGE EMPLOYEUR</h2>
          <div className="text_container">
            <h3 className="text_subtitle">AU REVOIR MAMIE</h3>
            <p className="text_description">
              Votre chère et tendre grand-mère Huguette vient de rendre
              l&apos;âme, vous devez vous rendre d&apos;urgence dans le pas de
              calais pour débarrasser son appartement. (Faux acte de décès,
              mail du notaire.)
            </p>
          </div>
          <p className="text_or">OU</p>
          <div className="text_container">
            <h3 className="text_subtitle">MISSION NASA</h3>
            <p className="text_description">
              Mission secrète pour la NASA - Vous avez été sélectionné par la
              NASA pour une mission de dernière minute et vous ne pouvez pas
              en parler car cela impliquerait une violation de la sécurité
              nationale. Vous devez vous rendre dans une base secrète de la
              NASA pour vous préparer à votre mission spatiale. (Mail de la
              NASA confirmant le besoin de votre présence).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEmployer;
