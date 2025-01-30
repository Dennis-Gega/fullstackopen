const PersonForm = ({handleNewEntry, handleName, handleNumber, newName, newNumber }) => {
    return (
        <form onSubmit={handleNewEntry}>
            <div>
                name: <input value={newName} onChange={handleName}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm