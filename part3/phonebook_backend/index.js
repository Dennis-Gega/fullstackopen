const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('dist'))

let persons = [
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

app.get('/api/persons', (req, res) => {
    res.json(persons);
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id

    const person = persons.find(person => person.id === id);
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    const date = new Date();
    res.send(`
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
        </div>
        <div>
            <p>${date}</p>
        </div>
        `)
})

const generateId = () => {
    return String(Math.floor(Math.random() * 777))
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(404).json({
            error: 'content missing'
        })
    }

    if (!body.name) {
        return res.status(400).json({
            error: 'Name missing'
        })
    }

    if (!body.number) {
        return res.status(400).json({
            error: 'Number missing'
        })
    }

    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error: `${body.name} is already registered`
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)
        
    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)