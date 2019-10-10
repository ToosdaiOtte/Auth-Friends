import {
    FETCHING_FRIENDS_START,
    FETCHING_FRIENDS_SUCCESS,
    FETCHING_FRIENDS_ERR,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_ERR
} from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_FRIENDS_START:
            console.log(state);
            return {
                ...state,
                isFetching: true,
                error:''
            }
        case FETCHING_FRIENDS_SUCCESS:
            console.log('Inside Succes', state);
            return {
                ...state,
                friends: [...state.friends, ...action.payload],
                isFetching: false,
                error: ''
            }
        case FETCHING_FRIENDS_ERR:
            return {
                ...state,
                isFetching: false,
                error: 'Error fetching friends data'
            }
        case ADD_FRIEND_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFetching: false,
                error: ''
            }
        case ADD_FRIEND_ERR:
            return {
                ...state,
                isFetching: false,
                error: 'Error adding friend :( '
            }
        default:
            return state;
    }
}