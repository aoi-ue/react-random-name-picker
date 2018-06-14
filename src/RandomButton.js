import React from 'react';

const RandomButton = props => {
    return (
        <div>
            <button onClick={props.handleClick}>Get Lucky Winner</button>
        </div>
    );
};

export default RandomButton;
