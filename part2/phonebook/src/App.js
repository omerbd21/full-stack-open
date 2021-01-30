import React, {useEffect, useState} from 'react'
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import { getAll, create, update } from "./services/Phone"
import Notification from "./Notification";

const App = () => {
    const [ persons, setPersons ] = useState([{}])
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
    const [ searchString, setSearchString ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('ERRORS HERE')


    useEffect(() => {
        getAll().then(response => setPersons(response.data))
            .catch(() => setErrorMessage("Operation failed."))
    }, [])


    const changeNewName = (event) =>{
        setNewName(event.target.value)
    }
    const changeNewPhone = (event) =>{
        setNewPhone(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {name: newName, number: newPhone}
        if (persons.map(person => person.name).includes(newName)) {
            if (window.confirm(`${newName} already exists. Do you wish to change the phone number?`))
            {
                const id = persons.filter(person => person.name === newName)[0].id
                update(id,newPerson).then(() => setErrorMessage(`${newName}'s phone was updated to ${newPhone}`
                )).catch(() => setErrorMessage("Operation failed."))
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                window.location.reload(true)
            }
        }
        else {
            create(newPerson).then(response => setPersons(persons.concat(response.data)))
                .catch(() => setErrorMessage("Operation failed."))
            setNewName('')
        }
    }
    const filterPeople = (event) => {
        setSearchString(event.target.value)
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage} />
            <Filter filterPeople={filterPeople} />
            <h3>Add a new phone: </h3>
            <PersonForm changeNewName={changeNewName} changeNewPhone={changeNewPhone} addPerson={addPerson} />
            <h2>Numbers</h2>
            <Persons persons={persons} searchString={searchString} setErrorMessage={setErrorMessage} />
        </div>
    )
}

export default App;