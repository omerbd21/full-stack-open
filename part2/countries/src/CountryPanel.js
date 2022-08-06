const CountryPanel = (props) => {
    return (
        <div>
            {props.countries.length > 10 ? <p>There are too much results</p> : 
             props.countries.length === 1 ? props.countries.map(country =>
                <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital[0]}</p>
                <p>area {country.area}</p>
                <h2>languages:</h2>
                {Object.values(country.languages).map(language => <ul key={language}>{language}</ul>)}
                <img src={country.flags.png} alt="flag"/>
                </div>) : props.countries.map(country => <p>{country.name.common}</p>)
            }
        </div>
    )
}

export default CountryPanel