import { useState, useEffect } from "react";
import axios from "axios";

const CardCouplesBack = () => {
  const [weather, setWeather] = useState([]);

  //const api_url = import.meta.env.API_KEY;
  //const api_key = import.meta.env.API_KEY;

  const getWeather = async () => {
    const weatherCardOne = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Venise"
    );
    // console.log(weatherCardOne.data.location.name)
    return weatherCardOne.data;
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
          src="..\public\assets\venise.png"
          alt="Venise"
          className="back_picture"
        />
        <div className="container_text_back">
          <p className="text_description">
            Plongez dans la romance et la culture de Venise avec nos vacances
            sur mesure. Découvrez les canaux pittoresques, les rues pavées,
            les églises historiques, et la gastronomie italienne de renommée
            mondiale. Nous créons un voyage personnalisé pour vous, en
            incluant les activités que vous préférez, pour que vous profitiez
            au maximum de cette ville magique.
          </p>
        </div>
        <button className="back_contact">CONTACTEZ-NOUS</button>
      </div>
    </div>
  );
};

export default CardCouplesBack;
