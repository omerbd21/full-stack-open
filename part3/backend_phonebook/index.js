const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(express.json());
app.use(morgan('tiny'));


let persons = [{
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
},
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }]

/* GET home page. */
app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/api/persons', function (req, res, next) {
    res.json(persons)
});

app.get('/info', function (req, res, next) {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from('<p>Phonebook has info for ' + persons.length + ' people</p>' +
        '<p>' + new Date().toString() + '</p>'));
});
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(note => note.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
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

    if (persons.map(person => person.name).includes(body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        date: new Date(),
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
morgan.token('method', (req, res) => {
    if (req.method === 'POST'){
        return JSON.stringify(req.body)
    }});