import { useState } from "react"


export default function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const size = anecdotes.length
  const randomNumber = () => Math.floor(Math.random() * size)
  const [selected, setSelected] = useState(randomNumber())
  const [votes, setVotes] = useState(Array(size).fill(0))
  const [mostVoted, setMostVoted] = useState(0)
  
  const nextAnecdote = () => {
    let idx
    do {
      idx = randomNumber()
    } while (selected == idx)
    return idx
  }
  
  const alterArray = (arr, idx) => {
    const newArr = arr.slice()
    newArr[idx]++
    setMostVoted(newArr.indexOf(Math.max(...newArr)))
    return newArr
  }

  return (
    <>
      <div>
        <Anecdote title='Anecdote of the day' text={anecdotes[selected]} number={votes[selected]} />
        <button onClick={() => setVotes(alterArray(votes, selected))}>Vote</button>
        <button onClick={() => setSelected(nextAnecdote())}>Next anecdote</button>
        <hr />
        <Anecdote title='Anecdote with most votes' text={anecdotes[mostVoted]} number={votes[mostVoted]} />
      </div>
    </>
  )
}

function Anecdote({title, text, number}) {
  return (
    <>
      <h2>{title}</h2>
      <em>{'"' + text + '"'}</em>
      <p>has {number} votes</p>
    </>
  )
}