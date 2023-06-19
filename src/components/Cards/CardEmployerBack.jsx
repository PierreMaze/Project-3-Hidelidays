import { useState, useEffect } from "react";
import axios from "axios";

const CardEmployerBack = () => {
  const [weather, setWeather] = useState([]);

  //const api_url = import.meta.env.API_KEY;
  //const api_key = import.meta.env.API_KEY;

  const getWeather = async () => {
    const weatherCardTwo = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Santorini"
    );
    // console.log(weatherCardTwo.data.location.name)
    return weatherCardTwo.data;
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
          src="..\public\assets\santorin.png"
          alt="Santorin"
          className="back_picture"
        />
        <div className="container_text_back">
          <p className="text_description">
            Bienvenue à Santorin, une destination de rêve qui vous invite à
            vivre une expérience unique et inoubliable. Imaginez-vous sur une
            île volcanique, entouré de plages de sable noir, de vues
            panoramiques spectaculaires et de bâtiments blanchis à la chaux.
            Nos vacances sur mesure à Santorin sont conçues pour répondre à
            tous vos besoins et désirs.
          </p>
        </div>
        <button className="back_contact">CONTACTEZ-NOUS</button>
      </div>
    </div>
  );
};

export default CardEmployerBack;
