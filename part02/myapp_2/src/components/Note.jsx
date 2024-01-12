export function Note({note, toggleImportance}) {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li className="note">
      {note.content}&emsp;
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}