import { useEffect, useState } from "react";

import { CountryService } from "./services/CountryService"
import { TChangeInputEvent, TCountryList, TMouseButtonEvent, TResult } from "./utils/types";
import Searcher from "./components/Searcher";
import Displayer from "./components/Displayer";
import { FetchingProvider, useFetchingContext } from "./components/FetchingContext";


function OriginalApp() {
  const [countries, setCountries] = useState<TCountryList|undefined>(undefined);
  const [countryName, setCountryName] = useState('');
  const [result, setResult] = useState<TResult>('');
  const isFetching = useFetchingContext().isFetching;
  
  /* --------------------------------------------------------------------------------------------------- */
  useEffect(
    () => {
      if (countries === undefined) {
        console.log('fetching countries...');
        CountryService.getAll().then(setCountries);
      }
    },
    [],
  );
  /* --------------------------------------------------------------------------------------------------- */
  function filterCountries(pattern: string, matchWhole: boolean = false) {
    const list = pattern.trim().length === 0 
      ? undefined
      : matchWhole
        ? [countries!.find(country => country.name === pattern)!]
        : countries!.filter(country => country.name.toLowerCase().includes(pattern))
    ;
    const response: TResult = list === undefined
      ? ''
      : list.length > 10
        ? 'Too many matches, specify another filter'
        : list.length > 1
          ? list
          : list.length === 1
            ? list[0]
            : 'No matches, specify another filter'
    ;
    setResult(response);
    if (!Array.isArray(response) && typeof response !== 'string' && !matchWhole) {
      setCountryName(response.name);
    }
  }
  /* --------------------------------------------------------------------------------------------------- */
  function onSelectCountry(name: string, matchWhole: boolean = false) {
    setCountryName(name);
    filterCountries(name, matchWhole);
  }
  /* --------------------------------------------------------------------------------------------------- */
  function handleNameChange(event: TChangeInputEvent) {
    onSelectCountry(event.target.value.toLowerCase())
  }
  /* --------------------------------------------------------------------------------------------------- */
  function handleShowChange(event: TMouseButtonEvent) {
    onSelectCountry(event.currentTarget.name, true)
  }
  /* --------------------------------------------------------------------------------------------------- */
  return (
    <>
      <Searcher 
        disabled={countries === undefined || isFetching} 
        value={countryName} 
        onChange={handleNameChange} 
        onClick={() => onSelectCountry('')}
      />
      <Displayer data={result} onClick={handleShowChange} />
    </>
  )
  /* --------------------------------------------------------------------------------------------------- */
}

export default function App() {
  return (
    <FetchingProvider>
      <OriginalApp />
    </FetchingProvider>
  )
}