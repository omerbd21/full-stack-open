const Filter = (props) => {
    return (
        <div>
            <p>find countries<input value={props.newFilter} onChange={props.handleFilterChange}/> </p>
        </div>
    )
}

export default Filter