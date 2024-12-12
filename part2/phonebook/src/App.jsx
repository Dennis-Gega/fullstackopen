import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.jsx'
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx"

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(res => {
                console.log(res)
                setPersons(res.data)
            })
    }, [])

    const handleName = (e) => {
        setNewName(e.target.value)
    }

    const handleNumber = (e) => {
        setNewNumber(e.target.value)
    }

    const addName = (e) => {
        e.preventDefault()
        const isNameValid = persons.some(person => person.name === newName)
        if (isNameValid) {
            alert(`${newName} is already added to the phonebook`)
        } else {
            setPersons([...persons, {name: newName, number: newNumber }])
        }
        setNewName('')
        setNewNumber('')
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    const personsToShow = searchQuery
        ? persons.filter(person => person.name.toLowerCase().includes(searchQuery))
        : persons

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onchange={handleSearch} />
            <h2>add a new</h2>
            <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} />
        </div>
    )
}

export default App