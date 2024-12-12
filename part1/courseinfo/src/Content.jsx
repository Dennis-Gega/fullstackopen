import Part from "./Part.jsx";

const Content = ({parts}) => {

    return (
        <div>
            {parts.map((part, i) => <Part key={i} part={part}/>)}
        </div>
    )
}

export default Content