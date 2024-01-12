import axios from 'axios';

import { TJMap, TJMapList, TWeather } from '../utils/types';
import { EHttpMethod } from '../utils/enums';


const BASE_API_URL = "https://api.openweathermap.org";
// ! IMPORTANTE nuestra variable debe empezar con VITE_, caso contrario no será reconocido
const API_KEY = import.meta.env.VITE_SECRET_KEY;
const BASE_WEATHER_ICON_URL = "https://openweathermap.org/img/wn";
const WEATHER_ICON_SUFFIX = "@2x.png";


function handleRequest<T>(method: EHttpMethod, endpoint: string, dataOrParams?: any): Promise<T> {
  return axios[method](`${BASE_API_URL}/${endpoint}`, dataOrParams)
    .then(response => response.data)
    .catch(error => {
      console.error(`Error in ${method.toUpperCase()} request:`, error);
      throw error;
    })
  ;
}

// function kelvin2Celcius(value: number) {
//   // a pesar que se especificó sistema métrico para que entregue la temperatura en Celcius,
//   // la API sigue enviando el dato en grados Kelvin, por lo que debe convertirse
//   return value - 273.15;
// }

function fromJson(data: TJMap): TWeather {
  return {
    temperature: data['main']['temp'],  // °C
    wind: data['wind']['speed'],        // m/s
    iconUrl: `${BASE_WEATHER_ICON_URL}/${data['weather'][0]['icon']}${WEATHER_ICON_SUFFIX}`,
  }
}

export const WeatherService = {
  find: (place: string): Promise<TWeather> => {
    return handleRequest<TJMap>(
      EHttpMethod.get, 
      '/data/2.5/find',
      {
        params: {
          'q': place,
          'units': 'metric',
          'appid': API_KEY,
        },
      }
    )
    .then(response => {
      const list: TJMapList = response['list'];
      return list.map<TWeather>(fromJson)[0]
    })
  },
};
