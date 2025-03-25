const mongoose = require('mongoose')

if (process.argv === 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)  
        })
    })
    return;
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.ggd70.mongodb.net/phonebookApp?
retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name,
    number
})

if (process.argv.length === 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)  
        })
        mongoose.connection.close()
    })
    return;
} else if (process.argv.length === 5) {
    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
} else {
    console.log('incorrect amount of arguments')
}