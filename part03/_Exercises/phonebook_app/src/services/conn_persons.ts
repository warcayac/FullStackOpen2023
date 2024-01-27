import axios from 'axios'

import { TBookEntry, TBookEntryList, TJMap } from '../types/types'


const serverHost = '';  // when this app is contained by server
// const serverHost = 'http://localhost:3001';  // when server and app are in the same local network
// const serverHost = 'https://fso2023-phonebook-server.onrender.com';  // when server is a remote host

const baseUrl = `${serverHost}/api/persons`;

const getAll = () => axios
  .get<TJMap>(baseUrl)
  .then(r => r.data['data'] as TBookEntryList)
;

const create = (newObject: TBookEntry) => axios
  .post<TJMap>(baseUrl, newObject)
  .then(r => r.data['data'] as TBookEntry)
;

const update = (id: string, newObject: TBookEntry) => axios
  .put<TJMap>(`${baseUrl}/${id}`, newObject)
  .then(r => r.data['data'] as TBookEntry)
;

const remove = (id: string) => axios
  .delete<TJMap>(`${baseUrl}/${id}`)
  .then(r => r.data)
;

export default { getAll, create, update, remove }
