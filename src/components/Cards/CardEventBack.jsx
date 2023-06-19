import { useState, useEffect } from "react";
import axios from "axios";

const CardEventBack = () => {
  const [weather, setWeather] = useState([]);

  //const api_url = import.meta.env.API_KEY;
  //const api_key = import.meta.env.API_KEY;

  const getWeather = async () => {
    const weatherCardThree = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Lisbonne"
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
      <div className="container_card_back" data-aos="flip-rigth">
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
          src="..\public\assets\lisbone.png"
          alt="lisbonne"
          className="back_picture"
        />
        <div className="container_text_back">
          <p className="text_description">
            Découvrez la beauté envoûtante de Lisbonne avec nos vacances sur
            mesure. Profitez des vues imprenables sur l&apos;océan, des
            délices culinaires locaux, des quartiers historiques et des
            monuments emblématiques de la ville. Nous personnalisons votre
            voyage pour que vous viviez une expérience unique et mémorable.
          </p>
        </div>
        <button className="back_contact">CONTACTEZ-NOUS</button>
      </div>
    </div>
  );
};

export default CardEventBack;
