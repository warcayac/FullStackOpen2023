import axios from "axios"
import { useEffect, useState } from "react"
import { TChangeInputEvent, TFormSubmitEvent, TJMap } from "./types/types"


export default function App() {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState<TJMap>({})
  const [currency, setCurrency] = useState<string|null>(null)
  /* --------------------------------------------------------------------------------------------------- */
  useEffect(
    () => {
      console.log('effect run, currency is now', currency)

      // skip if currency is not defined
      if (currency) {
        console.log('fetching exchange rates...')
        axios
          .get(`https://open.er-api.com/v6/latest/${currency}`)
          .then(response => setRates(response.data.rates))
      }
    }, 
    [currency],
  )
  /* --------------------------------------------------------------------------------------------------- */
  function handleChange(event: TChangeInputEvent) {
    setValue(event.target.value);
  }
  /* --------------------------------------------------------------------------------------------------- */
  function onSearch(event: TFormSubmitEvent) {
    event.preventDefault();
    setCurrency(value);    
  }
  /* --------------------------------------------------------------------------------------------------- */
  return (
    <>
      <div>
        <form onSubmit={onSearch}>
          currency: <input value={value} onChange={handleChange} />
          <button type="submit">exchange rate</button>
        </form>
        <pre>
          {JSON.stringify(rates, null, 2)}
        </pre>
      </div>
    </>
  )
  /* --------------------------------------------------------------------------------------------------- */
}
