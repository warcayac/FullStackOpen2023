import { TInputChangeEvent } from "../types/types";


type TProps = {
  nameFilter: string, 
  onChangeFilter: TInputChangeEvent,
}


export default function NameFilter({nameFilter,onChangeFilter} : TProps) {
  return (
    <p>
      filter names containing&nbsp;
      <input type="text" value={nameFilter} onChange={onChangeFilter} />
    </p>
  )
}
