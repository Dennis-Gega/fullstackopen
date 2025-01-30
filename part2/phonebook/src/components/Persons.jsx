const Persons = ({ persons, removeEntry }) => {
    return (
        <div>
            {persons.map(person => (
                    <p key={person.id}>{person.name} {person.number}<button onClick={() => removeEntry(person)}>delete</button></p>
            ))}
        </div>
    )
}

export default Persons