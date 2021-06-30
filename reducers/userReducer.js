import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    CLEAR_ERRORS,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    USERLIST_REQUEST,
    USERLIST_SUCCESS,
    USERLIST_FAIL,
} from '../constants/userConstants';

export const userReducer = (state = {}, action) => {

    switch (action.type) {

        case USER_REQUEST:
            return {
                loading: true,
                user: []
            }

        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case USER_FAIL:
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

export const userAuthReducer = (state = {}, action) => {

    switch (action.type) {

        case AUTH_REQUEST:
            return {
                loading: true,
                user: []
            }

        case AUTH_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case AUTH_FAIL:
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