import { TBookEntry, TBookEntryList } from "../types/types";


type TProps = {
  data: TBookEntryList,
  onDelete: (entry: TBookEntry) => void,
}

export default function PersonsTable({data, onDelete}: TProps) {
  return (
    <>
      <table>
        <tbody>
          { data.map((person) => <PersonRow  key={person.id} person={person} onDelete={onDelete} />) }
        </tbody>
      </table>
    </>
  )
}

type TPersonProps = {
  person: TBookEntry,
  onDelete: (entry: TBookEntry) => void,
}

function PersonRow({person, onDelete}: TPersonProps) {
  return (
    <>
      <tr>
        <td><strong>{person.name}</strong></td>
        <td>&emsp;</td>
        <td>{person.number}</td>
        <td>&emsp;</td>
        <td><button onClick={() => onDelete(person)}>delete</button></td>
      </tr>    
    </>
  )  
}