import "../styles/_contact.scss";

export const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-informations-section">
          <input
            className="form-input-firstname"
            type="text"
            placeholder="Prénom"
          />
          <input
            className="form-input-lastname"
            type="text"
            placeholder="Nom"
          />
        </div>
        <input className="form-input-email" type="email" placeholder="Adresse mail" />

        <div className="form-package-section">
          <p>Sélectionner votre package:</p>
          <select className="form-select">
            <option value="option-1">Package sans enfants</option>
            <option value="option-2">Package adulte-air</option>
            <option value="option-3">Package évènements</option>
            <option value="option-4">Package employeur</option>
          </select>
        </div>

        <textarea
          className="form-text-area"
          name="form-text"
          rows={8}
          cols={65}
          placeholder="Votre message"
        />

        <label className="form-label-checkbox">
          <input className="form-input-checkbox" type="checkbox" />
          Réponse dans les plus brefs délais par un de nos conseillers.
        </label>

        <div className="form-confirmation-entry">
          <button className="form-input-submit" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};
