import React from "react";
import SingleCountry from "./SingleCountry";

const Countries = (props) => {
    return (
        <div>
            {props.countries[0].name ? props.countries.length > 10? <p>Too many matches, specify another filter</p> :
                props.countries.length ===1 ? <SingleCountry country={props.countries}/> :
                    props.countries.map(country => <li>{country.name} </li>): undefined}
        </div>

    )
}
export default Countries;