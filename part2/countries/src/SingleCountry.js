import React from "react";

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
            <img src={country.flag}/>
        </div>
    )
}
export default SingleCountry;