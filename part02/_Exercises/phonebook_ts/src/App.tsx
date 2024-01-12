import { useEffect, useState } from "react"

import { TBookEntryList, TInputChangeEvent, TFormSubmitEvent, TBookEntry} from "./types/types";
import PersonForm from "./components/PersonForm";
import PersonsTable from "./components/PersonsTable";
import NameFilter from "./components/NameFilter";
import connService from "./services/conn_persons";


export default function App() {
  const [persons, setPersons] = useState<TBookEntryList>([]);
  const [newEntry, setNewEntry] = useState<TBookEntry>({name: '', phone:''});
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => { connService.getAll().then(setPersons) }, []);

  const onChangeEntry : TInputChangeEvent = (event) => {
    let entry = {...newEntry};
    const key = event.target.name as keyof TBookEntry;
    entry[key] = event.target.value;
    setNewEntry(entry);
  }

  const onSubmitEntry : TFormSubmitEvent = (event) => {
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
          .update(found.id!, {...found, phone: newEntry.phone})
          .then(response => {
            setPersons(persons.map(p => p.id !== response.id ? p : response))
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
      })
    ;
  }

  const data = nameFilter.length == 0
    ? persons
    : persons.filter((p) => p.name.toLowerCase().includes(nameFilter))
  ;

  const onChangeFilter : TInputChangeEvent = (event) => setNameFilter(event.target.value.toLowerCase());

  const handleDelete = (entry: TBookEntry) => {
    if (!window.confirm(`Delete '${entry.name}'?`)) return;

    connService
      .remove(entry.id!)
      .then(response => {
        setPersons(persons.filter(p => p.id !== response.id));
      })
    ;
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
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
