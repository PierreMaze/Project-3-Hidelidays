import { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";

export default function Bot() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 20000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="chatBotDiv">
          <div className="chatButtonDiv">
            <button className="botButton" onClick={handleClose}>x</button>
          </div>
          <ChatBot
            headerTitle={"Eric"}
            botAvatar={"../public/assets/review2.png"}
            steps={[
              {
                id: "1",
                message: "Bonjour! As-tu besoin d'un break ?",
                trigger: "2",
              },
              {
                id: "2",
                user: true,
                trigger: "3",
              },
              {
                id: "3",
                message: "Je peux t'aider à organiser des vacances incroyables",
                trigger: "4",
              },
              {
                id: "4",
                user: true,
                trigger: "5",
              },
              {
                id: "5",
                message: "Ne t'inquiétes pas, nous nous occupons de tout...",
                end: true,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}

