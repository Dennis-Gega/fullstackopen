const Header = ({ course }) => {
    return <h1>{course}</h1>
}

const Part = ({ title, exerciseNum }) => {
    return <p>{title} {exerciseNum}</p>
}

const Content = ({ parts }) => {
    return (
        <>
            <Part title={parts[0].name} exerciseNum={parts[0].exercises} />
            <Part title={parts[1].name} exerciseNum={parts[1].exercises} />
            <Part title={parts[2].name} exerciseNum={parts[2].exercises} />
        </>
    )
}

const Total = ({ parts }) => {
    return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }
  
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}
  
export default App