const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.tgwm5.mongodb.net/prod?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    date: Date,
    id: Number,
})

const Person = mongoose.model('Person', personSchema)

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(5000));
}

if (process.argv.length > 3){
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
        date: new Date(),
        id: generateId(),
    })
    person.save().then(result => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
}
else
{
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log("phonebook:")
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}