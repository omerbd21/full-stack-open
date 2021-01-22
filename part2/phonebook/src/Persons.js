import React from "react";

const Persons = (props) => {
    return (
        <div>
            <ul>
                {props.persons[0].name ? props.persons.map(person => person.name.toLowerCase()
                    .includes(props.searchString.toLowerCase()) ?
                    <li key={person.id}>{person.name} {person.phone} </li>: undefined): undefined}
            </ul>
        </div>
    )
}
export default Persons;