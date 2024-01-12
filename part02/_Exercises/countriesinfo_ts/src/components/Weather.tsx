import { useEffect, useState } from "react";

import { TWeather } from "../utils/types";
import { WeatherService } from "../services/WeatherService";
import { useFetchingContext } from "./FetchingContext";


interface TProps {
  name: string,
  code: string,
}

export default function Weather({name, code}: TProps) {
  const [weather, setWeather] = useState<TWeather|undefined>(undefined);
  const setIsFetching = useFetchingContext().setIsFetching;
  /* --------------------------------------------------------------------------------------------------- */
  useEffect(
    () => {
      setIsFetching(true);
      console.log(`Fetching weather for ${name},${code}...`);
      WeatherService
        .find(`${name},${code}`)
        .then(setWeather)
        .finally(() => setIsFetching(false))
      ;
    },
    []
  );
  /* --------------------------------------------------------------------------------------------------- */
  function Details() {
    return (
      <div>
        <p>temperature {weather!.temperature} Celsius</p>
        <img src={weather!.iconUrl} alt="weather_icon" />
        <p>wind {weather!.wind} m/s</p>
      </div>
    )
  }
  /* --------------------------------------------------------------------------------------------------- */
  return (
    <div>
      <h2>Weather in {name}</h2>
      {
        weather !== undefined ? <Details /> : null
      }
    </div>
  )
}