import axios from 'axios';
import CookieService from '../API/Cookie'

import {
    RESEARCH_REQUEST,
    RESEARCH_SUCCESS,
    RESEARCH_FAIL,
    RESEARCHS_REQUEST,
    RESEARCHS_SUCCESS,
    RESEARCHS_FAIL,
    CLEAR_ERRORS,
} from '../constants/researchConstants'

export const addResearchs = (postdata) => async (dispatch) => {
    try {
        console.log("sample");

        dispatch({
            type: RESEARCH_REQUEST,
            payload: []
        })

        const { data } = await axios.post('http://localhost:4000/api/v1/researchpublication', postdata, { withCredentials: true })

        console.log(data);

        dispatch({
            type: RESEARCH_SUCCESS,
            payload: data.researchPapers
        })


    } catch (error) {
        dispatch({
            type: RESEARCH_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAprovedResearchs = () => async (dispatch) => {
    try {

        dispatch({
            type: RESEARCHS_REQUEST,
            payload: []
        })

        const { data } = await axios.get('http://localhost:4000/api/v1/getresearches', { withCredentials: true })

        dispatch({
            type: RESEARCHS_SUCCESS,
            payload: data.research
        })


    } catch (error) {
        dispatch({
            type: RESEARCHS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAllResearchs = () => async (dispatch) => {
    try {

        dispatch({
            type: RESEARCHS_REQUEST,
            payload: []
        })

        const { data } = await axios.get('http://localhost:4000/api/v1/allresearchpapers', { withCredentials: true })

        dispatch({
            type: RESEARCHS_SUCCESS,
            payload: data.researchPapers
        })


    } catch (error) {
        dispatch({
            type: RESEARCHS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const approveResearches = (key) => async (dispatch) => {
    try {


        dispatch({
            type: RESEARCHS_REQUEST,
            payload: []
        })

        const { datax } = await axios.get('http://localhost:4000/api/v1/admin/approveresearch/' + key, { withCredentials: true })

        const { data } = await axios.get('http://localhost:4000/api/v1/allresearchpapers', { withCredentials: true })

        dispatch({
            type: RESEARCHS_SUCCESS,
            payload: data.researchPapers
        })


    } catch (error) {
        dispatch({
            type: RESEARCHS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}