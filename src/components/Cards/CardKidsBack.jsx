import { useState, useEffect } from "react";
import axios from "axios";

const CardKidsBack = () => {
  const [weather, setWeather] = useState([]);
  
  //const api_url = import.meta.env.API_KEY;
  //const api_key = import.meta.env.API_KEY;

  const getWeather = async () => {
    const weatherCardThree = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Bali"
    );
    // console.log(weatherCardThree.data.location.name)
    return weatherCardThree.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather();
      setWeather(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="container_card_back">
        <div className="back_weather">
          <img
            src={weather?.current?.condition?.icon}
            alt="weather icon"
            className="weather_picture"
          />
          <h2 className="weather_city">{weather?.location?.name}</h2>
          <p className="weather_degrees">{weather?.current?.temp_c}°C</p>
        </div>
        <img
          src="..\public\assets\bali.png"
          alt="bali"
          className="back_picture"
        />
        <div className="container_text_back">
          <p className="text_description">
            Détendez-vous sur les plages de sable blanc de Bali et profitez de
            ses paysages tropicaux spectaculaires. Explorez les temples
            balinais, les rizières en terrasse, les marchés traditionnels, et
            la cuisine locale savoureuse. Chez nous, chaque voyage est unique
            et personnalisé selon vos préférences et vos besoins, pour que
            vous puissiez profiter de vacances parfaites à Bali.
          </p>
        </div>
        <button className="back_contact">CONTACTEZ-NOUS</button>
      </div>
    </div>
  );
};

export default CardKidsBack;
