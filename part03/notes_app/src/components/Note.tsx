import { TMouseButtonFunction, TNote } from "../utils/types";

type TProps = {
  note: TNote,
  toggleImportance: TMouseButtonFunction,
}


export default function Note({note, toggleImportance}: TProps) {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li className="note">
      {note.content}&emsp;
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}