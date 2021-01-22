import React from "react";
import Weather from "./Weather";

const SingleCountry = (props) => {
    const country = props.country[0]
    return (
        <div>
            <h1>{country.name}</h1>
            <br />
            <p>capital {country.capital}</p>
            <p> population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li> {language.name}</li>)}
            </ul>
            <img src={country.flag} alt={"country flag"}/>
            <Weather city={country.capital} />
        </div>
    )
}
export default SingleCountry;