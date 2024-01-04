import { useState } from "react"


export default function App() {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }
  
  return (
    <>
      <div>
        <p>{value}</p>
        <Button handleClick={setToValue(1000)} text='thousand' />
        <Button handleClick={setToValue(0)} text='reset' />
        <Button handleClick={setToValue(value + 1)} text='increment' />
      </div>
    </>
  )
}

function Button({handleClick, text}) {
  return <button onClick={handleClick}>{text}</button>
}