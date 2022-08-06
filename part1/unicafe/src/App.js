import { useState } from 'react'


const Button = (props) => {
  return (
    <div><button onClick={props.handleClick}>
    {props.text}
  </button></div>
  )
  }

  const StatisticLine = (props) => {
    return (
      <p>{props.text} {props.value}</p>
    )
  }

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100
  return (
    all ?
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div> : <p>No feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => {
    setGood(good + 1)
  }
  const setNeutralValue = () => {
    setNeutral(neutral + 1)
  }
  const setBadValue = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"good"} handleClick={setGoodValue} />
      <Button text={"natural"} handleClick={setNeutralValue} />
      <Button text={"bad"} handleClick={setBadValue} />
      <h1>Statistics</h1>
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  )
}

export default App