import {
    RESEARCH_REQUEST,
    RESEARCH_SUCCESS,
    RESEARCH_FAIL,
    RESEARCHS_REQUEST,
    RESEARCHS_SUCCESS,
    RESEARCHS_FAIL,
    CLEAR_ERRORS,
} from '../constants/researchConstants';

export const researchsReducer = (state = {}, action) => {

    switch (action.type) {

        case RESEARCH_REQUEST:
            return {
                loading: true,
                researchs: []
            }

        case RESEARCH_SUCCESS:
            return {
                loading: false,
                researchs: action.payload
            }

        case RESEARCH_FAIL:
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

export const getResearchsReducer = (state = {}, action) => {

    switch (action.type) {

        case RESEARCHS_REQUEST:
            return {
                loading: true,
                researchs: []
            }
        case RESEARCHS_SUCCESS:
            return {
                loading: false,
                researchs: action.payload
            }

        case RESEARCHS_FAIL:
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