import React from 'react';
import {AUTH} from "../../constants/actionTypes";
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
    console.log(formData);
    const {data} = await api.signUp(formData);
    dispatch({type: AUTH, data});
  } catch (e) {
    console.log(e)

  }
};
