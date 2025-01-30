import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/person'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([]) 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const handleName = (event) => {
        setNewName(event.target.value)
    }

    const handleNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNewEntry = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
             
        } else {
            const newEntry = {
                name: newName,
                number: newNumber,
            }
            personService
                .create(newEntry)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                })
        }
        setNewName('')
        setNewNumber('')
    }

    const removeEntry = (person) => {
        if (window.confirm(`Delete ${person.name}`))
            personService
                .remove(person.id)
                .then(deletedEntry => {
                    setPersons(persons.filter(person => person.id !== deletedEntry.id))
                })
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <PersonForm
                handleNewEntry={handleNewEntry}
                handleName={handleName}
                handleNumber={handleNumber}
                newName={newName}
                newNumber={newNumber}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} removeEntry={removeEntry}/>
        </div>
  )
}

export default App