import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import prefixService from "../../../services/prefix.service";
import axios from "axios";

const initialState = {
    data: [],
    status: "loading",
};


export const fetchPrefix = createAsyncThunk(
    "prefix/fetchPrefix",
    async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/prefix");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

const prefixSlice = createSlice({
    name: "prefix",
    initialState : initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrefix.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPrefix.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(fetchPrefix.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default prefixSlice.reducer;
