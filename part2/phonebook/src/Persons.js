import React from "react";

const Persons = (props) => {
    return (
        <div>
            {props.persons.map(person => person.name.includes(props.searchString) ?
                <p>{person.name} {person.phone} </p> : undefined)}
        </div>
    )
}
export default Persons;