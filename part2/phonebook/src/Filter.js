import React from "react";

const Filter = (props) => {
    return (
        <div>
            Filter:
            <input onChange={props.filterPeople}/>
        </div>
    )
}
export default Filter;