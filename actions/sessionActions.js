import axios from 'axios';
import CookieService from '../API/Cookie'

import {
    SESSION_REQUEST,
    SESSION_SUCCESS,
    SESSION_FAIL,
    SESSIONS_REQUEST,
    SESSIONS_SUCCESS,
    SESSIONS_FAIL,
    CLEAR_ERRORS,
} from '../constants/sessionConstants'

export const addSessions = (postdata) => async (dispatch) => {
    try {
        console.log("sample");

        dispatch({
            type: SESSION_REQUEST,
            payload: []
        })

        const { data } = await axios.post('http://localhost:4000/api/v1/createsessionpraposal', postdata, { withCredentials: true })

        console.log("sadsadas");
        console.log(data);

        dispatch({
            type: SESSION_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: SESSION_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAprovedSessions = () => async (dispatch) => {
    try {

        dispatch({
            type: SESSIONS_REQUEST,
            payload: []
        })

        const { data } = await axios.get('http://localhost:4000/api/v1/getsessions', { withCredentials: true })

        dispatch({
            type: SESSIONS_SUCCESS,
            payload: data.sessions
        })


    } catch (error) {
        dispatch({
            type: SESSIONS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSessions = () => async (dispatch) => {
    try {

        dispatch({
            type: SESSIONS_REQUEST,
            payload: []
        })

        const { data } = await axios.get('http://localhost:4000/api/v1/allsessions', { withCredentials: true })

        dispatch({
            type: SESSIONS_SUCCESS,
            payload: data.sessions
        })


    } catch (error) {
        dispatch({
            type: SESSIONS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const requestAdminApprovelSessions = (key) => async (dispatch) => {
    try {

        dispatch({
            type: SESSIONS_REQUEST,
            payload: []
        })

        const { datax } = await axios.get('http://localhost:4000/api/v1/createsession/' + key, { withCredentials: true })

        const { data } = await axios.get('http://localhost:4000/api/v1/allsessions', { withCredentials: true })

        console.log(data);

        dispatch({
            type: SESSIONS_SUCCESS,
            payload: data.sessions
        })


    } catch (error) {
        dispatch({
            type: SESSIONS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const adminApprovels = (key) => async (dispatch) => {
    try {

        dispatch({
            type: SESSIONS_REQUEST,
            payload: []
        })

        const { datax } = await axios.get('http://localhost:4000/api/v1/admin/approvesession/' + key, { withCredentials: true })

        const { data } = await axios.get('http://localhost:4000/api/v1/allsessions', { withCredentials: true })

        dispatch({
            type: SESSIONS_SUCCESS,
            payload: data.sessions
        })


    } catch (error) {
        dispatch({
            type: SESSIONS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const joinSessions = (key) => async (dispatch) => {
    try {

        console.log(key);

        dispatch({
            type: SESSIONS_REQUEST,
            payload: []
        })

        const { datax } = await axios.get('http://localhost:4000/api/v1/joinsession/' + key, { withCredentials: true })

        const { data } = await axios.get('http://localhost:4000/api/v1/allsessions', { withCredentials: true })

        dispatch({
            type: SESSIONS_SUCCESS,
            payload: data.sessions
        })


    } catch (error) {
        dispatch({
            type: SESSIONS_FAIL,
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