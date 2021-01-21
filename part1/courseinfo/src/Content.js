import Part from "./Part";
import React from "react";

const Content = (props) => {
    return (
        <div>{props.parts.map(part =>
            <li key={part.id}><Part name={part.name} exercises={part.exercises} /></li>
        )}</div>
    )
}
export default Content;