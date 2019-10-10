import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../store/actions';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = ({ getFriends, friends, isFetching, error }) => {
    console.log(friends);

    useEffect(() => {
        getFriends();
    }, [getFriends]);

    if (isFetching) {
        return <h2>Fetching Your Friends!</h2>
    }

    
    return (
        <div className='friends-list'>
            <FriendForm />
            <h2>Your Friends:</h2>
            <div className='friends'>
                {friends.map(friend => (
                    <Friend
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getFriends }
)( FriendsList );