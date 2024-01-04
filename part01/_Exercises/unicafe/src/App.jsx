import { useState } from "react"


export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button event={() => setGood(good + 1)} caption='good' />
        <Button event={() => setNeutral(neutral + 1)} caption='neutral'/>
        <Button event={() => setBad(bad + 1)} caption='bad' />
        <hr />
        <h2>Statistics</h2>
        <Statistics arr={[good, neutral, bad]}/>
      </div>
    </>
  )
}

function Button({event, caption}) {
  return <button onClick={event}>{caption}</button>
}

function Statistics({arr}) {
  const total = arr.reduce((_total, value) => _total + value)
  
  if (total == 0) return <p>No feedback given</p>

  const average = (arr[0] - arr[2]) / total
  const positive = 100 * (arr[0] / total)

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' value={arr[0]} />
          <StatisticLine text='neutral' value={arr[1]} />
          <StatisticLine text='bad' value={arr[2]} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive + ' %'} />
        </tbody>
      </table>
    </>
  )
}

function StatisticLine({text, value}) {
  return <tr><th align="left">{text}</th><td>&nbsp;:&nbsp;</td><td>{value}</td></tr>
}