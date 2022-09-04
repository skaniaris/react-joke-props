import React from 'react';

export default function Joke(props) {
    return (
        <div className="joke-box">
            <h3>Setup: {props.setup}</h3>
            {props.punchline && <p>Punchline: {props.punchline}</p>}
            <p>Rating: {props.rating}/5</p>
        </div>
    )
}