const Header = ({ name }) => {
    return <h1>{name}</h1>
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
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }
  
        return <Course course={course} />
    }
  
export default App