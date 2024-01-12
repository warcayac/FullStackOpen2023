export default function PersonsTable({data, onDelete}) {
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