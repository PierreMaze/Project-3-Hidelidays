import { useState, useEffect } from "react";
import axios from "axios";

const CardCouples = () => {
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
      <div className="container_card_front">
        <img
          src="..\public\assets\coupleDispute.png"
          alt="Couple Dispute"
          className="front_picture"
        />
        <div className="front_text">
          <h2>PACKAGE ADULTE-AIR</h2>
          <h3>SEMINAIRE</h3>
          <p>
            Vous êtes contacté par mail par votre employeur pour une urgence au
            travail, vous devez absolument remplacer votre collègue pour la
            présentation du séminaire. (Mail de confirmation, billets de
            transports...)
          </p>
          <p className="text_or">OU</p>
          <h3>MEILLEUR AMI D&apos;ENFANCE</h3>
          <p>
            Votre meilleur ami d&apos;enfance que votre conjoint/conjointe ne
            connait pas vous contacte parce qu&apos;il veut absolument vous
            inviter pour quelques jours de retrouvailles entre amis
            d&apos;enfances. (Faux profil facebook de votre ami , photoshop
            d&apos;une photo d&apos;enfance, échanges facebook pour
            l&apos;évènement avec votre ami.)
          </p>
        </div>
      </div>
      <div className="container_card_back">
        <div className="weather">
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
        <p>
          Plongez dans la romance et la culture de Venise avec nos vacances sur
          mesure. Découvrez les canaux pittoresques, les rues pavées, les
          églises historiques, et la gastronomie italienne de renommée mondiale.
          Nous créons un voyage personnalisé pour vous, en incluant les
          activités que vous préférez, pour que vous profitiez au maximum de
          cette ville magique.
        </p>
        <div className="button-box">
          <button>CONTACTEZ-NOUS</button>
        </div>
      </div>
    </div>
  );
};

export default CardCouples;
