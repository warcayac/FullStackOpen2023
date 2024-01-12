import axios from 'axios';

import { TCountry, TCountryList, TJMap, TJMapList } from '../utils/types';
import { EHttpMethod } from '../utils/enums';


const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api';


function handleRequest<T>(method: EHttpMethod, endpoint: string, dataOrParams?: any): Promise<T> {
  return axios[method](`${BASE_URL}/${endpoint}`, dataOrParams)
    .then(response => response.data)
    .catch(error => {
      console.error(`Error in ${method.toUpperCase()} request:`, error);
      throw error;
    })
  ;
}

function fromJson(data: TJMap): TCountry {
  return {
    name: data['name']['common'],
    capital: data['capital']?.[0],
    area: data['area'],
    languages: data['languages'] ? Object.values(data['languages']) : [],
    flagUrl: data['flags']?.['png'],
    code: data['cca2'],
  }
}

export const CountryService = {
  getAll: (): Promise<TCountryList> => 
    handleRequest<TJMapList>(EHttpMethod.get, 'all')
      .then(response => response.map<TCountry>(fromJson))
    ,
  search: (country: string): Promise<TCountryList> => 
    handleRequest<TJMapList>(EHttpMethod.get, `name/${country}`)
      .then(response => response.map<TCountry>(fromJson))
    ,
  // getFlag: (url: string): 
};
