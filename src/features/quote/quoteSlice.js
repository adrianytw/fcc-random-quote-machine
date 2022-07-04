import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const QUOTE_URL = "https://api.quotable.io";

const initialState = {
        text: 'initial text',
        author: 'initial author',
        isLoading: true,
};

export const getQuote = createAsyncThunk(
    'quote/getQuote',
    async (dispatch, getState) => {
        try {
            
            const res = await axios.get(QUOTE_URL + "/random")
            let data = res.data

            return {
                text: data.content,
                author: data.author
            }
        } catch (err) {
            console.log(err)
        }
    }
)

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    // reducers: {}
    extraReducers: {
        [getQuote.pending]: (state) => {
            state.isLoading = true;
        },
        [getQuote.fulfilled]: (state, action) => {
            state.text = action.payload.text
            state.author = action.payload.author
            state.isLoading = false;
        },
        [getQuote.rejected]: (state) => {
            state.isLoading = false; 
        },
    }
});

export default quoteSlice.reducer