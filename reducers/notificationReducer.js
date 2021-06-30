import {
    NOTIFICATION_REQUEST,
    NOTIFICATION_SUCCESS,
    NOTIFICATION_FAIL,
    CLEAR_ERRORS,
} from '../constants/notificationConstants';

export const getNotificationReducer = (state = {}, action) => {

    switch (action.type) {

        case NOTIFICATION_REQUEST:
            return {
                loading: true,
                notification: []
            }

        case NOTIFICATION_SUCCESS:
            return {
                loading: false,
                notification: action.payload
            }

        case NOTIFICATION_FAIL:
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