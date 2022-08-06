import { useState, useEffect } from 'react'
import Filter from './Filter'
import axios from 'axios'
import CountryPanel from './CountryPanel'

const BACKEND_URL = 'https://restcountries.com/v3.1/all'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect(() => {
    const eventHandler = response => {
      setCountries(response.data)
    }
    const promise = axios.get(BACKEND_URL)
    promise.then(eventHandler)
  }, [])
  const filteredData = countries.filter(country => {
    if (newFilter === '')
    {
      return country
    }
    else if (country.name.common.toLowerCase().includes(newFilter.toLowerCase())) {
      return country
    }
    else {
      return '';
    }
  })
  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <CountryPanel countries={filteredData} />
    </div>
  )
}

export default App