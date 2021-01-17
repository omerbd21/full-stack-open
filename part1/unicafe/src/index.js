import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    const all = props.good+props.neutral+props.bad
    const average = (props.good + props.bad*-1) / all
    const positive = props.good / all * 100
    return (
        isNaN(average) ? <div><h1>statistics</h1>
                <p>No feedback given</p></div> :
        <div>
            <h1>statistics</h1>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </div>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good+1)}> good</button>
            <button onClick={() => setNeutral(neutral+1)}> neutral</button>
            <button onClick={() => setBad(bad+1)}> bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)