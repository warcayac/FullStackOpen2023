import axios from 'axios'
import { TNote, TNoteList } from '../types/types'


const baseUrl = 'http://localhost:3001/notes'

const getAll = () => axios.get<TNoteList>(baseUrl).then(r => r.data)

const create = (newObject: TNote) => axios.post<TNote>(baseUrl, newObject).then(r => r.data);

const update = (id: string, newObject: TNote) => axios
  .put<TNote>(`${baseUrl}/${id}`, newObject)
  .then(r => r.data)
;

// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }

export default { getAll, create, update }
