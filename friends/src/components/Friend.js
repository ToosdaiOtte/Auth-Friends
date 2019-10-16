import React from 'react';

const Friend = props => {
    return (
        <div>
            <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}

export default Friend;