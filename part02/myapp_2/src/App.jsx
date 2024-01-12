import { useEffect, useState } from "react";

import { Note } from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";


export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  /*
  Si observamos las salidas in las secciones CONSOLE y NETWORK de la herramienta de Inspección del navegador,
  vemos que la función useEffect es ejecutada dos veces, y por ende la petición GET a /notes es también 
  dos veces, esto ocurre debido al uso del componente "React.StrictMode" en el archivo "main.jsx",
  el cual es empleado para própositos de verificación por errores, lo cual hace que la aplicación se
  renderice una vez más de normal, esta verificación se produce sólo en la etapa de desarrollo.
  Véase:
  https://stackoverflow.com/a/72370066/955594
  https://react.dev/reference/react/StrictMode
  */
  
  useEffect(() => {
    noteService
      .getAll()
      .then(setNotes)
    }, 
    [],
  );
  
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important)
  ;

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
    ;
  }

  const handleNoteChange = (event) => setNewNote(event.target.value)

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => setNotes(notes.map(n => n.id !== id ? n : returnedNote)))
      .catch(error => {
        setErrorMessage(`Note '${note.content}' was already deleted from server`);
        setTimeout(
          () => { setErrorMessage(null) }, 
          5000,
        );
        setNotes(notes.filter(n => n.id !== id))
      })
    ;
  }

  return (
    <>
      <div>
        <h1>Notes</h1>
        <Notification message={errorMessage} />
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map((note) => 
            <Note 
              note={note} 
              key={note.id} 
              toggleImportance={() => toggleImportanceOf(note.id)} 
            /> 
          )}
        </ul>
        <form onSubmit={addNote}>
          <input type="text" value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
        <Footer />
      </div>
    </>
  )
}
