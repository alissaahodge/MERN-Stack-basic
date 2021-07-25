import React from 'react';
import {AUTH, UPDATE, LOGOUT} from "../../constants/actionTypes";
import * as api from '../api';

export const signin = (formData) => async (dispatch) => {
  try {
//log in the user
    const {data} = await api.signIn(formData);
    dispatch({type: AUTH, data});
  } catch (e) {
    console.log(e)
  }
};


export const signup = (formData) => async (dispatch) => {
  try {
    const {data} = await api.signUp(formData);
    dispatch({type: AUTH, data});
  } catch (e) {
    console.log(e)

  }
};

export const updateAccount = (id, acc) => async (dispatch) => {
    try {
        const {data} = await api.updateAccount(id, acc);
        console.log(data);
        return dispatch({type: UPDATE, data});

    } catch (error) {
        console.log(error.message)
    }
};


export const updateAccountPassword = (id, acc) => async (dispatch) => {
    try {
        const {data} = await api.updateAccountPassword(id, acc);
        return dispatch({type: LOGOUT});

    } catch (error) {
        console.log(error.message)
    }
};
