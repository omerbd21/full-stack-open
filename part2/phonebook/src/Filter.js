const Filter = (props) => {
    return (
        <div>
            <h1>phonebook: </h1>
            <p>filter shown with:<input value={props.newFilter} onChange={props.handleFilterChange}/> </p>
        </div>
    )
}

export default Filter