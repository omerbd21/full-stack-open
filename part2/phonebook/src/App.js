import React, {useEffect, useState} from 'react'
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
    const [ persons, setPersons ] = useState([{}])
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
    const [ searchString, setSearchString ] = useState('')


    useEffect(() => {
        axios.get('http://localhost:3001/persons').then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
        }).catch(response => console.log(response))
    }, [])


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
            <Filter filterPeople={filterPeople} />
            <h3>Add a new phone: </h3>
            <PersonForm changeNewName={changeNewName} changeNewPhone={changeNewPhone} addPerson={addPerson} />
            <h2>Numbers</h2>
            <Persons persons={persons} searchString={searchString} />
        </div>
    )
}

export default App;