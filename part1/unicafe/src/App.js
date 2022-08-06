import { useState } from 'react'


const Button = (props) => {
  return (
    <div><button onClick={props.handleClick}>
    {props.text}
  </button></div>
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

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"good"} handleClick={setGoodValue} />
      <Button text={"natural"} handleClick={setNeutralValue} />
      <Button text={"bad"} handleClick={setBadValue} />
      <p>Good {good}</p>
      <p>Netural {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average || 0}</p>
      <p>positive {positive || 0}</p>
    </div>
  )
}

export default App