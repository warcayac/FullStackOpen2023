export default function PersonForm({newEntry, onSubmitEntry, onChangeEntry}) {
  return (
    <form onSubmit={onSubmitEntry} name="PersonForm">
      <table>
        <tbody>
          <tr>
            <th align="left">name:</th>
            <td><input type="text" value={newEntry.name} onChange={onChangeEntry} name="name" /></td>
          </tr>
          <tr>
            <th align="left">number:</th>
            <td><input type="text" value={newEntry.phone} onChange={onChangeEntry} name="phone" /></td>
          </tr>
        </tbody>
      </table>
      <p><button type="submit">add</button></p>
    </form>
  )
}
