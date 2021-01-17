import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = (props) => {
    return (
            <p>{props.name} {props.stat}</p>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good+neutral+bad
    const average = (good + bad*-1) / all
    const positive = good / all * 100
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good+1)}> good</button>
            <button onClick={() => setNeutral(neutral+1)}> neutral</button>
            <button onClick={() => setBad(bad+1)}> bad</button>
            <h1>statistics</h1>
            <Statistic name={"good"} stat={good} />
            <Statistic name={"bad"} stat={bad} />
            <Statistic name={"neutral"} stat={neutral} />
            <Statistic name={"all"} stat={all} />
            <Statistic name={"average"} stat={isNaN(average) ? 0:average} />
            <Statistic name={"positive"} stat={isNaN(positive) ? 0:positive} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)