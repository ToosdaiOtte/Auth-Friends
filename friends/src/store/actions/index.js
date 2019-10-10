import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const FETCHING_FRIENDS_START = 'FETCHING_FRIENDS_START';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_ERR = 'FETCHING_FRIENDS_ERR';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_ERR = 'ADD_FRIEND_ERR';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS_START });
    axiosWithAuth()
    .get('/friends')
    .then(res => {
        dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({
            type: FETCHING_FRIENDS_ERR
        });
    });
}

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START })
    axiosWithAuth()
    .post('/friends', friend)
    .then (res => {
        dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: ADD_FRIEND_ERR, payload: err })
    })
};