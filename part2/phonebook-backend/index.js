const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json());

let phonebook = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = phonebook.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).exit()
    }
})

const generateId = () => {
    const id = phonebook.length > 0
    ? Math.max(...phonebook.map(person => person.id))
    : 0

    return String(id + 1)
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body) {
        return response.status(400).json({error: 'Content Missing'})
    }

    if (!body.name || !body.number) {
        return response.status(400).json({error: 'Content Missing'})
    }

    if (phonebook.some(person => person.name === body.name)) {
        return response.status(409).json({error: `User ${body.name} already exists`})
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    phonebook = phonebook.concat(person)

    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    phonebook = phonebook.filter(person => person.id !== id)
    response.status(204).end()
})

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`
        <p>Response has info for ${phonebook.length} people</p>
        <p>${date}</p>
    `)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})