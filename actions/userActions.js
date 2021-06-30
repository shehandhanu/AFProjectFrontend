import axios from 'axios';
import CookieService from '../API/Cookie'

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
} from '../reducers/constants/userConstants';

export const getUser = () => async (dispatch) => {
    try {

        dispatch({
            type: USER_REQUEST
        })

        const token = CookieService.get()
        if (!token) {
            const data = {};
            dispatch({
                type: USER_SUCCESS,
                payload: data
            })
        } else {

            const { data } = await axios.get('http://localhost:4000/api/v1/profile', { withCredentials: true })
            dispatch({
                type: USER_SUCCESS,
                payload: data.user
            })
        }

    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAllUsers = () => async (dispatch) => {
    try {
        console.log("sample");

        dispatch({
            type: USERLIST_REQUEST,
        })

        console.log("sample 2");

        const { data } = await axios.get('http://localhost:4000/api/v1/admin/getusers', { withCredentials: true })

        dispatch({
            type: USERLIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USERLIST_FAIL,
            payload: error.response
        })
    }
}

export const loginUser = (userName, password) => async (dispatch) => {
    try {

        dispatch({
            type: AUTH_REQUEST
        })


        const { data } = await axios.post('http://localhost:4000/api/v1/signin',
            {
                "password": password,
                "email": userName
            })

        CookieService.set(data.token)

        dispatch({
            type: AUTH_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: AUTH_FAIL,
            payload: error.response
        })
    }
}

export const registerUser = (postdata) => async (dispatch) => {
    try {

        dispatch({
            type: AUTH_REQUEST
        })

        const { data } = await axios.post('http://localhost:4000/api/v1/signup', postdata)

        CookieService.set(data.token)

        dispatch({
            type: AUTH_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: AUTH_FAIL,
            payload: error.response
        })
    }
}

//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}