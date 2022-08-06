import { useState } from 'react'
import NumbersPanel from './NumbersPanel'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
const handleNameChange = (event) => {
    setNewName(event.target.value)
}
const addPerson = (event) => {
  event.preventDefault()
  const newNameObject = {name: newName}
  if (persons.some(person => person.name === newName))
  {
    alert(newName + " is already added to phonebook")
  }
  else {
    setPersons(persons.concat(newNameObject))
  }
  setNewName('')
}
  return (
    <div>
      <h2>Phonebook</h2>
        <form>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            <button type="submit" onClick={addPerson}>add</button>
          </div>
        </form>
      <NumbersPanel persons={persons} />
    </div>
  )
}

export default App