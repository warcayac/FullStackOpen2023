import { TMouseButtonFunction, TResult } from "../utils/types"
import Informer from "./Informer"
import Lister from "./Lister"


interface TProps {
  data: TResult,
  onClick: TMouseButtonFunction,
}

export default function Displayer({data, onClick}: TProps) {
  return (
    <div>
      <p></p>
      {
        typeof data === 'string'
          ? data
          : Array.isArray(data)
            ? <Lister data={data} onClick={onClick} />
            : <Informer data={data} />
      }
    </div>
  )
}
