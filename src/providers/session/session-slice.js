import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    access_token: null,
    isLoading: false,
};

const sessionSlice = createSlice({
    name: "sessionSlice",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
        },
    },
});

export const { reset } = sessionSlice.actions;

export default sessionSlice.reducer;
