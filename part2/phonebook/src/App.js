import { useEffect, useState } from 'react'
import NumbersPanel from './NumbersPanel'
import InputPanel from './InputPanel'
import Filter from './Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([{}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


useEffect(() => {
  const eventHandler = response => {
    setPersons(response.data)
  }
  const promise = axios.get('http://localhost:3001/persons')
  promise.then(eventHandler)
}, [])

const handleNameChange = (event) => {
    setNewName(event.target.value)
}
const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}
const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}
const filteredData = persons.filter(person => {
  if (newFilter === '')
  {
    return person
  }
  else if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
    return person
  }
  else {
    return '';
  }
})
const addPerson = (event) => {
  event.preventDefault()
  const newPerson = {name: newName, number: newNumber}
  if (persons.some(person => person.name === newName))
  {
    alert(newName + " is already in the phonebook")
  }
  else if (persons.some(person => person.number === newNumber))
  {
    alert('The number ' + newNumber + ' already exists in the phonebook')
  }
  else {
    setPersons(persons.concat(newPerson))
  }
  setNewName('')
  setNewNumber('')
}
  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <InputPanel addPerson={addPerson} handleNameChange={handleNameChange} newName={newName} handleNumberChange={handleNumberChange} newNumber={newNumber} />
      <NumbersPanel persons={filteredData} />
    </div>
  )
}

export default App