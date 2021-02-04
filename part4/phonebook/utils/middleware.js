const morgan = require('morgan')
const cors = require('cors')
const express = require("express");
const {app} = require("../index");

app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))


morgan.token('method', (req) => {
    if (req.method === 'POST') {
        return JSON.stringify(req.body)
    }
})