import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }
    

    getData = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='friends-list'>
                <h1>Friends: </h1>
                <div className='list'>
                    {this.state.friends.map(friend => {
                        return (
                        <div className='friend' key={friend.id}>
                            <h2>{friend.name}</h2>
                            <h4>{friend.age}</h4>
                            <span>{friend.email}</span>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Friends;