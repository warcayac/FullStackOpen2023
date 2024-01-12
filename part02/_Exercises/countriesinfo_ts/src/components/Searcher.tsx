import { TChangeInputFunction, TMouseButtonFunction} from "../utils/types"

interface TProps {
  disabled: boolean,
  value: string,
  onChange: TChangeInputFunction,
  onClick: TMouseButtonFunction,
}

export default function Searcher({disabled, value, onChange, onClick}: TProps) {
  return (
    <div>
      <strong>Type a country name:</strong><br />
      <input 
        type="text" 
        disabled={disabled} 
        value={value} 
        onChange={onChange} 
        className="search"
      />
      <button onClick={onClick} disabled={disabled}>clear</button>
    </div>
  )
}