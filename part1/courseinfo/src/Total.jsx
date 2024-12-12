const Total = (props) => {
    const parts = props.parts
    console.log('parts', parts)
    const total = parts.reduce((acc, cur) => {
        return acc + cur.exercises
    }, 0)
    console.log(total)
    return (
        <p><b>Total of {total} exercises</b></p>
    )
}

export default Total