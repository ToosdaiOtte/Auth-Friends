import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../store/actions'; 

const FriendForm = props => {
    const defaultState = {
        name: '',
        age: '',
        email: ''
    };

    const [friend, setFriend] = useState(defaultState);

    const handleSubmit = e => {
        e.preventDefault();
        props.addFriend(friend);        
    }
    const handleChanges = e => {
      setFriend({
          ...friend,
          [e.target.name]: e.target.value
        });
    }   

    return (
        <div className='friend-form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    value={friend.name}
                    onChange={handleChanges}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={friend.age}
                    onChange={handleChanges}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='Email Address'
                    value={friend.email}
                    onChange={handleChanges}
                />
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { addFriend }
)( FriendForm );