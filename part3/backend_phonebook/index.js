require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors())
app.use(express.static('build'))

const Person = require('./models/person')
const mongoose = require("mongoose");
const PORT = process.env.PORT

/* GET home page. */
app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/api/persons', function (req, res, next) {
    Person.find({}).then(person => {
        res.json(person)
    })
});
app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })

})
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(note => note.id === id)
    persons = persons.filter(person => person.id !== id)

    if (person) {
        response.status(204).end()
    } else {
        response.status(404).end()
    }
})

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(5000));
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const person = new Person ({
        name: body.name,
        number: body.number,
        date: new Date(),
        id: generateId(),
    })

    person.save().then(savedNote => {
        response.json(savedNote)
    })

})
app.patch('/api/persons/:name', (request, response) => {
    const name = request.params.name
    const body = request.body
    const person = persons.find(person => {if (person.name === name)
    return person})
    if (person === undefined)
    {
        response.status(404).end()
    }
    else
    {
        person.number = body.number
    }
    response.json(person)
})


app.listen(process.env.PORT ||PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
morgan.token('method', (req, res) => {
    if (req.method === 'POST') {
        return JSON.stringify(req.body)
    }
});