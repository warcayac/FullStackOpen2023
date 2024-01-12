import { TBookEntry, TBookEntryList } from "../types/types";


type TProps = {
  data: TBookEntryList,
  onDelete: (entry: TBookEntry) => void,
}


export default function PersonsTable({data, onDelete}: TProps) {
  return (
    <table>
      <tbody>
        {data.map((person) => 
          <tr key={person.id}>
            <td><strong>{person.name}</strong></td>
            <td>&emsp;</td>
            <td>{person.phone}</td>
            <td>&emsp;</td>
            <td><button onClick={() => onDelete(person)}>delete</button></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}