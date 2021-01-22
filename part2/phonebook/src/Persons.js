import React from "react";
import {deletePhone} from "./services/Phone";

const Persons = (props) => {
    const ifDelete = (person) =>{
        if (window.confirm(`Delete ${person.name} ?`))
        {
            deletePhone(person.id).then(() => props.setErrorMessage("Deleted."))
                .catch(() => props.setErrorMessage("Operation failed."))
            setTimeout(() => {
                props.setErrorMessage(null)
            }, 5000)
            window.location.reload(true)
        }
    }
    return (
        <div>
            <ul>
                {props.persons[0].name ? props.persons.map(person => person.name.toLowerCase()
                    .includes(props.searchString.toLowerCase()) ?
                    <div>
                        <li key={person.id}>{person.name} {person.phone} </li>
                        <button onClick={() => ifDelete(person)}>delete</button>
                    </div>: undefined): undefined}
            </ul>
        </div>
    )
}
export default Persons;