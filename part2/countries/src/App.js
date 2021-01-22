import React, {useEffect, useState} from "react";
import Filter from "./Filter";
import Countries from "./Countries";
import axios from "axios";

const App = () => {
    const [countries, setCountries] = useState([{}])
    const [searchString, setSearchString] = useState('')
    const filterCountries = (event) => {
        setSearchString(event.target.value)
    }
    const COUNTRY_URL = "https://restcountries.eu/rest/v2/name/"

    const showCountry = (countryName) => {
        return (
            setSearchString(countryName)
        )
    }

    useEffect(() => {
        axios.get(COUNTRY_URL + searchString).then(response => {
            setCountries(response.data)
        }).catch(response => console.log(response))
    }, [searchString])
    return (
        <div>
            <Filter filterPeople={filterCountries}/>
            <Countries countries={countries} showCountry={showCountry} />
        </div>
    )
}

export default App;