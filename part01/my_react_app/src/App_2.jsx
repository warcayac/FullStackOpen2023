import { useState } from "react";


export default function App() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
    setTotal(updateLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    setTotal(left + updateRight)
  }
  
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'></Button>
      <Button handleClick={handleRightClick} text='right'></Button>
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  )
}

function History({allClicks}) {
  return allClicks.length == 0
    ? <div>the app is used by pressing the buttons</div>
    : <div>button press history: {allClicks.join(' ')}</div>
  ;
}

function Button({handleClick, text}) {
  return <button onClick={handleClick}>{text}</button>
}