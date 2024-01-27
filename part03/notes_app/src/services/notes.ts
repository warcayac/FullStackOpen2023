import axios from 'axios'
import { TNote, TNoteList } from '../utils/types'


const serverHost = '';  // when this app is contained by server
// const serverHost = 'http://localhost:3001';  // when server and app are in the same local network
// const serverHost = 'https://fso2023-notes-server.onrender.com';  // when server is a remote host

const baseUrl = `${serverHost}/api/notes`;

const getAll = () => {
  // console.log(`Calling: ${baseUrl}`);
  return axios
    .get<TNoteList>(baseUrl)
    .then(r => {
      // console.log(`Data received: ${JSON.stringify(r)}`);
      return r.data;
    })
}

const create = (newObject: TNote) => axios.post<TNote>(baseUrl, newObject).then(r => r.data);

const update = (id: string, newObject: TNote) => axios
  .put<TNote>(`${baseUrl}/${id}`, newObject)
  .then(r => r.data)
;

export default { getAll, create, update }
