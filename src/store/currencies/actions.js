import * as api from "api";
import {
    ADD_CURRENCY, 
    REMOVE_CURRENCY,
    REQUEST_SENT,
    GET_MAIN_DATA_SUCCESS,
    ADD_ERROR
} from './types';


// function addCurrency () {
//     return {
//         type: 'asdasd',
//         payload: 'data'
//     }
// }

function getMainDataSuccess (data) {
    return {
        type: GET_MAIN_DATA_SUCCESS,
        payload: data
    }
}

function addError (data) {
    return {
        type: ADD_ERROR,
        payload: data
    }
}

function requestSent() {
    return {
        type: REQUEST_SENT,
    };
}

export const addItem = (item) => ({
    type: ADD_CURRENCY,
    payload: item
});

export const removeItem = (item) => ({
    type: REMOVE_CURRENCY,
    payload: item
});

export function setCurrencies() {
    return async dispatch => {
        try {
            dispatch(requestSent());
            const { data: { rates } } = await api.getMainData() || {};
            dispatch(getMainDataSuccess(rates));
        } catch (error) {
            dispatch(addError(error));
        }
    };
}