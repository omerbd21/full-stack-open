import React, {useEffect, useState} from "react";
import Filter from "./Filter";
import Countries from "./Countries";
import axios from "axios";

const App = () => {
    const [countries, setCountries] = useState([{}])
    const [searchString, setSearchString] = useState('')
    const filterPeople = (event) => {
        setSearchString(event.target.value)
    }
    const URL = "https://restcountries.eu/rest/v2/name/"

    useEffect(() => {
        axios.get(URL + searchString).then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
        }).catch(response => console.log(response))
    }, [searchString])
    return (
        <div>
            <Filter filterPeople={filterPeople}/>
            <Countries countries={countries} />
        </div>
    )
}

export default App;