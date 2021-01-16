import ReactDOM from 'react-dom'
import React from "react";

const Header = (props) => {
    return (
        <div>
            <h1>{props.sentence}</h1>
        </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.total}</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header sentence={course} />
            <Part part={parts[0].name} exercises={parts[0].exercises} />
            <Part part={parts[1].name} exercises={parts[1].exercises} />
            <Part part={parts[2].name} exercises={parts[2].exercises} />
            <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))