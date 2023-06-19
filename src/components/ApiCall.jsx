import { useState, useEffect } from "react";
import axios from "axios";

const ApiCall = () => {
  //const api_url = import.meta.env.API_KEY;
  //const api_key = import.meta.env.API_KEY;

  const [weather, setWeather] = useState([]);

  const getWeather = async () => {
    const responseA = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Athens"
    );
    const responseB = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Cairo"
    );
    const responseC = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Brazil"
    );
    const responseD = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=Perth"
    );
    console.log(responseA.data, responseB.data, responseC.data, responseD.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather();
      setWeather(data);
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default ApiCall;
