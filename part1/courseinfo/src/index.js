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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header sentence={course} />
            <Part part={part1.name} exercises={part1.exercises} />
            <Part part={part2.name} exercises={part2.exercises} />
            <Part part={part3.name} exercises={part3.exercises} />
            <Total total={part1.exercises+part2.exercises+part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))