function Persons( {personsToShow, handleDelete} ) {
    return (
        <>
            {personsToShow.map(person => (
                    <p key={person.id}>
                        {person.name} {person.number}
                        <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
                    </p>
            ))}
        </>
    )
}

export default Persons;