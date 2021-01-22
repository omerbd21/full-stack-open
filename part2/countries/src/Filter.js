import React from "react";

const Filter = (props) => {
    return (
        <div>
            Find Countries: 
            <input onChange={props.filterPeople}/>
        </div>
    )
}
export default Filter;