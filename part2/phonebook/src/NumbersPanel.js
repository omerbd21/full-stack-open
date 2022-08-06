const NumbersPanel = (props) => {
    return (
    <div>
        <h2>Numbers</h2>
        {props.persons.length ? props.persons.map(person => <ul key={person.name}>{person.name}</ul>) : <p>...</p>}
    </div>)
}

export default NumbersPanel