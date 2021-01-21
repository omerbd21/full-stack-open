import React from "react";

const PersonForm = (props) => {
    return (
        <div>
            <form>
                <div>name: <input onChange={props.changeNewName}/></div>
                <div>number: <input onChange={props.changeNewPhone}/></div>
                <div>
                    <button onClick={props.addPerson} type="submit">add</button>
                </div>
            </form>
        </div>
    )
}
export default PersonForm;