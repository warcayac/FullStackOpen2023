import { TCountry } from "../utils/types";
import Weather from "./Weather";


export default function Informer({data}: {data: TCountry}) {
  return (
    <div>
      <h1 className="country">{data.name}</h1>
      <ul>
        <li>capital: {data.capital}</li>
        <li>area: {data.area}</li>
      </ul>
      <h3>Languages</h3>
      <ul>
        {data.languages?.map((e,i) => <li key={i}>{e}</li>)}
      </ul>
      <p></p>
      <div className="imgContainer">
        <img src={data.flagUrl} alt="flag" className="imgFlag" />
      </div>
      <Weather name={data.capital!} code={data.code!} />
    </div>
  )
}