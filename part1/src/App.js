const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part}) => {
  return (
    <div>
      <p> {part.name} {part.exercises}</p>
    </div>
  )
}


const Content = ({parts}) => {

  return (
    <div>
      { parts.map(part => <Part part={part} />)}
    </div>
    
  )
}

const Total = ({parts}) => {
  const exercises = parts.reduce((exercisesNum, part) => {
    return exercisesNum + part.exercises;
  }, 0);
  return (
    <p>Number of exercises {exercises}</p>
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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
