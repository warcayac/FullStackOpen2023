import { useState } from "react";


export default function App() {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increasedByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreasedByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <>
      <Display counter={counter}></Display>
      <Button onClick={decreasedByOne} text='- 1'></Button> &emsp;
      <Button onClick={setZero} text='zero'></Button> &emsp;
      <Button onClick={increasedByOne} text='+ 1'></Button>
    </>
  )
}

// function Display({counter}) { return <div>{counter}</div>}
const Display = ({counter}) => <div>{counter}</div>

// function Button({onClick, text}) { return <button onClick={onClick}>{text}</button> }
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

