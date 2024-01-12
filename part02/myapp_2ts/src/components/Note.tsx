import { TButtonMouseEvent, TNote } from "../types/types";

type TProps = {
  note: TNote,
  toggleImportance: TButtonMouseEvent,
}


export default function Note({note, toggleImportance}: TProps) {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}&emsp;
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}