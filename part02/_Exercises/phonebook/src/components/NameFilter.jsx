export default function NameFilter({nameFilter, onChangeFilter}) {
  return (
    <p>
      filter names containing&nbsp;
      <input type="text" value={nameFilter} onChange={onChangeFilter} />
    </p>
  )
}