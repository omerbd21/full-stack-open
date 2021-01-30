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
const PORT = process.env.PORT

/* GET home page. */
app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/api/persons', function (req, res, next) {
    Person.find({}).then(person => {
        res.json(person)
    }).catch(error => next(error))
});
app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    }).catch(error => next(error))

})
app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        }).catch(error => next(error))
})

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(5000));
}

app.post('/api/persons', (request, response, next) => {
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
    }).catch(error => {
            return response.status(400).json({ error: error.message })
        })

})
app.put('/api/persons/:id', (request, response,next) => {
    const body = request.body
    const id = request.params.id
    const person = {
        name: body.name,
        number: body.number,
        date: new Date(),
        id: id,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})


app.listen(process.env.PORT ||PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
morgan.token('method', (req, res) => {
    if (req.method === 'POST') {
        return JSON.stringify(req.body)
    }
});