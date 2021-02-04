const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const notesRouter = require('./controllers/person')
const {MONGO_URI} = require("./utils/config");
app.use('/api/notes', notesRouter)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

exports.app = app