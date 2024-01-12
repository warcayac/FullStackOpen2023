import { TCountryList, TMouseButtonFunction } from "../utils/types";

interface TProps {
  data: TCountryList,
  onClick: TMouseButtonFunction,
}

export default function Lister({data, onClick}: TProps) {
  return (
    <div>
      <strong>Matches:</strong>
      <table>
        <tbody>
          { data.map((e,i) => 
            <tr key={i}>
              <td><li>{e.name}</li></td>
              <td>&ensp;</td>
              <td><button onClick={onClick} name={e.name}>show</button></td>
            </tr>) 
          }
        </tbody>
      </table>
    </div>
  )
}
