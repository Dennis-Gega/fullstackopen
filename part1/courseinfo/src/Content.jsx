import Part from "./Part.jsx";

const Content = (props) => {
    const parts = props.parts
    return (
        <div>
            {parts.map((part, i) => <Part key={i} part={part}/>)}
        </div>
    )
}

export default Content