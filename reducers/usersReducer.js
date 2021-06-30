import {
    CLEAR_ERRORS,
    USERLIST_REQUEST,
    USERLIST_SUCCESS,
    USERLIST_FAIL,
} from '../constants/userConstants';

export const userListReducer = (state = {}, action) => {

    switch (action.type) {

        case USERLIST_REQUEST:
            return {
                loading: true,
                users: []
            }

        case USERLIST_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case USERLIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default: return state

    }
}