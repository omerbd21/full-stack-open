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
        { parts.map(part => <Part part={part} key={part.id} />)}
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


const Course = ({course}) => {
    return (<div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>)
  }

  export default Course