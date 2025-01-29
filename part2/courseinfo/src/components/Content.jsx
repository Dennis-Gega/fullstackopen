import Part from "./Part"

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} title={part.name} exerciseNum={part.exercises}/>
            ))}
        </div>
    )
}

export default Content