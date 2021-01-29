const express = require('express');

const app = express();
app.use(express.json());

const persons = [{
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


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
