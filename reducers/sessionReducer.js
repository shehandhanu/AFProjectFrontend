import {
    SESSION_REQUEST,
    SESSION_SUCCESS,
    SESSION_FAIL,
    SESSIONS_REQUEST,
    SESSIONS_SUCCESS,
    SESSIONS_FAIL,
    CLEAR_ERRORS,
} from '../constants/sessionConstants';

export const addSessionReducer = (state = {}, action) => {

    switch (action.type) {

        case SESSION_REQUEST:
            return {
                loading: true,
                sessions: []
            }

        case SESSION_SUCCESS:
            return {
                loading: false,
                sessions: action.payload
            }

        case SESSION_FAIL:
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

export const getSessionReducer = (state = {}, action) => {

    switch (action.type) {

        case SESSIONS_REQUEST:
            return {
                loading: true,
                sessions: []
            }

        case SESSIONS_SUCCESS:
            return {
                loading: false,
                sessions: action.payload
            }

        case SESSIONS_FAIL:
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