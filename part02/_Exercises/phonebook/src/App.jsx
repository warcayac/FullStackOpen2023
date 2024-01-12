import { useEffect, useState } from "react"

import PersonForm from "./components/PersonForm";
import PersonsTable from "./components/PersonsTable";
import NameFilter from "./components/NameFilter";
import connService from "./services/conn_persons";
import Notification from "./components/Notification";


export default function App() {
  const [persons, setPersons] = useState([]);
  const [newEntry, setNewEntry] = useState({name: '', phone:''});
  const [nameFilter, setNameFilter] = useState('');
  const [notification, setNotification] = useState(null)
  const [color, setColor] = useState(null)
  /* --------------------------------------------------------------------------------------------------- */
  useEffect(() => { connService.getAll().then(setPersons) }, []);
  /* --------------------------------------------------------------------------------------------------- */
  const onChangeEntry = (event) => {
    let entry = {...newEntry};
    entry[event.target.name] = event.target.value;
    setNewEntry(entry);
  }
  /* --------------------------------------------------------------------------------------------------- */
  const onSubmitEntry = (event) => {
    event.preventDefault();

    if (newEntry.name.trim().length === 0 || newEntry.phone.trim().length === 0) {
      alert('Empty values are not permitted')
      return;
    }

    const found = persons.find(e => e.name === newEntry.name)

    if (found !== undefined) {
      const message = `'${found.name}' is already added to phonebook, replace the old number with a new one?`
      if (window.confirm(message)) {
        connService
          .update(found.id, {...found, phone: newEntry.phone})
          .then(response => {
            setPersons(persons.map(p => p.id !== response.id ? p : response))
            setNewEntry({name: '', phone:''});
            showNotification(`Updated phone number to ${response.phone} for ${response.name}`)
          })
          .catch(error => {
            showNotification(
              `Information of ${found.name} has already been removed from server`, 
              true,
            )
            setPersons(persons.filter(n => n.id !== found.id))
          })
        ;
      }
      return;
    }

    connService
      .create(newEntry)
      .then(response => {
        setPersons(persons.concat(response));
        setNewEntry({name: '', phone:''});
        showNotification(`Added '${response.name}'`)
      })
    ;
  }
  /* --------------------------------------------------------------------------------------------------- */
  const data = nameFilter.length == 0
    ? persons
    : persons.filter((p) => p.name.toLowerCase().includes(nameFilter))
  ;
  /* --------------------------------------------------------------------------------------------------- */
  const onChangeFilter = (event) => setNameFilter(event.target.value.toLowerCase());
  /* --------------------------------------------------------------------------------------------------- */
  const handleDelete = (entry) => {
    if (!window.confirm(`Delete '${entry.name}'?`)) return;

    connService
      .remove(entry.id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== response.id));
      })
    ;
  }
  /* --------------------------------------------------------------------------------------------------- */
  function showNotification(message, isError=false) {
    setColor(isError ? {color:'red'} : {color:'#198f01'})
    setNotification(message);
    setTimeout(
      () => setNotification(null), 
      3000,
    );
  }
  /* --------------------------------------------------------------------------------------------------- */
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Notification message={notification} style={color} />
        <PersonForm newEntry={newEntry} onSubmitEntry={onSubmitEntry} onChangeEntry={onChangeEntry}/>
        <hr />
        <h3>Numbers</h3>
        <div>
          <NameFilter nameFilter={nameFilter} onChangeFilter={onChangeFilter} />
          <PersonsTable data={data} onDelete={handleDelete} />
        </div>
      </div>
    </>
  )
}
