import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const changeNewName = (event) =>{
        setNewName(event.target.value)
    }
    const addName = (event) => {
        event.preventDefault()
        setPersons(persons.concat({ name: newName}))
        setNewName('')
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input onChange={changeNewName} />
                </div>
                <div>
                    <button onClick={addName} type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <p>{person.name}</p>)}
        </div>
    )
}

export default App;