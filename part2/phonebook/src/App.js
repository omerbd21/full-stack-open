import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', phone: '040-1234567' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
    const [ searchString, setSearchString ] = useState('')



    const changeNewName = (event) =>{
        setNewName(event.target.value)
    }
    const changeNewPhone = (event) =>{
        setNewPhone(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {name: newName, phone: newPhone}
        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} has already been added to the phonebook.`)
        }
        else {
            setPersons(persons.concat(newPerson))
            setNewName('')
        }
    }
    const filterPeople = (event) => {
        setSearchString(event.target.value)
    }
    return (
        <div>
            <h2>Phonebook</h2>
            Filter:
            <input onChange={filterPeople}/>
            <form>
                <div>name: <input onChange={changeNewName} /></div>
                <div>number: <input onChange={changeNewPhone} /></div>
                <div><button onClick={addPerson} type="submit">add</button></div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => person.name.includes(searchString) ?
                <p>{person.name} {person.phone} </p> : undefined)}
        </div>
    )
}

export default App;