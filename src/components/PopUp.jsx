import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function PopUp({ popup, popupText, time }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    let timeoutId;

    if (showPopup) {
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, time);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showPopup, time]);

  return (
    <div className="popup">
      <button className="popup-button" type="button" onClick={handleClick}>
        {popup}
      </button>
      {showPopup && (
        <div className="popup-content">
          <p>{popupText}</p>
        </div>
      )}
    </div>
  );
}

PopUp.propTypes = {
  popup: PropTypes.string.isRequired,
  popupText: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};
