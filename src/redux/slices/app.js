import { createSlice } from "@reduxjs/toolkit";

import {dispatch} from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: 'contact', //Contact , Starred, Shared
    },
};


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
    },
});

// Reducer

export default slice.reducer;


//

export function ToggleSidebar() {
    return async (dispatch, getState) => {
        dispatch(slice.actions.toggleSidebar())

    }

}

export function updateSidebarType(type) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateSidebarType({
            type,
        }))
    }

}


