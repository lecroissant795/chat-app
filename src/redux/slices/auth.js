import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";
import { showSnackbar } from "./app";


const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
            state.user_id = action.payload.user_id;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
            state.user_id = null;
        },

    },
});

// Reducer

export default slice.reducer;


// Log in

export function LoginUser(formValues) {
    //formValues =>{email, password}
    return async (dispatch, getState) => {
        await axios.post("/auth/login", {
            ...formValues,

        }, {
            headers: {
                "Content-Type": "application/json",
            },
        }
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
}