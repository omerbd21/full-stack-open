const Person = require('../models/person')

const personRouter = require('express').Router()

personRouter.get('', function (req, res, next) {
    Person.find({}).then(person => {
        res.json(person)
    }).catch(error => next(error))
})
personRouter.get('/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    }).catch(error => next(error))

})
personRouter.delete('/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        }).catch(error => next(error))
})
personRouter.post('', (request, response) => {
    const body = request.body
    const generateId = () => {
        return Math.floor(Math.random() * Math.floor(5000))
    }

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
personRouter.put('/:id', (request, response,next) => {
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

module.exports = personRouter