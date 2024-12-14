import { useState, useEffect } from 'react'
import axios from 'axios'
import { getAll, create, update, remove } from './services/notes.js'
import Filter from './components/Filter.jsx'
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx"
import Notification from './components/Notification.jsx'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
         getAll()
             .then(res => setPersons(res))
    }, [])

    const handleName = (e) => {
        setNewName(e.target.value)
    }

    const handleNumber = (e) => {
        setNewNumber(e.target.value)
    }

    const addName = (e) => {
        e.preventDefault()
        const existingPerson = persons.find(person => person.name === newName);

        if (existingPerson) {
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
                const updatedPerson = {...existingPerson, number: newNumber};
                update(existingPerson.id, updatedPerson)
                    .then((res) => {
                        setPersons(persons.map(person =>
                            person.id === existingPerson.id ? updatedPerson : person
                        ))
                    })

            }
        } else {
            const newPerson = {name: newName, number: newNumber}
            create(newPerson)
                .then((res) => {
                    setPersons([...persons, res])
                    setErrorMessage(`Added ${res.name}`)
                    setTimeout(() => setErrorMessage(null), 3000)
                })
        }
        setNewName('')
        setNewNumber('')
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            remove(id)
                .then(()=> setPersons(persons.filter(person => person.id !== id)))
        }
    }

    const personsToShow = searchQuery
        ? persons.filter(person => person.name.toLowerCase().includes(searchQuery))
        : persons

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage} />
            <Filter onchange={handleSearch} />
            <h2>add a new</h2>
            <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
        </div>
    )
}

export default App