require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('dist'))

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id).then(person => {
        res.json(person)
    })
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
        .then(res => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({ error: 'Name or number missing' });
    }

    Person.findOne({number: body.number}).then(result => {
        if (result)
            return res.status(400).json({ error: 'Number already registered' })

        const person = new Person({
            name: body.name,
            number: body.number
        })

        person.save().then(savedPerson => {
            res.json(savedPerson)
        })
    })
})


const PORT = process.env.PORT
app.listen(PORT)