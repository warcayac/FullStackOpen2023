import axios from 'axios'
import { TBookEntry, TBookEntryList } from '../types/types'


const baseUrl = 'http://localhost:3001/persons';

const getAll = () => axios
  .get<TBookEntryList>(baseUrl)
  .then(r => r.data)
;

const create = (newObject: TBookEntry) => axios
  .post<TBookEntry>(baseUrl, newObject)
  .then(r => r.data)
;

const update = (id: string, newObject: TBookEntry) => axios
  .put<TBookEntry>(`${baseUrl}/${id}`, newObject)
  .then(r => r.data)
;

const remove = (id: string) => axios
  .delete<TBookEntry>(`${baseUrl}/${id}`)
  .then(r => r.data)
;

export default { getAll, create, update, remove }
