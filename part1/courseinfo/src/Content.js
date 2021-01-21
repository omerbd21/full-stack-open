import Part from "./Part";
import React from "react";
import Sum from "./Sum";

const Content = (props) => {
    return (
        <div>{props.parts.map(part =>
            <li key={part.id}><Part name={part.name} exercises={part.exercises} /></li>
        )}
        <li><Sum exercises={props.parts.map(part=> part.exercises).reduce(
            (previousScore, currentScore)=>previousScore+currentScore,
            0)} /></li>
        </div>
    )
}
export default Content;